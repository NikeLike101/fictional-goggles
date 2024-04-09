let arr = null

const someData = fetch('https://jsonplaceholder.typicode.com/posts')

someData
    .then(response => response.json())
    .then(data => arr = data)
    .catch(() => console.log('polomka'))





const interval = setInterval(() => {
    if (arr === null) return
    clearInterval(interval)
    arr.forEach(item => {
        // const itemElement = document.createElement('div')
        // itemElement.innerHTML = item.title
        // document.body.append(itemElement)

    })
}, 200)





const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

xhr.send()
xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return
    arr = JSON.parse(xhr.responseText)

}
xhr.onerror = () => {
    arr = null
    console.log('polomka');
}

const createPost = fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        body: JSON.stringify({
            body: 'helllo',
            title: 'titleHello',
            userId: 2
        })
    })

createPost.then(res => res.json()).then(data => console.log(data))

const xhrPost = new XMLHttpRequest()
xhrPost.open('POST', 'https://jsonplaceholder.typicode.com/posts')
xhrPost.send(JSON.stringify({
    body: 'helllo',
    title: 'titleHello',
    userId: 2
}))
xhrPost.onreadystatechange = () => {
    if (xhrPost.readyState !== 4) return
    console.log(JSON.parse(xhrPost.responseText));

}

xhrPost.onerror = () => {

}

const getGigaData = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() <= 0.1) reject('polomaysa:(')
        resolve([1, 1, 1, 1, , 11, 1, 1, 1, 1, 1, 1, 1, 1])
    }, 500)

})


const doFetch = (promise, setter, valueOnError) => {

    const handleSuccess = (response) => {
        setter(response)
    }
    const handleError = (error) => {
        setter(valueOnError)
        console.log('wwww', error);
    }
    promise.then(handleSuccess).catch(handleError)

    const getData = () => newData
    return getData
}

// doFetch(createPost)




doFetch(getGigaData, (newValue) => arr = newValue, null)


window.addEventListener('click', () => {

    console.log(arr);
})


// Отправить запрос за пользователями и для каждого вывести в
// консоль name . Используем объект XMLHttpRequest , url запроса —
// https://jsonplaceholder.typicode.com/users.

// Необходимо отправить данные из формы при помощи http-запроса с
// методом POST. Используем функцию fetch , url —
// https://jsonplaceholder.typicode.com/posts.
// Сформировать данные для отправки поможет объект FormData ,
// который необходимо передать в параметр body функции fetch .
// Обратите внимание, что в форме нет значения для userId , его вам
// надо добавить самим при помощи метода formData.append .
// Так же обязательным в этом случаем будет параметр headers .
// Образец объекта с параметрами запроса:
// const options = {
// method: 'POST',
// body: // formData object,
// headers: {
// 'Content-Type': 'application/json;charset=utf-8'
// }
// }
// В консоль вывести ответ сервера, он представляет собой объект с
// отправленными данными + свойство id со значением 101. Если
// видите другой результат, то запрос выполнен некорректно


const form = document.querySelector('form')
console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e);
    const formData = new FormData(form)
    formData.append('userId', 3)
    console.log(formData.get('title'), formData.get('body'), formData.get('userId'),);
    const post = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',

        body: formData
    })

    post.then(r =>fetch('https://jsonplaceholder.typicode.com/posts'))
        .then(r2 =>r2.json())
        .then(data =>console.log(data))
})