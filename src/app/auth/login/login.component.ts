import { Component, Input, VERSION, ViewChild, ElementRef, Injectable, Inject } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, NgModel, UntypedFormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../autenticacao.service';
import { AdministrativoService } from '../administrativo.service';
import { Route, Router } from '@angular/router';
import { Admin, User } from '../models/user.models';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  hide = true;

  favOpcao!: string;
  opcoes: string[] = ["Sim","Não"];
 
  admin = {
    codigo: 0,
    nome: '',
    usuario: '',
    senha: '',
    roles: ['']
  }

  acesso = {

    username: '',
    password: ''

  }

  @ViewChild('alert') alert!: ElementRef;
  @ViewChild('msg') msg!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('nome') nome!: ElementRef;
  @ViewChild('usuario') usuario!: ElementRef;
  @ViewChild('senha') senha!: ElementRef;
  @ViewChild('opcao') opcao!: ElementRef;
  @ViewChild('usuarioLogin') usuarioLogin!: ElementRef;
  @ViewChild('senhaLogin') senhaLogin!: ElementRef;

 


  constructor( private readonly formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private adminService: AdministrativoService,
    private route: Router){}

  ngOnInit(): void {
   // this.login();
    //this.cadastro();
  }


  cadastro(){

    this.admin.nome = this.nome.nativeElement.value
    this.admin.usuario = this.usuario.nativeElement.value
    this.admin.senha = this.senha.nativeElement.value

    if(this.opcao.nativeElement.value == "Sim" && this.opcao.nativeElement.checked){

        this.admin.roles = ["ROLE_ADMIN", "ROLE_USERS"]

    }else{

        this.admin.roles = ["ROLE_USERS"]

    }

    this.adminService.inserir(this.admin).subscribe(
      {
          next: () => {
                  this.route.navigate(['/']);
          },
          error: (erro) => {
            alert('erro');
          }
      }
  );

  }

  login(){

    this.acesso.username= this.usuarioLogin.nativeElement.value
    this.acesso.password = this.senhaLogin.nativeElement.value

      this.authService.login(this.acesso).subscribe(
        {
            next: () => {
                    this.route.navigate(['/home']);
            },
            error: (erro) => {
              alert('erro');
            }
        }
    );
  }


    flipToLogin(){
      this.overlay.nativeElement.classList.remove('over-left');
      this.overlay.nativeElement.classList.add('over-right');
    }

    flipToSignup(){
      this.overlay.nativeElement.classList.remove('over-right');
      this.overlay.nativeElement.classList.add('over-left');    
    }

}


