class Orders {
    constructor() {
        this.orders = []
        this.adapter = new OrdersAdapter()
        
        // this.customersAdapter = new CustomersAdapter()

        this.initBindingsAndEventListeners()
        // this.fetchAndLoadOrders()
        // this.createOrder()
    }
    
    initBindingsAndEventListeners(){
        this.chocolatesContainer = document.getElementById('chocolates-container')
        this.buyBtns = document.querySelectorAll('.buy-btns')
        // this.buyBtns = document.getElementsByClassName('buy-btns')
       console.log(this.buyBtns)
        this.buyBtns.forEach(btn => btn.addEventListener('click', this.createOrder.bind(this)))
    //    for (let button of this.buyBtns) {
    //     button.addEventListener('click', (e) => {
    //         console.log(e)
    //       });
    // //    }
    // const button = ''
    const buyBtns = document.getElementsByClassName('buy-tns');
    document.querySelector('body').addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() == 'button') {
            console.log("clicked")
        }
        // buyButton();
    });
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
        

    // const buyBtns = document.getElementsByClassName('buy-btns');

    //   document.addEventListener("DOMContentLoaded", (event) => {
    //       console.log("The DOM has loaded")

    //    addBuyButton();
    //   })

// function addBuyButton() {
//   for (const e of buyBtns) {
//     // console.log(e)
//     e.addEventListener("click", (e) => {
//       console.log("A button has been clicked!")
//       // console.log(event.target.innerText)

//       if (event.target.innerHTML == button) {
//         // console.log("SAD")
//         mimicServerCall()
//         .then((result) => {
//           updateButton(e);
//         })
//         .catch((error) => {
//           console.log("Error!")
//           updateModel(e);
//         })
//       } else if (event.target.innerHTML == buyBtn) {
//         // console.log("Happy" )
//         updateButton(e);
//       }
//     })
//   }
// }





    }

    createOrder(e) {
        // debugger
        console.log("what")
        e.preventDefault()
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

