import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Book_detailsService {


  constructor(private http: HttpClient) { }

  // get book info 
  getBookInfo(bookName: string): Observable<any> {
    const params = {
      q: bookName,
    };
    return this.http.get<any>(environment.apiUrl + '/search.json', {
      params
    });
  }

}
