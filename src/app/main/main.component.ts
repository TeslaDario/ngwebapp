import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { filter, Observable } from 'rxjs';
import { SiteTitleService } from '@ngwebapp/core';
import { ILink } from '@ngwebapp/ui';

@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss'],
})
export class MainComponent {
  title$: Observable<string> = this.siteTitleService.getSiteTitleObserver();

  navLinks: ILink[] = [
    {
      label: 'Home',
      href: '/home',
      icon: 'home',
      exact: true,
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: 'dashboard',
    },
  ];

  constructor(private siteTitleService: SiteTitleService) {}

  onLinkClicked(label: string, sidenav: MatSidenav) {
    this.siteTitleService.setSiteTitle(label);
    if (sidenav.mode === 'over') sidenav.close();
  }
}
