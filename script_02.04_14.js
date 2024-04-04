

const time = 0


// const timeoutId = setTimeout(() => {
//     for(let i = 0; i<1000000; i++) {

//     }
//   },time)


setTimeout(() => {
    // console.log(5);  
}, 0)


//   const intervalId = setInterval(() => {
//     console.log('hello');
//   }, 100)

// console.log(intervalId, 'id');



const result = new Promise((resolve) => {
    setTimeout(() => {

        console.log('hello8');
        resolve(45)

    }, 3000)
})

console.log(result);
Promise.resolve().then(() => {
    console.log('zxc');
})
// Вывести в консоль 3 сообщения, текст произвольный:
// 1. через 2 секунды
// 2. через 3.5 секунды
// 3. через 5.25 секунды

setTimeout(() => { console.log(1); }, 2000)
setTimeout(() => { console.log(2); }, 3500)
setTimeout(() => { console.log(3); }, 5250)

// На странице есть скрытый заголовок h2 , требуется показать его
// через 3 секунды после загрузки страницы.
// Добавить кнопку, при клике на которую прерывается показ скрытого
// заголовка, т.е. при клике до появления заголовка, по истечении 3-х
// секунд он не появится.

const h2 = document.createElement('h2')
h2.style.display = 'none'
h2.innerHTML = 'hello h2'
document.body.prepend(h2)


const h2ShowTimeoutId = setTimeout(() => {
    h2.style.display = 'inline'
}, 3000)

document.getElementById('hello').addEventListener('click', () => {
    //     clearInterval(intervalId)
    // clearTimeout(timeoutId)
    clearTimeout(h2ShowTimeoutId)
    console.log('hello1');

})


// Сверстать 3 круга, которые расположены вертикально. Диаметр —
// 80px.
// Каждый элемент (круг) по умолчанию серого цвета. Может принимать
// один из трех классов, которые меняют цвет круга:
// red
// green
// orange
// Написать логику на js, при которой:
// 1. первый круг принимает класс red и «горит» 6 сек
// 2. далее, с первого снимается класс red , а на второй добавляется
// orange , «горит» 1 сек
// 3. со второго снимается класс orange , а на третий добавляется
// green , горит 8 сек
// 4. с третьего снимаем класс green , а на второй добавляется orange ,
// «горит» 1 сек
// Цикл повторяется
const circleContainer = document.createElement('div')
const createCircle = () => {

    const circle = document.createElement('div')
    circle.classList.add('defaultCircle')

    circleContainer.append(circle)

    return circle
}


const redCircle = createCircle('orange', 'green',)
const orangeCircle = createCircle()
const greenCircle = createCircle()


const startFromRed = () => {
    redCircle.classList.add('red')
    setTimeout(() => {
        redCircle.classList.remove('red')
        orangeCircleControl('red')
    }, 6000)

}
const orangeCircleControl = (prevCircle) => {
    orangeCircle.classList.add('orange')
    setTimeout(() => {
        orangeCircle.classList.remove('orange')
        prevCircle === 'green' ? startFromRed() : greenCircleControl()
    }, 1000)
}

const greenCircleControl = () => {
    greenCircle.classList.add('green')
    setTimeout(() => {
        greenCircle.classList.remove('green')
        orangeCircleControl('green')
    }, 8000)
}
startFromRed()

document.body.append(circleContainer)


const names = ['oleg', 'slava', 'artem', 'anton', 'kirill']


const getSomeData = () => {
    const getName = () => names[Math.trunc(Math.random() * names.length)]
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mod = Math.random() > 0.1
            if (mod) {
                resolve({
                    users: Array.from({ length: 10 }).map((item, index) => ({ id: index, name: getName() }))
                })
            }
            reject('server error')
        }, 500)
    })
}

let data

getSomeData().then((response) => {
    data = response

    localStorage.setItem('resp', JSON.stringify(response))

    document.body.append(...response.users.map(user => {
        const div = document.createElement('div')
        div.style.display = 'flex'
        div.innerHTML = `
        <span>${user.id}.</span> <h3>${user.name}</h3><span data-id="${user.id}" class="delete">X</span> 
        `
        return div
    }))


}).catch(e => { console.log(e); })

const deleteButtons = new Promise((resolve) => {
    const interval = setInterval(() => {

        const buttons = document.body.querySelectorAll('.delete')
        if (!!buttons.length) resolve(buttons)
    }, 100)
})

deleteButtons.then(buttons => buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.getAttribute('data-id'));
    })
}))


