
// function func (obj) {


//     return 'zxc'
// } 

// const funcArrow = (obj) => ({field: obj.prop})
// const funcArrow2 = (obj) => {
//     return { filed: obj.prop}
// }

// console.log(func({ prop: 12}).concat('ewq'))
const names = [
    'grisha',
    'tolik',
    'gleb',
    'oleg',
    'tamara',
    'anton',
    'anatoliy',
    'slava',
    'qdfrt'
]

// const funcArr = arr => {
//     console.log(arr);
// }

// funcArr(names)
// const 

// const newArr = generateArrayWithNames(20)

let array = Array.from({ length: 100 })
    .map((item) => {

        return { name: names[Math.trunc(Math.random() * names.length)] }
    })
    .map(item => item.name === 'anton' ?
        { name: item.name, isAnton: true }
        :
        item
    )


    // const getAllWithoutLetterA = (arr)=> {
    //    const newArray = []
    //     for (item of arr) {
    //         if (!item?.name.includes('a')){
    //             newArray.push(item)
    //         }
    //     }

    //     console.log(newArray);
    //    'asdasqwe'.includes('a') 
    // console.log(arr.filter((item) => {
    //     return !item.name.includes('a')
    // }));
    //  console.log(arr.filter(item => !item.name.includes('a')))
    // }


    // getAllWithoutLetterA(array)

    // const getAllTamaras = (arr) => {
    //     return arr.filter(item => item.name)
    // }

    // console.log(getAllTamaras(array));

// {"name": "anton","isAnton": true}

// {"name": "anton","isAnton": true}
// {"name": "zack"}

// const funcSetArray = (newArr) => {
//     array = structuredClone(newArr)
// }


// funcSetArray(array.map(item => ({name: true, bool: false})))


// array.forEach((item) => { XXXXX 
//     console.log(item);
//     item.name = 'zack'
// })


// array



// undef => {name: names[?]}
// for(let i=0; i< array.length; i++) {
//     array[i]={name: names[Math.trunc(Math.random()*names.length) ]}
// }

// const countSlava = array.reduce((count, item) => {
//     if(item.name === 'slava') return count+1
//     return count
// }, 0)

// const longestNameFromArray = array.reduce((longest, item) => {
//     if(item.name.length > longest.length) return item.name
//     return longest
// }, array[0].name)

// const onlyAntons = array.reduce((arr, item) => {
//     const newArr =structuredClone(arr)
//     if(item.name==='anton') {
//         newArr.push(item)
//         return newArr
//     }
//     return arr
// }, [])


// console.log(countSlava, longestNameFromArray, onlyAntons);

// console.log(array);





// const peopleOfHouse = Array.from({ length: 1000 })
// .map((item) => {

//     return { name: names[Math.trunc(Math.random() * names.length)]  }
// })
// .map(item => Math.random() > 0.5 ? ({name: item.name, isDept: true, dept: getDept()}) : item);



// const deptAmount = peopleOfHouse.reduce((dept, item) => item.isDept ? dept+item.dept : dept, 0)


// console.log(peopleOfHouse, peopleOfHouse.map(item => {
   
//     return {name: item.name}
// }), deptAmount);



// (function () {
//     console.log('hello');
// })()

function showDeptOfPerson (...params) {
    console.log(params, '111111');
    params[0]
    params[1]
    console.log(this);
    console.log(this.name, this.dept);
}


function Person(name) {
    const getDept = () => Math.trunc(Math.random() * 10) + 1
    this.name = name
    if(Math.random() > 0.5){ 
        this.isDept = true
        this.dept  = getDept()
    } 

    this.showDept = showDeptOfPerson

}

const peopleOfHouseFromPerson = Array.from({ length: 10 })
.map(() => new Person(names[Math.trunc(Math.random() * names.length)]))
console.log(peopleOfHouseFromPerson)

// peopleOfHouseFromPerson[0].showDept()



// showDeptOfPerson.call({name: 'hello', dept: 12414, heloo: true}, true, 'hello', 1111111111, 12,3, 1,23 ,123,1, 2,3, 12,)
// // showDeptOfPerson.call(peopleOfHouseFromPerson[0])
// // showDeptOfPerson()

// showDeptOfPerson.apply(peopleOfHouseFromPerson[0], [true, 'hello', 1111111111])
// showDeptOfPerson()
// peopleOfHouseFromPerson[1].showDept = () => {
//     console.log('hello')
// }


// peopleOfHouseFromPerson[1].showDept = peopleOfHouseFromPerson[0].showDept


// const newFunc = peopleOfHouseFromPerson[0].showDept


// newFunc()
// peopleOfHouseFromPerson[1].showDept()
peopleOfHouseFromPerson[0].showDept = peopleOfHouseFromPerson[0].showDept.bind(peopleOfHouseFromPerson[1], 'hello', true)
peopleOfHouseFromPerson[0].showDept()
peopleOfHouseFromPerson[1].showDept()
