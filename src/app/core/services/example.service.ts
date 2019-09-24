import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private readonly http: HttpClient) { }

  getTickets(): Observable<Array<any>> {
    return this.http.get<Array<any>>("../assets/tickets.json");
  }

}
