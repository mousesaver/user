import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.baseUrl).pipe(map((response) => {
      return response.data
    })
    )
  }
}
