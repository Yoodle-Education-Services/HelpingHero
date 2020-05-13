import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer'

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  volunteer: Volunteer = {
    volunteerID: 1,
    firstName: 'Johnny',
    lastName: 'Doe',
    email: 'jdoe@email.com',
    city: 'Kansas City',
    state: 'MO',
    zipCode: '64130',
    phoneNumber: '111-111-1111',
    dateofBirth: '08/01/1995',
    services: 'Cleaning, Cooking'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
