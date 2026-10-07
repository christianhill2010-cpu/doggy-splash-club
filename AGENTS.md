# Doggy Splash Club Project Notes

## Project

- Website: https://www.thedoggysplashclub.co.uk/
- Purpose: public website for The Doggy Splash Club.
- Framework: Next.js app using the `app/` directory.
- Package manager: npm.

## Hosting and Deployment

- Hosted on Vercel.
- The Vercel deployment is already configured and working.
- Pushes to `main` trigger a Vercel deployment.
- Treat `main` as the production deployment branch.

## Local Development

- Install dependencies with `npm.cmd install` on this Windows/PowerShell setup.
- Run the development server with `npm.cmd run dev`.
- Build verification command: `npm.cmd run build`.
- The local dev URL is usually `http://localhost:3000`.

## Environment Notes

- Node.js LTS was installed with `winget` during setup.
- In PowerShell, use `npm.cmd` instead of `npm` if execution policy blocks `npm.ps1`.
- `node_modules/` and `.next/` are local build artifacts and should not be committed.

## Working Guidelines

- Keep changes scoped and production-oriented.
- Verify site changes with `npm.cmd run build` before pushing to `main`.
- Avoid changing Vercel or deployment settings unless explicitly requested.
