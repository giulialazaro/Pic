import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CreateGroup, ListGroup } from '../model/group.model';




const path= "https://amamentacao.herokuapp.com//rooms"
@Injectable({ providedIn: 'root'})
export class GroupService {
    constructor(private http: HttpClient) {}

    public createGroup(createGroup: CreateGroup): Observable<ListGroup> {
        return this.http.post<ListGroup>(path,createGroup)
    }
}