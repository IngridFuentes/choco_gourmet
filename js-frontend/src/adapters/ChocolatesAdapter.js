class ChocolatesAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/chocolates"
    }

    getChocolates() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    // createChocolate(value) {
    //     const chocolate = {
    //         body: value,
    //     }
    //     return fetch(this.baseUrl, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({chocolate})
    //     })
    //     .then(res => res.json ())
    // }

}