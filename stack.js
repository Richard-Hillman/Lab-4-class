class Stack {
    #stack;

    constructor() {
        this.#stack = [];
    }

// -----------------------------------------------

    // put item 
    push(item) {
        this.#stack.push[item]
    }

// ----------------------------------------------- 

    // look at item 
    // access the stack and use the index
    peek() {
        this.#stack[this.stack.length-1]
    }

// -----------------------------------------------

    // take top item, return item
    pop() {
        this.#stack.pop()
    }

}

module.exports = Stack;