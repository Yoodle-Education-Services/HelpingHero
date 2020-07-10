import { Component, OnInit } from '@angular/core';
import { HHDataService } from '../helpinghero-data.service';
import { Volunteer } from '../volunteer'

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent {
  services = ['Cleaning', 'Cooking', 'Shopping', 'Walking'];
  
  public newVolunteer : Volunteer ={
    volunteerID: 0,
    firstName: '',
    lastName: '',
    Email: '',
    city: '',
    state: '',
    zipcode: '',
    phoneNumber: '',
    birthdate: '',
    service: '',
  };

  submitted = false;

  onSubmit() { 
     console.log('SUBMIT');
  this.submitted = true; }
  public formVisible: boolean = false;
  public formError: string;

  private formIsValid(): boolean {
    if (this.newVolunteer.service && this.newVolunteer.firstName
      && this.newVolunteer.Email && this.newVolunteer.city
      && this.newVolunteer.state && this.newVolunteer.zipcode && this.newVolunteer.phoneNumber 
      && this.newVolunteer.birthdate && this.newVolunteer.lastName) {
      return true;
    } else {
      return false;
    }
  }

  private resetAndHideVolunteerForm(): void {
    this.formVisible = false;
    this.newVolunteer.service = '';
    this.newVolunteer.firstName = '';
    this.newVolunteer.lastName = '';
    this.newVolunteer.Email = '';
    this.newVolunteer.city = '';
    this.newVolunteer.state = '';
    this.newVolunteer.zipcode = '';
    this.newVolunteer.phoneNumber = '';
    this.newVolunteer.birthdate = '';
  }

  public onVolunteerSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      console.log(this.newVolunteer);
      this.hhDataService.createVolunteer(
        this.newVolunteer)
        .then((volunteer: Volunteer) => {
          console.log('Volunteer saved', volunteer);
          //let reviews = this.location.reviews.slice(0);
         // reviews.unshift(review);
          //this.location.reviews = reviews;
          this.resetAndHideVolunteerForm();
        });
    } else {
      this.formError = 'All fields required, please try again';
    }
  }


  constructor(private hhDataService: HHDataService) { }

}
