import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core'
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

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (
      event.target.innerWidth > 900 
      && this.globalState.sidenav$.getValue()
    ) {
      this.globalState.sidenav$.next(false);
    }
  }
}
