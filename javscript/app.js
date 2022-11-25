const cross = document.getElementById('cross');
const menu = document.getElementById('menu');
const navBar = document.getElementById('navBar')

menu.addEventListener('click', ()=>{
    navBar.classList.add('none')
})

cross.addEventListener('click', ()=>{
    navBar.classList.remove('none')
})