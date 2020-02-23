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
        // this.buyBtns.forEach(btn => btn.addEventListener('click', this.createOrder))
    //    for (let button of this.buyBtns) {
    //     button.addEventListener('click', (e) => {
    //         console.log(e)
    //       });
    // //    }
    // const button = ''
    const buyBtns = document.getElementsByClassName('buy-tns');
    document.querySelector('body').addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() == 'button') {
            debugger
            this.createOrder(event).bind(this);
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
        this.adapter.createOrder().then(order => {
           this.orders.push(new Order("choco", 1))
        //    this.render()
        })
    }

}

