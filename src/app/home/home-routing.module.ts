import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AuthGuardsGuard } from '../guards/auth-guards.guard';

const routes: Routes = [{
    path: '', component: HomeComponent, canActivate:[AuthGuardsGuard], data:{ roles:'ROLE_USER'}
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRoutingModule{ }


