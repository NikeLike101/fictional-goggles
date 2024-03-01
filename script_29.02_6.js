'use strict'


const arr = [2,3,7 ,1, 9, 5]
               
// const arrayLength = prompt('введите длину массива', 0)
// while(arr.length < arrayLength) {
//     const value = Number(prompt(`Введите число ${arr.length+1}`))
//     arr.push(value)
// }
'asdsad'.split


console.log(arr, arr[arr.length-1]);
// const arrItem = arr.pop()
// arr.length = arr.length -1
// const newArr = arr.toReversed()
// const newArr2 = arr.reverse()


// console.log(newArr,arr.indexOf(2), arr, arr[arr.length-1]);

// const sliceArr = arr.slice(arr.indexOf(7),arr.indexOf(5))
// const spliceArr = arr.splice(arr.indexOf(7),1)
// console.log(sliceArr, spliceArr, arr);

// let objArr = Math.random() > 0.5 ? [
//     {
//         id: 1,
//         name: 'serega' 
//     },
//     {
//         id: 3,
//         name: 'anton' 
//     },
//     {
//         id: 6,
//         name: 'valera' 
//     },
//     {
//         id: 1,
//         name: 'grisha' 
//     },
//     {
//         id: 9,
//         name: 'arkadiy' 
//     },
// ] : ()=>  {}

// console.log(objArr);
// const getArrayId = (item ) => [item.id]
// ((item) => [item.id])(objArr[1])
// // const shiftedArr = arr.shift()
// // arr.unshift(1, 31 ,12,2,2)
// const sortedArr = Array.isArray(objArr) ? objArr.toSorted((a,b) => {
//     return a.id === b.id ? a.name > b.name ? 1 : -1 : a.id > b.id ? 1 : -1 
// }) : []



// console.log(sortedArr, objArr, );


const newArr = Array.from({length: 5})
// [undefined,undefined,undefined,undefined,undefined]

console.log(newArr);
// for (let i = 0; i< newArr.length; i++) {
//     newArr[i] = i+1

// }

// for (let item of newArr) {
//     console.log(item);
// }


console.log(newArr);




const getSumOfArrayItems = (array) => {
    let sum = 0

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        sum+=element
    }

    return sum
}

console.log(getSumOfArrayItems(arr));


const users = [
    { name: 'Alex', age: 31},
    { name: 'Olga', age: 17},
    { name: 'Carl', age: 15},
    { name: 'Nancy', age: 28},
    { name: 'Eric', age: 9}
    ]

    const get18Below = (array) => {
        const newArray = []
        for (let item of array) {
            item.age < 18 && newArray.push(item.name)
            
        }
        return newArray
    }

    const stack = ['React', 'Vue', 'Angular']
// 1. Удалить последний элемент и показать в консоль
// 2. Добавить Svelte и Stimulus в начало массива
// 3. Развернуть массив, т.е. последний должен стать первым, а
// первый — последним
// 4. Добавить в конец Solid
// 5. Показать в консоль индекс Vue
// 6. Превратить массив в строку, где разделителем между каждым
// элементом будет / . Результат записать в переменную и
// проверить через консоль

console.log(get18Below(users));

console.log( stack.pop());
stack.unshift('Svelte', 'Stimulus')
stack.reverse()
stack.push('Solid')
console.log(stack.indexOf('Vue'));
const string = stack.join('/')
console.log(stack,string);

// ['V','u','e','R','e','a','c','t',]

