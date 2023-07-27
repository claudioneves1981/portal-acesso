import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    PesquisaComponent
  ],
  imports: [
    CommonModule,
    PesquisaRoutingModule,
    MaterialModule
  ]
})
export class PesquisaModule { }