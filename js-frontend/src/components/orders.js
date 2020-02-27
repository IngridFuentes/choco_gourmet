class Orders {
    constructor() {
        this.orders = []
        this.adapter = new OrdersAdapter()
        this.customersAdapter = new CustomersAdapter()
        

        this.initBindingsAndEventListeners()
        this.fetchAndLoadOrders()
    }
    
    initBindingsAndEventListeners(){

        this.loginForm = document.getElementById('login-form')
        this.newCustomerInput = document.querySelector('#new-customer-name')
        this.newCustomerEmail = document.querySelector('#new-customer-email')
        // this.loginForm.addEventListener('submit', this.loginCustomer)
        this.loginButton = document.getElementById('login-button')
        this.loginButton.addEventListener('click', this.loginCustomer.bind(this))



        this.chocolatesContent = document.getElementById('chocolates-content')
        this.chocolatesContent.addEventListener("click", (e) => {
            if(e.target.tagName.toLowerCase() == "button"){
                console.log("button clicked");
                this.createOrder(e)
            }
        })
        this.ordersContainer = document.getElementById('orders-container')
        // this.newOrderBody = document.getElementById('new-order-body')
        // this.newOrder.addEventListener('submit', this.createOrder.bind(this))

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
    }

    render() {
        const curr_customer = localStorage.getItem('currentCustomer')
        if (curr_customer) {
            this.ordersContainer.innerHTML = `${this.orders.filter(order => order.customer_id == curr_customer).map(order => order.renderOrder()).join('')}`
        }
    }




        // this.buyBtns = document.querySelectorAll('.buyBtns')
    //     this.buyBtns = document.getElementsByClassName('buyBtns')
    //    console.log("buyBtns", this.buyBtns)
    //    let b = document.getElementsByClassName('chocolate')[0]
    //    console.log("b", b)
            // this.buyBtns.forEach(btn => btn.addEventListener('click', this.createOrder))
        //    for (let button of this.buyBtns) {
        //     button.addEventListener('click', (e) => {
        //         console.log(e)
        //       });
        // //    }
    // const button = ''
    // const buyBtns = document.getElementsByClassName('buyBtns');
    
    // document.querySelectorAll('.buyBtns').forEach(button => {
    //     button.addEventListener('click', event => {
    //         event.preventDefault()
    //         console.log("HEY")
    //     })
    //   })

    // document.querySelector('body').addEventListener('click', function(event) {
    //     if (event.target.tagName.toLowerCase() == 'button') {
    //         // debugger
    //         this.createOrder(event).bind(this)
    //         console.log('click')

    //     }
        // buyButton();
    // };
    //   function buyButton() {
    //     for (const e of buyBtns) {
    //         if (event.target.innerHTML == button) {
    //             // console.log("SAD")
    //             mimicServerCall()
    //             .then((result) => {
    //               createOrder(e);
    //             })
    //             .catch((error) => {
    //               console.log("Error!")
    //             })
    //         // } else if (event.target.innerHTML == buyBtn) {
    //         //     // console.log("Happy" )
    //         //     updateButton(e);
    //         // }
    //         // })
    //       }
    //     }
    // }
        

   createOrder(e) {
        // debugger
        const curr_customer = localStorage.getItem('currentCustomer')
        // const value = this.newOrderItem.value;
        console.log(e.target.parentNode.children[1].dataset.id)
        this.adapter.createOrder(curr_customer).then(order => {
        this.orders.push(new Order(order))
        // this.newOrderBody.value = ''
        //    this.render()
        })
    }

    loginCustomer(e) {
        
        e.preventDefault()
        // e.isDefaultPrevented()
        console.log('e.target: ', e.target.innerText);
        const btn = e.target
        const btnText = e.target.innerText
        if (btnText == 'Login') {
            // console.log('what')
            const name = this.newCustomerInput.value 
            const email = this.newCustomerEmail.value
            this.customersAdapter.loginCustomer(name, email)
                .then(customer => {
                    localStorage.setItem('currentCustomer', parseInt(customer.id))
                    console.log(`currentCustomer ${customer.name} ${customer.email} set with id: ${localStorage.getItem('currentCustomer')}`);
                })
                .then(() => this.render())
            // this.newCustomerInput.value =""
            // this.newCustomerEmail.email =""
            // btn.setAttribute('value', 'Logout')
        } else {
            localStorage.clear()
            // location.reload()
            btn.setAttribute('value', 'Login')
        }

    }
}

