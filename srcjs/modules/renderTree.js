import 'shiny';
import {ConstructTree} from "./constructTree";
import styles from './tree.css'




/* A function that generates a unique ID. */
let generateID = (function(n) {
    return function() {
        n += 1
        return n;
    }
}(-1))



/**
 * It creates a span element, adds the class `groupedCheckboxCaret` to it, and sets its inner text to
 * "▼".
 * @returns A span element with the class "groupedCheckboxCaret" and the inner text "▼"
 */
function createCaret(){
    let caret = document.createElement("span")
    caret.classList.add(styles.groupedCheckboxCaret)
    caret.innerText = "▼"
    return(caret)
}

/**
 * It creates a checkbox input element
 * @param nodeName - The name of the node
 * @param nodeID - The ID of the node.
 * @returns The inputCheckbox element
 */
function createInputCheckbox(nodeName, nodeID) {
    let inputCheckbox = document.createElement("input")
    inputCheckbox.classList.add("grouped-checkbox-input", "form-check-input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.value = nodeName
    inputCheckbox.id = "node-input-check" + nodeID
    return(inputCheckbox)
}

/**
 * It creates a label for a checkbox
 * @param nodeName - the name of the node
 * @param id - the id of the node
 * @returns A label element
 */
function createCheckboxLabel(nodeName, id){
    let labelCheckbox = document.createElement("label")
    labelCheckbox.classList.add("form-check-label")
    labelCheckbox.for = "node-input-check" + id
    labelCheckbox.innerHTML = nodeName
    return(labelCheckbox)
}

/**
 * It generates a container with two buttons, one to select all checkboxes and one to deselect all
 * checkboxes
 * @returns A div with two buttons.
 */
function generateSelectButtons(){
    let container = $("<div>", {"class": "d-flex justify-content-evenly"})
    container.append($("<button>", {"class": "flex-child grouped-checkbox-select-all btn btn-outline-fg",
        "id": "grouped-checkbox-select-all-" + generateID(), "css": {"font-size": "x-small"}}).text("Select All"))
    container.append($("<button>", {"class": "flex-child grouped-checkbox-deselect-all btn btn-outline-fg",
        "id": "grouped-checkbox-deselect-all-" + generateID(), "css": {"font-size": "x-small"}}).text("Deselect All"))

    container.append($("<button>", {"class": "flex-child grouped-checkbox-expand-all btn btn-outline-fg", 
    "id": "grouped-checkbox-expand-all-" + generateID(), "css": {"font-size": "x-small"}}).text("Expand All"))

    container.append($("<button>", {"class": "flex-child grouped-checkbox-collapse-all btn btn-outline-fg", 
    "id": "grouped-checkbox-collapse-all-" + generateID(), "css": {"font-size": "x-small"}}).text("Collapse All"))
   
    return(container)
}



/**
 * It takes an element and an animation type, and toggles the visibility of the element's siblings
 * @param element - the element that is clicked to hide/show
 * @param animation - "toggle" or "slide"
 */
function hideListElement(element, animation="toggle"){
    const animations = {"toggle": {"show": "show", "hide": "hide"}, "slide": {"show": "slideDown", "hide": "slideUp"}}

    let caret = $(element)
    if (!(animation in animations)){
        throw new Error("The animation type is not supported.")

    }

    let collapsedStatus
    if (caret.text() == "▼") {
        caret.text("▶")
        caret.siblings("." + styles.groupedCheckboxList)[animations[animation]["hide"]]()
        collapsedStatus = "collapsed"
    } else {
        caret.text("▼")
        caret.siblings("." + styles.groupedCheckboxList)[animations[animation]["show"]]()
        collapsedStatus = "expanded"
    }
}



/**
 * It takes the id of a checkboxGroupInput, finds all the checkboxes that are checked, and then sets
 * the Shiny input to the values of the checked checkboxes
 * @param id - The id of the checkboxGroupInput
 */
function setInput(id){
    let selected = []
    $("#" + id).find("input:checkbox:checked").each(function(){
        selected.push($(this).val())
    })

    // Set output
    Shiny.setInputValue(id, selected, {priority: "event"});

}

/* Registering events for the checkboxes. */
function registerEvents(id){

    let base = $("#" + id)

    // Hide if caret is clicked
    base.find("." + styles.groupedCheckboxCaret).on("click", function (){
        hideListElement(this, "toggle")
    })

    // if parent group checkbox get changed, so will children
    base.find(".grouped-checkbox-input").on("click",function(){
        // Select all children and change prop checked
        let element = $(this)
        element.siblings("ul").children().find(".grouped-checkbox-input").prop("checked", element.is(":checked"))

        // If not all children have the same check value, set parent to indeterminate.
        let checkStatus = [element.is(":checked")]
        element.parent().parent().siblings().children().children("input[type='checkbox']").each(function(){
            checkStatus.push($(this).is(":checked"))
        })

        
        let uniqueValues = [... new Set(checkStatus)]

        // Get parent checkbox which inderterminate needs too change.
        let parentCheckbox = element.parent().parent().parent().siblings(".grouped-checkbox-input")
        if (uniqueValues.length > 1){
            // Intermediate should be set as true
            parentCheckbox.prop({indeterminate: true, checked: false})
        } else {
            // Intermediate should be set to false. Value checked can be grabbed by getting the value from the element
            parentCheckbox.prop({indeterminate: false, checked: element.is(":checked")})
        }        
        setInput(id)
    })


    // Select all button
    base.find(".grouped-checkbox-select-all").on("click", function(){
        base.find(".grouped-checkbox-input").prop({indeterminate: false, checked: true})
        setInput(id)

    })

    // Deselect all
    base.find(".grouped-checkbox-deselect-all").on("click", function(){
        base.find(".grouped-checkbox-input").prop({indeterminate: false, checked: false})
        setInput(id)
    })

    // Expand all button
    base.find(".grouped-checkbox-expand-all").on("click", function(){
        console.log("Clicked expand all")
        base.find("." + styles.groupedCheckboxCaret).each(function(){
            let caret = $(this)
            if (caret.text() == "▶") {
                caret.text("▼")
                caret.siblings("." + styles.groupedCheckboxList).show()
                caret.siblings("." + styles.groupedCheckboxList).show()
            }
        })
    })
    

    // Collapse all button
    base.find(".grouped-checkbox-collapse-all").on("click", function(){
        base.find("." + styles.groupedCheckboxCaret).each(function(){
            let caret = $(this)
            if (caret.text() == "▼") {
                caret.text("▶")
                caret.siblings("." + styles.groupedCheckboxList).hide()
                caret.siblings("." + styles.groupedCheckboxList).hide()
            }
        })
    })


    // Set input 
    setInput(id)
}



function updateCollapseButtonStatus(collapseButton, event=null){
    
    // Set text of collapse button to "Expand All" if event is "collapsed"
    let buttonText = collapseButton.text()
    
    if (event == "collapsed"){
        if (buttonText == "Expand All"){
            collapseButton.text("Collapse All")
        } else {
            collapseButton.text("Expand All")
        }
    } else if (event == "expanded"){
        if (buttonText == "Expand All"){
            collapseButton.text("Collapse All")
        } else {
            collapseButton.text("Expand All")
        }
    }


    
}
/**
 * > The function `parseTree` takes two arguments, `choices` and `levels`, and returns a new instance
 * of the `ConstructTree` class
 * @param choices - an Object with the data that will be used.
 * @param levels - the number of levels in the tree
 * @returns A ConstructTree object
 */
function parseTree(choices, levels){
    return new ConstructTree(choices, levels)
}

/**
 * > This function takes a tree Object and appends the nodes to the DOM
 * @param parent - the parent element to append the nodes to
 * @param tree - the tree object
 */
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


/**
 * It creates a new node, assigns it an ID, and appends it to the parent node
 * @param nodeName - The name of the node
 * @param nodeParent - The parent node of the node you're creating.
 * @param hasChildren - boolean
 * @returns The ID of the node that was just created.
 */
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

/**
 * It takes a bunch of inputs, creates a tree, and then renders it
 * @param id - The id of the element that will hold the tree
 * @param label - The label for the tree
 * @param choices - A list of choices. Each choice is a list of length 2, where the first element is
 * the value of the choice, and the second element is the label.
 * @param levels - A vector of strings that indicate the levels of the tree.
 * @param collapsed - a boolean that determines whether the tree should be collapsed by default
 * @param selected - A vector of values that should be selected, If provided true.
 */
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

    // Create a container that holds the nodes
    let nodeContainer = document.createElement("div")
    nodeContainer.classList.add(styles.groupedCheckboxNodeHolder)
    nodeContainer.classList.add("overflow-auto")
    nodeContainer.classList.add("align-self-center")
    base.appendChild(nodeContainer)


    // Render and append the nodes
    appendNodes(nodeContainer, tree)



    // Hide the nodes
    if (typeof(collapsed) === "boolean" && collapsed){
        $("#" + id).find("." + styles.groupedCheckboxCaret).each(function(){
            hideListElement(this, "toggle")
        })
    } else {
        if (typeof(collapsed) === "string"){
            collapsed = [collapsed]
        }
        for (let value of collapsed){
            let caret = $("#" + id).find("input[value='" + value + "']").siblings("." + styles.groupedCheckboxCaret);
            hideListElement(caret, "toggle")
        }
    }

    // Check which nodes should be selected
    if (typeof(selected) === "boolean" & selected === true){
        $("#" + id).find(".grouped-checkbox-input").prop({indeterminate: false, checked: true})}
    else{

        // If selected is a string put it into an array
        if (typeof(selected) === "string"){
            selected = [selected]
        }

        for (let value of selected){
            $("#" + id).find(".grouped-checkbox-input[value='" + value + "']").prop({indeterminate: false, checked: true})
        }
    }
    $(document).on("shiny:connected", function() {
        registerEvents(id)
    });

}


export {createTree}