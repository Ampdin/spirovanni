import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SpirovanniAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(SpirovanniAppComponent);

