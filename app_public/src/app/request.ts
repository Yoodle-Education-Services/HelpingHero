import { Time } from '@angular/common';

export class Request {

    constructor(
        public requestID: number,
        public service: string,
        public time: Time,
        public firstName: string,
        public lastName: string,
        public email: string,
        public city: string,
        public state: string,
        public zip: string,
        public phoneNumber: string,
        public birthdate: string,
        public volunteerID: number
    ) {  }
  
  }