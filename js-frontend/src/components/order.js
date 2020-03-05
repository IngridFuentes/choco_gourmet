class Order {
    constructor(orderJSON) {
        this.id = orderJSON.id
        this.customer_id = orderJSON.customer_id
        this.chocolate_id = orderJSON.chocolate_id
        this.quantity = orderJSON.quantity
        this.total = orderJSON.total
    }

    renderOrder(){
         return `<li data-id=${this.id}>Quantity: ${this.quantity} Total: ${this.total} <button class="delete-order-link">Delete</button>
          </li> 
          <form>
                <select data-id="order-id" >
                        <option value="">Please select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                </select> 
          <ul>
                    <input data-id="order-id" type="submit" name="update-order" id="update" class="btn" value="Update" />
          </ul>
          </form>`
        
    }

}


