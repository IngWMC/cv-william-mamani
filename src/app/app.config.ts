import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

// Single page without routes: no Router (and no <base href>), so every URL in the page is
// relative and the build works from a domain root or any sub-path (e.g. GitHub Pages).
export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
