import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersStateModule } from '../customers-state.module';

const MODULES = [
  CustomersStateModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULES
  ],
  exports : [
    MODULES
  ]
})
export class StateModule { }
