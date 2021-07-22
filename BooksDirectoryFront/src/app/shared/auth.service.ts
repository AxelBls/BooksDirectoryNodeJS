import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";
import { map, tap } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Accept: 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private readonly apiUrl = environment.apiURL;
    private userUrl = this.apiUrl + 'user'
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient){
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    onRegister(valeur: {user: User}) {
        const request = JSON.stringify({
            nom: valeur.user.nom, prenom: valeur.user.prenom, age: valeur.user.age, mail: valeur.user.mail, telephone: valeur.user.telephone, mdp: valeur.user.mdp
        });
        return this.http.post(this.userUrl, request, httpOptions)
        .pipe(
            tap(data => {
                console.log('retour du register', data);
            }),
            map((data: any) => {
                let utilisateur;
                utilisateur = User.parse(data)
                return utilisateur;
            })
        );
    };
}