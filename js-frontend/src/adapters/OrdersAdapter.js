class OrdersAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/orders' 
    }

    getOrders() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createOrder(customer_id, chocolate_id, quantity, total) {
        const order = {
        
            customer_id: id,
            chocolate_id: id,
            quantity: quantity,
            total: total
        }
        console.log('req body obj: ', order["customer_id", "chocolate_id"]);
        return fetch(this.baseUrl, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ order })
        })
        .then(res => res.json())
    }
    
    updateOrder(quantity, total, customer_id, chocolate_id) {
        const order = {
            quantity: quantity,
            total: total,
            chocolate_id: id
        }
        return fetch(this.baseUrl + `/${customer_id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ order })
        })
        .then(res => res.json())
        
    }

    deleteOrder(id) {
        return fetch(this.baseUrl + `/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    }
}