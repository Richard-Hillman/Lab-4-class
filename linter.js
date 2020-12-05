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
                    console.log(result.missing, 'result after');
            }
        }
    })
    return result;
}

// -----------------------------------------------------------

const linter = (body) => {
    const bracketsArray = brackets(body)
 
    const result = loopThrough(bracketsArray)

    if(result === true && bracketStack.peek()) {
        return {
            'success': true
        }
    } else return {
        'error': `missing ${result.missing}`
    }
}

const testLinter = linter('funky ( add(return a + b;')
console.log(testLinter, ' of ttestttttttttttttt');

module.exports = {
    linter
};

