class Chocolates {
    constructor() {
        this.chocolates = []
        this.adapter = new ChocolatesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadChocolates()
    }


    fetchAndLoadChocolates() {
        this.adapter.getChocolates().then(chocolates => {
            chocolates.forEach(chocolate => this.chocolates.push(chocolate))
            // return console.log(chocolates)
        })
        .then(() => {
            this.render()
        })
    }
    render () {
        const chocolatesContainer = document.getElementById('chocolates-container')
        chocolatesContainer.innerHTML = 'See Our Chocolates'
    }
}