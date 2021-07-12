export class Book {
    id: number;
    titre: string;
    nomAuteur: string;
    prenomAuteur: string;

    constructor(id: number, titre: string, nomAuteur: string, prenomAuteur: string) {
        this.id = id;
        this.titre = titre;
        this.nomAuteur = nomAuteur;
        this.prenomAuteur = prenomAuteur;
    }

    static parse(book: any){
        return new Book(book.id, book.titre, book.nomAuteur, book.prenomAuteur)
    }
}