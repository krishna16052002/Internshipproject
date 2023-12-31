import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { loadStripe, } from '@stripe/stripe-js';
import { ToastrService } from 'ngx-toastr';
import { StripeService } from 'src/app/service/stripe.service';
@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent {
  selectddefaultid: any;
  defalutcard: any;
  cardLists: any;
  AddCardUser: any;
  cardlist: any = true;
  stripe: any;
  cardElement: any;
  paymentElement: any;
  elements: any;
  addcard: any;
  userid: any;
  userdata: any;
  carddata: any;
  isDefault: any;


  constructor(public dialogRef: MatDialogRef<StripeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: userdata, private http: HttpClient, private toster: ToastrService , private _stripeService : StripeService) { }


  async ngOnInit() {
    console.log(this.data);


    this.userdata = this.data.userdata;
    this.userid = this.userdata._id
    console.log(this.userdata);

    this.stripe = await loadStripe('pk_test_51NTisDLigteWfcRnZkQoTywuss8lTd3CUnil3xexs59lKQIlJcgEeJWCiMuExlDGlmtazauK0nBRj1hk6HoZOx9Q00Wt2DV8X0');
    this.elements = this.stripe.elements();


    this.cardElement = this.elements.create('card');

    this.cardElement.mount('#card-element');
    this.getCard(this.userid)


  }
  // setDefault() {
  //   this.isDefault = !this.isDefault;
  // }

  async addCard(id: any) {
    console.log(id);

      const paymentMethod = await this.stripe.createToken(
        this.cardElement,
      );
      const token = await paymentMethod.token
      console.log('succes: ',await  paymentMethod.token);

      const response = await fetch(`http://localhost:8080/createcustomerandaddcard/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({token})
      });

      this.getCard(this.userid);

  }

  getCard(id: any) {
    const userid = id
    this._stripeService.getcard(id).subscribe({
      next: (res: any) => {
        this.carddata = res;
        console.log(this.carddata);


      },
      error: (error) => {
        console.log(error);
      }
    })
  }



 deleteCard(id: any) {
  console.log(id); //  get a card id
    // const confirmDelete = confirm("Are you sure you want to delete this card?");
    // if (confirmDelete) {
      this._stripeService.deletecard(id).subscribe({
        next: (res: any) => {
          this.toster.success(res.message)
          this.getCard(this.userid)
        },
        error: (error) => {
          console.log(error);
        }
      })
    // }
  }

  async SetDefault(customerId: any,cardId: any) {
    console.log(customerId);
    console.log(cardId);
    this.http
      .patch(`http://localhost:8080/default-card/${customerId}`, { cardId })
      .subscribe(
        (data:any) => {
          console.log(data);
          this.isDefault = cardId;
           this.getCard(this.userid)
        },
        (error:any) => {
          console.error("Error:", error);
        }
      );
  }


  closeDialog(): void {
    this.dialogRef.close();
  }


}
export interface userdata {
  userdata: String;
}
