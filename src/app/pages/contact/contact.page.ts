import { Component, ChangeDetectionStrategy } from '@angular/core'

interface IContactForm {
  fullName: string
  emailAddress: string
  subject: string
  message: string
}
interface IFormErrors {
  fullName: boolean
  emailAddress: boolean
  subject: boolean
  message: boolean
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

  formErrors: any = {
    fullName: false,
    emailAddress: false,
    subject: false,
    message: false
  }

  handleSubmit() {
    console.log(this.contactForm)
    // Check form is filled in
    for (const [key, value] of Object.entries(this.contactForm)) {
      this.formErrors[key] = !value
    }
    console.log(this.formErrors)
    // Return if invalid form
    for (const value of Object.values(this.formErrors)) {
      if (value) return console.log("Failed")
    }
    console.log("Passed")
  }
}
