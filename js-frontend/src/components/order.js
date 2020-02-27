class Order {
    constructor(orderJSON) {
        this.id = orderJSON.id
        this.customer_id = orderJSON.customer_id
        this.chocolate_id = orderJSON.chocolate_id
        // this.chocolate = orderJSON.chocolate
        // sthis.price = orderJSON.price
    }

    renderOrder(){
        return `<li data-id=${this.id}><a class="delete-order-link">Delete</a></li>`
    }
}


