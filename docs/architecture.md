# BloomLog — Architecture Overview

## Goals
- Track homeschool activities and evidence per day/week.
- Generate AI-assisted yearly summaries.
- Export a clean report (PDF/Word).

## Components
- **Web (Angular)**: main UI.
- **Mobile (Capacitor)**: wraps the web app for iOS/Android.
- **API**: optional. Start serverless with Firebase; later migrate to ASP.NET 8 if needed.

## Data
- Minimal profile, learners, courses, activities, evidence (files/photos), yearly report.
- Start with Firebase Auth + Firestore (or LocalStorage for demo).

## Roadmap (MVP -> v1)
1. MVP
   - Timeline: add activity, photo, note.
   - Year filter & export Markdown/PDF.
   - Auth (Email/Google).
2. v1
   - Multi-learner, tags, search.
   - AI summary & outline per year.
   - Mobile build via Capacitor.
