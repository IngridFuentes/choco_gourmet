class Order {
    constructor(orderJSON) {
        // this.id = orderJSON.id
        // this.body = orderJSON.body
        // this.user_id = orderJSON.user_id
        this.chocolate = orderJSON.chocolate
        this.price = orderJSON.price
    }

    renderOrder(){
        return `<button>
                    Buy
                </button>`
    }
}

{/* <a class="delete-note-link">Delete</a> */}