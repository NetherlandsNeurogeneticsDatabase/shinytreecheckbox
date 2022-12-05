import styles from './tree.css'
import $ from 'jquery';
import SearchBar from "./searchBar";

// import "chosen-js"

// import {Autocomplete} from "./autocomplete";

/* A function that generates a unique ID. */
let generateID = (function (n) {
    return function () {
        n += 1
        return n;
    }
}(-1))


/**
 * createCaret creates a span element, adds the class `groupedCheckboxCaret` to it, and sets its inner text to
 * "▼".
 * @returns A span element with the class "groupedCheckboxCaret" and the inner text "▼"
 */
function createCaret() {
    let caret = document.createElement("span")
    // Add the class 'styles.groupedCheckboxCaret' and 'collapsed'
    caret.classList.add(styles.groupedCheckboxCaret, "collapsed")
    caret.innerText = "▼"
    return (caret)
}


/**
 * createInputCheckbox creates a checkbox input element
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
    return (inputCheckbox)
}

/**
 * createCheckboxLabel creates a label for a checkbox
 * @param nodeName - the name of the node
 * @param id - the id of the node
 * @returns A label element
 */
function createCheckboxLabel(nodeName, id) {
    let labelCheckbox = document.createElement("label")
    labelCheckbox.classList.add("form-check-label")
    labelCheckbox.for = "node-input-check" + id
    labelCheckbox.innerHTML = nodeName
    return (labelCheckbox)
}

/**
 * generateSelectButtons generates a container with two buttons, one to select all checkboxes and one to deselect all
 * checkboxes
 * @returns A div with two buttons.
 */
function generateSelectButtons(id, isHierarchical, includeMode, searchBar, choices) {

    let $container = $("<div>", {"class": "d-flex justify-content-evenly w-100"})
    // let $container = $("<div>")
    let generatedID = generateID()


    constructDropdownSelect(id, $container, generatedID, includeMode)

    if (isHierarchical === true) {
        constructDropdownCollapse(id, $container, generatedID)
    }

    if (searchBar === true) {
        constructSearchBar(id, $container, choices, includeMode, isHierarchical)
    }

    return ($container)
}

function constructDropdownSelect(id, $container, generatedID, includeMode) {
    let $dropdown = $("<div>", {"class": "dropdown dropdown-select"})
    let idDropdownSelect = "dropDownSelect-" + generatedID
    if (includeMode === true) {
        let $dropDownSelectButton = $("<button>", {
            "class": "btn btn-outline-fg dropdown-toggle ",
            "type": "button",
            "id": "dropdown-select-" + idDropdownSelect
        })
            .text("(de)select all")
            .attr("data-bs-toggle", "dropdown")
            .attr("aria-expanded", "false")
        $dropdown.append($dropDownSelectButton)

        // Create dropdown menu for the dropdownSelect button
        let dropDownSelectMenu = $("<ul>", {
            "class": "dropdown-menu",
            "aria-labelledby": "dropdown-select-" + idDropdownSelect
        })
        dropDownSelectMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-include-all"}).text("Include all")))
        dropDownSelectMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-exclude-all"}).text("Exclude all")))
        dropDownSelectMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-deselect-all"}).text("Deselect all")))

        $dropdown.append(dropDownSelectMenu)
        $container.append($dropdown)

    } else {
        // We want to render the (de)select all buttons here.
        let dropDownSelectButton = $("<button>", {
            "class": "btn btn-outline-fg dropdown-toggle ",
            "type": "button",
            "id": idDropdownSelect
        })
            .text("(de)select all")
            .attr("data-bs-toggle", "dropdown")
            .attr("aria-expanded", "false")
        $dropdown.append(dropDownSelectButton)

        // Create dropdown menu for the dropdownSelect button
        let dropDownSelectMenu = $("<ul>", {
            "class": "dropdown-menu",
            "aria-labelledby": "dropDownSelect-" + generatedID
        })
        dropDownSelectMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-select-all"}).text("Select all")))
        dropDownSelectMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-deselect-all"}).text("Deselect all")))

        $dropdown.append(dropDownSelectMenu)
        $container.append($dropdown)
    }
}


