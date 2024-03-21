
// const gigas = document.body.querySelectorAll('.giga-class')
// const button = document.body.querySelector('.button')
// const textInput = document.body.querySelector('#text')
// const checkbox = document.body.querySelector('#checkbox')
// const container = document.body.querySelector('.painting')
// const form = document.body.querySelector('#form-id')
// const submitButton = document.body.querySelector('#submitForm')

// console.log(button);

// button.addEventListener('click', (event) => {
//     console.log(event.target);


// })


const handleClick = () => {
    console.log('privet');
    document.querySelector('#hello').removeAttribute('onclick')
    // document.querySelector('#super-id8').outerHTML = document.querySelector('#super-id8').outerHTML.split('onclick="handleClick()"').join('')
}

// container.innerHTML = `
// <div id="hello" onclick="handleClick()">click me</div>`

// // textInput.onclick = (e) => {
// // console.log(e);
// // }
// // textInput.onclick = undefined


// // window.addEventListener('scroll', () => {
// //     console.log('scroll!!!');
// // })



// // textInput.addEventListener('keyup', (e) => {
// //     console.log(e);
// //     gigas.forEach(gigaText => gigaText.innerHTML =e.target.value)
// // })
// // window.onclick=(e) => {
// //     console.log('clicked');

// // }
// // form.onclick = (e) => {
    
// //     // e.preventDefault()
// //     console.log('hello from form');

// // }

// // checkbox.onclick = (e) => {
// //     console.log('clicked checkbox');
// //     e.stopPropagation()
// // }

// // submitButton.addEventListener('click', (e) => {
    
// //         e.preventDefault()
// //         e.stopPropagation()
// //         console.log(textInput.value, checkbox.checked);
// // })



// // Создать три кнопки в html и повесить на каждую кнопку обработчик события:
// // 1. через атрибут
// // 2. через свойство элемента
// // 3. через метод addEventListener
// // При клике на каждую из кнопок, показать сообщение через alert , соответствующее способу назначения
// // обработчика

// const btn2 = document.getElementById('button2')


// btn2.onclick = () => {alert('hello from click 2')}

// const btn3 = document.getElementById('button3')

// btn3.addEventListener('click', () => {
//     alert('hello from click 3')
// })


// // Создать кнопку в html и повесить на нее обработчик через метод addEventListener , который при клике выводит
// // значение счетчика. Каждый клик увеличивает значение счетчика на 1, а начинаем с 0.
// // * После 5 клика удалить обработчик. Подсказка: обработчик должен быть отдельной именованной функцией.

// let counterOfClicks = 0

// const handleChangeInput = () => {
//     // alert('pishi')
 
//     counterOfClicks++

//     for (let i = 0; i < 100; i++) {
//         console.log('hello', counterOfClicks);
//     }
//        if (counterOfClicks === 5) {
//         textInput.removeEventListener('click', handleChangeInput)
//     }


// }


// // textInput.addEventListener('click', handleChangeInput)

// // Есть верстка вида:
// // <button id="buttonToggleContent">Show text</button>
// // <div id="content" class="content">
// // <h2>Введение в браузерные события</h2>
// // <p>Событие – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы (хотя события бывают и не
// // </div>
// // Ваша задача: написать код, который при клике на кнопку будет переключать элемент с классом content . Если
// // content скрыт, то мы его показываем, если отображается — скрываем. При загрузке страницы content должен
// // быть скрыт.

// const toggleContentButton = document.getElementById('buttonToggleContent')
// const content = document.getElementById('content')
// toggleContentButton.addEventListener('click' , ()=> {
//     content.classList.toggle('active')

//     toggleContentButton.innerHTML = content.classList.contains('active') ? 'Hide text' :
//     'Show text'
// } )

// // Есть верстка вида:
// // <style>
// // .container {
// // padding: 0.5rem;
// // max-width: 400px;
// // position: fixed;
// // right: 0;
// // bottom: 0;
// // }
// // .message {
// // display: flex;
// // align-items: start;
// // padding: 1rem;
// // margin-bottom: 0.5rem;
// // background-color: rgba(32, 38, 227, 0.4);
// // border-radius: 0.5rem;
// // }
// // .close {
// // padding: 0.25rem;
// // margin-left: 0.5rem;
// // background-color: rgba(232, 113, 113, 0.6);
// // }
// // </style>
// // Используя делегирования событий, повесить обработчик на container . При клике на «крестик» должен
// // скрываться только тот message , в котором находится целевой «крестик».

// const msgContainer = document.getElementById('container')


// msgContainer.addEventListener('click', (e) => {
//     // e.preventDefault()
//     if(!e.target.classList.contains('close')) return 
//     // e.target.parentNode.classList.add('hide')
//     e.target.closest('.message').classList.add('hide')
// })
