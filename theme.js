console.log("Hello")
const color = document.querySelector('.js-color')
const main = document.querySelector('.js-main')
const jstheme = document.querySelector('.js-theme')
const clickOne = document.querySelector('.js-one')
const clickTwo = document.querySelector('.js-two')
const clickIconX = document.querySelector('.js-icon-x')
const clickSetting = document.querySelector('.js-setting-icon')

function addColor(){
    color.classList.add('color')
}

function hideColor(){
    color.classList.remove('color')
}

function addOpen(){
    jstheme.classList.add('open')
}

function hideOpen(){
    jstheme.classList.remove('open')
}

clickOne.addEventListener('click', hideColor)

clickTwo.addEventListener('click', addColor)

clickSetting.addEventListener('click', addOpen)

clickIconX.addEventListener('click', hideOpen)
