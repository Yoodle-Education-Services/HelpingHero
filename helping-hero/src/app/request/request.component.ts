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
    0,
    this.services[0],
    null,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    0
  );

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

}
