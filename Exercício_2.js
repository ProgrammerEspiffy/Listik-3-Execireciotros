"use strict";
class Carro {
    //Método Construtor
    constructor(_cor, _marca, _placa) {
        this.cor = _cor;
        this.marca = _marca;
        this.placa = _placa;
    }
    //Ler A Cor
    get _cor() {
        return this.cor;
    }
    //Ler A Marcar
    get _marca() {
        return this.marca;
    }
    //Ler A Placa
    get _placa() {
        return this.placa;
    }
    //Escrever a Cor
    set Cor(_cor) {
        this.cor = _cor;
    }
    //Escrever a Marca
    set Marca(_marca) {
        this.marca = _marca;
    }
    //Escrever a Placa    
    set Placa(_placa) {
        this.placa = this._placa;
    }
}
// Inserir A  Cor, Marca e Placa
let Carro1 = new Carro("Marrom", "Carango", "NPX-975");
console.log(Carro1);
let Carro2 = new Carro("Branco", "Pickaup", "PRO-455");
console.log(Carro2);
let Carro3 = new Carro("vermelho", "Shebaqui", "SIM-777");
console.log(Carro3);
