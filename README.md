# Kaushik Thumma — Portfolio

Personal portfolio website for Kaushik Thumma, Software Engineer.

## Deploy to GitHub Pages (Free Hosting)

Your repo is named **Portfolio**, so your live URL will be:
**`https://kthumma2.github.io/Portfolio`**

### Step 1 — Push these files

Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/kthumma2/Portfolio.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select branch: `main`, folder: `/ (root)`
4. Click **Save**

Your site will be live at:
**`https://kthumma2.github.io/Portfolio`** (usually within 1–2 minutes)

---

## Share on LinkedIn

Add to your LinkedIn profile:
- **Website** field: `https://kthumma2.github.io/Portfolio`
- **Featured** section: Share it as a link with caption "My Portfolio"

---

## Customizing

| What to update | Where |
|---|---|
| Your bio text | `index.html` — About section |
| Projects | `index.html` — Projects section |
| Experience | `index.html` — Experience section |
| LinkedIn URL | Search `linkedin.com/in/kaushikthumma` and replace |
| Colors / fonts | `css/style.css` — `:root` variables |
| Animations | `js/script.js` |

## File Structure

```
.
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # Animations, interactions
└── README.md           # This file
```
