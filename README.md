# Rajith S — Portfolio

----

## Features

- Hero, About, Skills, Projects, Experience, Research, and Contact sections
- Framer Motion page + section transitions, glassmorphism surfaces, and subtle gradients
- Responsive layout with smooth scrolling interactions
- Contact form, social links, and GitHub-ready project cards
- GitHub Pages static export pipeline (Next.js `output: "export"`) with automated workflow

----

## Local Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Linting & Production Builds

```bash
npm run lint        # ESLint
npm run build       # Next.js production build
npm run export      # Static export to /out for GitHub Pages
```

## Deploying to GitHub Pages

1. Push to `main`. The provided workflow (`.github/workflows/deploy.yml`) installs deps, runs `npm run export`, and publishes the `/out` folder to GitHub Pages.
2. Ensure GitHub Pages is set to use “GitHub Actions” in your repository settings.
3. For project pages (`username.github.io/<repo>`), the `next.config.ts` automatically derives the correct `basePath`/`assetPrefix` during Actions builds. For custom domains or subpaths, override with `NEXT_PUBLIC_BASE_PATH`.
4. To run the export locally, execute `npm run export` and serve the contents of `out/` with any static file server.

## Email Configuration (Contact Form)

The contact form uses Nodemailer to send emails. To enable it:

1. Create a `.env.local` file in the root directory:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=rajithsrr@gmail.com
```

2. **For Gmail:**
   - Enable 2-Step Verification on your Google account
   - Generate an App Password at: https://myaccount.google.com/apppasswords
   - Use the App Password (not your regular password) for `SMTP_PASS`

3. **For other email providers:**
   - Update `SMTP_HOST`, `SMTP_PORT`, and `SMTP_SECURE` accordingly
   - Use your provider's SMTP credentials

The form sends two emails:
- **Notification email** to you (`CONTACT_EMAIL`) with the user's message
- **Thank you email** to the user confirming their message was received

## Customization Tips

- Update hero/about copy and media assets inside `src/app/page.tsx` and `src/components/sections/*`.
- Adjust theme/glow styles in `src/app/globals.css`.
- Project/experience/research data is centralized in `src/app/page.tsx` for quick iteration.
