

function add(x, y) {
    if (arguments.length !== 2) {
        throw new Error('Please provide exactly two arguments')
    }

    if ( !((typeof x === typeof y) && (typeof x === "string" || typeof x === "number" || Array.isArray(x)))) {
        throw new Error('Invalid argument types')
    }

    //  add condition to add two array
    if (Array.isArray(x)) {
        let z = [...x, ...y]
        return z
    }

    if (typeof x === 'string') {
        return x + " " + y
    }

    return x + y
}



export default add