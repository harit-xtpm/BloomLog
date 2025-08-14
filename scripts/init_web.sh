#!/usr/bin/env bash
set -euo pipefail

# Ensure Node 18+
node -v

# Install Angular CLI 19
npm i -g @angular/cli@19

# Create Angular app in /web if not exists
if [ -d "web" ]; then
  echo "web/ already exists. Skipping scaffold."
  exit 0
fi

ng new web --standalone --routing --style=scss --ssr=false --skip-git

cd web

# Basic deps
npm i @angular/material @angular/cdk @angular/animations

# Starter scripts
npm pkg set scripts.start="ng serve --open"
npm pkg set scripts.build="ng build"
npm pkg set scripts.lint="ng lint || echo 'no lint configured yet'"
npm pkg set scripts.test="ng test"

# Create a simple landing component
cat > src/app/features/home/home.component.ts <<'TS'
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: \`
  <main class="container">
    <h1>BloomLog</h1>
    <p>Homeschool timeline & yearbook export.</p>
  </main>
  \`,
  styles: [\`
    .container { max-width: 880px; margin: 40px auto; padding: 0 16px; }
  \`]
})
export class HomeComponent {}
TS

# wire into app config
cat > src/app/app.config.ts <<'TS'
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
TS

echo "✅ Angular app scaffolded in /web"
