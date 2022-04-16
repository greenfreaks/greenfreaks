    // alert('Funciona');

    //Seleccionamos 
    let navWeb = document.querySelector('.navWeb');
    navWeb.classList.add('active');

    let showAplicaciones = document.querySelector('.showAplicaciones');

    let sliderWeb = document.querySelector('.slider__web');
    let sliderAplicaciones = document.querySelector('.slider__aplicaciones');

    sliderWeb.style.display = "block";
    sliderAplicaciones.style.display = "none";

    showWeb.addEventListener("click", showSliderWeb);
    showAplicaciones.addEventListener("click", showSliderAplicaciones);

    function showSliderWeb(){
        sliderWeb.style.display = "block";
        sliderAplicaciones.style.display = "none";

        showWeb.classList.add('active');
        showAplicaciones.classList.remove('active');
    }
    function showSliderAplicaciones(){
        sliderWeb.style.display = "none";
        showWeb.classList.remove('active');

        sliderAplicaciones.style.display = "block";
        showAplicaciones.classList.add('active');
    }
