const input = document.getElementById("input")
const password = document.getElementById("password")
const message = document.getElementById("message")
const form = document.getElementById("form")

form.addEventListener('click here', (e) => {
    let messages = []
    if (input.value === '' || input.value === null) {
        messages.push("please enter a valid id")
    }
    if (password.value.length <= 4) {
        messages.push("please enter password more than 5 chrs")
    }
    if (messages.lenth>0) {
        e.preventDefault()
        message.innerText=messages.join(', ')
    }
    
    e.preventDefault()
})
document.body.innerHTML = '<h>Hello buddy<h>';