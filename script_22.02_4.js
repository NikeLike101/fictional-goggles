//  (() => {

// let number = '10.33515156'
// const num = prompt('Введите число')

// printHello(200)
// console.log(this);
// function printHello(
//     numberFromPrompt,
//     printWithPow,
//     signsLimit,
//     messageForPrint
// ) {

//     // console.log(this);
//     let num2 = 2111
//     console.log(number, num2, 'number');

//     if (Number(numberFromPrompt) !== NaN &&
//         Number(numberFromPrompt) > 5) {





//         console.log(
//             Number(numberFromPrompt).toFixed(signsLimit || 2),
//             printWithPow ?
//                 Math.pow(numberFromPrompt, printWithPow)
//                 : null,
//             messageForPrint || 'hello');

//         if (printWithPow) {
//             return printWithPow ?
//                 Math.pow(numberFromPrompt, printWithPow) : null

//         }


//         return function(someValue) {
//             console.log(numberFromPrompt, someValue, 'patr');
//         }

//         console.log('hello from end');
//     }

//     const someFunc = () => {

//         var num3 = 31231

//         console.log(num3);
//     }


//     someFunc()

// }


// someFunc()

// function printHelloTwice(numberFromPrompt) {
//     const withoutPower = printHello(numberFromPrompt)(20)
//     const power = printHello(numberFromPrompt, 3)
//     console.log(withoutPower, 'withoutPower');
//     console.log(power, 'power');
//     if (power < 1200) {
//         console.log('power lower');
//     }
// }
// const func = function () {}
// const func = (numbr) => {
//     console.log(numbr, 'qweee');
// }

// printHelloTwice(number)
// printHello(number, 3, undefined, 'sadff')
// printHello(num)

// func(1222)

// console.log(this);
// })()


// 1,1,2,3,5,8,13 ...

// const func = (string) => {
//     console.log(string, string.length);
//     if(string.length >= 20) {
//         return string
//     }
//     return func(string+'s')
// }


// const sum = (num1, num2) => {return num1 + num2}


// const return

const calc = () => {
    const getData = () => {
        let number1 = Number(prompt('Значение 1'))
    let number2 = Number(prompt('Значение 2'))
    let operation = prompt('Операция')

    if (number1 === NaN || number2 === NaN) {
        console.log('Значения не являются числами');
        return
    }
    if (operation !== '+' && operation !== '-') {
        console.log('Операция выбрана неправильно');
        return
    }

    return [number1, number2, operation]
    }
    const sum = (num1, num2) => num1 + num2
    const red = (num1, num2) => num1 - num2
    const mul = (num1, num2) => num1 * num2
    
    const calcEngine = (num1, num2, operationFunc) => {
        const value = operationFunc(num1, num2)
        if (value === NaN) {
            console.log('Результат не число');
            return
        }
        if(value < 0) {
            if(confirm('Результат меньше нуля, получить модуль?')) {
                return Math.abs(value)
            }
        } 
       return  value
    }

    const data  = getData()

    switch (data[2]) {
        case '+':
            return calcEngine(data[0], data[1], sum)
        case '-':
            return calcEngine(data[0], data[1], red)
        case '*':
            return calcEngine(data[0], data[1], mul)
    }


}

// const value = calc()
const sum = (num1, num2) => num1 + num2
const red = (num1, num2) => num1 - num2
const mul = (num1, num2) => num1 * num2
const join = (num1, num2) => Number(`${num1}${num2}`)


// console.log(value, 'value');
const calc2 = (func) => {
    const getData = () => {
        let number1 = Number(prompt('Значение 1'))
    let number2 = Number(prompt('Значение 2'))

    if (number1 === NaN || number2 === NaN) {
        console.log('Значения не являются числами');
        return
    }


    return [number1, number2]
    }

    
    const calcEngine = (isAbs) => {
        const value = func(data[0], data[1])
        if (value === NaN) {
            console.log('Результат не число');
            return
        }
        if(isAbs) {
            // if(confirm('Результат меньше нуля, получить модуль?')) {
                return Math.abs(value)
            // }
        } 
       return  value
    }

    const data  = getData()

    return calcEngine


}


// const value2 = calc2(red)(true) // === value2(true)
// console.log(value2);
// let string = 'qwerty'
// // шалаш = шалаш привет = тевирп
// const isStringPalinrome = (str) => 
//     str === str.split('').reverse().join('')

// const final = isStringPalinrome('alalala')
// console.log(final, isStringPalinrome('alalala'))

// 4! = 1* 2 * 3 * 4 ,, 5! = 1* 2* 3* 4* 5

const