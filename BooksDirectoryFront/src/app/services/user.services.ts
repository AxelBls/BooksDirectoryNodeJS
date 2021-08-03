import { Injectable,NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as CryptoJS from "crypto-js";

@Injectable({
    providedIn: 'root'
})
export class UserServices{
    private readonly apiUrl = environment.apiURL;
    private userUrl = this.apiUrl + 'user';
    private algorithm = "aes-256-ctr";
    private password = "l5JmP+G0/1zB%;r8B8?2?2pcqGcL^3";

    constructor(private http: HttpClient){ }

    getUsers(): Observable<User[]>{
        return this.http.get<Observable<any>>(this.userUrl)
        .pipe(
            tap((rep:any) => console.log(rep)),
            map(rep => {
                return rep;
            })
        );
    }

    getOneUser(id:number): Observable<User>{
        return this.http.get<Observable<any>>(this.userUrl + '/' + id)
        .pipe(
            tap((rep:any) => console.log(rep)),
            map(rep => {
                let decrypted = CryptoJS.AES.decrypt(rep[0].mdp, this.password);
                console.log(decrypted);
                rep.mdp = decrypted;
                return rep;
            })
        );
    }

    deleteUser(id:number) {
        return this.http.delete<Observable<any>>(this.userUrl + '/' + id)
        .pipe(
            tap((rep:any) => console.log(rep)),
            map(rep => {
                return rep;
            })
        );
    }

    updateUser(user: User, id: number) {
        return this.http.put<Observable<any>>(this.userUrl + '/' + id, user)
        .pipe(
            tap((rep:any) => console.log(rep)),
            map(rep => {
                return rep;
            })
        );
    }

    createUser(user: User) {
        return this.http.post<Observable<any>>(this.userUrl, user)
        .pipe(
            tap((rep:any) => console.log(rep)),
            map(rep => {
                return rep;
            })
        );
    }
}