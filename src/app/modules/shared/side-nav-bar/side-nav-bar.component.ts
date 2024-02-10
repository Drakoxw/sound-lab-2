import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { PATHS_FULL_CLIENT } from '@constants/routes';

interface Routes {
  path: string;
  title: string;
}

@Component({
  selector: 'app-side-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav-bar.component.html'
})
export class SideNavBarComponent {
  #router = inject(Router);
  routes: Routes[] = [];
  currentPath = '';

  ngOnInit(): void {
    this.routes = Object.entries(PATHS_FULL_CLIENT.PRIVATE).map(
      ([_, value]) => ({
        path: `${value.path}`,
        title: `${value.title}`,
      })
    );

    this.currentPath = this.routes[0].path;

    this.#router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        const rutaCompleta = event.urlAfterRedirects;
        this.currentPath = rutaCompleta;
      });
  }
}
