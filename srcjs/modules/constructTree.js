

/* The ConstructTree class takes in a list of records and a list of levels, and builds a tree of nodes
where each node represents a level and each node's children represent the next level */
class ConstructTree {
    root
    constructor(data, levels, isJSON) {

        if (isJSON){
            this.treeFromJSON(data)
        } else {
            this.treeFromDataFrame(data, levels)
        }
    }

/**
 * > The function takes in a data set and a list of levels, and builds a tree with the data set
 * @param data - the data you want to build the tree from
 * @param levels - an array of strings that represent the levels of the tree.
 */
    treeFromDataFrame(data, levels) {
        let root = new Node("root")
        let nodes = { "root": root }

        data.forEach(record => {
            let currentNode = root
            levels.forEach(level => {
                let value = record[level]
                if (!(value in nodes)) {
                    let newNode = new Node(value)
                    currentNode.addChild(newNode)
                    nodes[value] = newNode
                }
                currentNode = nodes[value]
            })
        })
        this.root = root
    }


    treeFromJSON(data) {
        let root = new Node("root")
        // The tree is a json which is the following format: '[{"label":"Animal","value":"Animals","children":[{"label":"Mammal","value":"Mammals","children":[{"label":"Carnivores","value":"Carnivores","children":[{"label":"Lion","value":"Lion","children":[]},{"label":"Tiger","value":"Tiger","children":[]}]},{"label":"Herbivores","value":"Herbivores","children":[{"label":"Elephant","value":"Elephant","children":[{"label":"African Elephant","value":"African Elephant","children":[]},{"label":"Asian Elephant","value":"Asian Elephant","children":[]}]},{"label":"Giraffe","value":"Giraffe","children":[]}]}]},{"label":"Bird","value":"Birds","children":[{"label":"Predators","value":"Predators","children":[{"label":"Eagle","value":"Eagle","children":[]},{"label":"Hawk","value":"Hawk","children":[]}]},{"label":"Songbirds","value":"Songbirds","children":[{"label":"Robin","value":"Robin","children":[]},{"label":"Canary","value":"Canary","children":[]}]}]}]},{"label":"Plant","value":"Plants","children":[{"label":"Flower","value":"Flowers","children":[{"label":"Rose","value":"Rose","children":[]},{"label":"Sunflower","value":"Sunflower","children":[]}]},{"label":"Tree","value":"Trees","children":[{"label":"Oak","value":"Oak","children":[]},{"label":"Pine","value":"Pine","children":[]}]}]}]'
        // We want to convert this to a tree of nodes


        let itterateNodes = (node, parent) => {
            if (node.children.length > 0) {
                node.children.forEach(child => {
                    // We create a new node with the value of the child
                    let newNode = new Node(child.value)
                    // We add the new node as a child of the parent
                    parent.addChild(newNode)
                    // We continue itterating through the children of the child/
                    itterateNodes(child, newNode)
                })
            }
        }
        data.forEach(node => {
            let newNode = new Node(node.value)
            root.addChild(newNode)
            itterateNodes(node, newNode)
        })


        this.root = root
    }




    /**
 * Returns the max depth of the tree
 * @returns The depth of the tree
 */
    findMaxDepth(){
        let queue = []
        let depth = 0

        queue.push(this.root)

        while(queue.length > 0){
            let size = queue.length

            let current

            for (let i = 0; i < size ; i++){
                current = queue.shift()

                for (let child of current.children){
                    queue.push(child)
                }
            }
            depth ++
        }
        return depth - 1
    }

/**
 * > Given a tree and a list of values, find the node in the tree that matches the last value in the
 * list, and if it doesn't exist, create it
 * @param tree - the tree to search
 * @param values - an array of values to be added to the tree
 * @returns The tree with the new values added.
 */
    #findOrAppend(tree, values){
        for (let i = 0; i < values.length ; i++){
            let keyQueue = values.slice(0, i + 1)
            let value = values[i]
            let [nodeIn, _] = this.#recursiveSearch(tree, keyQueue)
            if (nodeIn.label !== value){
                let newNode = new Node(value)
                nodeIn.add_child(newNode)
            }
        }
        return(tree)
    }

/**
 * > The function takes a node and a list of values to find. It returns the node that matches the last
 * value in the list, and the list of values that were not found
 * @param node - the node that we are currently searching
 * @param find - an array of strings that represent the path to the node you want to find
 * @returns The node that is the last in the path, and the path that is left to be searched.
 */
    #recursiveSearch(node, find){
        let children = node.children
        for (const child of children) {
            let finding = find[0]
            if (finding === child.label){
                find.shift()
                if (find.length > 0){
                    return this.#recursiveSearch(child, find)
                } else {
                    return([child, find])
                }
            }
        }
        return [node, find]
    }
}


/* A node is a value, a list of children, and a parent */
class Node{
    constructor(label, children, parent, value=null) {
        if (!children){
            children = []
        }
        this.label = label
        this.value = value ? value : label
        this.children = children
        this.parent = parent
        this.depth = 0
    }

    /*
     * Add children to node, and register parent in child.
     */
    addChild(child){
        this.children.push(child)
        this.children.forEach(child => {
            child.addParent(this)
        })
    }

    addValue(value){
        this.value = value
    }

    addParent(parent){
        this.parent = parent
        this.depth = parent.depth + 1
    }

    get has_children(){
        return((this.children.length > 0))
    }

    get siblings(){
        return this.parent.children
    }

    findObjectByName(name){
        if (this.label === name){
            return this
        } else {
            for (const child of this.children){
                let match = child.findObjectByName(name)
                if (match){
                    return match
                }
            }
        }
    }
}


export {ConstructTree}
