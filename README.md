# BloomLog

An open, privacy-first portfolio & timeline for homeschool learning.  
Tracks activities, evidence, and summaries per academic year, and exports a yearbook-style report.

## Tech Direction
- **Web**: Angular 19 (standalone, SCSS)  
- **Mobile**: Capacitor (wrap Angular for iOS/Android)  
- **API (optional)**: ASP.NET 8 or Firebase (Auth/Firestore/Storage)  
- **AI assist**: client-side prompts + optional cloud functions

## Quick Start

1) Create the GitHub repo:
```bash
# replace YOUR-ORG with your GitHub username or org
gh repo create YOUR-ORG/BloomLog --public --source=. --remote=origin --push
```

2) Initialize the web app locally (Angular 19):
```bash
# run from repo root
./scripts/init_web.sh
# or on Windows:
powershell -ExecutionPolicy Bypass -File .\scripts\init_web.ps1
```

3) Run the web app:
```bash
cd web
npm run start
```

4) (Optional) Add Capacitor for mobile:
```bash
cd web
npm i @capacitor/core @capacitor/cli
npx cap init BloomLog com.example.bloomlog
# Platform add after first build
npm run build
npx cap add android
npx cap add ios
```

5) First commit & push:
```bash
git add .
git commit -m "chore: bootstrap BloomLog repository"
git branch -M main
git push -u origin main
```

## Monorepo Layout
```
/web         - Angular app (SPA)
/api         - (optional) ASP.NET 8 Web API or Firebase functions
/docs        - architecture & specs
/.github     - CI, issue templates, PR template
/scripts     - project bootstrap scripts
```

## CI
- `web-ci.yml`: builds the Angular app on push/PR.

## License
MIT © 2025-08-14
