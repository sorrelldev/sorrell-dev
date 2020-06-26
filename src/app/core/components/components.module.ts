import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app'
import { HeaderComponent } from './header'
import { FooterComponent } from './footer'
import { AnalyticsComponent } from './analytics'
import { SidenavComponent } from './sidenav'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AnalyticsComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ]
})
export class CoreComponentsModule { }
