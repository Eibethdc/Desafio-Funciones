const ele = document.querySelector('#ele1')
ele.addEventListener('click', () => ((color = 'green') => {
    const pintar = document.querySelector('#ele1')
    pintar.style.backgroundColor = color
})('yellow'))
