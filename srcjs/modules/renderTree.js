import 'shiny';
import {ConstructTree} from "./constructTree";
import { generateID, createCaret, createInputCheckbox, createCheckboxLabel, generateSelectButtons } from './helpers';

import {generateMultiStateCheckbox, setStateOfButton} from "./multiStateCheckbox";
import styles from './tree.css'

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

    if (caret.text() === "▼") {
        caret.text("▶")
        caret.siblings("." + styles.groupedCheckboxList)[animations[animation]["hide"]]()
    } else {
        caret.text("▼")
        caret.siblings("." + styles.groupedCheckboxList)[animations[animation]["show"]]()
    }
}



/**
 * It takes the id of a checkboxGroupInput, finds all the checkboxes that are checked, and then sets
 * the Shiny input to the values of the checked checkboxes
 * @param id - The id of the checkboxGroupInput
 */
function setInput(id){
    
    // Check if element with id 'id' has children with the button class 'styles.btnInclude'

    // Checks if mode is "include" by finding the button with the class "styles.btnInclude

    // Get includeMode from data
    let includeMode = $("#" + id).data("includeMode")

    let selectedValues

    if (includeMode === true){
        selectedValues = getInputIncluded(id)

    } else {
        selectedValues = getInputRegular(id)
    }

    // let selected
    // if (includeMode){
    //     selected = {"included": [], "excluded": []}
    // } else {
    //     selected = []
    // }
    //
    //
    //
    // $base.find("input:checkbox:checked").each(function(){
    //     let checkbox = $(this)
    //
    //     // Check if the checkbox has children as we only need attribute names
    //
    //     if (checkbox.siblings("." + styles.groupedCheckboxList).length === 0){
    //         if (includeMode){
    //
    //              // Include mode returns two lists, one with the included attributes and one with the excluded attributes
    //             let state = checkbox.siblings("." + styles.btnInclude).text()
    //             if (state === "INCLUDE") {
    //                 selected["included"].push(checkbox.val())
    //             } else {
    //                 selected["excluded"].push(checkbox.val())
    //             }
    //         } else {
    //             // Normal mode returns a single list with the included attributes
    //             selected.push(checkbox.val())
    //         }
    //     }
    // })
            
    // Set output
    console.log("Setting input")
    console.log(selectedValues)
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

    console.log(selected)
    return selected
}


function registerIncludeModeEvents(id) {
    let $base = $("#" + id)
    $base.find("." + styles.btnInclude).on("click", function(){
        setInput(id)
    })
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
            if ($caret.text() === "▶") {
                $caret.text("▼")
                $caret.siblings("." + styles.groupedCheckboxList).show()
                $caret.siblings("." + styles.groupedCheckboxList).show()
            }
        })
    })
    

    // Collapse all button
    $base.find(".grouped-checkbox-collapse-all").on("click", function(){
        $base.find("." + styles.groupedCheckboxCaret).each(function(){
            let $caret = $(this)
            if ($caret.text() === "▼") {
                $caret.text("▶")
                $caret.siblings("." + styles.groupedCheckboxList).hide()
                $caret.siblings("." + styles.groupedCheckboxList).hide()
            }
        })
    })

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
        if ($base.data("includeMode") === true){
            $(this).siblings("." + styles.btnInclude).trigger("click")
        } else {
            $(this).siblings(".grouped-checkbox-input").trigger("click")
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
 * @returns A ConstructTree object
 */
function parseTree(choices, levels){
    return new ConstructTree(choices, levels)
}

/**
 * > This function takes a tree Object and appends the nodes to the DOM
 * @param parent - the parent element to append the nodes to
 * @param tree - the tree object
 * @param includeMode
 */
function appendNodes(parent, tree, includeMode) {
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
                    child.htmlID = constructNode(child.value, null, child.has_children, base, includeMode)

                }
                else {
                    child.htmlID = constructNode(child.value, child.parent, child.has_children, base, includeMode)
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
 * @returns The ID of the node that was just created.
 */
function constructNode(nodeName, nodeParent, hasChildren, base, include){
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


    if (hasChildren){
        node.appendChild(createCaret())
    } 



    // Check if 'include' is true or false
    if (include === true){
        node.appendChild(generateMultiStateCheckbox(nodeName,"include"))
    } else {
        node.appendChild(createInputCheckbox(nodeName, nNodes))
    }
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
 * @param includeMode
 */
function createTree(id, label, choices, levels, collapsed, selected, includeMode) {

    let base = document.getElementById(id)

    // Create label
    if (label){
        let new_label = document.createElement("h4");
        new_label.innerText = label;
        base.appendChild(new_label)
    }

    let $base = $(base)
    $base.append(generateSelectButtons(id, levels.length > 1, includeMode))

    $base.data("includeMode", includeMode)


    let tree = parseTree(choices, levels)

    // Create a container that holds the nodes
    let nodeContainer = document.createElement("div")
    nodeContainer.classList.add(styles.groupedCheckboxNodeHolder)
    nodeContainer.classList.add("overflow-auto")
    nodeContainer.classList.add("align-self-center")
    base.appendChild(nodeContainer)


    // Render and append the nodes
    appendNodes(nodeContainer, tree, includeMode)

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
    if (typeof(selected) === "boolean" && selected === true){
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