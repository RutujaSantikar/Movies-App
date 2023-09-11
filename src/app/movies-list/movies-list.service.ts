import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {

  constructor(private http: HttpClient) { }
  
  public getMoviesList() : Observable<any> {
    const url = "https://in.bmscdn.com/m6/static/interview-mock/data.json"
    return this.http.get<any>(url);
  }

}


