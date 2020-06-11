import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomePage } from '../../pages'

const routes: Routes = [
  { path: '', component: HomePage },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
