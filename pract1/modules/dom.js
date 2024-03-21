
function showElement(element) {
    element.classList.add('show')
}

function paintOverElement(element, color) {
    console.log(element);
    element.style.backgroundColor = color
}

export default {
    paintOverElement,
    showElement
}