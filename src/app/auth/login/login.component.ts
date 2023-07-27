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

  constructor(private readonly formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private adminService: AdministrativoService,
    private route: Router){}

  ngOnInit(): void {
    this.criarFormulario();
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
    this.authService.login(this.formLogin.getRawValue()).subscribe(user => {
      this.route.navigate(['home'])
    },(error) => {
      alert('erro ao tentar fazer o login')
    });
  }

  confirma(){
    if(!this.formCadastro.valid){
      return;
    }
    this.adminService.inserir(this.formCadastro.getRawValue()).subscribe(admin => {
        this.route.navigate([''])
    },(error) => {
        alert('erro ao gravar usuario')
      });
    }

    @ViewChild('overlay') overlay!: ElementRef;
    flipToLogin(){
      this.overlay.nativeElement.classList.remove('over-left');
      this.overlay.nativeElement.classList.add('over-right');
    }

    flipToSignup(){
      this.overlay.nativeElement.classList.remove('over-right');
      this.overlay.nativeElement.classList.add('over-left');    
    }

}
