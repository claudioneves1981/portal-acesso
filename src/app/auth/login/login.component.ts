import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../autenticacao.service';
import { AdministrativoService } from '../administrativo.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  formLogin!: FormGroup;
  formCadastro!: FormGroup;

  @ViewChild('alert') alert!: ElementRef;
  @ViewChild('msg') msg!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  constructor(private readonly formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private adminService: AdministrativoService,
    private route: Router){}

  ngOnInit(): void {
    this.criarFormulario();
    this.login();
  }

  criarFormulario(): void{
    this.formLogin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    })

    this.formCadastro = this.formBuilder.group({
        nomeCad: ['', [Validators.required]],
        usuarioCad: ['', [Validators.required]],
        senhaCad: ['', [Validators.required, Validators.minLength(8)]],
        senhaConfirma: ['', [Validators.required, Validators.minLength(8)]],
        admnistrativoCad:['', [Validators.required]]
      })
  }

  login(){
    if(!this.formLogin.valid){
      return;
    }
      this.authService.login(this.formLogin.getRawValue()).subscribe(
        {
            next: () => {
                    console.log("teste")
                    this.route.navigate(['toolbar']);
            },
            error: (erro) => {
                    this.alert.nativeElement.removeClass("hide");
                    this.alert.nativeElement.addClass("show");
                    this.alert.nativeElement.addClass("showAlert");
                    this.msg.nativeElement.text('erro ao tentar fazer o login');
            setTimeout(() =>{
                          this.alert.nativeElement.addClass("hide");
                          this.alert.nativeElement.removeClass("show");

            },5000);
            }
        }
    )
     // error: alert('teste')
      //this.alert.nativeElement.removeClass("hide");
      // this.alert.nativeElement.addClass("show");
      //  this.alert.nativeElement.addClass("showAlert");
      //  this.msg.nativeElement.text('erro ao tentar fazer o login');
     // setTimeout(() =>{
     //                     this.alert.nativeElement.addClass("hide");
    //                      this.alert.nativeElement.removeClass("show");
//
   // },5000);
    ;
  }

  confirma(){
    if(!this.formCadastro.valid){
      return;
    }
    this.adminService.inserir(this.formCadastro.getRawValue()).subscribe(admin => {
        this.route.navigate([''])
    },(error) => {this.alert.nativeElement.removeClass("hide");
      this.alert.nativeElement.addClass("show");
      this.alert.nativeElement.addClass("showAlert");
      this.msg.nativeElement.text('erro ao gravar usuario');
      setTimeout(() =>{
                          this.alert.nativeElement.addClass("hide");
                          this.alert.nativeElement.removeClass("show");

     },5000);
      });
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
