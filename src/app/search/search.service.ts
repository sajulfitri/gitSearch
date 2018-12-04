import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private gitApi = 'https://api.github.com/search/repositories?';
  constructor(private http: HttpClient) { }

  getSearchResult(searchQuery, page, pageLimit): Observable<any> {
       return this.http.get(`${this.gitApi}q=${searchQuery}&per_page=${pageLimit}`);

  }

}
