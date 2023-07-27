import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '../auth/auth-routing.module';
import { LoginComponent } from '../auth/login/login.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
      LoginComponent,
      
    ],
    imports: [
      CommonModule,
      AuthRoutingModule,
      MaterialModule
    ],
    exports:[
        LoginComponent,
    ]
  })
  export class SharedModule { }