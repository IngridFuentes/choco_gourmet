class OrdersAdapter {
    constructor() {
        this.baseurl = 'http://localhost:3000/api/v1/orders' 
    }

    getOrders() {
        return fetch(this.baseurl).then(res => res.json())
    }

    createOrder(id) {
        const order = {
            customer_id: id,
            // chocolate_id: chocolate_id
            // quantity: quantity,
            // total: total
        }
        // console.log( 'req customer_id obj: ', order["customer_id"]);
        return fetch(this.baseurl, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ order })
        })
        .then(res => {
            
            console.log(res.status)
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