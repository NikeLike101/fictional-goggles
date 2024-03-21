import  DOMMethods from './modules/dom.js'
import  MathMethods from './modules/math.js'
import HandlersMethods from './modules/handlers.js'
import { getIndicator, setIndicator } from '../modules/pract2.js'

const {paintOverElement,showElement} = DOMMethods
const {calcCircleArea,calcSum} = MathMethods
const {handleClick,handleSubmitForm} = HandlersMethods


// Calling
const sum = calcSum(21, 2)
if (sum > 20) {
    console.log('asdasdsada');
    setIndicator(2)
}

window.addEventListener('click', () => {
    console.log('click', getIndicator);
    setIndicator(getIndicator()  + 1 )
})
const circleArea = calcCircleArea(67)
console.log(sum)
console.log(circleArea)
document.body.addEventListener('click', handleClick)
paintOverElement(document.body, '#ff0000')
// Ваша задача — разложить функции из этого файла по модулям.
// Математические функции вынести в модуль math.js , функции для
// dom элементов в dom.js , а обработчики событий в handlers.js .
// Следующим шагом подключить в script.js необходимые функции,
// они находятся после комментария Calling.
// Довести задачу до рабочего состояния.