class Chocolate {
    constructor(chocolateJSON) {
        this.name = chocolateJSON.name
        this.description = chocolateJSON.description
        this.price = chocolateJSON.price
    } 
    
    renderChocolate(){
        return `
                <div class="chocolate-container">
                    <img src="images/dark-chocolate.jpg"/>
                    <div class="chocolate" data-id=${this.name}>
                    ${this.name}
                    </div>
                    <div class="description">${this.description}</div> 
                    <button class="buyBtns">BUY <span style="font-size: 20px;">$ ${this.price}</span> </button>
                </div>
                `
    }
}