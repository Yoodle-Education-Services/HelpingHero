import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise';

import { Request } from './request';

@Injectable()
export class HHDataService {
  constructor(private http: HttpClient) { 

  }

  private apiBaseUrl = 'http://localhost:3000/api/';

  public getServiceRequest(): Promise<Request[]> {
    const url: string = `${this.apiBaseUrl}/servicerequest`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Request[])
      .catch(this.handleError);
  }

  public createServiceRequest(formData: Request): Promise<Request> {
    const url: string = `${this.apiBaseUrl}/servicerequest`;
    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  // public updateServiceRequest(): Promise<Request[]> {
  //   const url: string = `${this.apiBaseUrl}/servicerequest`;
  //   return this.http
  //     .get(url)
  //     .toPromise()
  //     .then(response => response as Request[])
  //     .catch(this.handleError);
  // }

  // public createVolunteer(): Promise<Request[]> {
  //   const url: string = `${this.apiBaseUrl}/servicerequest`;
  //   return this.http
  //     .get(url)
  //     .toPromise()
  //     .then(response => response as Request[])
  //     .catch(this.handleError);
  // }
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}