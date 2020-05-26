import { Component, NgModule, OnInit } from '@angular/core';

import { VolunteerComponent } from '../volunteer/volunteer.component';
import { RequestComponent } from '../request/request.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  submitted = false;

  onSubmit() { 
    console.log('submitted');
    this.submitted = true;
  }


  ngOnInit(): void {
  }

}
