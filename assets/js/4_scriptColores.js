const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const div3 = document.querySelector('#div3')
const div4 = document.querySelector('#div4')

const cambiar = (event) =>{
    event.target.style.backgroundColor = 'black'
}

div1.addEventListener('click', cambiar)
div2.addEventListener('click', cambiar)
div3.addEventListener('click', cambiar)
div4.addEventListener('click', cambiar)

