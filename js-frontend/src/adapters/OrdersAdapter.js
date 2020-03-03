class OrdersAdapter {
    constructor() {
        this.baseurl = 'http://localhost:3000/api/v1/orders' 
    }

    getOrders() {
        return fetch(this.baseurl).then(res => res.json())
    }

    createOrder(order) {
        const newOrder = {
            customer_id: order.customer_id,
            chocolate_id: order.chocolate_id,
            quantity: order.quantity,
            total: order.total
        }
        console.log( 'req order obj: ', order["customer_id"]);
        return fetch(this.baseurl, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newOrder })
        })
        .then(res => {
            console.log(res)
            return res
        })
        .then(res => res.json())
        .catch((message) => console.log(message))
    }
    
    updateOrder(id,customer_id, chocolate_id, quantity, total) {
        const order = {
            order_id: id,
            customer_id: customer_id,
            chocolate_id: chocolate_id,
            quantity: quantity,
            total: total
        }
        return fetch(this.baseurl + `/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ order })
        })
        .then(res => res.json())
        
    }

    deleteOrder(id) {
        return fetch(this.baseurl + `/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    }
}