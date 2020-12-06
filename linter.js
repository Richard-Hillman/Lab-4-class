const Stack = require('./Stack');

const bracketsArray = [
    '{', '}',
    '[', ']', 
    '(', ')'
]

const pairBrackets = { 
    '{':'}',
    '[':']',
    '(':')',
    '}':'{',
    ']':'[',
    ')':'('
}

const openBrackets = [
    '{',
    '[',
    '('
]

const brackets = (item) => { 
    return item 
    .split('')
    .filter(item => bracketsArray.includes(item))
}

// --------------------------------------------------------
const bracketStack = new Stack();

const loopThrough = (array) => {
    let result = true; 

    array 
    .map(bracket => {
        const peek = bracketStack.peek();
        if (
            openBrackets.includes(bracket)) {
                bracketStack.push(bracket)
            } else {  
                if (pairBrackets[bracket] === peek){
                    bracketStack.pop()
                
                } else {
                    result = {
                        missing: pairBrackets[peek || bracket]
                    }
                }
            }
    })

    if (bracketStack.peek()){

        result = {
            missing: pairBrackets[bracketStack.peek()]
        }
        
    }
console.log(result)
    return result;
}

// -----------------------------------------------------------

const linter = (body) => {
    const bracketsArray = brackets(body)
 console.log(bracketsArray)
    const result = loopThrough(bracketsArray)

    if(result === true) {
        return {
            'success': true
        }
    } else return {
        'error': `missing ${result.missing}`
    }
}

module.exports = {
    linter
};

