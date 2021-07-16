export class User {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    mail: string;
    telephone: string;
    mdp: string;
    role: string[];

    constructor(id: number, nom: string, prenom: string, age: number, mail: string, telephone: string, mdp: string){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.mail = mail;
        this.telephone = telephone;
        this.mdp = mdp;
        this.role = ["membre"];
    }

    static parse(user: any){
        return new User(user.id, user.nom, user.prenom, user.age, user.mail, user.telephone, user.mdp);
    }
}