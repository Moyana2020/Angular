import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { PeopleService } from "services/people.service";
import { customersLoaded, loadCustomers } from "../actions/customer.action";

@Injectable()
export class CustomerEffects{

    loadCustomers = createEffect(()=>
    this.action.pipe(
        ofType(loadCustomers),
        mergeMap(action  => this.peopleService.getCustomers()),
        map(payload => customersLoaded({customers: payload}))
    )
   )
    constructor(private peopleService: PeopleService, private action : Actions){

    }
}