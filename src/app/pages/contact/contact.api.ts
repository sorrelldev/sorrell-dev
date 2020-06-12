import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IContactForm } from './contact.models'

@Injectable()
export class ContactApi {
  constructor(public http: HttpClient) { }

  sendMail(contactForm: IContactForm) {
    return this.http.get(
      "https://us-central1-sorrell-dev.cloudfunctions.net/sendMail"
      + `?fullName=${contactForm.fullName}`
      + `&emailAddress=${contactForm.emailAddress}`
      + `&subject=${contactForm.subject}`
      + `&message=${contactForm.message}`
    )
  }
}