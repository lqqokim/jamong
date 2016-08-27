import { Routes } from '@angular/router';
import { AtlierRoutes } from './atlier.routes';
import { HomeRoutes } from './home.routes';

export const PlatformRoutes: Routes = [
  ...AtlierRoutes,
  ...HomeRoutes
];

