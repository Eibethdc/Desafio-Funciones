document.addEventListener('keydown', function (event){
    if(event.key === 'a'){
        const a = document.querySelector('#key').style.backgroundColor = 'pink'
    }else if(event.key === 's'){
        const s = document.querySelector('#key').style.backgroundColor = 'orange'
    }else if(event.key === 'd'){
        const d = document.querySelector('#key').style.backgroundColor = '#83C0C1'
    }else if(event.key === 'q'){
        crearElemento('violet')
    }else if(event.key === 'w'){
        crearElemento('gray')
    }else if(event.key === 'e'){
        crearElemento('brown')
    }
})

function crearElemento(color){
    const contenedor = document.querySelector('body')
    const div = document.createElement('div')
    div.style.width = '200px'
    div.style.height = '200px'
    div.style.border = '1px solid'
    div.style.backgroundColor = color
    contenedor.appendChild(div)
}