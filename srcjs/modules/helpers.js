import styles from './tree.css'
import $ from 'jquery';
import SearchBar from "./searchBar";
import "shiny";

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
// We use the below function but we use a svg instead:

function createCaret() {
    let caret = document.createElement("span")
    // We insert the svg caret here <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
    // Add the class 'styles.groupedCheckboxCaret' and 'collapsed'
    caret.classList.add("text-primary", styles.groupedCheckboxCaret, "collapsed")
    caret.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>'
    return (caret)
}

function createEmptyCaret(){
    let caret = document.createElement("span")
    caret.classList.add(styles.groupedCheckboxCaretEmpty, "empty-caret")
    caret.innerText = " "
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
 * @param clickable
 * @param widgetId
 * @returns A label element
 */
function createCheckboxLabel(nodeName, id, clickable, widgetId, nodeValue) {
    let labelCheckbox = document.createElement("label")
    labelCheckbox.classList.add("form-check-label")
    labelCheckbox.for = "node-input-check" + id
    labelCheckbox.innerHTML = nodeName

    if (clickable === true) {
        labelCheckbox.classList.add(styles.clickableLabel)

        // We want to prevent the default behaviour of the label, which is to check the checkbox. Instead, we want to
        // set the value of the clickInput to the value of the label.
        labelCheckbox.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            setClickInput(widgetId, nodeValue);
        })
        }
    return (labelCheckbox)
}

function setClickInput(id, value){
    let clickInputID = id + "_click"
    Shiny.setInputValue(clickInputID, value, {priority: "event"});
}

/**
 * generateSelectButtons generates a container with two buttons, one to select all checkboxes and one to deselect all
 * checkboxes
 * @returns A div with two buttons.
 */
function generateSelectButtons(id, searchBar, collapseButton, selectButton, flattenedChoices, renderCheckbox, includeMode) {

    let $container = $("<div>", {"class": "d-flex justify-content-evenly w-100"})
    let generatedID = generateID()

    if (renderCheckbox === true && selectButton === true) {
        constructDropdownSelect(id, $container, generatedID, includeMode)
    }

    if (collapseButton === true) {
        constructDropdownCollapse(id, $container, generatedID)
    }

    if (searchBar === true) {
        constructSearchBar(id, $container, flattenedChoices)
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

function constructSearchBar(id, $container, flattenedChoices) {
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

    let $searchButton = $("<button>", {"class": "btn btn-outline-fg", "type": "button"}).text("Search")
        .prepend($("<i>", {"class": "fa-solid fa-magnifying-glass"}))
        .prepend(" ")

    let $searchBar = $("<input>", {"class": "form-control searchBar", "type": "text", "autocomplete": "off", "placeholder": "Search"})

    $container.append($searchButton)
    $container.append($searchBar)

    $container.ready(function () {
        let inSrc = []
        let src = []

        for (let i = 0; i < flattenedChoices.length; i++) {
            let value = flattenedChoices[i]
            if (inSrc.includes(value) === false) {
                inSrc.push(value)
                src.push({"label": value, "value": value})
            }
        }
        // Create the search bar and logic
        let searchBarElement = $searchBar[0]
        let lastClickedNode = null

        new SearchBar(searchBarElement, {
            data: src,
            onSelectItem: (label, value) => {
                let $nodes = $("#" + id).find(".GroupedCheckBox-node")

                // We have to find the node that has the value we want to select
                let $clickedNodes = $nodes.filter(function () {
                    return $(this).children("label").text() === label
                })

                $clickedNodes.each(function () {
                    let $node = $(this)

                    // We want to color the node
                    $node.find("label").first().css("font-weight", "bold").addClass("text-primary").removeClass("text-fg")

                    // We want to remove the color from the previously selected node if it exists
                    if (lastClickedNode !== null) {
                        lastClickedNode.find("label").first().css("font-weight", "normal").addClass("text-fg").removeClass("text-primary")
                    }

                    // We want to open all the carets that are parents of the clicked node.
                    $node.parentsUntil("#" + id, ".GroupedCheckBox-node")
                        .children("." + styles.groupedCheckboxCaret + ".collapsed").click()

                    // Next we want to scroll to the node
                    $node[0].scrollIntoView({behavior: "smooth", block: "center", inline: "center"})

                    // We are done processing this node so we set it as the last clicked node
                    lastClickedNode = $node
                })
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

export {createCaret, createEmptyCaret, createInputCheckbox, createCheckboxLabel, generateSelectButtons, generateID}
