import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, effect } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { User, UserLogin } from './models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  //baseUrl = 'http://localhost:8080';

  private userSubject = new BehaviorSubject<any>(undefined);


  constructor(private http: HttpClient) { 
    const user = sessionStorage.getItem('usuario');
    if(user){

      this.userSubject.next(JSON.parse(user));
    }
  }


  login(userLogin: UserLogin): Observable<any> {
    return this.http.post(`/signin`, userLogin).pipe(
      map(data => {
        this.setUserSubject(data);

        return data;
      })
    );
  }

  private setUserSubject(user: any){
    sessionStorage.setItem('usuario', JSON.stringify(user));
    localStorage.setItem('access_token', user.token);
    this.userSubject.next(user);
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  getRoles(){
    return this.userSubject.getValue();
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  logout(){
    this.userSubject.next({
      login: '',
      token: ''
    });
    sessionStorage.clear();
    localStorage.clear();
  }


}