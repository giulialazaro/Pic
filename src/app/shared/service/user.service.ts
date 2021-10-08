import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CreateUser } from '../model/user.model'



const path= "https://amamentacao.herokuapp.com/localhost:3000/users"
@Injectable({ providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) {}

    public createGroup(createUser: CreateUser): Observable<any> {
        return this.http.post<any>(path,createUser)
    }
}