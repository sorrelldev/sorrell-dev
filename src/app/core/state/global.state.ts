import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class GlobalState {
  sidenav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
}