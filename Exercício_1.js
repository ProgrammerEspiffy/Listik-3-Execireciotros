"use strict";
class User {
    // Método Construtor
    constructor(_email, _senha) {
        this.Admin = false;
        this.email = _email;
        this.senha = _senha;
    }
    // é ADM?
    isAdmin() {
        if (this.Admin == true) {
            console.log("Finalmente Você Virou ADM do Grupo do ZAP");
        }
        else {
            console.log("Você Deveria Parar De Bater Os Outros Com Um Cacetinho");
        }
    }
}
// Extensão DA Classe "User"
class Admin extends User {
    // Método Construtor com super & isAdmin é True
    constructor(_emailSuper, _senhaSuper) {
        super(_emailSuper, _senhaSuper);
        this.Admin = true;
    }
}
// Inserir coisas no User & Admin
let User1 = new User("paulo@email.com", "11223344");
User1.isAdmin();
let User2 = new Admin("admin@admin.com", "55667788");
User2.isAdmin();
