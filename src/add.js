function add(x, y) {
    if (arguments.length !== 2) {
        throw new Error('Please provide exactly two arguments')
    }

    if ( !((typeof x === typeof y) && (typeof x === "string" || typeof x === "number" || typeof x === "object"))) {
        throw new Error('Invalid argument types')
    }

    //  add condition to add two array
    if (typeof x === "object" && typeof y === "object" ) {
        console.log("inside ")
        x.push.apply(x,y)
        return x
    }

    if (typeof x === 'string' && typeof y === 'string' ) {
        return x + " " + y
    }

    return x + y
}



export default add