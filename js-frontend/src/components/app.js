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

     
// function welcome(){
//     var name = document.getElementById("name").value;
//     var welcomeN = "Welcome" + name;
//     // return welcomeN;
//     console.log(welcomeN);
//     window.alert(welcomeN);
//     return false;
// }


