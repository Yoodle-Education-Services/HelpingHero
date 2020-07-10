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
  request: Request;

  private getRequests(): void {
    this.hhDataService
      .getServiceRequest()
        .then(foundRequests => {
          this.requests = foundRequests;
          console.log('requests', this.requests);
        });
  }
  private editRequests(srvreqid: String): void {
    console.log("servicerequestid", srvreqid);
    this.hhDataService.getServiceRequestbyId(srvreqid).then(newRequest => {
      this.request = newRequest;
      console.log('requests', this.request);
    });
    this.hhDataService
      .updateServiceRequest(srvreqid, this.request)
        .then(foundRequest => {
          this.request = foundRequest;
          console.log('request', this.request);
        });
  }

  ngOnInit() {
    this.getRequests();
  }


}
