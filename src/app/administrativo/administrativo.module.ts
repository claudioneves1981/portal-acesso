import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativoRoutingModule } from './administrativo-routing.module';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AdministrativoComponent
  ],
  imports: [
    CommonModule,
    AdministrativoRoutingModule,
    MaterialModule
  ]
})
export class AdministrativoModule { }