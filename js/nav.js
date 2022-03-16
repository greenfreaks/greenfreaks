const navSlide = () => {
    const burger = document.querySelector('.head__nav--burger');
    const nav = document.querySelector('.head__nav--content');
    const navLinks = document.querySelectorAll('.head__nav--content li')

    burger.addEventListener('click', () => {
        //Toogle Nav
        nav.classList.toggle('head__nav--contentActive');
        
        //Animated links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `head__nav--contentFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();