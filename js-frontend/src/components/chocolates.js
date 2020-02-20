class Chocolates {
    constructor() {
        this.chocolates = []
        this.adapter = new ChocolatesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadChocolates()
    }

    initBindingsAndEventListeners() {
        this.chocolatesContainer = document.getElementById('chocolates-container')
        this.newChocolateInput = document.getElementById('new-chocolate-input')
        this.chocolateForm = document.getElementById('new-chocolate-form')
        this.chocolateForm.addEventListener('submit', this.createChocolate.bind(this))
    }
    createChocolate(e) {
        e.preventDefault()
        const value = this.newChocolateInput.value
        this.adapter.createChocolate(value).then(chocolate => {
            console.log(chocolate)
        })
    }


    fetchAndLoadChocolates() {
        this.adapter.getChocolates().then(chocolates => {
            chocolates.forEach(chocolate => this.chocolates.push(new Chocolate(chocolate)))
            console.log(this.chocolates)
        })
        .then(() => {
            this.render()
        })
    }
    render () {
        this.chocolatesContainer.innerHTML = this.chocolates.map(chocolate => `<li> ${chocolate.name}: ${chocolate.description} $ ${chocolate.price}</li>`).join('')
    }
}