import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Game } from '../model/game.model'




const path= "https://amamentacao.herokuapp.com/answers"
@Injectable({ providedIn: 'root'})
export class GameService {
    constructor(private http: HttpClient) {}

    public game(game: Game): Observable<any> {
        return this.http.post<any>(path,game)
    }
}