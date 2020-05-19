import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer'

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent {
  services = ['Cleaning', 'Cooking', 'Shopping', 'Walking'];
  
  volunteer = new Volunteer(
    1,
    'Johnny',
    'Doe',
    'jdoe@email.com',
    'Kansas City',
    'MO',
    '64130',
    '111-111-1111',
    '08/01/1995',
    this.services[0]
  );

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }
}
