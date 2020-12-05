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

const loopThrough = (array) => {
    const bracketStack = new Stack();
    let result = true; 

    array 
    .map(bracket => {
        const peek = bracketStack.peek;
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
}

const linter = (body) => {
    const bracketArr = brackets(body)
    console.log(bracketArr);
    const result = loopThrough(bracketArr)
    if(result === true) {
        return {
            'success': true
        }
    } else return {
        'error': missing `${result.missing}`
    }
}

const testLinter = linter('function add(a, b) {]return a + b;}')
console.log(testLinter);

module.exports = {
    linter
};