import { Component } from '@angular/core';
import { NavButtonComponent } from '../../components/nav-button/nav-button.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-topbar',
  imports: [NavButtonComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    let url = this.router.url.replace('/', '');
    this.currentRoute = this.extractBaseRoute(url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.extractBaseRoute(this.router.url);
        console.log(`this.currentRoute:`, this.currentRoute);
      });
  }

  isActive(route: string): boolean {
    // Implement your logic to determine if the route is active
    return this.currentRoute === route;
  }

  onNavigate(route: string) {
    // Implement your navigation logic here
    console.log(`Navigating to:`, route);
    this.router.navigate([route]);
    this.currentRoute = route;
  }

  extractQueryParam(url: string): string | null {
    const queryParams = url.split('?')[1];
    if (queryParams) {
      return queryParams;
    }
    return null;
  }

  extractBaseRoute(url: string): string {
    const urlWithoutQueryParams = url.split('?')[0];
    return urlWithoutQueryParams.replace('/', '');
  }
}
