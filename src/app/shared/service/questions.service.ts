import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Question } from '../model/questions.model'




const path= "https://amamentacao.herokuapp.com/questions/list"
@Injectable({ providedIn: 'root'})
export class QuestionsService {
    constructor(private http: HttpClient) {}

    public questions(idGrupo: any): Observable<Question[]> {
        let params = {}
        if (idGrupo) {        
            params =  { room_id: idGrupo }
        }
        return this.http.get<Question[]>(path, {params});
    }
}