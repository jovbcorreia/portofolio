# 🚀 João Correia — Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- Dark, terminal-inspired design with smooth animations
- Typewriter effect on the hero section
- Animated skill bars
- Responsive on all devices
- SEO optimized with metadata
- Sections: Hero, About, Skills, Projects, Experience, Contact

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS animations + react-intersection-observer
- **Fonts**: Syne, DM Sans, Space Mono (Google Fonts)

---

## 🧑‍💻 Getting Started Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize your info
Edit the file `src/lib/data.ts` with your real info:
- Your name, bio, email
- Your GitHub and LinkedIn URLs
- Your real projects
- Your real experience

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Recommended — FREE)

Vercel is made by the same team as Next.js and is the easiest way to deploy.

### Step-by-step:

**1. Push to GitHub**
```bash
# Create a new repo on github.com first, then:
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**2. Connect to Vercel**
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"New Project"**
3. Import your portfolio repository
4. Click **"Deploy"** — that's it! ✅

Vercel automatically:
- Detects it's a Next.js project
- Builds and deploys it
- Gives you a free `.vercel.app` domain
- Redeploys automatically every time you push to GitHub

**3. Custom Domain (optional)**
- Buy a domain at [namecheap.com](https://namecheap.com) or [porkbun.com](https://porkbun.com)
- In Vercel dashboard → Project → Settings → Domains → Add domain
- Follow DNS instructions (takes ~5 minutes to propagate)

---

## 🌐 Alternative: Deploy to Netlify (also FREE)

1. Push code to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com) → Sign up → New site from Git
3. Select your repo
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click Deploy ✅

---

## 🖥 Alternative: VPS Hosting (DigitalOcean / Hetzner)

If you want a VPS (more control, ~€5/month):

```bash
# On your VPS (Ubuntu):
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone your repo
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
npm install
npm run build

# Install PM2 to keep it running
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup

# Install Nginx as reverse proxy
sudo apt install nginx
sudo nano /etc/nginx/sites-available/portfolio
```

Nginx config:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled
sudo systemctl restart nginx

# Add SSL with Let's Encrypt (free HTTPS)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout + metadata
│   │   ├── page.tsx         # Main page (assembles all sections)
│   │   └── globals.css      # Global styles + CSS variables
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Hero section with typewriter
│   │   ├── About.tsx        # About me + terminal card
│   │   ├── Skills.tsx       # Tech skills with progress bars
│   │   ├── Projects.tsx     # Projects grid
│   │   ├── Experience.tsx   # Work experience timeline
│   │   └── Contact.tsx      # Contact section + footer
│   └── lib/
│       └── data.ts          # ← EDIT THIS with your real info
├── public/              # Static assets (add your photo here)
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🎨 Customization

All your personal data is in one place: **`src/lib/data.ts`**

- `personalInfo` → name, bio, email, links
- `skills` → skill percentages per category  
- `techStack` → badges shown in skills section
- `projects` → your project cards
- `experience` → work history timeline

---

## 📸 Add Your Photo

1. Add your photo to `public/avatar.jpg`
2. In `About.tsx`, replace the terminal card with an `<Image>` component from Next.js

---

Built with ❤️ by João Correia
