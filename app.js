// Elementleri Seçme
const amountElement = document.querySelector("#amount"); // amount id'li input alanını seçtik
const firstSelect = document.querySelector("#firstCurrency"); // firstCurrency id'li select alanını seçtik
const secondSelect = document.querySelector("#secondCurrency"); // secondCurrency id'li select alanını seçtik
// const resultElement = document.querySelector("#outputResult"); // outputResult id'li input alanını seçtik

const currency = new Currency("USD", "TRY"); // Currency sınıfından bir currency nesnesi oluşturduk ve parametre olarak "USD" ve "TRY"yi verdik
const ui = new UI(firstSelect, secondSelect); // UI sınıfından bir ui nesnesi oluşturduk ve parametre olarak firstSelect ve secondSelect'i verdik

eventListeners(); // eventListeners fonksiyonunu çağırdık
function eventListeners() { // eventListeners fonksiyonunu tanımladık
    amountElement.addEventListener("input", exchangeCurrency); // amountElement'e input eventi ekledik
    firstSelect.onchange = function () { // firstSelect'e onchange eventi ekledik
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent); // currency nesnesinin changeFirstCurrency metodunu çağırdık ve parametre olarak firstSelect'in seçili option'ının textContent'ini verdik
        ui.changeFirst();// ui nesnesinin changeFirst metodunu çağırdık 
        exchangeCurrency(); // exchangeCurrency fonksiyonunu çağırdık
    };
    secondSelect.onchange = function () { // secondSelect'e onchange eventi ekledik
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent); // currency nesnesinin changeSecondCurrency metodunu çağırdık ve parametre olarak secondSelect'in seçili option'ının textContent'ini verdik
        ui.changeSecond(); // ui nesnesinin changeSecond metodunu çağırdık
        exchangeCurrency(); // exchangeCurrency fonksiyonunu çağırdık
    };

}

function updateLocalStorage() {
    const selectedCurrency = firstSelect.value
    const url = `https://v6.exchangerate-api.com/v6/734b173ac8c3b3ac58119dd3/latest/${selectedCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const value = data.conversion_rates; // API'den gelen değeri alın
            localStorage.setItem(selectedCurrency, JSON.stringify(value)); // localStorage'a kaydedin
            // console.log(`Para birimi ${selectedCurrency} olarak kaydedildi. Değer: ${JSON.stringify(value)}`);
            exchangeCurrency();
        })
        .catch(error => console.error('Hata:', error));
}

function exchangeCurrency() { // exchangeCurrency fonksiyonunu tanımladık
    currency.changeAmount(amountElement.value); // currency nesnesinin changeAmount metodunu çağırdık ve parametre olarak amountElement'in value'sunu verdik
    // local storage içerisinde veri var mı kontrol et
    if (localStorage.getItem(firstSelect.value)) {
        const data = JSON.parse(localStorage.getItem(firstSelect.value));
        const parity = data[currency.secondCurrency];
        const amount2 = Number(currency.amount);
        let total = parity * amount2;
        ui.displayResult(total);
        return;
    } else {
        updateLocalStorage()
    }
}

