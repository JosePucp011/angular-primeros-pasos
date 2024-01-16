export class Customer {
  id?: number;
  businessName: string;
  ruc: string;
  phone: string;
  state: boolean;

  constructor(businessName: string, ruc: string, phone: string, state:boolean){
    this.businessName=businessName;
    this.ruc=ruc;
    this.phone = phone;
    this.state = state;
  }
}
