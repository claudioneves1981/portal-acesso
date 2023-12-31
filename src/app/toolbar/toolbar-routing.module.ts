import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ToolbarComponent} from './toolbar/toolbar.component';
import { authGuardsGuard } from '../guards/auth-guards.guard';

const routes: Routes = [{
    path: 'home', component: ToolbarComponent, canActivate:[authGuardsGuard], data:{ roles:'ROLE_USERS'}
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ToolbarRoutingModule{ }
