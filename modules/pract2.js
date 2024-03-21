const divState = document.createElement('div')
// divState.style.display ='none'
divState.innerHTML = 0
document.body.append(divState)
const getIndicatorHandler = () => {
    console.log(divState.innerHTML, 'innerHTML');
    return Number(divState.innerHTML)
}
const setIndocatorHandler  = (newValue ) => {

    divState.innerHTML = newValue

}
// Дан массив:
// 
// 1. Создать переменные для каждого пользователя используя
// деструктуризацию массива users
// 2. Создать переменные для 1-го и 3-го пользователя используя
// деструктуризацию массива users
// 3. Обменять значения между переменными п.2

const users = ['Olga', 'Viktor', 'John', 'Peter']


export const getIndicator = getIndicatorHandler
export const setIndicator = setIndocatorHandler



//

