import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreModules } from '..';
import * as fromCustomers from '../reducers/customers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from '../effects/customer.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(StoreModules.Customers, fromCustomers.CustomersReducers),
    EffectsModule.forFeature([CustomerEffects])
  ]
})
export class CustomersStateModule { }
