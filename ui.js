class UI{
    constructor(firstSelect,secondSelect,result){ // UI sınıfının constructor metodunu tanımladık ve parametre olarak firstSelect ve secondSelect'i verdik
        this.firstSelect = firstSelect; // this.firstSelect'e firstSelect'i atadık
        this.secondSelect = secondSelect; // this.secondSelect'e secondSelect'i atadık
        this.result = result; // this.result'a result'u atadık
        this.outputFirst = document.getElementById("outputFirst"); // this.outputFirst'e id'si "outputFirst" olan elementi atadık
        this.outputSecond = document.getElementById("outputSecond"); // this.outputSecond'a id'si "outputSecond" olan elementi atadık
        this.resaultElement = document.getElementById("outputResult"); // this.outputResult'a id'si "outputResult" olan elementi atadık
    }
     changeFirst(){ // changeFirst metodunu tanımladık
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent; // this.outputFirst'in textContent'ine this.firstSelect'in seçili option'ının textContent'ini atadık
    }
     changeSecond(){ // changeSecond metodunu tanımladık
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent; // this.outputSecond'ın textContent'ine this.secondSelect'in seçili option'ının textContent'ini atadık
    }
    displayResult(result){ // displayResult metodunu tanımladık ve parametre olarak result'u verdik
        this.resaultElement.value = result// this.outputResult'un value'sine result'u atadık
    }

}