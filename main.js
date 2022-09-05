
const sliderTitle = document.querySelector(".slider__title")


const sliderArr = document.querySelectorAll(".slider__arr")


const headerBurger =  document.querySelector(".header__burger") 

const popupsClose = document.querySelectorAll(".popups__close") 

const popup2Close = document.querySelector(".popup2__close") 

sliderArr.forEach(el => el.addEventListener('click', () => {
    if( sliderTitle.style.order == '1')
    sliderTitle.style.order = '0'
    else
    sliderTitle.style.order = '1'
}))






headerBurger.addEventListener('click', () => {

    headerBurger.style.display = 'none'

    
})



popupsClose.forEach(el => el.addEventListener('click', () => {
    headerBurger.style.display = 'block'
})
)

