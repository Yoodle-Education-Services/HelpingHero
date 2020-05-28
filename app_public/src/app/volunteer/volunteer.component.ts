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
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    null,
    null,
    this.services[0]
  );

  submitted = false;

  onSubmit() { 
    console.log('SUBMIT');
    this.submitted = true; }

}