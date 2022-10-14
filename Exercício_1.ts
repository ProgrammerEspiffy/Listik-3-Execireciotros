class User {
    // Variáveis
    email: string;
    senha: string;
    Admin: boolean = false;

    // Método Construtor
    constructor(_email: string, _senha: string) {
        this.email = _email
        this.senha = _senha


    }

    // é ADM?
    isAdmin() {
        if (this.Admin == true) {
            console.log("Finalmente Você Virou ADM do Grupo do ZAP");

        } else {
            console.log("Você Deveria Parar De Bater Os Outros Com Um Cacetinho")
        }
    }
}

// Extensão DA Classe "User"
class Admin extends User {

    // Método Construtor com super & isAdmin é True
    constructor(_emailSuper: string, _senhaSuper: string) {
        super(_emailSuper, _senhaSuper)

        this.Admin = true
    }
}

// Inserir coisas no User & Admin
let User1: User = new User("paulo@email.com", "11223344");
User1.isAdmin();

let User2: Admin = new Admin("admin@admin.com", "55667788");
User2.isAdmin();