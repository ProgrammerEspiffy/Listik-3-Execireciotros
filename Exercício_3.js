"use strict";
class Animais {
    // Método Construtor
    constructor(_porte, _idade, _peso) {
        this.porte = _porte;
        this.idade = _idade;
        this.peso = _peso;
    }
}
// Classe "Felinos" é Extensão da classe Animais
class Felinos extends Animais {
    constructor(_portesuper, _idadesuper, _pesosuper) {
        super(_portesuper, _idadesuper, _pesosuper);
    }
    // Métodos
    AfiarGarras() {
        console.log("Afiando As Garras...");
    }
    // Métodos
    Dormir() {
        console.log("Cochilando...zzzzzzzzz");
    }
}
// Chamando os Métodos do "Felinos"
let Felino1 = new Felinos("Pequeno", 3, 5);
Felino1.AfiarGarras();
Felino1.Dormir();
let Felino2 = new Felinos("Grande", 10, 50);
Felino2.AfiarGarras();
Felino2.Dormir();
