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

  formLogin!: FormGroup;
  formCadastro!: FormGroup;
  favOpcao!: string;
  opcoes: string[] = ["Sim","Não"];
  senhaConfirma!: string;
  isValidFormCadastroSubmitted: boolean = false;
 
  admin = {
    codigo: 0,
    nome: '',
    usuario: '',
    senha: '',
    roles: ['']
  }

  @ViewChild('alert') alert!: ElementRef;
  @ViewChild('msg') msg!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('nome') nome!: ElementRef;
  @ViewChild('usuario') usuario!: ElementRef;
  @ViewChild('senha') senha!: ElementRef;
  @ViewChild('opcao') opcao!: ElementRef;
 


  constructor( private readonly formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private adminService: AdministrativoService,
    private route: Router){}

  ngOnInit(): void {
    //this.criarLogin();
    this.criarCadastro();

  }

  criarCadastro(): void {
    
    
 }

 criarLogin(): void{
    this.formLogin = this.formBuilder.group({
      usuario: [this.usuario, Validators.required],
      senha: [this.senha, [Validators.required, Validators.minLength(8)]]
    })
  }

  cadastro(){

    this.admin.nome = this.nome.nativeElement.value
    this.admin.usuario = this.usuario.nativeElement.value
    this.admin.senha = this.senha.nativeElement.value

  
    //this.formCadastro = this.formBuilder.group({

   
    //nome: [this.admin.nome, Validators.required],
    //usuario: [this.admin.usuario, Validators.required],
    //senha: [this.admin.senha, [Validators.required, Validators.minLength(8)]],
   // roles:[[]]

  //})

    if(this.opcao.nativeElement.value == "Sim" && this.opcao.nativeElement.checked){

      //this.formCadastro.patchValue({
        this.admin.roles = ["ROLE_ADMIN", "ROLE_USERS"]
     // })

    }else{

      //this.formCadastro.patchValue({
        this.admin.roles = ["ROLE_USERS"]
      //})

    }

    //console.log(this.admin);

    this.adminService.inserir(this.admin).subscribe(
      {
          next: () => {
                  console.log("teste")
                  this.route.navigate(['/']);
          },
          error: (erro) => {
            alert('erro');
          }
      }
  );

  }

  login(){
      this.authService.login(this.formLogin.getRawValue()).subscribe(
        {
            next: () => {
                    console.log("teste")
                    this.route.navigate(['home']);
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


