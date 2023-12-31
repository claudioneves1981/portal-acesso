import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PesquisaComponent} from './pesquisa/pesquisa.component';
import { authGuardsGuard } from '../guards/auth-guards.guard';

const routes: Routes = [{
    path: '', component: PesquisaComponent, canActivate:[authGuardsGuard], data:{ roles:'ROLE_USER'}
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PesquisaRoutingModule{ }
