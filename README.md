# Kaushik Thumma — Portfolio

Personal portfolio website for Kaushik Thumma, Software Engineer.

## Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it **`kthumma2.github.io`** (replace `kthumma2` with your GitHub username if different)
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Push these files

Open a terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/kthumma2/kthumma2.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select branch: `main`, folder: `/ (root)`
4. Click **Save**

Your site will be live at:
**`https://kthumma2.github.io`** (usually within 1–2 minutes)

---

## Share on LinkedIn

Add to your LinkedIn profile:
- **Website** field: `https://kthumma2.github.io`
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
