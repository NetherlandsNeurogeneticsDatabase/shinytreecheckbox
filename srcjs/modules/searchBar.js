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
        searchThreshold: 1,
        data: [],
        onSelectItem: null,
        maxItems: 100,
        searchAlgorithm: "jSearch"
    }
    searchAlgorithm

    constructor(element, options = {}) {
        this.processOptions(options);
        // this.searchTrie = new Trie()
        this.searchBar = this.AttachSearchBar(element);
        this.dropdown = this.createDropdown();
        this.attachLogic()
        this.setSearchAlgorithm(this.options.searchAlgorithm)
    }

    setSearchAlgorithm(algorithm) {
        let allowed = ["jSearch", "trie"]
        if (!allowed.includes(algorithm)) {
            throw new Error("Invalid search algorithm")
        }
        if (algorithm === "jSearch") {
            this.search = this.jSearch
        } else if (algorithm === "trie") {
            this.search = this.searchTrie

        }
    }

    attachLogic() {
        let $searchBar = $(this.searchBar)
        let $dropdown = $(this.dropdown)

        // If the searchbar receives text do a search
        $searchBar.on("input", () => {
            // Sanitize the text to prevent XSS
            let text = xss($searchBar.val());

            // Remove all previous items
            $dropdown.empty("li")


            // We only want to process the text if the threshold is reached
            let nSearchResults = 0
            if (text.length >= this.options.searchThreshold) {
                // Measure the time it takes to search
                let searchResults = this.jSearch(text)
                this.process(searchResults, text)
                nSearchResults = searchResults.length
            }

            // If there are search results we want to show the dropdown
            if (nSearchResults > 0) {
                this.showDropdown()
            } else {
                this.hideDropdown()
            }
        })

        $searchBar.on("click", () => {
            if ($(this.dropdown).is(":visible") && $(this.dropdown).find("li:visible").length === 0) {
                this.hideDropdown()
            }
        })
    }

    hideDropdown() {
        $(this.dropdown).hide()
    }

    showDropdown() {
        $(this.dropdown).show()
    }

    createButton(label, value) {
        let $button = $("<button>", {"class": "dropdown-item", "type": "button"}).text(label)
        $button.attr("data-value", value)
        $button.on("click", () => {
            this.options.onSelectItem($button.text(), value)
        })

        return $button
    }

    attachItem($dropdown, label, value){
        let $button = this.createButton(label, value)
        let $li = $("<li>")
        $li.append($button)
        $dropdown.append($li)
        return $li[0]
    }

    addChoice($dropdown, label, value) {
        // We split into terms and also add the full label to the trie to allow both
        // searching on individual words and full labels
        let data = {"label": label, "value": value}
        let terms = label.split(" ")
        terms.forEach((term) => {
            this.searchTrie.insert(term, data)
        })
        this.searchTrie.insert(label, data)
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
        return $searchBar[0]
    }

    jSearch(text) {
        text = text.toLowerCase()
        return this.options.data.filter((item) => {
            return item.label.toLowerCase().includes(text)
        })
    }
    createDropdown() {
        let $dropdownContainer = $("<div>", {"class": "dropdown w-100"})
        this.searchBar.setAttribute("data-bs-toggle", "dropdown");
        this.searchBar.setAttribute("aria-expanded", "false");
        let $dropdownMenu = $("<ul>", {
            "class": "dropdown-menu w-100",
            "aria-labelledby": "dropdownMenuButton",
            "role": "menu"
        })
        $dropdownMenu.css("max-height", "300px").css("overflow-y", "auto")

        let $searchBar = $(this.searchBar)

        $searchBar.before($dropdownContainer)

        $searchBar.detach()

        $dropdownContainer.append($searchBar)
        $dropdownContainer.append($dropdownMenu)

        // for each choice add a button to the dropdown



        return $dropdownMenu[0]
    }

    searchTrie(text) {
        let $filteredItems = this.searchTrie.search(text).flat()

        // Remove duplicate objects and return the unique ones.
        return [...new Set($filteredItems.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))

    }


    process(filteredItems, text) {
        let $filteredItems = $(filteredItems)
        let $dropdown = $(this.dropdown)
        let shownItems = 0

        $filteredItems.each((index, item) => {
            shownItems++
            if (shownItems <= this.options.maxItems) {
                let itemElement = this.attachItem($dropdown, item.label, item.value)
                this.colorText(text, $(itemElement).find("button"))
            }
        })
    }

    /**
     * Color the text in the button that matches the search text
     * @param substring
     * @param $button
     */
    colorText(substring, $button) {
        let regex = new RegExp(substring, "gi")

        // Get the value of the button
        let buttonText = xss($button.text())

        // Replace all matches with the <span> element
        let newLabel = buttonText.replace(regex, `<span class="text-primary">$&</span>`)

        // Update the button's text
        $button.html(newLabel)
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

    insert(word, result) {
        word = word.toLowerCase();
        if (word in this.resultMap) {
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

    search(word) {
        word = word.toLowerCase()
        let res = [];
        let node = this.root;
        for (let ch of word) {
            if (node.children.has(ch))
                node = node.children.get(ch);
            else
                return res;
        }
        this.autocomplete(node, res, word.substring(0, word.length - 1));
        return res.map(re => this.resultMap[re]);
    }

    autocomplete(node, res, prefix) {
        if (node.isEnd)
            res.push(prefix + node.data);
        for (let c of node.children.keys())
            this.autocomplete(node.children.get(c), res, prefix + node.data);
    }
}

export default SearchBar
