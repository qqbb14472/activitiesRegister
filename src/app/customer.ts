import { Activity } from "./activity";

export class Customer {
    id!:number;
    customerName!:string;
    customerVX!:string;
    customerEmail!:string;
    customerPhone!:number;
    customerRegisteredActivities!: number[];


constructor(id:number,customerName:string,customerVX:string,customerEmail:string,customerPhone:number,customerRegisteredActivities: number[]){
    this.id=id;
    this.customerName=customerName;
    this.customerVX=customerVX;
    this.customerEmail=customerEmail;
    this.customerPhone=customerPhone;
    this.customerRegisteredActivities=customerRegisteredActivities;
}


}
