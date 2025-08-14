Param()

# Ensure Node 18+
node -v

# Install Angular CLI 19
npm i -g @angular/cli@19

# Create Angular app in /web if not exists
if (Test-Path "web") {
  Write-Host "web/ already exists. Skipping scaffold."
  exit 0
}

ng new web --standalone --routing --style=scss --ssr=false --skip-git

Set-Location web

# Basic deps
npm i @angular/material @angular/cdk @angular/animations

# Starter scripts
npm pkg set scripts.start="ng serve --open"
npm pkg set scripts.build="ng build"
npm pkg set scripts.lint="ng lint || echo 'no lint configured yet'"
npm pkg set scripts.test="ng test"

# Create a simple landing component
@'
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <main class="container">
    <h1>BloomLog</h1>
    <p>Homeschool timeline & yearbook export.</p>
  </main>
  `,
  styles: [`
    .container { max-width: 880px; margin: 40px auto; padding: 0 16px; }
  `]
})
export class HomeComponent {}
'@ | Set-Content -Path src/app/features/home/home.component.ts -Encoding UTF8

@'
import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()]
};
'@ | Set-Content -Path src/app/app.config.ts -Encoding UTF8

Write-Host "✅ Angular app scaffolded in /web"
