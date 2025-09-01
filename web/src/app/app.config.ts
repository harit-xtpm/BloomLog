import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { YearsComponent } from './pages/years/years.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ExportComponent } from './pages/export/export.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: 'years', component: YearsComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'export', component: ExportComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  { path: '**', redirectTo: 'timeline', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()]
};
