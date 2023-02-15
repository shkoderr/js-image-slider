//Получим наши слайды, создав переменную
const slides = document.querySelectorAll('.slide')

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