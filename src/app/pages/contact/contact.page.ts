import { Component, ChangeDetectionStrategy } from '@angular/core'
import { IContactForm } from './contact.models'
import { ContactApi } from './contact.api'
import { first } from 'rxjs/operators'
import { NgForm } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ContactApi]
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

  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  sent$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  error$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(public contactApi: ContactApi) {}

  handleSubmit(form: NgForm) {
    this.sent$.next(false)
    this.error$.next(false)
    // Check form is filled in
    for (const [key, value] of Object.entries(this.contactForm)) {
      this.formErrors[key] = !value
    }
    // Return if invalid form
    for (const value of Object.values(this.formErrors)) {
      if (value) return
    }
    this.loading$.next(true)
    this.contactApi.sendMail(this.contactForm)
      .pipe(first())
      .subscribe(data => {
        form.reset()
        this.loading$.next(false)
        this.sent$.next(true)
        console.log(data)
      }, error => {
        this.loading$.next(false)
        this.error$.next(true)
        console.log(error)
      })
  }
}
