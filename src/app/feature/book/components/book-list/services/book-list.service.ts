import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BookListService {

  constructor(private http: HttpClient) { }

  // get books list
  getBooks(): Observable<any> {
    const params = {
      q: 'book', limit: 9
    };
    return this.http.get<any>(environment.apiUrl + '/search.json', {
      params
    });
  }
}


