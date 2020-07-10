import { Component, OnInit } from '@angular/core';
import { Request } from '../request'
import { HHDataService } from '../helpinghero-data.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  services = ['Cleaning', 'Cooking', 'Shopping', 'Walking'];

  public newRequest: Request ={
    requestID: 0,
    service: '',
    time: null,
    firstName: '',
    lastName: '',
    Email: '',
    city: '',
    state: '',
    zipcode: '',
    phoneNumber: '',
    birthdate: '',
    volunteerID: 0
   
  };

  submitted = false;

  onSubmit() { this.submitted = true; }
  public formVisible: boolean = false;
  public formError: string;

  private formIsValid(): boolean {
    if (this.newRequest.service && this.newRequest.time
      && this.newRequest.lastName && this.newRequest.firstName && this.newRequest.Email &&
      this.newRequest.city && this.newRequest.state && this.newRequest.zipcode && this.newRequest.phoneNumber
      && this.newRequest.birthdate) {
      return true;
    } else {
      return false;
    }
  }

  private resetAndHideRequestForm(): void {
    this.formVisible = false;
    this.newRequest.service = '';
    this.newRequest.time = null;
    this.newRequest.lastName = '';
    this.newRequest.Email = '';
    this.newRequest.firstName = '';
    this.newRequest.city = '';
    this.newRequest.state = '';
    this.newRequest.zipcode = '';
    this.newRequest.phoneNumber = '';
    this.newRequest.birthdate = '';
  }

  public onRequestSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      console.log(this.newRequest);
      this.hhDataService.createServiceRequest(
        this.newRequest)
        .then((request: Request) => {
          console.log('Request saved', request);
          //let reviews = this.location.reviews.slice(0);
         // reviews.unshift(review);
          //this.location.reviews = reviews;
          this.resetAndHideRequestForm();
        });
    } else {
      this.formError = 'All fields required, please try again';
    }
  }


  constructor(private hhDataService: HHDataService) { }

}
