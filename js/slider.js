(function () {
    const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('.nextSlide');
    const arrowBefore = document.querySelector('.beforeSlide');
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change) {
        
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
        value = currentElement;
        value += change;
        console.log(sliders.length);
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        /* Lo que TOGGLE hace es que si el elemento seleccionado tiene la clase definida entre los parémtesis, 
        se la quita, pero si no tiene la clase, se la asigna */ 

        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');
    }

})()
