class ChocolatesAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/chocolates"
    }

    getChocolates() {
        return fetch(this.baseUrl).then(res => res.json())
    }
    
}