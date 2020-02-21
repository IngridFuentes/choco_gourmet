class Orders {

    constructor() {
        this.orders = []
        this.adapter = new OrdersAdapter()
        this.customerAdapter = new CustomersAdapter()

        this.initBindingsAndEventListeners()
        this.fetchAndLoadOrders()
    }
    
    initBindingsAndEventListeners(){
        this.loginForm = document.getElementById('login-form')
        this.newCustomerInput = document.querySelector('#new-customer')
        this.loginForm.addEventListener('submit', this.loginCustomer.bind(this))

        this.ordersContainer = document.getElementById('orders-container')
        this.body = document.querySelector('body')
        this.newOrderBody = document.getElementById('new-order-body')
        this.orderForm = document.getElementById('new-order-form')
        this.orderForm.addEventListener('submit', this.createOrder.bind(this))
        this.ordersContainer.addEventListener('dblclick', this.handleOrderClick.bind(this))
        this.body.addEventListener('blur', this.updateOrder.bind(this), true)
    }

    createOrder(e) {
        e.preventDefault()
        const curr_customer = localStorage.getItem('currentCustomer')
        const value = this.newOrderBody.value;
        this.adapter.createOrder(value, curr_customer).then(order => {
           this.orders.push(new Order(order))
           this.newOrderBody.value = ''
           this.render()
        })
    }

    handleOrderClick(e) {
        if (e.target.classList.contains('delete-order-link')){
            console.log('will delete', e.target.parentNode);
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
        const li = e.target
        li.contentEditable = "false"
        li.classList.remove('editable')
        const newValue = li.innerHTML
        const id = li.dataset.id
        if (id) {
            this.adapter.updateOrder(newValue, id)
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
            orders.sort((a, b) => a.id - b.id).forEach(order => {
                this.orders.push(new Order(order))
            });
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        const curr_customer = localStorage.getItem('currentCustomer')
        if (curr_customer) {
            this.ordersContainer.innerHTML = `${this.orders.filter(order => order.customer_id == curr_customer).map(order => order.renderLi()).join('')}`
        } else {
            this.ordersContainer.innerHTML = 'Please login!'
        }
    }


    loginCustomer(e){
        e.preventDefault()
        console.log('e.target: ', e.target.childNodes[3].value);
        const btn = e.target.childNodes[3]
        const btnText = e.target.childNodes[3].value
        if (btnText == 'Login') {
            const value = this.newCustomerInput.value
            this.customerAdapter.loginCustomer(value)
                .then(customer => {
                    localStorage.setItem('currentCustomer', parseInt(customer.id))
                    console.log(`currentCustomer ${customer.name} set with id: ${localStorage.getItem('currentCustomer')}`);
                })
                .then(() => this.render())
            this.newCustomerInput.value = ""
            btn.setAttribute('value', 'Logout')
        } else {
            localStorage.clear()
            location.reload()
            btn.setAttribute('value', 'Login')
        }
        
    }
}