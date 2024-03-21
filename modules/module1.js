
import constants from "./constants.js";
import { convertToObjectWithoutName, expandArray, expandObject, trimArray } from "./utils.js";

// console.log( import.meta);
    const makeCSS = () => {
    console.log(3);
}
export const createElement = () => {
    makeCSS()
   return `<div></div>`

}


const {OBJECT_STORAGE_KEY,SECRET_KEY,array} = constants

const arr = [1,2,34, 5]
const object = {name: 'oleg', age: 12, height: 100, isMale: true}
// const fr = arr[0] // 1
// fr // == 1 
// const sc = arr[1] // 2
// const th = arr[2] //34
// const fth = arr[3] //5
// const [a,b] = [b,a]
const [fr, sc, th, fth] = arr
const {name: objectsName, } = object
const newObject = convertToObjectWithoutName(object)




console.log(fr, sc, th, fth, objectsName);
console.log(
    String(constants.array.length)+ 
   constants.STORAGE_KEY +
   constants.OBJECT_STORAGE_KEY
   );

console.log(2);

const doJob = () => {
    console.log('im JOB');
}
// window.onclick = () => console.log(inidicator, inidicator === 1 ? 'hello' : 'bue', newObject, trimArray(arr), expandArray(arr), expandObject(newObject));

export default {
    doJob,
    createElement,
    makeCSS
}