import { Injectable, NgModule } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from "rxjs";
import { Book } from "../models/book.model";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class BookServices{
    private readonly apiUrl = environment.apiURL;
    private bookUrl = this.apiUrl + 'book';

    constructor(private http: HttpClient){

    }

    getBooks(): Observable<Book[]>{
        return this.http.get<Observable<any>>(this.bookUrl)
        .pipe(
            tap((rep:any) => console.log(rep)),
            map(rep => {
                return rep;
            })
        );
    }

    getOneBook(id:number): Observable<Book>{
        return this.http.get<Observable<any>>(this.bookUrl + '/' + id)
        .pipe(
            tap((rep:any) => console.log(rep)),
            map(rep => {
                return rep;
            })
        );
    }

    updateBook(book: Book): Observable<Book> {
        const url = '${this.bookUrl}/${book.id}';
        const formData: FormData = new FormData();
        formData.append('titre', book.titre);
        formData.append('nomAuteur', book.nomAuteur);
        formData.append('prenomAuteur', book.prenomAuteur);
        formData.append('noTome', book.noTome);

        return this.http.put<Observable<Book>>(url, formData)
        .pipe(
            tap((rep: any) => console.log(rep)),
            map(b => Book.parse(b.data)),
        );
    }

}