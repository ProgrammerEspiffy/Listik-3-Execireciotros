// Classe Pessoa
class Pessoa {

    nome: string;
    endereco: string;
    cpf: number;

    constructor(_nome: string, _endereco: string, _cpf: number) {
        this.nome = _nome;
        this.endereco = _endereco
        this.cpf = _cpf
    }

}

//Classe Estudante
class Estudante extends Pessoa {

    serie: number;
    turno: string

    constructor(_nomesuper: string, _enderecosuper: string, _cpfsuper: number, _serie: number, _turno: string) {
        super(_nomesuper, _enderecosuper, _cpfsuper);

        this.serie = _serie
        this.turno = _turno
    }
}

// Listar todos os alunos
let Aluno1 = new Estudante("Pedro", "Rua dos risos 01", 11223344566, 1, "Manhã")
console.log(Aluno1)
let Aluno2 = new Estudante("Oliver", "Rua Viniccius 13", 17490845099, 1, "Manhã")
console.log(Aluno2)
let Aluno3 = new Estudante("Vinícius", "Avenida Redstone 1313", 74758485385, 2, "Manhã")
console.log(Aluno3)
let Aluno4 = new Estudante("Davi", "Avenida Decoração 13", 12345678913, 2, "Manhã")
console.log(Aluno4)
let Aluno5 = new Estudante("João", "Rua Joãozin Gameplays 97", 19961997200, 3, "Manhã")
console.log(Aluno5)
let Aluno6 = new Estudante("Luan", "Rua Mic Estouradasso 200", 22333444555, 3, "Tarde")
console.log(Aluno6)
let Aluno7 = new Estudante("Eric", "Rua Bempaga 101", 55566677788, 4, "Tarde")
console.log(Aluno7)
let Aluno8 = new Estudante("Ygor", "Avenida Playboi 93", 20072022210, 4, "Tarde")
console.log(Aluno8)
let Aluno9 = new Estudante("Henrique", "Rua Burro de Carga 93", 20063950131, 5, "Tarde")
console.log(Aluno9)
let Aluno10 = new Estudante("Gabrielly", "Rua What the 7054", 11223344566, 5, "Tarde")
console.log(Aluno10)