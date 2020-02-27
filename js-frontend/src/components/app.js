class App {
    constructor() {
        this.chocolates = new Chocolates();
        this.orders = new Orders();
        this.customers = new Customers();
        this.clearStorage()
    }
    clearStorage() {
        localStorage.clear()
    }
}

// (function() {
//     const cartInfo = document.getElementById('cart-info');
//     const cart = document.getElementById('cart');

//     cartInfo.addEventListener('click', function(){
//         cart.classList.toggle("show-cart");
//     })
// })();

// (function() {
//     const buyBtn = document.querySelectorAll('.buyBtns');
//     buyBtn.forEach(function(btn){
//         btn.addEventListener("click", function(event){
//             console.log(event.target);
//         })
//     })
// })();