function constructDropdownCollapse(id, $container, generatedID) {
    let $dropdown = $("<div>", {"class": "dropdown dropdown-select"})
    let $dropDownCollapseButton = $("<button>", {
        "class": "btn btn-outline-fg dropdown-toggle ",
        "type": "button",
        "id": "dropDownCollapse-" + generatedID
    })
        .text("collapse")
        .attr("data-bs-toggle", "dropdown")
        .attr("aria-expanded", "false")
    $dropdown.append($dropDownCollapseButton)

    // Create dropdown menu for the dropdownCollapse button
    let $dropDownCollapseMenu = $("<ul>", {
        "class": "dropdown-menu",
        "aria-labelledby": "dropDownCollapse-" + generatedID
    })
    $dropDownCollapseMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-collapse-all"}).text("Collapse all")))
    $dropDownCollapseMenu.append($("<li>", {"class": "dropdown-item"}).append($("<a>", {"class": "dropdown-link grouped-checkbox-expand-all"}).text("Expand all")))
    $dropdown.append($dropDownCollapseMenu)
    $container.append($dropdown)
}

function constructSearchBar(id, $container, choices) {
    // Create a search button that transforms into a search bar when clicked and back when the user clicks outside of the
    // search bar.
    let $searchButton = $("<button>", {"class": "btn btn-outline-fg", "type": "button"}).text("Search")
    let $searchBar = $("<input>", {"class": "form-control searchBar", "type": "text", "autocomplete": "off", "placeholder": "Search"})
    $container.append($searchButton)
    $container.append($searchBar)

    function hideSearchButton() {
        $searchButton.hide()
        $searchBar.show()
        $container.find(".dropdown-select").hide()
        $searchBar.parent().show()
        $searchBar.focus()
    }

    function showSearchButton() {
        setTimeout(function () {
            $searchBar.hide()
            $searchButton.show()
            $container.find(".dropdown-select").show()
            $searchBar.parent().hide()
        }, 200)
    }
    $container.ready(function () {
        // Flatten choices
        let inSrc = []
        let src = []
        for (let i = 0; i < choices.length; i++) {
            for (let key in choices[i]) {
                let value = choices[i][key]
                if (inSrc.includes(value) === false) {
                    inSrc.push(value)
                    src.push({"label": value, "value": value})
                }
            }
        }

        // Create the search bar and logic
        let searchBarElement = $searchBar[0]
        let lastClickedNode = null
        new SearchBar(searchBarElement, {
            data: src,
            maxItems: 10,
            onSelectItem: (label, value) => {
                let node = $("#" + id).find(".GroupedCheckBox-node").filter(function () {
                    return $(this).attr("data-node-name") === value
                })

                // Get all the label elements and set the text to bold. Make sure to reset the text of the last clicked
                // node to normal.
                node.find("label").css("font-weight", "bold").addClass("text-primary").removeClass("text-fg")

                if (lastClickedNode !== null) {
                    lastClickedNode.find("label").css("font-weight", "normal").addClass("text-fg").removeClass("text-primary")
                }
                lastClickedNode = node

                node.parentsUntil("#" + id, ".GroupedCheckBox-node")
                    .children("." + styles.groupedCheckboxCaret + ".collapsed").click()

                // Scroll to the node
                node[0].scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
            }
        })

        // Hide the search bar
        $searchBar.hide()
        $searchBar.parent().hide()

        // When the user clicks on the search button, the search bar is shown and the search button is hidden.
        $searchButton.on("click", function () {
            hideSearchButton();
        })

        // Prevent enter from clicking the first button
        $searchBar.on("keydown", function (e) {
            if (e.keyCode === 13) {
                e.preventDefault()
            }
        })
        // When the user clicks outside the search bar, the search bar is hidden and the search button is shown.
        $searchBar.on("blur", function () {
            showSearchButton()
        })
    })


}

export {createCaret, createInputCheckbox, createCheckboxLabel, generateSelectButtons, generateID}