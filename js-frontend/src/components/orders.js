class Orders {
    constructor() {
        this.orders = []
        this.adapter = new OrdersAdapter()
        // this.customersAdapter = new CustomersAdapter()

        this.initBindingsAndEventListeners()
        // this.fetchAndLoadOrders()
    }
    
    initBindingsAndEventListeners(){
        this.chocolatesContainer = document.getElementById('chocolates-container')
        this.buyBtns = document.querySelectorAll('.buy-btns');
        this.buyBtns.forEach(btn => btn.addEventListener('click', this.createOrder.bind(this)))
    }

    createOrder(e) {
        debugger
        console.log("what")
        // e.preventDefault()
        // const curr_user = localStorage.getItem('currentUser')
        this.adapter.createOrder().then(order => {
           this.orders.push(new Order("choco", 1))
        //    this.render()
        })
    }

    // handleNoteClick(e) {
    //     if (e.target.classList.contains('delete-note-link')){
    //         console.log('will delete', e.target.parentNode);
    //         this.deleteNote(e)
    //     } else {
    //         this.toggleNote(e)
    //     }
    // }
    
    // toggleNote(e) {
    //     const li = e.target
    //     li.contentEditable = "true"
    //     li.focus()
    //     li.classList.add('editable')
    // }
    
    // updateNote(e){
    //     const li = e.target
    //     li.contentEditable = "false"
    //     li.classList.remove('editable')
    //     const newValue = li.innerHTML
    //     const id = li.dataset.id
    //     if (id) {
    //         this.adapter.updateNote(newValue, id)
    //     }
    // }
    
    // deleteNote(e) {
    //     const li = e.target.parentNode
    //     const id = li.dataset.id
    //     this.adapter.deleteNote(id)
    //     li.remove()
    // }

    fetchAndLoadNotes() {
        // this.render()
    }
    
    render() {
        // const curr_user = localStorage.getItem('currentUser')
        // if (1) {
            // this.chocolatesContainer.innerHTML = `${this.notes.filter(note => note.user_id == curr_user).map(note => note.renderLi()).join('')}`
        // } else {
        //     this.notesContainer.innerHTML = 'Please login!'
        // }
    }

    // loginUser() would be better on the Users class, but needs access to render() here
    // could use inheritance to make render() a property of Users too

    // loginUser(e){
    //     e.preventDefault()
    //     console.log('e.target: ', e.target.childNodes[3].value);
    //     const btn = e.target.childNodes[3]
    //     const btnText = e.target.childNodes[3].value
    //     if (btnText == 'Login') {
    //         const value = this.newUserInput.value
    //         this.userAdapter.loginUser(value)
    //             .then(user => {
    //                 localStorage.setItem('currentUser', parseInt(user.id))
    //                 console.log(`currentUser ${user.username} set with id: ${localStorage.getItem('currentUser')}`);
    //             })
    //             .then(() => this.render())
    //         this.newUserInput.value = ""
    //         btn.setAttribute('value', 'Logout')
    //     } else {
    //         localStorage.clear()
    //         location.reload()
    //         btn.setAttribute('value', 'Login')
    //     }
        
    // }
}

