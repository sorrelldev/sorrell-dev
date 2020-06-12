import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { 
  HomePage, 
  ResumePage, 
  ContactPage,
} from './'

@NgModule({
  declarations: [
    HomePage, 
    ResumePage, 
    ContactPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    HomePage, 
    ResumePage, 
    ContactPage,
  ]
})
export class PagesModule { }
