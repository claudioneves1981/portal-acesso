import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Rota publica
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'toolbar', loadChildren: () => import('./toolbar/toolbar.module').then(m => m.ToolbarModule)},
  { path: 'login', loadChildren: () => import('./auth/login.module').then(m => m.LoginModule)},
  { path: 'administrativo', loadChildren: () => import('./administrativo/administrativo.module').then(m => m.AdministrativoModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule)},
  { path: 'pesquisa', loadChildren: () => import('./pesquisa/pesquisa.module').then(m => m.PesquisaModule)},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }