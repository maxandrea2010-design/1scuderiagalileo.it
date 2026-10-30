# 🏎️ Scuderia Ferrari F1 2025 — Official Season Experience

> Esperienza ufficiale Scuderia Ferrari Formula 1 2025.  
> Scopri la nuova monoposto SF-25, la line-up leggendaria Hamilton-Leclerc e il calendario mondiale.

🌐 **Live:** [scuderiagalileo.it](https://scuderiagalileo.it)

## ✨ Features

- **Hero Banner** — Vista immersiva della SF-25 con effetti glassmorphism
- **La Monoposto** — Scheda tecnica dettagliata della SF-25
- **I Piloti & La Squadra** — Leclerc #16, Hamilton #44, e il team
- **Calendario Mondiale** — Tutte le gare della stagione 2025
- **La Storia** — 16 Titoli Costruttori, 15 Piloti, il mito Enzo Ferrari
- **Paddock Club** — Modal interattivo per hospitality e prenotazioni

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (build & dev server)
- **Tailwind CSS 4**
- **Framer Motion** (animazioni)
- **Lucide React** (icone)

## 🚀 Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:3000`.

## 📦 Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory.

## 🌍 Deployment

This project deploys automatically to **GitHub Pages** via GitHub Actions on every push to `main`.

### Custom Domain Setup

1. In your GitHub repo → **Settings** → **Pages** → set source to **GitHub Actions**
2. Add your custom domain `scuderiagalileo.it`
3. Configure your DNS:
   - **A records** pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or **CNAME** for `www`: `your-username.github.io`

## 📁 Project Structure

```
├── .github/workflows/deploy.yml  # Auto-deploy to GitHub Pages
├── public/
│   ├── CNAME                     # Custom domain config
│   └── f1-hero-bg.jpg            # Static hero background
├── src/
│   ├── components/
│   │   ├── CalendarioSection.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── MonopostoSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PaddockClubModal.tsx
│   │   ├── PilotiSquadraSection.tsx
│   │   └── StoriaSection.tsx
│   ├── assets/images/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 📄 License

All rights reserved. This project is for educational and portfolio purposes.
