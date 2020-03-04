class Order {
    constructor(orderJSON) {
        this.id = orderJSON.id
        this.customer_id = orderJSON.customer_id
        this.chocolate_id = orderJSON.chocolate_id
        this.quantity = orderJSON.quantity
        this.total = orderJSON.total
    }

    renderOrder(){
         return `<li data-id=${this.id}>Quantity: ${this.quantity} Total: ${this.total}</li>`
        //  <a class="delete-order-link">Delete</a> 
    }
}


