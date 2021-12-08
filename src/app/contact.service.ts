import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = "https://formsubmit.co/brendancjz@gmail.com";

  constructor(private http: HttpClient) { }


}
