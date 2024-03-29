
export const createButton = (text, onClick, style) => {
    const button = document.createElement('div')
    button.style = `
        padding: 4px 16px;
        background: #ccc;
        text-align: center;
        border-radius: 5px;
    
    `;
    
    button.style =button.style.cssText + style;
    button.innerHTML = text
    button.addEventListener('click' ,(e) => onClick(e))

    return button
}