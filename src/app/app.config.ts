import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ToastrModule,ToastrService } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [ToastrService,ToastrModule,provideRouter(routes), provideAnimations()]
};
