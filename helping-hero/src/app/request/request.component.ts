import { Component, OnInit } from '@angular/core';
import { Request } from '../request'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request: Request = {
    id: 1,
    firstName: 'Mike',
    lastName: 'Jones',
    body: 'Cleaning'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
