class CustomersAdapter {
    constructor () {
        this.baseUrl = 'http://localhost:3000/api/v1/customers'
    }

    loginCustomer(value) {
        const customer = {
            name: value
        }
        return fetch(`${this.baseUrl}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ customer })
        })
        .then( res => res.json())
    }
}