const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0;

 // Формула чтобы сайдбар и картинки совпали по цветам
sidebar.style.top = `-${(slidesCount - 1)*100}vh`

upBtn.addEventListener('click',()=>{
    changeSlide('up')
})

downBtn.addEventListener('click',()=>{
    changeSlide('down')
})

function changeSlide(direction) {
 if(direction === 'up'){
     activeSlideIndex++ 
    if (activeSlideIndex === slidesCount)
    {
        activeSlideIndex = 0
    }
  }else if(direction === 'down'){
      activeSlideIndex--
      if (activeSlideIndex < 0){
          activeSlideIndex = slidesCount - 1
      }
  }

 // Определяем размер экрана динамически
 const height = container.clientHeight

 // Подключаем слайдер картинок
 mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

 // Подключаем слайдер сайдбара
 sidebar.style.transform = `translateY(${activeSlideIndex * height}px)` 
}
