import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Admin, UserAdministrativo } from './models/user.models';

@Injectable({
  providedIn: 'root'
})

export class AdministrativoService {

    ///baseUrl = 'http://localhost:8080';
  
    private adminSubject = new BehaviorSubject<any>(undefined)
  
    constructor(private http: HttpClient) { 
  
    }
  
    inserir(userAdministrativo: UserAdministrativo) : Observable<any>{

      return this.http.post(`/administrativo/salvar`, userAdministrativo).pipe(
        
      map(data => {
          
          this.setAdminSubject(data)
  
          return data;
        }) 

      );

    }
  
    private setAdminSubject(admin: any): void{
      //sessionStorage.setItem('usuario', JSON.stringify(user));
      this.adminSubject.next(admin);
    }
  
    getUser(){
      return this.adminSubject.asObservable();
    }
  
    getRoles(){
      return this.adminSubject.getValue();
    }
  
  
  }