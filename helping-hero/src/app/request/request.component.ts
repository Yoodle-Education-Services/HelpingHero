import { Component, OnInit } from '@angular/core';
import { Request } from '../request'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request: Request = {
    requestID: 1,
    firstName: 'Mike',
    lastName: 'Jones',
    email: 'whomjones@email.com',
    city: 'Kansas City',
    state: 'MO',
    zipCode: '64130',
    phoneNumber: '222-222-2222',
    dateofBirth: '06/02/1950',
    services: 'Cooking, Cleaning',
    time: '4:00pm - 6:00pm',
    volunteerID: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
