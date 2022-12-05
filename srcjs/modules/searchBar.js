/**
 * Summary. This file contains the class definition for the SearchBar class.
 * Description. This file contains the class definition for the SearchBar class.
 * The SearchBar class is composed of a pre provided search bar.
 * @Author: SJ. Bouwman
 * @Date: 2022-12-02
 */

import xss from "xss";

class SearchBar {
    options = {
        threshold: 2,
        data: [],
        onSelectItem: null,
        maxItems: 5
    }

    constructor(element, options = {}) {
        this.processOptions(options);
        this.searchBar = this.AttachSearchBar(element);
        this.dropdown = this.createDropdown();
    }

    hideDropdown() {
        $(this.dropdown).hide()
    }

    showDropdown() {
        $(this.dropdown).show()
    }

    addChoice($dropdown, label, value) {
        let $button = $("<button>", {"class": "dropdown-item", "type": "button"}).text(label)
        $button.attr("data-value", value)
        $button.on("click", () => {
            this.options.onSelectItem($button.text(), value)
        })
        $dropdown.append($("<li>").append($button).hide());
        return $button
    }

    processOptions(options) {
        // Check if options is an object
        if (typeof options !== 'object') {
            throw new Error('Options must be an object');
        }

        // Replace default options with user options, but only if the user options is defined in the default options
        for (let key in options) {
            if (this.options.hasOwnProperty(key)) {
                this.options[key] = options[key];
            }
        }
    }

    AttachSearchBar(element) {
        let $searchBar
        if (element.length === 0) {
            throw new Error('No element found');
        }
        // Check if element is a DOM element
        if (element instanceof Element) {
            $searchBar = $(element);
        }
        // If element is a jquery object get the DOM element
        if (element instanceof jQuery) {
            $searchBar = element;
        }

        // If the searchbar receives text do a search
        $searchBar.on("input", () => {
            let text = xss($searchBar.val());
            // Sanitize the text to prevent XSS

            if (text.length > 0) {
                if (this.options.threshold <= text.length) {
                    this.search(text);
                } else {
                    this.hideDropdown()
                }
            }
        })

        $searchBar.on("click", () => {
            if ($(this.dropdown).is(":visible") && $(this.dropdown).find("li:visible").length === 0) {
                this.hideDropdown()
            }
        })
        return $searchBar[0]
    }

    createDropdown() {
        let $dropdownContainer = $("<div>", {"class": "dropdown w-100"})
        this.dropdownContainer = $dropdownContainer[0]
        this.searchBar.setAttribute("data-bs-toggle", "dropdown");
        this.searchBar.setAttribute("aria-expanded", "false");
        let $dropdownMenu = $("<ul>", {"class": "dropdown-menu w-100", "aria-labelledby": "dropdownMenuButton"})
        let $searchBar = $(this.searchBar)

        $searchBar.before($dropdownContainer)

        $searchBar.detach()

        $dropdownContainer.append($searchBar)
        $dropdownContainer.append($dropdownMenu)

        // for each choice add a button to the dropdown
        this.options.data.map((choice) => {
            this.addChoice($dropdownMenu, choice.label, choice.value)
        })
        return $dropdownMenu[0]
    }


    search(text) {
        let $dropdownItems = $(this.dropdown).find("li");
        let $dropdown = $(this.dropdown)
        let dropdownVisible = false
        let shownItems = 0
        $dropdownItems.each((index, item) => {
            let $item = $(item)
            let $button = $item.find("button")
            let label = $button.text().toLowerCase()
            if (label.includes(text.toLowerCase())) {
                shownItems++
                if (shownItems <= this.options.maxItems) {
                    $item.show()
                    this.colorText(text, $button)
                    dropdownVisible = true
                }
            } else {
                $item.hide()
            }
        })
        if (dropdownVisible) {
            if (!$dropdown.is(":visible")) {
                this.showDropdown()
            }
        } else {
            this.hideDropdown()
        }

    }

    /**
     * Color the text in the button that matches the search text
     * @param text
     * @param button
     */
    colorText(text, button) {
        // Get the value of the button
        let label = xss(button.data("value"))

        // Match all the text that matches the search text
        let regex = new RegExp(text, "gi")

        // Get the indexes of the matches
        let matches = label.matchAll(regex)
        let indexes = []
        for (const match of matches) {
            indexes.push(match.index)
        }

        let newLabel = ""
        let lastIndex = 0
        for (let i = 0; i < indexes.length; i++) {
            let index = indexes[i]
            newLabel += label.substring(lastIndex, index)
            newLabel += `<span class="text-primary">${label.substring(index, index + text.length)}</span>`
            lastIndex = index + text.length
        }
        newLabel += label.substring(lastIndex)
        button.html(newLabel)
    }
}

export default SearchBar