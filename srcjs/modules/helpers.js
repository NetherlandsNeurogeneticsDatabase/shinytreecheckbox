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
function generateSelectButtons(nLevels, renderIncluded){
    let container = $("<div>", {"class": "d-flex justify-content-evenly"})

    let generatedID = generateID()
    let dropdown = $("<div>", {"class": "dropdown"})
    let dropDownSelectButton = $("<button>", {"class": "btn btn-outline-fg dropdown-toggle ", "type": "button", "id": "dropDownSelect-" + generatedID})
        .text("(de)select all")
        .attr("data-bs-toggle", "dropdown")
        .attr("aria-expanded", "false")
    dropdown.append(dropDownSelectButton)


    // Create dropdown menu for the dropdownSelect button
    let dropDownSelectMenu = $("<ul>", {"class": "dropdown-menu", "aria-labelledby": "dropDownSelect-" + generatedID})
    dropDownSelectMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-select-all"}).text("Select all")))
    dropDownSelectMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-deselect-all"}).text("Deselect all")))

    dropdown.append(dropDownSelectMenu)
    container.append(dropdown)



    if (nLevels > 1){
        // Generate collapse menu
        dropdown = $("<div>", {"class": "dropdown"})
        let dropDownCollapseButton = $("<button>", {"class": "btn btn-outline-fg dropdown-toggle ", "type": "button", "id": "dropDownCollapse-" + generatedID})
            .text("collapse")
            .attr("data-bs-toggle", "dropdown")
            .attr("aria-expanded", "false")
        dropdown.append(dropDownCollapseButton)

        // Create dropdown menu for the dropdownCollapse button
        let dropDownCollapseMenu = $("<ul>", {"class": "dropdown-menu", "aria-labelledby": "dropDownCollapse-" + generatedID})
        dropDownCollapseMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-collapse-all"}).text("Collapse all")))
        dropDownCollapseMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-expand-all"}).text("Expand all")))
        dropdown.append(dropDownCollapseMenu)
        container.append(dropdown)
    }

    if (renderIncluded){
        // Generate include menu
        dropdown = $("<div>", {"class": "dropdown"})
        let dropDownIncludeButton = $("<button>", {"class": "btn btn-outline-fg dropdown-toggle ", "type": "button", "id": "dropDownInclude-" + generatedID})
            .text("include")
            .attr("data-bs-toggle", "dropdown")
            .attr("aria-expanded", "false")
        dropdown.append(dropDownIncludeButton)

        // Create dropdown menu for the dropdownInclude button
        let dropDownIncludeMenu = $("<ul>", {"class": "dropdown-menu", "aria-labelledby": "dropDownInclude-" + generatedID})
        dropDownIncludeMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-include-all"}).text("Include all")))
        dropDownIncludeMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-exclude-all"}).text("Exclude all")))
        dropdown.append(dropDownIncludeMenu)
        container.append(dropdown)
    }
    return(container)
}

export {createCaret, createInputCheckbox, createCheckboxLabel, generateSelectButtons, generateID}