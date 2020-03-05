class Chocolate {
    constructor(chocolateJSON) {
        this.id = chocolateJSON.id
        this.name = chocolateJSON.name
        this.description = chocolateJSON.description
        this.price = chocolateJSON.price
    } 
    
    renderChocolate(){
        return `
                <div class="chocolate-container">
                    <img src="images/dark-chocolate.jpg"/>
                    <div class="chocolate" >
                    ${this.name}
                    </div>
                    <div class="description">${this.description}</div> 
                    <button class="buyBtns" data-chocolate-id="${this.id}" data-price="${this.price}">BUY <span style="font-size: 20px;">$ ${this.price}</span> </button>
                </div>
                `
    }
}