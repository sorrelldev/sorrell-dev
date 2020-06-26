import { Component, ChangeDetectionStrategy } from '@angular/core'
import { GlobalState } from '../../state'

@Component({
  selector: 'sidenav-component',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  constructor(public globalState: GlobalState) {}

  HandleSidenav(): void {
    this.globalState.sidenav$.next(false);
  }
}
