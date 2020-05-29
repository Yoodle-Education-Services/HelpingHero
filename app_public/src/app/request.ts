import { Time } from '@angular/common';

export class Request {

    constructor(
        public requestID: number,
        public service: string,
        public time: Time,
        public firstName: string,
        public lastName: string,
        public Email: string,
        public city: string,
        public state: string,
        public zipcode: string,
        public phoneNumber: string,
        public birthdate: string,
        public volunteerID: number
    ) {  }
  
  }