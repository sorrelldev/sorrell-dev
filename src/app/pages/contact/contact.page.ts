import { Component, ChangeDetectionStrategy } from '@angular/core'

interface IContactForm {
  fullName: string
  emailAddress: string
  subject: string
  message: string
}

@Component({
  selector: 'contact-page',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPage {
  contactForm: IContactForm = {
    fullName: "",
    emailAddress: "",
    subject: "",
    message: ""
  }

  ngOnInit() {

  }

  handleSubmit() {
    console.log(this.contactForm)
  }
}
