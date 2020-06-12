import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { CoreRoutingModule } from './routing'
import { CoreComponentsModule } from './components'
import { PagesModule } from '../pages/pages.module'

import { AppComponent } from './components/app'

@NgModule({
  imports: [
    BrowserModule,
    CoreRoutingModule,
    CoreComponentsModule,
    PagesModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class CoreModule { }
