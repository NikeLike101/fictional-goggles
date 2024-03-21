// import { makeHTML } from "./module1.js";

import { createElement } from "./module1.js";



// const div = createElement()
// // makeCSS()
// console.log(1, div);


export const convertToObjectWithoutName = (object) => {
    const { name, ...objectWithoutName } = object
    return objectWithoutName
}
const megaArray = [[[[[1]]]]] // [1]

// someArray = [[[...n [1,35,6]]]] // [1,35,6]

export const trimArray = (array) => {
    const [,...trimmedArray] = array

    // trimmedArray
    // trimmedArray2
    return trimmedArray.slice(0, trimArray.length - 2)
}

export const expandArray = (array) => {
    
    const expandedArray = [15, ...array, 4,8,97];
    return expandedArray
}

export const expandObject = (object) => {
    const newObject = {...object, isBig: false}
    return newObject
}
trimArray(megaArray)

