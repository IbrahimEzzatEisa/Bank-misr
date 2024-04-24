import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  // get author info list
  getAuthorInfo(autherName: string): Observable<any> {
    const params = {
      q: autherName,
    };
    return this.http.get<any>(environment.apiUrl + '/search/authors.json', {
      params
    });
  }
}
