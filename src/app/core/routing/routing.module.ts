import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { 
  HomePage, 
  ResumePage 
} from '../../pages'

const routes: Routes = [
  { path: 'resume', component: ResumePage },
  { path: '', component: HomePage },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
