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
        maxItems: 5,
        searchAlgorithm: "trie"
    }

    constructor(element, options = {}) {
        this.processOptions(options);
        this.searchTrie = new Trie()
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
        let $li = $("<li>")
        $dropdown.append($li.append($button).hide());

        // Add to trie
        this.searchTrie.insert(label, $li[0])
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

        let allowed = ["trie", "filter"]
        if (!allowed.includes(this.options.searchAlgorithm)) {
            throw new Error(`Search algorithm must be one of ${allowed.join(", ")}. Provided: ${this.options.searchAlgorithm}`)
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
                    let searchResults = this.search(text)
                    this.process($(searchResults), text)
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

    search(text){
        //TODO implement smarter algorithm selection
        if (this.options.searchAlgorithm === "trie") {
            return this.trieSearch(text)
        } else if (this.options.searchAlgorithm === "filter") {
            return this.filterSearch(text)
        }
        else {
            throw new Error("Invalid search algorithm")
        }

    }

    trieSearch(text){
        return this.searchTrie.search(text).flat()
    }

    process($filteredItems, text){
        let $dropdown = $(this.dropdown)
        let dropdownVisible = false
        let shownItems = 0

        // Iterate over the filtered collection using the .each() method
        $filteredItems.each((index, item) => {
            shownItems++
            if (shownItems <= this.options.maxItems) {
                $(item).show()
                this.colorText(text, $(item).find("button"))
                dropdownVisible = true
            } else {
                $(item).hide()
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

    filterSearch(text) {
        // Filter that checks if the text is in the label. Generally (much) slower than the trie search but
        // allows to search throughout the whole label and not just the start of the label.
        return [...this.dropdown.querySelectorAll("li")].filter((item, index) => {
            let button = item.querySelector("button");
            let label = button.textContent.toLowerCase();
            return label.indexOf(text.toLowerCase()) !== -1;
        })


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

class TrieNode {

    constructor(character) {
        this.data = character;
        this.isEnd = false;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
        this.resultMap = {}
    }

    insert (word, result) {
        word = word.toLowerCase();
        if (word in this.resultMap){
            this.resultMap[word].push(result)
        } else {
            this.resultMap[word] = [result]
        }
        let node = this.root;
        for (let character of word) {
            if (!node.children.has(character))
                node.children.set(character, new TrieNode(character));
            node = node.children.get(character);
        }
        node.isEnd = true;
    }

    search (word) {
        word = word.toLowerCase()
        let res = [];
        let node = this.root;
        for (let ch of word) {
            if (node.children.has(ch))
                node = node.children.get(ch);
            else
                return res;
        }
        this.autocomplete(node, res, word.substring(0, word.length-1));
        return res.map(re => this.resultMap[re]);
    }

    autocomplete (node, res, prefix)  {
        if (node.isEnd)
            res.push(prefix + node.data);
        for (let c of node.children.keys())
            this.autocomplete(node.children.get(c), res, prefix + node.data);
    }
}

export default SearchBar