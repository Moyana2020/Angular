import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StoreModules } from "..";
import { CustomerState } from "../reducers/customers.reducer";
import * as fromCustomers from "../reducers/customers.reducer";

export const selectCustomerState = createFeatureSelector<CustomerState>(StoreModules.Customers)

export const selectAllCustomers = () => createSelector(
    selectCustomerState,
    fromCustomers.selectAll
)