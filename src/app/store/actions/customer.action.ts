import { createAction, props } from "@ngrx/store";

export const loadCustomers = createAction('Load all actions');

export const customersLoaded = createAction('Customer loaded', props<{customers:any[]}>());