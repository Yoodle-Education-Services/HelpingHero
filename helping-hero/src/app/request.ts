export class Request {

    constructor(
        public requestID: number,
        public service: string,
        public time: string,
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