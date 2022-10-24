

class ConstructTree {
    root
    constructor(data, levels) {
        this.buildTree(data, levels)
    }


    buildTree(data, levels){
        let root = new Node("root")
        let newData
        console.log(data, levels)

        data.forEach(record => {
            newData = []
            levels.forEach(level => {
                newData.push(record[level])
            })
            this.#findOrAppend(root, newData)
        })
        this.root = root
    }

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

    #findOrAppend(tree, values){
        for (let i = 0; i < values.length ; i++){
            let keyQueue = values.slice(0, i + 1)
            let value = values[i]
            let [nodeIn, _] = this.#recursiveSearch(tree, keyQueue)
            if (nodeIn.value !== value){
                let newNode = new Node(value)
                nodeIn.add_child(newNode)
            }
        }
        return(tree)
    }

    #recursiveSearch(node, find){
        let children = node.children
        for (const child of children) {
            let finding = find[0]
            if (finding === child.value){
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
class Node{
    constructor(value, children, parent) {
        if (!children){
            children = []
        }
        this.value = value
        this.children = children
        this.parent = parent
        this.depth = 0
    }

    /*
     * Add children to node, and register parent in child.
     */
    add_child(child){
        this.children.push(child)
        this.children.forEach(child => {
            child.addParent(this)
        })
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
        if (this.value === name){
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