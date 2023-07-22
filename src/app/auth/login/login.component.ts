import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../autenticacao.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;

  formLogin!: UntypedFormGroup;
  formCadastro!: UntypedFormGroup;

  constructor(private readonly formBuilder: UntypedFormBuilder,
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
}