import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'

declare let gtag: Function

@Component({
  selector: 'analytics-component',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsComponent {
  constructor(public router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        gtag(
          'config', 
          'G-B5P20SFEJH', 
          {
            'page_path': event.urlAfterRedirects
          }
        )
      })
  }
}
