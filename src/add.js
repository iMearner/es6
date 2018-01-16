function add(x, y) {
    if (arguments.length !== 2) {
        throw new Error('Please provide exactly two arguments')
    }

    if ( !((typeof x === typeof y) && (typeof x === "string" || typeof x === "number"))) {
        throw new Error('Invalid argument types')
    }

    if (typeof x === 'string' && typeof y === 'string' ) {
        return x + " " + y
    }

    return x + y
}

export default add