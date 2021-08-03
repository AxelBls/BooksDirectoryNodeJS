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
    private userUrl = this.apiUrl + 'user';
    private loginUrl = this.apiUrl + 'login';
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient){
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    onLogin(user: any): Observable<{} | User> {
        const request = JSON.stringify({email: user.email, password: user.password});
        const url = this.loginUrl;
        return this.http.post(this.loginUrl, request, httpOptions)
          .pipe(
            tap(data => {
              console.log('le retour', data);
            }),
            map((data: any) => {
              let utilisateur;
              utilisateur = User.parse(data[0]);
              console.log(this.currentUser);
              localStorage.setItem('currentUser', JSON.stringify(utilisateur));
              this.currentUserSubject.next(utilisateur);
              return utilisateur;
            }));
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