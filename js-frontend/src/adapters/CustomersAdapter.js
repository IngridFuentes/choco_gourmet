class CustomersAdapter {
    constructor () {
        this.baseurl = 'http://localhost:3000/api/v1/customers'
    }

    loginCustomer(value, email) {
        const customer = {
            name: value,
            email: email
        }

        console.log(customer)
        return fetch(`${this.baseurl}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ customer })
        })
        .then( res => res.json())
    }
}
