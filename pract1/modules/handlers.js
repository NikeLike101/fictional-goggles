function handleClick(event) {
    event.preventDefault()
    console.log(`Element is ${event.target.tagName}`)
}
function handleSubmitForm(event) {
    event.preventDefault()
    const { currentTarget } = event
    console.log(`Form has been sent!`)
    currentTarget.reset()
}

export default {handleClick,handleSubmitForm}