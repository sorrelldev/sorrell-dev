import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { CoreRoutingModule } from './routing'
import { CoreComponentsModule } from './components'

@NgModule({
  imports: [
    BrowserModule,
    CoreRoutingModule,
    CoreComponentsModule,
  ]
})
export class CoreModule { }
