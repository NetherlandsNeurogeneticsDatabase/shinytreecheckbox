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

export {createCaret, createInputCheckbox, createCheckboxLabel, generateSelectButtons, generateID}