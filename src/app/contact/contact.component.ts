import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name:string = '';
  emailAdd:string = '';
  message:string = '';
  messageSent:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail() {
    //1. Check that the inputs are all valid.
    this.name = this.name.trim();
    this.emailAdd = this.emailAdd.trim();
    this.message = this.message.trim();

    if (this.name.length > 0 && 
      this.emailAdd.length > 0 && this.emailAdd.includes('@') &&
      this.message.length > 0) {
        alert("sending email");
        //2. Send the email.


        this.messageSent = true;
      }
    

    //3. Refresh the page with new Message Sent!
  }

  updateName(name: string) {
    this.name = name;
  }
  updateEmail(email: string) {
    this.emailAdd = email;
  }
  updateMessage(message: string) {
    this.message = message;
  }


}
