import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Points } from '../model/points.model'


const path= "https://amamentacao.herokuapp.com/answers/total_points"
@Injectable({ providedIn: 'root'})
export class PointsService {
    constructor(private http: HttpClient) {}

    public points(idUser: string): Observable<any> {
        return this.http.get<any>(path, {params: {id: idUser}});
    }
}