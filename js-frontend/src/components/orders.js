class Orders {
    constructor() {
        this.orders = []
        this.adapter = new OrdersAdapter()
        this.customersAdapter = new CustomersAdapter()


        this.initBindingsAndEventListeners()
        this.fetchAndLoadOrders()
    }

    initBindingsAndEventListeners() {

        this.loginForm = document.getElementById('login-form')
        this.newCustomerInput = document.querySelector('#new-customer-name')
        this.newCustomerEmail = document.querySelector('#new-customer-email')
        this.loginButton = document.getElementById('login-button')
        this.loginButton.addEventListener('click', this.loginCustomer.bind(this))



        this.chocolatesContent = document.getElementById('chocolates-content')
        this.chocolatesContent.addEventListener("click", (e) => {
            if (e.target.tagName.toLowerCase() == "button") {
                console.log("button clicked");
                // debugger
                this.createOrder(e)
            }
        })
        this.ordersContainer = document.getElementById('orders-container')
        this.ordersContainer.addEventListener('dblclick', this.handleOrderClick.bind(this))
        this.ordersContainer.addEventListener('submit', this.updateOrder.bind(this))
    }


    createOrder(e) {
        const curr_customer = localStorage.getItem('currentCustomer')
        console.dir(e.target)
        let order = {
            customer_id: curr_customer,
            chocolate_id: e.target.dataset.chocolateId,
            quantity: 1,
            total: e.target.dataset.price
        }
        console.log(order)
        // debugger
        this.adapter.createOrder(order).then(order => {
            this.orders.push(new Order(order))
            this.render()
        })
    }

    handleOrderClick(e) {
        if (e.target.classList.contains('delete-order-link')){
            console.log('This order will be deleted', e.target.parentNode);
            this.deleteOrder(e)
        } else {
            this.toggleOrder(e)
        }
    }

    toggleOrder(e) {
        const li = e.target
        li.contentEditable = "true"
        li.focus()
        li.classList.add('editable')
    }

    updateOrder(e){
        e.preventDefault()
        if (e.target.children[0].value) {
            console.dir(e.target.children[0].value);
        this.adapter.updateOrder(e.target.children[0].value)
        }
    }


    deleteOrder(e) {
        const li = e.target.parentNode
        const id = li.dataset.id
        this.adapter.deleteOrder(id)
        li.remove()
    }


    fetchAndLoadOrders() {
        this.adapter
        .getOrders()
        .then(orders => {
            orders.forEach(order => {
                this.orders.push(new Order(order))
            });
        })
        .then(() => {
            this.render()
        })
        console.log(this.orders)
    }

    render() {
        const curr_customer = localStorage.getItem('currentCustomer')
        if (curr_customer) {
            this.ordersContainer.innerHTML = `${this.orders.filter(order => order.customer_id == curr_customer).map(order => order.renderOrder()).join('')}`
        } else {
            this.ordersContainer.innerHTML = 'Please login to make an order.'
        }
    }

    loginCustomer(e) {

        e.preventDefault()
        // e.isDefaultPrevented()
        console.log('e.target: ', e.target.innerText);
        const btn = e.target
        const btnText = e.target.innerText
        if (btnText == 'Login') {
            const name = this.newCustomerInput.value
            const email = this.newCustomerEmail.value
            this.customersAdapter.loginCustomer(name, email)
                .then(customer => {
                    localStorage.setItem('currentCustomer', parseInt(customer.id))
                    console.log(`currentCustomer ${customer.name} ${customer.email} set with id: ${localStorage.getItem('currentCustomer')}`);
                    alert(`Hello, ${customer.name}`)
                })
                .then(() => this.render())
            this.newCustomerInput.value =""
            this.newCustomerEmail.value =""
            btn.setAttribute('value', 'Logout')

        } else {
            localStorage.clear()
            // location.reload()
            btn.setAttribute('value', 'Login')
        }

    }
}