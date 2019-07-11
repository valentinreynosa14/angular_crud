import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './people';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://localhost';

  constructor(private httpClient: HttpClient) { }

  createPeople(people: People): Observable<People> {
    return this.httpClient.post<People>(`${this.PHP_API_SERVER}/apirest/create.php`, people);
  }

}
