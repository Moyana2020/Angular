import { Component, ViewEncapsulation } from '@angular/core';
import { Customer } from 'app/model/customer';
import { PeopleService } from 'services/people.service';



@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent {

customers : any;
    constructor(private service: PeopleService) {
      this.service.getCustomers().subscribe(customers => {
            if(customers){
                this.customers = customers
            }

        },(err)=>{
            console.log("error", err)
        } );
    }
    
    isLoading = true;
    searchInputControl = '';
    createCustomer() {

    }
}
