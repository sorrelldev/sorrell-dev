import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { CoreRoutingModule } from './routing'
import { CoreComponentsModule } from './components'

import { AppComponent } from './components/app'

@NgModule({
  imports: [
    BrowserModule,
    CoreRoutingModule,
    CoreComponentsModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class CoreModule { }
