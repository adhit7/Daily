const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () =>{
    container.classList.toggle('active')
    input.focus()
})

