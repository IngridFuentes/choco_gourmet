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



