import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

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
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HomePage, 
    ResumePage, 
    ContactPage,
  ]
})
export class PagesModule { }
