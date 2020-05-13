import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer'

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  volunteer: Volunteer = {
    id: 1,
    firstName: 'Johnny',
    lastName: 'Doe'

  };

  constructor() { }

  ngOnInit(): void {
  }

}
