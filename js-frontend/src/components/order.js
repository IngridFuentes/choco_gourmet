class Order {
    constructor(orderJSON) {
        this.id = orderJSON.id
        this.customer_id = orderJSON.customer_id
        this.chocolate_id = orderJSON.chocolate_id
        this.quantity = orderJSON.quantity
        this.total = orderJSON.total
    }

    renderOrder(){
        return `<ul data-id= ${this.id}>
         </ul>`
        //  <a class="delete-order-link">Delete</a> 
    }
}


