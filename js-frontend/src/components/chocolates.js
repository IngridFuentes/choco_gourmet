class Chocolates {
    constructor() {
        this.chocolates = [];
        this.adapter = new ChocolatesAdapter();

        this.initBindingsAndEventListeners()
        this.fetchAndLoadChocolates()
    }

    initBindingsAndEventListeners() {
        this.chocolatesContainer = document.getElementById('chocolates-container')
    }
    
    fetchAndLoadChocolates() {
        this.adapter
        .getChocolates()
        .then(chocolates => {
            chocolates.forEach(chocolate => {
                this.chocolates.push(new Chocolate(chocolate))
            });
        })
        .then(() => {
            this.render()
        })
    }
   
    render() {
        this.chocolatesContainer.innerHTML = `${this.chocolates.map(chocolate => chocolate.renderChocolate()).join('')}`
    }   
}
