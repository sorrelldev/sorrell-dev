import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { 
  HomePage, 
  ResumePage, 
  ContactPage,
} from '../../pages'

const routes: Routes = [
  { path: 'contact', component: ContactPage },
  { path: 'resume', component: ResumePage },
  { path: '', component: HomePage },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
