import styles from "./tree.css";


const defaultStates = {
    "unchecked": {
        "symbol":
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">\n' +
            '  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>\n' +
            '</svg>',
        "textColour": "text-dark",
        "spanClasses": "bg-dark text-white",
        "value": 0
    },
    "include": {
        "symbol":
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">\n' +
            '  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>\n' +
            '  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>\n' +
            '</svg>',
        "textColour": "text-success",
        "spanClasses": "bg-success text-white",
        "value": "include"

    }, "exclude": {
        "symbol":
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>',
        "textColour": "text-danger",
        "spanClasses": "bg-danger text-white",
        "value": "exclude"

    },"indeterminate": {
        "symbol":
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">\n' +
            '  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>\n' +
            '  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>\n' +
            '</svg>',
        "textColour": "text-warning",
        "spanClasses": "bg-warning text-white",
        "value": 0
    }
}

function generateMultiStateCheckbox(value, initState, states=defaultStates) {
    if(!Object.keys(states).includes(initState)){
        throw new Error("Invalid initial state")
    }

    let state = states[initState]

    let $includeButton = $("<button>", {"class": styles.btnInclude, "aria-label": initState, "value": value, data: {state: initState}})
        .append($("<span>", {"class": state.textColour, html: state.symbol}))
        .append($("<span>", {"class": state.spanClasses + " " + styles.btnHelpLabel, text: state.value}).hide())


    // Add events to button
    setMultiStateCheckboxLogic($includeButton, states)

    return $includeButton.get(0)
}


function setParentIndeterminate($button, parentButton, states) {
    let ownState = $button.data("state")
    let siblings = $button.parent().parent().siblings().children("span").children("button")


    let siblingStates = siblings.map(function(){return $(this).data("state")})

    if(siblingStates.toArray().every(state => state === ownState)){
        setStateOfButton(parentButton, ownState, states)
    } else {
        setStateOfButton(parentButton, "indeterminate", states)
    }
}

function setMultiStateCheckboxLogic($button, states=defaultStates) {
    $button.on("click", function () {
        let $clickedButton = $(this)
        let newStage = setNextStage($clickedButton, states)

        // Change children to the same state
        setStateOfChildren($clickedButton, newStage, states)

        let $parentButton = $clickedButton.parent().parent().parent().siblings("button")

        if ($parentButton.length > 0) {
            setParentIndeterminate($clickedButton, $parentButton, states)
        }
    })

    // On mouseover, show the text
    $button.on("mouseover", function () {
        // Create a timeout to prevent the text from showing when the user is just moving the mouse
        let $clickedButton = $(this)
        let timeout = setTimeout(function () {
            let $typeLabel = $clickedButton.children("." + styles.btnHelpLabel)

            if ($clickedButton.data("textValue") === 0) {
                $typeLabel.hide()
            } else {
                $typeLabel.show()
            }
        }, 500)
        $button.data("timeout", timeout)
    })

    // On mouseout, hide the text
    $button.on("mouseout", function () {
        clearTimeout($(this).data("timeout"))
        let text = $(this).children("." + styles.btnHelpLabel)
        text.hide()
    })

}

function setStateOfButton($button, state, states=defaultStates) {
    if(!Object.keys(states).includes(state)){
        throw new Error("Invalid state")
    }

    // Update the button to its new state
    $button.attr("aria-label", state)
        .data("state", state)
        .data("textValue", states[state].value)
        .attr("class", styles.btnInclude)
        .addClass(states[state].textColour)

    // Update the icon
    let $icon = $button.find("span").first().attr("class", states[state].textColour)

    // Update the symbol
    $icon.empty()
    $icon.append($(states[state].symbol, {"class": states[state].textColour}))

    // Update the text
    $button.find("span").last()
        .text(states[state].value)
        .attr("class", states[state].spanClasses + " " +styles.btnHelpLabel)
        .hide()
}

function setStateOfChildren($button, state, states=defaultStates){
    // Get all the buttons in the unordered list with the class styles.btnInclude
    let buttons = $button.siblings("ul").find("." + styles.btnInclude)
    buttons.each(function(){
        setStateOfButton($(this), state, states)
    })
}

function setNextStage($button, states) {

    let stateKey = $button.data("state")

    if(!Object.keys(states).includes(stateKey)){
        throw new Error("Invalid state")
    }

    // Create an array of the states and get the index of the current state, so we can determine the next state
    let stateKeys = Object.keys(states)
    let stateIndex = stateKeys.indexOf(stateKey)

    // determine the next state
    let nextState = stateKeys[(stateIndex + 1) % stateKeys.length]

    while(nextState === "indeterminate"){
        stateIndex = stateKeys.indexOf(nextState)
        nextState = stateKeys[(stateIndex + 1) % stateKeys.length]
    }

    // Change the state of the button
    setStateOfButton($button, nextState, states)
    return nextState
}
export {generateMultiStateCheckbox, setStateOfButton}