import { Component, OnInit } from '@angular/core';
import { Request } from '../request'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  services = ['Cleaning', 'Cooking', 'Shopping', 'Walking'];

  request = new Request(
    1,
    this.services[0],
    "4:00pm - 6:00pm",
    'Mike',
    'Jones',
    'whomjones@email.com',
    'Kansas City',
    'MO',
    '64130',
    '222-222-2222',
    '06/02/1950',
    1
  );

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

}
