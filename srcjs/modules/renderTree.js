import 'shiny';
import {ConstructTree} from "./constructTree";
import styles from './tree.css'


let generateID = (function(n) {
    return function() {
        n += 1
        return n;
    }
}(-1))
function createCaret(){
    let caret = document.createElement("span")
    caret.classList.add(styles.groupedCheckboxCaret)
    caret.innerText = "▼"
    return(caret)
}

function createInputCheckbox(nodeName, nodeID) {
    let inputCheckbox = document.createElement("input")
    inputCheckbox.classList.add("grouped-checkbox-input", "form-check-input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.value = nodeName
    inputCheckbox.id = "node-input-check" + nodeID
    return(inputCheckbox)
}

function createCheckboxLabel(nodeName, id){
    let labelCheckbox = document.createElement("label")
    labelCheckbox.classList.add("form-check-label")
    labelCheckbox.for = "node-input-check" + id
    labelCheckbox.innerHTML = nodeName
    return(labelCheckbox)
}

function generateSelectButtons(){
    let container = $("<div>", {"class": "flex-parent"})
    container.append($("<button>", {"class": "flex-child grouped-checkbox-select-all btn btn-outline-fg",
        "id": "grouped-checkbox-select-all-" + generateID()}).text("Select All"))
    container.append($("<button>", {"class": "flex-child grouped-checkbox-deselect-all btn btn-outline-fg",
        "id": "grouped-checkbox-deselect-all-" + generateID()}).text("Deselect All"))
    return(container)
}



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

    // Create ID for the nodes
    let nNodes = generateID()
    let newNodeID = "node-" + nNodes

    let nodeListElement = document.createElement("li")


    // Create node and assign classes
    let node = document.createElement("span")
    node.classList.add("GroupedCheckBox-node", "text-fg")
    node.id = newNodeID




    if (hasChildren){
        node.appendChild(createCaret())
    }


    // Add the checkbox and label component
    node.appendChild(createInputCheckbox(nodeName, nNodes))
    node.appendChild(createCheckboxLabel(nodeName, nNodes))

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

function createTree(id, label, choices, levels, collapsed, selected) {
    let base = document.getElementById(id)

    // Create label
    if (label){
        let new_label = document.createElement("h4");
        new_label.innerText = label;
        base.appendChild(new_label)
    }

    // create select buttons
    $("#" + id).append(generateSelectButtons)


    let tree = parseTree(choices, levels)

    // Add a container that will hold all the nodes
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

    // Check which nodes should be selected
    if (selected.length > 0){
        for (const select of selected) {
            let checkbox = $("#" + id).find(`input[type=checkbox][value=${select}]`)

            // Check self
            checkbox.attr("checked", "true")

            // Check children
            checkbox.siblings("ul").find(".grouped-checkbox-input").attr("checked", "true")
        }
    }


    $(document).on("shiny:connected", function() {
        registerEvents(id)
    });

}


export {createTree}