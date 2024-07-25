//https://v6.exchangerate-api.com/v6/734b173ac8c3b3ac58119dd3/latest/USD
class Currency {
    constructor(firstCurrency, secondCurrency) { // Currency sınıfının constructor metodunu tanımladık ve parametre olarak firstCurrency ve secondCurrency'yi verdik
        this.firstCurrency = firstCurrency; // this.firstCurrency'ye firstCurrency'yi atadık
        this.secondCurrency = secondCurrency; // this.secondCurrency'ye secondCurrency'yi atadık
        this.url = "https://v6.exchangerate-api.com/v6/734b173ac8c3b3ac58119dd3/latest/"; // this.url'ye "https://v6.exchangerate-api.com/v6/734b173ac8c3b3ac58119dd3/latest/"'yi atadık
        this.amount = null; // this.amount'ye null atadık
    }


    exchange() { // exchange metodunu tanımladık
        return new Promise((resolve, reject) => { // promise döndürdük
            fetch(this.url + this.firstCurrency) // fetch ile this.url + this.firstCurrency'yi çağırdık
                .then(response => response.json()) // response'yu json formatına çevirdik
                .then(data => { // json formatına çevrilen response'u data'ya atadık
                    const parity = data.conversion_rates[this.secondCurrency]; // data'nın conversion_rates'ındaki this.secondCurrency'yi parity'ye atadık
                    const amount2 = Number(this.amount); // this.amount'u number'a çevirip amount2'ye atadık
                    let total = parity * amount2; // parity ile amount2'yi çarptık ve total'e atadık
                    resolve(total); // total'i resolve ettik
                })
                .catch(err => reject(err)); // hata durumunda err'i reject ettik
        });
    }

    changeAmount(amount) { // changeAmount metodunu tanımladık ve parametre olarak amount'u verdik
        this.amount = amount; // this.amount'a amount'u atadık
    }
    changeFirstCurrency(newFirstCurrency) { // changeFirstCurrency metodunu tanımladık ve parametre olarak newFirstCurrency'yi verdik
        this.firstCurrency = newFirstCurrency; // this.firstCurrency'ye newFirstCurrency'yi atadık
    }
    changeSecondCurrency(newSecondCurrency) { // changeSecondCurrency metodunu tanımladık ve parametre olarak newSecondCurrency'yi verdik
        this.secondCurrency = newSecondCurrency; // this.secondCurrency'ye newSecondCurrency'yi atadık
    }
}

