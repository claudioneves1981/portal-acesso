import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, UserLogin } from './models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  baseUrl = 'http://localhost:8080';

  private userSubject = new BehaviorSubject<User>({usuario: '', roles: []});


  constructor(private http: HttpClient) { 
    const user = sessionStorage.getItem('usuario');
    if(user){

      this.userSubject.next(JSON.parse(user));
    }
  }

  login(userLogin: UserLogin): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userLogin).pipe(
      map(data => {
        
        this.setUserSubject(data)

        return data;
      })
    );
  }

  private setUserSubject(user: any){
    sessionStorage.setItem('usuario', JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  getRoles(){
    return this.userSubject.getValue();
  }

  logout(){
    this.userSubject.next({
      usuario: '',
      roles: []
    });
    sessionStorage.clear();
  }


}