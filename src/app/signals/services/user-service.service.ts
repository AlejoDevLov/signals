import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { APIUser, User } from '../interfaces/user-api.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users'

  constructor() { }

  getUserById( id: number ): Observable<User>{
    return this.http.get<APIUser>(`${ this.baseUrl }/${ id }`)
      .pipe(
        map( userResp => userResp.data),
        tap( console.log)
      )
  }

}
