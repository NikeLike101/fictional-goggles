


// 0          
// ''
// null
// undefined // --> false
// false
// NaN

let num = prompt('vozrast?')     
// // || -- Boolean(value) === true || default  --> value
// // || -- Boolean(value) === false || default  --> default
// let num2 = !!0 && prompt('vozrast 2 ?')
// // && -- Boolean(value) === true && default  --> default
// // && -- Boolean(value) === false && default  --> value
// let num3 = num2 ?? 'vosmerka'
// // ?? -- value !== undefined || value !== null ?? default  --> value
// // ?? -- value === undefined || value === null ?? default  --> default
// console.log(num, num2);
// if (num >= 50) {
     
//     console.log('vzros!');
// }
// if( num > 14 && num < 50) {
        
//     console.log('molodoy!');
// } 
// if (num <= 14) {
//     console.log('mal!');

// }

// if ((num !== '18' && num > 20) || 
//     ((num != 30 && num < 5 )   || num > 40 )) {
//     console.log('hello');

// }

// if (num >= 50) {
     
// console.log('vzros!');
// } else if( num > 14) {
    
//     console.log('molodoy!');

// } else{
//     console.log('mal!');
// }

switch (Number(num)) {
    case '2':
        console.log('hello'); 
    break 
    case 12:
        console.log('im 12!');
        break
    case 15:
        console.log('im 15!');
        break
    case 20:
        console.log('im 20!');
        break
    default:
        console.log(`im ${num} years!!!!`);
}

let isContinuing = true
let counterWhile = 0

// // while (counterWhile < num) {
// while (isContinuing) {
// // console.log(1, counterWhile);
// // counterWhile = counterWhile + 1
// // counterWhile += 1
// // counterWhile++

// if (!Number(prompt('1 - true , 0 - false', 0))) {
//     isContinuing = false
// }
 

// console.log(isContinuing, 'tick');


// // counterWhile = counterWhile - 1
// // counterWhile -= 110
// // counterWhile--

// // counterWhile = counterWhile * 1
// // counterWhile *= 1


// // counterWhile = counterWhile / 1
// // counterWhile /= 1



// }

// for

// for(let i = 20; i > 0;i--) {
//     if(i === 14) continue
//     console.log(i);    
// }

// do while

// let i = 0;
// do {
    
// console.log(i);



//     i++    
// } while (i < 20)


// 1 .. 20  % 2 = 0 || % 3 = 0
// let start = Number(prompt('введите от какого числа')) || 1
// let end = Number(prompt('введите до какого числа')) || 20
// console.log(start, end);
// for(let i = start; i <= end; i++) {
//     if (i % 2 == 0 && (i % 3  == 0 || i % 3  == 1)) { 
//         console.log('делиться на 2 и  3(с 1)',i);
//     } else if ((i >= (end-start)/2) && i**2 <100) {
//         console.log('больше половины и квадрат < 100', i);
//     } 
// }

// Три приятеля были свидетелями нарушения правил дорожного движения. 
// Номер автомобиля - четырехзначное число - никто не запомнил. Из их показаний 
// следует, что номер делиться на 2, на 7 и на 11, сумма цифр номера равна 30. 
// Составьте алгоритм и программу для определения номера автомашины.



for(let j = 0; j<100; j++) {
    let sum = 0;
    for (let i = 0; i < String(j).length; i++) {
        sum+=Number(String(j)[i]);
    }
    
    console.log(sum);
}


 
