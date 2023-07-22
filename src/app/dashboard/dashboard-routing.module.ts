import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuardsGuard } from '../guards/auth-guards.guard';

const routes: Routes =[{
path: '', component: DashboardComponent, canActivate:[AuthGuardsGuard], data:{ roles:'ROLE_ADMIN'}
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule{ }