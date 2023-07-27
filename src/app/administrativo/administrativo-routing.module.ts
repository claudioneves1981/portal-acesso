import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrativoComponent} from './administrativo/administrativo.component';
import { authGuardsGuard } from '../guards/auth-guards.guard';

const routes: Routes =[{
path: '', component: AdministrativoComponent, canActivate:[authGuardsGuard], data:{ roles:'ROLE_ADMIN'}
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrativoRoutingModule{ }