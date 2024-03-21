// // localStorage.setItem('key', 'hello')
// // localStorage.setItem('key', 'privet')
// // localStorage.removeItem('secret')
// // alert(localStorage.getItem('secret'))

// // sessionStorage.setItem('prive', 'wqerty')

// const OBJECT_STORAGE_KEY = 'OBJECT_STORAGE_KEY'
// const STORAGE_KEY = 'STORAGE_KEY'

// const obj = { hello: 'privet', qwert: '13', oleg: 12, isOpen: false }

// const array = ['hell', 'priv', 33, false, true, 1]

// const newArray = localStorage.getItem('arr')


// // 60000 --  1 min
// // 1000 -- 1 sec


// const setLocalStorage = (key, value, timeOfLife) => {
//     if (value === undefined) return
//     const date = new Date()
//     const newObject = { data: value }
//     if (timeOfLife !== undefined) {
//         newObject.timeToExpire = date.getTime() + timeOfLife
//     }
//     localStorage.setItem(key, JSON.stringify(newObject))
// }

// const getLocalStorage = (key) => {
//     const info = JSON.parse(localStorage.getItem(key))
//     if(info === null) return 'no data'
    
//     if (info?.timeToExpire && info.timeToExpire <= Date.now()) {
//         localStorage.removeItem(key)
//         return 'expired'
//     }
//     console.log(info);
//     return info.data
// }

// // setLocalStorage(STORAGE_KEY, {
// //     array,
// //     obj, hello: 'hello'
// // }, 10000)

// console.log(getLocalStorage(STORAGE_KEY));
// // console.log( localStorage.length,);

// // for (let i = 0; i< localStorage.length; i++) {
// //     console.log(localStorage.key(i),  localStorage.getItem(localStorage.key(i)));
// // }

// // setLocalStorage(OBJECT_STORAGE_KEY, obj)
// // setLocalStorage('arr2', array)

// // console.log( getLocalStorage(OBJECT_STORAGE_KEY));
// // console.log(getLocalStorage('arr2'));

// // window.addEventListener('storage', (e) => {
// //     console.log(e);
// // })

// // document.cookie = 'host=goog.le'
// // document.cookie = 'tel=375931; path=/index.html; secure; samesite=strict;'

// // Записать в cookie данные под именем token с произвольным
// // значением из цифр и латинских букв. Куки должен быть доступен в
// // течение 2-х минут по любому пути. В этой задаче необходимо
// // использовать Live Server.

// const date = new Date(Date.now() + 120000).toUTCString()

// document.cookie =`token2=312312;expires=${date}`


// document.cookie = 'token=21321sda3;max-age=120'


// // Создайте поле textarea , значение которого будет автоматически
// // сохраняться при каждом его изменении.
// // Когда пользователь закроет страницу и потом откроет её заново он
// // должен увидеть последнее введённое значение.
// // Подсказка: необходимо слушать событие input .


// // При первом посещении страницы пользователю показываем окно
// // prompt , где просим ввести его имя. Далее сохраняем имя в
// // localStorage под ключом userName . При повторном входе или
// // перезагрузке страницы вместо prompt показываем сообщение в alert
// // «Добро пожаловать, userName», где userName — имя пользователя,
// // которое было записано ранее в хранилище. Если пользователь не
// // ввел имя или закрыл окно prompt , то показываем его повторно.


// // Для этой задачи подключаем стили bootstrap.
// // Дана форма вида:

// // 1. Создать пустой массив users .
// // 2. При отправке формы создать объект со свойствами email и
// // fullName , для которых берем значения из соответствующих полей
// // формы.
// // 3. Добавляем объект в массив users .
// // 4. Для каждого полученного юзера добавляем в список users
// // элемент списка li c контентом, как в коде выше.
// // 5. После перезагрузки страницы, ранее добавленные пользователи
// // должны сохранятся в списке users .
// // 6. *Если открыта другая вкладка с этой страницей, в ней также
// // список users должен обновляться. Используем обработку
// // события storage



// let users = JSON.parse(localStorage.getItem('users')) || []

// const usersContainer = document.body.querySelector('.users')


// const setUsersFromStorageToContainer = () => {

//     usersContainer.innerHTML= users.map(user => `<li>Full name: ${user.fullName}, email:  ${user.email}</li>`).join('')
// }
// window.addEventListener('load', () => {
//     setUsersFromStorageToContainer()
// })

// window.addEventListener('storage', (e) => {
//     console.log(e);
//     users = JSON.parse(localStorage.getItem('users')) || []
//     setUsersFromStorageToContainer()
// })

// const form = document.body.querySelector('form')
// console.log(form);
// const emailInput = document.getElementById('email')
// const fullNameInput = document.getElementById('fullName')

// document.querySelector('.btn.btn-primary').addEventListener('submit', (e) => {
//     e.preventDefault()
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

// users.push({fullName: fullNameInput.value, email: emailInput.value})

//     localStorage.setItem('users', JSON.stringify(users)) 



//     setUsersFromStorageToContainer()
// })

// sessionStorage.clear()
// const nowDate= new Date()
// console.log();

// const stringDate = `${nowDate.getHours()}:${nowDate.getMinutes()} ${nowDate.getDate()}`
// '19:35 17 sept'
// new Date(10000000)
// console.log(new Date(10000000));