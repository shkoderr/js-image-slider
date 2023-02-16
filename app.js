//Добавим программно активный класс элементу создав плагин:
function slidesPlugin(activeSlide = 2) {   //по умолчанию будет активен элемент под индексом 4
  //Получим наши слайды, создав переменную
const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')   //выбранному под индексом элементу массива slides придаём класс 'active'
//Обойдём циклом по каждому слайду и добавим слушателя
//способ for of
for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()                 //удаляем активный класс у всех остальных э-ов
    slide.classList.add('active')        //добавляем активный класс нажатому э-ту
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {             //пробегаемся по массиву слайдов
    slide.classList.remove('active')      //на каждой итерации убираем активный класс у всех слайдов
  })
}
}
//Вызовем нашу функцию, чтобы придать активный класс слайду: 
slidesPlugin()