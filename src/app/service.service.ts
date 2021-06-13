import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) {}

  public getVolunteersCount(): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:3333/volunteers-no`);
  }
  public postNewVolunteer(bodyParams: any): Observable<any> {
    return this.httpClient.post(`http://127.0.0.1:3333/volunteers/add`, bodyParams);
  }
}
