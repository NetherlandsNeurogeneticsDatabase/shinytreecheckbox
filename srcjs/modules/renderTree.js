import 'shiny';
import {ConstructTree} from "./constructTree";
import styles from './tree.css'


let generateID = (function(n) {
    return function() {
        n += 1
        return n;
    }
}(-1))

function hideListElement(element, animation){
    if (!animation){
        animation = "toggle"
    }
    let caret
    switch (animation) {
        case "slide":
            caret = $(element)
            if (caret.text() === "▼" ){
                caret.text("▶")
                caret.siblings("." + styles.groupedCheckboxList).slideUp()

            } else {
                caret.text("▼")
                caret.siblings("." + styles.groupedCheckboxList).slideDown()

            }
            break

        case "toggle":
            caret = $(element)
            if (caret.text() === "▼" ){
                caret.text("▶")
                caret.siblings("." + styles.groupedCheckboxList).hide()

            } else {
                caret.text("▼")
                caret.siblings("." + styles.groupedCheckboxList).show()

            }
            break

        default:
            throw("Hide animations only accepts 'toggle' and 'slide'" )
    }

}



function setInput(id){
    let selected = []
    let found = false
    $("#" + id).find("input:checkbox:checked").each(function(){
        selected.push($(this).val())
        found = true
    })
    if (found){
        Shiny.setInputValue(id, selected);
    } else {
        Shiny.setInputValue(id, null);

    }
}

function registerEvents(id){

    let base = $("#" + id)

    // Hide if caret is clicked
    base.find("." + styles.groupedCheckboxCaret).on("click", function (){
        hideListElement(this, "toggle")
    })

    // if parent group checkbox get changed, so will children
    base.find(".grouped-checkbox-input").change(function(){
        let element = $(this)
        element.siblings("ul").children().find(".grouped-checkbox-input").prop("checked", element.is(":checked")).change()
    })


    // Select all button
    base.find(".grouped-checkbox-select-all").on("click", function(){
        base.find(".grouped-checkbox-input").prop("checked", true).change()
    })

    // Deselect all
    base.find(".grouped-checkbox-deselect-all").on("click", function(){
        base.find(".grouped-checkbox-input").prop("checked", false).change()
    })

    // On click update input shiny
    base.find(".grouped-checkbox-input").change(function(event) {
        setInput(id)
    });
}
function parseTree(choices, levels){
    return new ConstructTree(choices, levels)
}

function appendNodes(parent, tree) {
    let base = $(parent)
    base.append($("<ul>", {"class": styles.groupedCheckboxList, "id": "grouped-checkbox-list-base"}))


    let queue = []

    queue.push(tree.root)

    while (queue.length > 0) {
        let size = queue.length
        let current

        for (let i = 0; i < size; i++) {
            current = queue.shift()

            for (let child of current.children) {
                queue.push(child)
                if (child.parent.value === "root") {
                    child.htmlID = constructNode(child.value, null, child.has_children)

                }
                else {
                    child.htmlID = constructNode(child.value, child.parent, child.has_children)
                }

            }
        }
    }
}


function constructNode(nodeName, nodeParent, hasChildren){
    // this function uses plain JS which increases the speed it takes to render the nodes by four times in comparison
    // with the more readable jquery
    let parent
    if (!nodeParent){
        parent = document.getElementById("grouped-checkbox-list-base")
    } else {
        parent = document.getElementById("checkbox-list-" + nodeParent.htmlID)

    }

    let nNodes = generateID()

    let newNodeID = "node-" + nNodes

    let nodeListElement = document.createElement("li")



    let node = document.createElement("span")
    node.classList.add("GroupedCheckBox-node", "text-fg")
    node.id = newNodeID



    if (hasChildren){styles.groupedCheckboxCaret
        let caret = document.createElement("span")
        caret.classList.add(styles.groupedCheckboxCaret)
        caret.innerText = "▼"
        node.appendChild(caret)
    }

    let inputCheckbox = document.createElement("input")
    inputCheckbox.classList.add("grouped-checkbox-input", "form-check-input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.value = nodeName
    inputCheckbox.id = "node-input-check" + nNodes
    node.appendChild(inputCheckbox)

    let labelCheckbox = document.createElement("label")
    labelCheckbox.classList.add("form-check-label")
    labelCheckbox.for = "node-input-check" + nNodes
    labelCheckbox.innerHTML = nodeName
    node.appendChild(labelCheckbox)

    if (hasChildren){
        let newList = document.createElement("ul")
        newList.classList.add(styles.groupedCheckboxList)
        newList.id = "checkbox-list-" + newNodeID
        node.appendChild(newList)
    }

    nodeListElement.appendChild(node)
    parent.appendChild(nodeListElement)

    return newNodeID
}

function createTree(id, label, choices, levels, collapsed) {
    let base = document.getElementById(id)

    // Create label
    let new_label = document.createElement("h4");
    new_label.innerText = label;
    base.appendChild(new_label)


    // create select buttons

    let container = $("<div>", {"class": "flex-parent"})
    container.append($("<button>", {"class": "flex-child grouped-checkbox-select-all btn btn-outline-fg",
        "id": "grouped-checkbox-select-all-" + generateID()}).text("Select All"))
    container.append($("<button>", {"class": "flex-child grouped-checkbox-deselect-all btn btn-outline-fg",
        "id": "grouped-checkbox-deselect-all-" + generateID()}).text("Deselect All"))

    $("#" + id).append(container)


    let tree = parseTree(choices, levels)


    // Create container that will hold all the nodes
    let nodeContainer = document.createElement("div")
    nodeContainer.classList.add(styles.groupedCheckboxNodeHolder)
    nodeContainer.classList.add("overflow-auto")

    base.appendChild(nodeContainer)

    // Render and append the nodes
    appendNodes(nodeContainer, tree)


    // Check if nodes should be collapsed
    if (collapsed){
        $("#" + id).find("." + styles.groupedCheckboxCaret).each(function (){
            hideListElement(this, "toggle")
        })
    }


    $(document).on("shiny:connected", function() {
        registerEvents(id)
    });

}


export {createTree}