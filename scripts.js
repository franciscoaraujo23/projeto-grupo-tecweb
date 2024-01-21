const initSlider = () => {
    const image_List = document.querySelector(".sliderWrapper .imageList");
    const slideButtons = document.querySelectorAll(".sliderWrapper .slideButton");
    const sliderScrollbar = document.querySelector(".sliderWrapper .slideButton");
    const sliderScrollThumb = sliderScrollbar.querySelector(".scrollbarThumb");
    const maxScrollLeft = image_List.scrollWidth - image_List.clientWidth;

    // Vai rodando as imagens dependendo dos clicks nas setas
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prevSlide" ? -1 : 1;
            const scrollAmout = image_List.clientWidth * direction; 
            image_List.scrollBy({ left: scrollAmout, behavior: "smooth" });
        });
    });
    const handleSlideButtons = () => {
        slideButtons[0].style.display = image_List.scrollLeft <= 0 ? 'none' : 'block';
        slideButtons[1].style.display = image_List.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    }

    image_List.addEventListener("scroll", () => {
        handleSlideButtons();
    }) 
}


window.addEventListener("load", initSlider);