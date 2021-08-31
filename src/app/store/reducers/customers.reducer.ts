import {createEntityAdapter ,EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { customersLoaded } from "../actions/customer.action";

export interface CustomerState extends EntityState<any>{

}

export const customerEntityAdapter = createEntityAdapter<any>();
export const initialCustomersState = customerEntityAdapter.getInitialState({});

const customerStateReducer = createReducer(
    initialCustomersState,
    on(customersLoaded, (state, action)=> customerEntityAdapter.addMany(action.customers, state))
)

export const {selectAll, selectIds, selectEntities} = customerEntityAdapter.getSelectors()

export function CustomersReducers(state: CustomerState|undefined, action: Action){
    return customerStateReducer(state, action)
}