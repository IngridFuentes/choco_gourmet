class Orders {
    constructor() {
        this.orders = []
        this.adapter = new OrdersAdapter()
        

        this.initBindingsAndEventListeners()
    }
    
    initBindingsAndEventListeners(){
        this.chocolatesContainer = document.getElementById('chocolates-container')
        this.chocolatesContainer.addEventListener("click", () => alert("Clicked"))
        // this.buyBtns = document.querySelectorAll('.buyBtns')
        this.buyBtns = document.getElementsByClassName('buyBtns')
       console.log("buyBtns", this.buyBtns)
       let b = document.getElementsByClassName('chocolate')[0]
       console.log("b", b)
            // this.buyBtns.forEach(btn => btn.addEventListener('click', this.createOrder))
        //    for (let button of this.buyBtns) {
        //     button.addEventListener('click', (e) => {
        //         console.log(e)
        //       });
        // //    }
    // const button = ''
    const buyBtns = document.getElementsByClassName('buyBtns');
    
    document.querySelectorAll('.buyBtns').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault()
            console.log("HEY")
        })
      })

    // document.querySelector('body').addEventListener('click', function(event) {
    //     if (event.target.tagName.toLowerCase() == 'button') {
    //         // debugger
    //         this.createOrder(event).bind(this)
    //         console.log('click')

    //     }
        // buyButton();
    };
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

    function createOrder(e) {
        // debugger
        console.log("what")
        e.preventDefault()
        this.adapter.createOrder().then(order => {
           this.orders.push(new Order("choco", 1))
        //    this.render()
        })
    }



