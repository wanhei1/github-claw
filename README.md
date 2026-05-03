# Personal Portfolio Website

A clean, modern, and responsive personal portfolio website built with pure HTML, CSS, and JavaScript — deployable to **GitHub Pages** with zero build steps.

## ✨ Features

- 🌗 Dark / light mode toggle (persisted to localStorage)
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎨 Blue-purple gradient design with glassmorphism navbar
- ✨ Scroll-triggered fade-in animations
- 📊 Scroll progress bar
- ♿ Accessible (ARIA labels, focus styles, reduced-motion support)
- 🔍 Basic SEO meta tags

## 📁 File Structure

```
github-claw/
├── index.html   ← Main page (all sections)
├── styles.css   ← Styles (CSS variables, responsive, dark mode)
├── script.js    ← JavaScript (theme toggle, scroll effects, animations)
└── README.md    ← This file
```

## 🖥️ Local Preview

No build step required. Just open `index.html` in a browser:

**Option 1 – Direct open**
```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

**Option 2 – Local server (recommended for full feature support)**
```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080

# Node.js (npx)
npx serve .
# then open http://localhost:3000
```

## 🚀 GitHub Pages Deployment

1. Push this repository to GitHub (already done if you're reading this).
2. Go to your repository on GitHub → **Settings** → **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose branch `main` (or `master`) and folder `/ (root)`.
5. Click **Save**.
6. Wait ~1 minute, then visit: `https://<your-github-username>.github.io/<repo-name>/`

> **Tip:** `index.html` must stay in the root directory for GitHub Pages to serve it correctly.

## ✏️ How to Replace Placeholder Information

Search for and replace all occurrences of the following placeholders in `index.html`:

| Placeholder | Replace with |
|---|---|
| `[Your Name]` | Your full name |
| `[YN]` | Your initials (navbar logo) |
| `[your-email]@example.com` | Your actual email address |
| `[your-github]` | Your GitHub username |
| `[your-linkedin]` | Your LinkedIn profile slug |
| `[your-id]` in Google Scholar URL | Your Google Scholar user ID |

### Update project links
In each `<article class="project-card">`, replace `href="#"` on the `.project-link` with the actual GitHub repo URL or live demo URL.

### Update statistics (About section)
Edit the numbers in `.stat-card` elements to reflect your actual stats.

---

© 2026 [Your Name]. Built for GitHub Pages.