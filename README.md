# CustomerApp

An example of lazy loading in Angular 9. See: https://angular.io/guide/lazy-loading-ngmodules

Besides following the documentation we are loading multiple child components and verifying if they are being included by console logs.

See recommendations at:
https://medium.com/angular-in-depth/optimize-angular-bundle-size-in-4-steps-4a3b3737bf45

## Know your bundle size

With this light weight example main-es2015.js is 215kB (Angular 8: 229kB).
Without lazy loading it would be 216kB (Angular 8: 233kB).

## Analyze your Angular bundle

Run:
ng build --prod --stats-json
webpack-bundle-analyzer dist/customer-app/stats-es2015.json

## Preloading

Also see the preloading strategy in the app-routing module. Documentation at:
https://web.dev/route-preloading-in-angular/

## Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
