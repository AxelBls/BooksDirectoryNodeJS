export class Book {
    id: number;
    titre: string;
    nomAuteur: string;
    prenomAuteur: string;
    noTome: string;
    img?: string;

    constructor(id: number, titre: string, nomAuteur: string, prenomAuteur: string, noTome: string, img: string) {
        this.id = id;
        this.titre = titre;
        this.nomAuteur = nomAuteur;
        this.prenomAuteur = prenomAuteur;
        this.noTome = noTome;
        this.img = img;
    }

    static parse(book: any){
        return new Book(book.id, book.titre, book.nomAuteur, book.prenomAuteur, book.noTome, book.img)
    }
}