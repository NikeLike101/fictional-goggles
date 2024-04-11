




const obj = {
    name: 'oleg',
    surname: 'ovs',
    age: 32,
    say: function () {
        console.log(`hello, im ${this.name}`);
    },
    get fullName () {
        return `${this.name} ${this.surname}`
    } ,
    set fullName(value) {
        const [newName, newSurname] = value.split(' ')
        this.name = newName
        this.surname = newSurname
    }

}


const newObj = {
    count: 4,
    // name: 13,
    __proto__: obj
}

const newNewObj = {
    arms: 2,
    __proto__: newObj,
    
}

// console.log(obj, newObj,);
newNewObj.arms = 4
newNewObj.fullName = 'zxc cxz'
// console.log( newNewObj.fullName);


obj.say()

Object.prototype.getFirstKey = function (someObject) {
 
    return someObject ? Object.keys(someObject)[0] : Object.keys(this)[0]
}


// console.log(Object.getFirstKey(newNewObj), newNewObj.getFirstKey());

Array.prototype.getLastElement = function () {
    return this[this.length-1]
} 

const hello = [1,2,2,2,4,4,112,12930123]
// console.log( hello.getLastElement());




const fc = class FirstClass {
     #arms = 2
    static legs= 2

    constructor(initString) {  // name|surname|age
        const [name, surname, age] = initString.split('|')
        this.name = name
        this.surname = surname
        this.age = age
    }

    sayHello ()  {
        return `${this.name}, hello`
    }

    static getTime () {
        return Date.now()
    }




    static getLogs() {
        
        console.log('print b');
        return this.getTime()
    }

}




const myFirst = new fc('seva|rozhkov|12')
// console.log(myFirst.sayHello(), new fc('asds|dadas|1').sayHello());
console.log(fc.getLogs());

class SecondClass extends fc {
    constructor (initString) {
        super(initString)  //  this =   {...this of FirstClass, ...this}
    }
// this // 

    say (newString) {
        
        return this.sayHello() + newString
    }
}


const mySecond = new SecondClass('qwe|eqw|12')


console.log( mySecond,SecondClass.getLogs(), mySecond.sayHello());

// Дан объект user вида:
// const user = {
// name: 'Viktor',
// _role: 'editor'
// }
// Добавить в объект сеттер и геттер role для свойства _role :
// 1. Геттер role должен возвращать текущее значение _role
// 2. Сеттер role устанавливает значение для _role , но доступные
// значения только reader, editor, admin. В случае, если
// устанавливается иное значение, то показываем ошибку.