class Customer {
    constructor(customerJSON) {
        this.name = customerJSON.name
        this.email = customerJSON.email
        
    } 
    
    renderCustomer(){
        return `<li data-id=${this.name}>${this.name}: ${this.description} $ ${this.price}
                </li>`
    }
}