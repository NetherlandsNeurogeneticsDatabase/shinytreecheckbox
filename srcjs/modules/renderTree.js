import 'shiny';
import {ConstructTree} from "./constructTree";
import {createCaret, createEmptyCaret, createCheckboxLabel, createInputCheckbox, generateID, generateSelectButtons} from './helpers';

import {generateMultiStateCheckbox, setStateOfButton} from "./multiStateCheckbox";
import styles from './tree.css'
import xss from "xss";

function preSelectNodes(id, selected, includeMode) {
    let $base = $("#" + id)

    if (typeof(selected) === "boolean"){
        if (selected === true){
            if (includeMode === true){
                $base.find("." + styles.btnInclude).each(function(){
                    setStateOfButton(this, "include")
                })
            } else {
                $base.find(".grouped-checkbox-input").prop({indeterminate: false, checked: true})}
        }
    }

    else{
        // If selected is a string put it into an array
        if (typeof(selected) === "string"){
            selected = [selected]
        }

        for (let value of selected){
            // Add backslash to value to escape special characters
            value = value.replace(/([ #;&,.+*~':"!^$[\]()=>|\/@])/g, '\\$1')
            value = xss(value)

            if (includeMode === true){
                let $btn = $base.find("." + styles.btnInclude + "[value='" + value + "']")
                setStateOfButton($btn, "include")

                // Set the children of '$btn' to the same state
                $btn.siblings("." + styles.groupedCheckboxList).find("." + styles.btnInclude).each(function(){
                    setStateOfButton($(this), "include")
                })

            } else {
                $base.find("input[value='" + value + "']").prop({indeterminate: false, checked: true})
            }

        }
    }
}

function collapseNodes(id, collapsed) {
    if (typeof(collapsed) === "boolean" && collapsed){
        $("#" + id).find("." + styles.groupedCheckboxCaret).each(function(){
            hideListElement(this, "toggle")
        })
    } else if (Array.isArray(collapsed) || typeof(collapsed) === "string"){
        if (typeof(collapsed) === "string"){
            collapsed = [collapsed]
        }

        for (let value of collapsed){
            // Make sure to escape special characters
            value = value.replace(/([ #;&,.+*~':"!^$[\]()=>|\/@])/g, '\\$1')
            value = xss(value)
            $("#" + id).find("." + styles.groupedCheckboxCaret).each(function(){
                let $input = $(this).siblings("input").first()
                let inputVal = $input.type === "button" ? $input.data("value") : xss($input.val())
                if (inputVal === value) {
                    hideListElement(this, "toggle")
                }
            })
        }
    }
}

/**
 * It takes a bunch of inputs, creates a tree, and then renders it
 * the value of the choice, and the second element is the label.
 * Meaning that if the user clicks on the label, the value will be sent to a shiny input.
 * @param params - An object containing the parameters for the tree
 */
function createTree(params){
    let {
        id,
        label,
        choices,
        levels,
        collapsed,
        selected,
        includeMode,
        search_bar,
        collapse_button,
        select_button,
        isJSON,
        clickableLabels,
        renderCheckbox,
        maxHeight = null,
        maxWidth = null,
        minWidth = null,
        minHeight = null
    } = params;

    if (isJSON) {
        // Parse the JSON string
        choices = JSON.parse(choices)
    }

    // Determine whether the tree is hierarchical or not
    let isHierarchical = levels.length > 1 || isJSON

    let flattenedChoices = flattenChoices(choices, levels, isJSON)

    let $base = $("#" + id)

    if (label){
        $base.append("<h4>" + label + "</h4>")
    }

    if (collapse_button === true && isHierarchical){
        collapse_button = false
    }


    // $base.append(generateSelectButtons(id, renderSelectButtons, includeMode, search_bar, flattenedChoices, renderCheckbox))
    $base.append(generateSelectButtons(id, search_bar, collapse_button, select_button, flattenedChoices, renderCheckbox, includeMode))


    $base.data("includeMode", includeMode)
    $base.data("clickableLabels", clickableLabels)

    let tree = parseTree(choices, levels, isJSON)

    let $nodeContainer = $("<div>", {"class": styles.groupedCheckboxNodeHolder + " overflow-auto align-self-center"})
    $base.append($nodeContainer)

    // Set the height of the node container
    if (maxHeight){
        $nodeContainer.css("max-height", maxHeight)
    }
    if (minHeight){
        $nodeContainer.css("min-height", minHeight)
    }

    // Set the width of the node container
    if (maxWidth){
        $nodeContainer.css("max-width", maxWidth)
    }
    if (minWidth){
        $nodeContainer.css("min-width", minWidth)
    }


    // Render and append the nodes
    appendNodes($nodeContainer.get(0),
        tree,
        includeMode,
        id,
        clickableLabels,
        renderCheckbox)

    // Check which nodes should be selected
    preSelectNodes(id, selected, includeMode)

    // Hide the nodes that should be collapsed
    if (isHierarchical){
        collapseNodes(id, collapsed)
    }

    $(document).on("shiny:connected", function() {
        registerEvents(id)
        setInput(id)
    });

}

function flattenChoices(data, levels = c(), isJSON=false){
    let flattened = []
    if (isJSON){
        flattenJSON(data, flattened)
    } else {
        flattenDataFrame(data, levels, flattened)
    }
    return flattened
}

function flattenDataFrame(data, levels, flattened){
    data.forEach(record => {
        levels.forEach(level => {
            let value = record[level]
            flattened.push(value)
        })
    })
}
function flattenJSON(data, flattened){
    let itterateNode = function(node, flattened){
        flattened.push(node.label)
        if (node.children){
            node.children.forEach(child => {
                itterateNode(child, flattened)
            })
        }
    }
    data.forEach(node => {
        itterateNode(node, flattened)
    })

}

function switchCaretState($caret){
    if ($caret.hasClass("collapsed")){
        $caret.removeClass("collapsed").addClass("expanded")
        $caret.html('<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>')
    }

    else if ($caret.hasClass("expanded")){
        $caret.removeClass("expanded").addClass("collapsed")
        $caret.html('<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>')
    }
}

/**
 * It takes an element and an animation type, and toggles the visibility of the element's siblings
 * @param element - the element that is clicked to hide/show
 * @param animation - "toggle" or "slide"
 */
function hideListElement(element, animation="toggle"){
    let caret = $(element)

    const animations = {"toggle": {"show": "show", "hide": "hide"}, "slide": {"show": "slideDown", "hide": "slideUp"}}

    if (!(animation in animations)){
        throw new Error("The animation type is not supported.")

    }

    switchCaretState(caret)

    if (caret.hasClass("collapsed")){
        caret.siblings("." + styles.groupedCheckboxList)[animations[animation]["hide"]]()
    }

    else if (caret.hasClass("expanded")){
        caret.siblings("." + styles.groupedCheckboxList)[animations[animation]["show"]]()
    }
}



/**
 * It takes the id of a checkboxGroupInput, finds all the checkboxes that are checked, and then sets
 * the Shiny input to the values of the checked checkboxes
 * @param id - The id of the checkboxGroupInput
 */
function setInput(id){

    // Get includeMode from data
    let includeMode = $("#" + id).data("includeMode")

    let selectedValues
    if (includeMode === true){
        selectedValues = getInputIncluded(id)

    } else {
        selectedValues = getInputRegular(id)
    }

    Shiny.setInputValue(id, selectedValues, {priority: "event"});
}



function getInputRegular(id){
    let $base = $("#" + id)
    let selected = []

    $base.find("input:checkbox:checked").each(function(){
        let checkbox = $(this)

        // Check if the checkbox has children as we only need attribute names
        if (checkbox.siblings("." + styles.groupedCheckboxList).length === 0){
            selected.push(checkbox.val())
        }
    })

    return selected

}

function getInputIncluded(id){
    let $buttons = $("#" + id).find("." + styles.btnInclude)

    let selected = {"included": [], "excluded": []}
    for (const button of $buttons) {
        let $button = $(button)
        if ($button.siblings("." + styles.groupedCheckboxList).length === 0){
            let state = $button.data("state")
            if (state === "include"){
                selected["included"].push($button.val())
            }
            else if (state === "exclude"){
                selected["excluded"].push($button.val())
            }

        }
    }
    return selected
}


function registerIncludeModeEvents(id) {
    let $base = $("#" + id)
    $base.find("." + styles.btnInclude).on("click", function(){
        updateLabelColour($(this).siblings("label").first())
        setInput(id)
    })
}

/**
 * Because the search buttons highlights the labels, we need to update the colour of the labels
 * when the state of the button/checkbox changes back to normal
 * This function checks if the label has the class "text-primary" and if so, it removes it. Also font-weight is set back
 * to normal.
 * @returns {boolean} - True if the label was highlighted, false otherwise
 * @param $labelElement The label element to check if it is highlighted
 */
function updateLabelColour($labelElement){
    if ($labelElement.hasClass("text-primary")){
        $labelElement.removeClass("text-primary").addClass("text-fg")
        $labelElement.css("font-weight", "normal")
        return true
    } else {
        return false
    }
}

function registerRegularModeEvents(id) {
    let $base = $("#" + id)
    $base.find(".grouped-checkbox-input").on("click",function(){
        // Select all children and change prop checked
        let $element = $(this)
        $element.siblings("ul").children().find(".grouped-checkbox-input").prop("checked", $element.is(":checked"))

        // If not all children have the same check value, set parent to indeterminate.
        let checkStatus = [$element.is(":checked")]
        $element.parent().parent().siblings().children().children("input[type='checkbox']").each(function(){
            checkStatus.push($(this).is(":checked"))
        })

        // If the label from the checkbox has a class "text-primary" then remove this and add "text-fg"
        updateLabelColour($(this).parent().find("label").first())

        let uniqueValues = [... new Set(checkStatus)]

        // Get parent checkbox which inderterminate needs too change. And set indeterminate
        let $parentCheckbox = $element.parent().parent().parent().siblings(".grouped-checkbox-input")
        if (uniqueValues.length > 1){
            $parentCheckbox.prop({indeterminate: true, checked: false})
        } else {
            $parentCheckbox.prop({indeterminate: false, checked: $element.is(":checked")})
        }
        setInput(id)
    })

}

/* Registering events for the checkboxes. */
function registerEvents(id){
    let $base = $("#" + id)

    // Hide if caret is clicked
    $base.find("." + styles.groupedCheckboxCaret).on("click", function (){
        console.log("Caret clicked")
        hideListElement(this, "toggle")
    })

    let includeMode = $base.data("includeMode")

    if (includeMode === true){
        registerIncludeModeEvents(id)
    } else {
        registerRegularModeEvents(id)
    }
    // if parent group checkbox get changed, so will children


    // Select all button
    $base.find(".grouped-checkbox-select-all").on("click", function(){
        $base.find(".grouped-checkbox-input").prop({indeterminate: false, checked: true})
        setInput(id)

    })

    // Deselect all
    $base.find(".grouped-checkbox-deselect-all").on("click", function(){
        if (includeMode === true){
            // If include mode, deselect all buttons
            $base.find("." + styles.btnInclude).each(function(){
                setStateOfButton($(this), "unchecked")
            })
        } else {
            $base.find(".grouped-checkbox-input").prop({indeterminate: false, checked: false})
        }
        setInput(id)
    })

    // Expand all button
    $base.find(".grouped-checkbox-expand-all").on("click", function(){
        $base.find("." + styles.groupedCheckboxCaret).each(function(){
            let $caret = $(this)
            // We rotate the caret 90 degrees to the right when it is collapsed. We dont change the text only use pure css
            // check if the caret has the class "collapsed" and if so, expand it
            if ($caret.hasClass("collapsed")){
                $caret.removeClass("collapsed").addClass("expanded")
                // Add the transform: rotate(90deg) to the caret
                $caret.css("transform", "rotate(90deg)")
                $caret.siblings("." + styles.groupedCheckboxList).show()
            }
        })
    })

    // $base.find(".grouped-checkbox-expand-all").on("click", function(){
    //     $base.find("." + styles.groupedCheckboxCaret).each(function(){
    //         let $caret = $(this)
    //         if ($caret.text() === "▶") {
    //             $caret.text("▼")
    //             $caret.siblings("." + styles.groupedCheckboxList).show()
    //             $caret.addClass("expanded").removeClass("collapsed")
    //         }
    //     })
    // })


    // Collapse all button
    $base.find(".grouped-checkbox-collapse-all").on("click", function(){
        $base.find("." + styles.groupedCheckboxCaret).each(function(){
            // if the class has the class "expanded" then collapse it
            let $caret = $(this)
            // We rotate the caret 90 degrees to the right when it is collapsed. We dont change the text only use pure css
            // check if the caret has the class "expanded" and if so, collapse it
            if ($caret.hasClass("expanded")){
                $caret.removeClass("expanded").addClass("collapsed")
                // Add the transform: rotate(90deg) to the caret
                $caret.css("transform", "rotate(90deg)")
                $caret.siblings("." + styles.groupedCheckboxList).hide()
            }
        })
    })

    // $base.find(".grouped-checkbox-collapse-all").on("click", function(){
    //     $base.find("." + styles.groupedCheckboxCaret).each(function(){
    //         let $caret = $(this)
    //         if ($caret.text() === "▼") {
    //             $caret.text("▶")
    //             $caret.addClass("collapsed").removeClass("expanded")
    //             $caret.siblings("." + styles.groupedCheckboxList).hide()
    //         }
    //     })
    // })

    // Include all
    $base.find(".grouped-checkbox-include-all").on("click", function(){
        // find all buttons and set them to include
        $base.find("." + styles.btnInclude).each(function(){
            setStateOfButton($(this), "include")
        })
        setInput(id)
    })

    // Exclude all
    $base.find(".grouped-checkbox-exclude-all").on("click", function() {
        // find all buttons and set them to include
        $base.find("." + styles.btnInclude).each(function () {
            setStateOfButton($(this), "exclude")
        })
        setInput(id)
    })

    // If label is clicked, check the checkbox and its children checkboxes
    $base.find("." + "form-check-label").on("click", function(){
        if ($base.data("clickableLabels") === false){
            if ($base.data("includeMode") === true){
                $(this).siblings("." + styles.btnInclude).trigger("click")
            } else {
                $(this).siblings(".grouped-checkbox-input").trigger("click")
            }
        }
    })

    //Set input
    setInput(id)
}




/**
 * > The function `parseTree` takes two arguments, `choices` and `levels`, and returns a new instance
 * of the `ConstructTree` class
 * @param choices - an Object with the data that will be used.
 * @param levels - the number of levels in the tree
 * @param isJSON - a boolean value that indicates if the data is in JSON format
 * @returns A ConstructTree object
 */
function parseTree(choices, levels, isJSON){
    return new ConstructTree(choices, levels, isJSON)
}

/**
 * > This function takes a tree Object and appends the nodes to the DOM
 * @param parent - the parent element to append the nodes to
 * @param tree - the tree object
 * @param includeMode - a boolean value that indicates if the widget is in include mode
 * @param widgetId - the id of the widget
 * @param clickableLabels - a boolean value that indicates if the labels are clickable (send input to shiny)
 */
function appendNodes(parent, tree, includeMode, widgetId, clickableLabels, renderCheckbox) {
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
                let hasSiblingsWithChildren = false
                for (let sibling of child.parent.children){
                    if (sibling.has_children === true){
                        hasSiblingsWithChildren = true
                        break
                    }
                }
                if (child.parent.label === "root") {
                    // Check if the node has siblings who have children
                    child.htmlID = constructNode(
                        child.label,
                        null,
                        child.has_children,
                        base, includeMode,
                        clickableLabels,
                        widgetId,
                        renderCheckbox,
                        child.value,
                        hasSiblingsWithChildren)

                }
                else {
                    child.htmlID = constructNode(
                        child.label,
                        child.parent,
                        child.has_children,
                        base,
                        includeMode,
                        clickableLabels,
                        widgetId,
                        renderCheckbox,
                        child.value,
                        hasSiblingsWithChildren
                    )
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
 * @param base
 * @param include
 * @param clickableLabels
 * @param widgetId
 * @param renderCheckbox
 * @returns The ID of the node that was just created.
 */
function constructNode(nodeName,
                       nodeParent,
                       hasChildren,
                       base,
                       include,
                       clickableLabels,
                       widgetId,
                       renderCheckbox,
                       nodeValue,
                       hasSiblingsWithChildren) {
    // this function uses plain JS which increases the speed it takes to render the nodes by four times in comparison
    // with the more readable jquery

    let parent;
    if (!nodeParent){
        parent = base.children($("." + styles.groupedCheckboxList))[0]
    } else {
        parent = base.find("#checkbox-list-" + nodeParent.htmlID)[0]
    }

    // Create ID for the nodes
    let nNodes = generateID()
    let newNodeID = "node-" + nNodes

    let nodeListElement = document.createElement("li")

    // Create node and assign classes
    let node = document.createElement("span")
    node.classList.add("GroupedCheckBox-node", "text-fg")
    node.id = newNodeID

    // Store the node name in the node
    node.setAttribute("data-node-name", nodeName)

    if (hasChildren){
        node.appendChild(createCaret())
    }

    // if has no children and siblings have children, add an empty caret
    if (!hasChildren && hasSiblingsWithChildren){
        node.appendChild(createEmptyCaret())
    }


    // get a regex to check nodeName contains for example <e7> or <e8> and convert it to a unicode character
    let regex = /<e\d>/g
    let matches = nodeName.match(regex)
    if (matches){
        let match = matches[0]
        let charCode = match.substring(1, match.length - 1)
        nodeName = nodeName.replace(match, String.fromCodePoint(parseInt(charCode, 16)))
    }

    if (renderCheckbox === true){
        if (include === true){
            node.appendChild(generateMultiStateCheckbox(nodeName,"unchecked"))
        } else {
            node.appendChild(createInputCheckbox(nodeName, nNodes))
        }
    }

    node.appendChild(createCheckboxLabel(nodeName, nNodes, clickableLabels, widgetId, nodeValue))


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

export {createTree}
