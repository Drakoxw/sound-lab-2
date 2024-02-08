import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { AuthService, LocalstorageService } from './services';
import { MENU_KEY } from '@constants/index';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private localStorage = inject(LocalstorageService);
  private authService = inject(AuthService);

  static isBrowser = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: any, private route: ActivatedRoute) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }

  ngOnInit(): void {
    if (this.localStorage.getItem(MENU_KEY)) {
      this.authService.updateMenuState(true);
    }

    this.route.queryParams.subscribe((params) => {
      const menu = String(params['menu']);
      switch (menu) {
        case 'on':
          this.authService.updateMenuState(true);
          this.localStorage.setItem(MENU_KEY, String(Date.now()))
          break;
        case 'off':
          this.authService.updateMenuState(false);
          this.localStorage.removeItem(MENU_KEY);
          break;
      }
    });
  }
}
