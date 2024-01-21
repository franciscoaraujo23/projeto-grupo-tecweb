const initaPPClick = () =>{  
    let iconCart = document.querySelector('.icon-cart');
    let closeCart = document.querySelector('.close');
    let body = document.querySelector('body');
    const cart_Tab = document.querySelectorAll('.cartTab');
    let flightsHTML = document.querySelector('.flights');

    let flights = [];

    iconCart.addEventListener('click', () => {
        body.classList.toggle('showCart')
    })
    closeCart.addEventListener('click', () => {
        body.classList.toggle('showCart')
    })

    cart_Tab.addEventListener('showCart', () => {
        
    })
}
window.addEventListener("load", initaPPClick)