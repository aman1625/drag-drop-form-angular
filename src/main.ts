import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { SideNavComponent } from './app/side-nav/side-nav.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


//   // main.ts
// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { BrowserModule } from '@angular/platform-browser';
// import { SideNavComponent } from './path-to-your-component-folder/side-nav/side-nav.component';
// // Import other necessary components

// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule({
//   declarations: [
//     SideNavComponent,
//     // Declare other components here
//   ],
//   imports: [
//     BrowserModule,
//     // Add other necessary modules here
//   ],
//   bootstrap: [/* Your main component here */],
// })
// .catch(err => console.error(err));
