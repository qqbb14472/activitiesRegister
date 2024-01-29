import { Component, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Activity } from '../activity';
import { Customer } from '../customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //activityRegistered?:Activity;

  @Input()activity1?:Activity; 

  newCunstomerActivities:Array<number>=[];
  newCunstomername!: string;
  newCunstomervx!:string;
  newCunstomeremail!:string;
  newCunstomerphone!:number;
  newCunstomerID!:number;
  
  
  //customer=new Customer(1,'customer-name','customer-vx','customer-email',123,this.test);

  customer!:Customer;

  submitted = false;
  onSubmit(newCustomer:NgForm,activity:Activity){

    console.log(newCustomer.value);

    this.newCunstomerActivities.push(activity.id);
    this.newCunstomername=newCustomer.value[0];
    this.newCunstomervx=newCustomer.value[1];
    this.newCunstomeremail=newCustomer.value[2];
    this.newCunstomerphone=Number(newCustomer.value[3]);
    this.newCunstomerActivities=this.newCunstomerActivities;

    this.customer=new Customer(2,this.newCunstomername,this.newCunstomervx,this.newCunstomeremail,this.newCunstomerphone,this.newCunstomerActivities);


    console.log("customer ID is: "+  this.customer.id+ "activity id is:" + this.customer.customerRegisteredActivities[0]);
 
    
    this.submitted=true;
  }


}
