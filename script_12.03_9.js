// console.log(document.body);
const body = document.body

const element = body.querySelector('.giga-class#super-id3')

const elementSuper2 = body.querySelector('.giga-class#super-id2')
const allGigaClassesElement = body.querySelectorAll('.giga-class')
console.log(allGigaClassesElement);
// body.getElementsByTagName('div')
// body.getElementsByClassName('giga-class')
// document.getElementById('super-id2')
// console.log(element, element.innerHTML);
// elementSuper2.innerHTML = element.innerHTML
// element.innerHTML = '<a href="https://google.com">Privet</a>'
// element.setAttribute('id', 'super-id88')
// element.setAttribute('style', `
// position: absolute;
//     border-radius: 50%;
//     background: #000;
// `)
// console.log(element.getAttribute('id'));

// console.log(elementSuper2.children[0].children);
// console.log(elementSuper2.parentElement.parentElement.children[0].parentElement);
// console.log(elementSuper2.nextElementSibling);
// console.log(elementSuper2.firstElementChild);


const container = body.querySelector('.painting')
// console.log(container);

// const newElement = document.createElement('span')
// newElement.classList.add('container')

// newElement.classList.toggle('container')
// newElement.classList.toggle('active')
// newElement.innerHTML='BIG HELLO'
// // console.log(newElement);
// container.append(newElement)
// // before, after, append, prepend

// container.innerHTML =  container.innerHTML + '<span class="container">Big Hello x2</span>';
// // innerHTML, outerHTML

// // container.prepend(newElement.cloneNode(true))


//  window.location.href = window.location.href.slice(0,16)+'catalog.html'
// window.location.href='http://localhost:5500/catalog.html'
// console.log(
// window.location.href


// );

// const obj = {
//     name: 'big',

//     func: function () {
//         console.log(this); //obj  // {name: 'big', func: void}
//     }
// }
// Object.keys(obj)

// String(1234) //1234


// function Man(name, age) {
//     this.name = name
//     this.age = age
//     this.reversedAge = age ? Number(String(this.age).split('').reverse().join('')) : 'hello'



    
//     return this
// }

// const newArr = [1,2,3,4,5].reduce((acc, item) => {
//     const newArray = structuredClone(acc)    
//     newArray.push(item)
//     return newArray
// }, [])
// console.log(newArr);

// const person  = new Man('oleg',43)
// console.log(this, person, person.reversedAge, Man().rereversedAge);
 //window




// PRACTICE

// 1. Найти и записать в переменную заголовок h1 .
// 2. Найти и записать в переменную блок с классом button .
// 3. Найти и записать в переменную div с идентификатором hello2 .
// 4. Найти и записать в переменную коллекцию div c классами giga-class

const title = body.querySelector('h1')
const button = body.querySelector('.button')
const helloDiv = document.getElementById('hello2')
// body.querySelector('#hello2')
const gigaClasses = body.getElementsByClassName('giga-class')
// body.querySelectorAll('.giga-class')
console.log(button.textContent, button.getAttribute('href'));
                    // innerHTML
title.textContent = 'Title level 1'
helloDiv.innerHTML='<strong>List item 3</strong>'


// Найти и записать в переменную элемент a , который находится в первом параграфе.
// 1. Задать ей атрибут target="_blank" и rel="noopener" .
// 2. Удалить атрибут role .
// 3. Изменить значение атрибута href 

button.setAttribute('target', '_blank')
button.setAttribute('rel', 'noopener')
button.setAttribute('href', 'https://google.com')

const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
// Вам надо создать через Javascript элемент img , добавить ему атрибут src , значение для которого берем из
// переменной imageUrl . Вставить этот элемент под заголовок h1 . Далее клонировать картинку и вставить копию
// в конец страницы.

const imgElement = document.createElement('img')
imgElement.setAttribute('src', imageUrl)
imgElement.setAttribute('style', 'width: 100px; height: 100px')
title.after(imgElement)
body.append(imgElement.cloneNode())



// Сгенерировать элементы a на основании массива. Для каждого элемента:
// 1. уставить атрибуту href значение из массива
// 2. в содержимое добавить Link n , где n — индекс + 1 ссылки из массива
// 3. добавить класс link
// 4. выполнить вставку в конец body


const links = [
    'https://learn.javascript.ru',
    'https://learn.javascript.ru/searching-elements-dom',
    'https://learn.javascript.ru/structure',
    '#test'
    ]
   
links.forEach((link, index) => {
    const newLinkElement = document.createElement('a')
    newLinkElement.setAttribute('href', link)
    newLinkElement.innerHTML=`Link ${index+1}`
    newLinkElement.classList.add('link')
    body.append(newLinkElement)
})






