import { Component, NgModule, OnInit } from '@angular/core';
import { HHDataService } from '../helpinghero-data.service';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { RequestComponent } from '../request/request.component';
import { Request } from '../request';


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

  constructor(private hhDataService: HHDataService) { }

  requests: Request[];

  private getRequests(): void {
    this.hhDataService
      .getServiceRequest()
        .then(foundRequests => {
          this.requests = foundRequests;
        });
  }

  ngOnInit() {
    this.getRequests();
  }


}
