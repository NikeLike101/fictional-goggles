// 'use strict'


const obj2 = {
        x: 1, 

    func() {
        this.x++
        console.log(this.x )
    }
}

obj2.func()
obj2.func()
obj2.func()
obj2.func()
const obj3 = obj2
obj3.func()
obj2.func()

console.log('sdasdasd');
function getName (obj) {
    // window.alert('hello0')
    // this.alert('hello')
    if(obj.hleb && obj.moloko ) {
        console.log('is true!');
    } else {
        console.log('is false!');
    }
    
    console.log('hello this', this.obj.func());
    
}

// getName()
let zxc = {}
console.log(typeof zxc);
let obj = new Object()
console.log(typeof obj);
const cart = {
    morkovka: true,
    moloko: false,
    hleb: true,
    obj: {
                heloo: "hello",
                func: function () {
                    console.log( this, 'hello from x2 this');
                }
    },
    'hem  привет': true,
    func:  getName,
    alert: (string) => {console.log(string);},
    checkMolokoAndHlebIsTrue: function () {
          
    if(this.hleb && this.moloko ) {
        console.log('is true!');
    } else {
        console.log('is false!');
    }
    }
}


cart.morkovka = 'false'
cart.obj.hello ='bye'
cart.moloko = true
cart.phane='+3022123124'

cart.checkMolokoAndHlebIsTrue()
// let string = prompt('введите названия поля, которое станет true')
// cart[string] = true

console.log('cart1', cart, 
//     cart.obj.heloo, cart.func(),
//  Object.keys(cart), Object.values(cart)
 );

for (let field in cart) {
    // console.log(Object.values(cart)[field]);
    // console.log(`${field}: ${cart[field]}`);
}

const cart2 = Object.assign( {}, cart)
cart2.hleb = 'help'
// console.log('cart2', cart2, cart);
cart2.moloko = false
cart2.checkMolokoAndHlebIsTrue()
const cart3 = cart2
cart3.hleb = 'privet'
// console.log(cart, cart2, cart3);



const user = {
    name: 'User',
    age: 43,
    phone: '+3721012',
    email: 'user@dom.tv',
    password: '12345678',
    field: 'qwewq'
}
user.password = '87654321'
user.city = 'Minsk'
delete user.phone
console.log(user);

const deleteFieldFromObject = (obj, field) => {
    console.log(this);
    if(field === undefined || obj === undefined ) {
        alert('не хватает параметров')
        return false
    } 
    if(typeof obj !== 'object') {
        alert('передан не объект')
        return
    } 
    // if (!(key  in obj)) 
    // let isFound = false
    for (key  in obj) {
        if (field === key) {
            delete obj[key]
            // isFound = true
            return true
        }        
    }
    // !isFound &&
     alert('поле не найдено') 
     
    return false
}
// deleteFieldFromObject(user, 'age')
// const isSuccess = deleteFieldFromObject(user)
// deleteFieldFromObject(1, 'city')
// deleteFieldFromObject() // false 
// deleteFieldFromObject(cart, 'hleb')

// cart.func = deleteFieldFromObject

console.log(user, cart);
// window.qwer = deleteFieldFromObject
// window.qwer(user, 'age')
// cart.func(user, 'city')


const showInConsoleAllFieldsWithValues = (obj) => {
    for( key in obj) {
        console.log(`ключ: ${key}, значение: ${obj[key]} `);
    }
}
// showInConsoleAllFieldsWithValues(user)
let newObj= {}
// for (key in user) {
//     newObj[key] = user[key]
// }
Object.assign(newObj, user)
newObj.age = 12

// console.log(user, newObj, 'new Obj');


const character = {
    user,
    name: 'sergey',
    x: 0,
    y: 0,
    z: {
// // pos: 1
    },
    toLeft(){
        this.x -= 1
        return this
    },
    toRight(){
        this.x +=1
        return this
    },
    toTop(){
        this.y += 1
        return this
    },
    toBottom(){
        this.y -=1
        
        return this
    },
    getCords(){
        console.log(`(${this.x},${this.y})`);
        
        return this
    }
}
// character.toTop().toTop().toLeft()
// .toRight()
// .toBottom().toRight().getCords()
if('z' in character) { 
    console.log('2d');
}
 console.log( 'eeeeeeeeee')

// toLeft  x -1 
// toRight x + 1
// toTop y -1
// toBottom y + 1
// getCords log(x, y)


const storage = {
    array: [{name: 'toy', weight: 100},{name: 'doll', weight: 400}],
    key: 'privet',
    getRandomFromStorage(clientKey) {
        if(this.key === clientKey) {
            const index = Math.trunc(Math.random() * this.array.length)
            return this.array[index]
        } else {
            this.array = undefined
        }
    }
}
// 43.3 23.8 11.5
// Math.trunc // 43 23 11
// Math.ceil // 44 24 12
// Math.round // 43 24 12


const getToyWeight  = (secretKey) => {
   const toy =  storage.getRandomFromStorage(secretKey)
   console.log(toy, 'toy'); 
   toy

    console.log(storage);
    return toy?.weight
}

console.log(getToyWeight('privet'));
// console.log(getToyWeight('prive'));
