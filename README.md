<a id="top"></a>
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=transparent&fontColor=F0954F&fontSize=54&height=90&width=1200&text=RishtaElite%20%E2%80%94%20Where%20Families%20Begin" alt="RishtaElite" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Caveat&weight=600&size=26&pause=1000&color=F0954F&center=true&vCenter=true&width=900&height=44&lines=Verified%20profiles%2C%20family-guided%20matches.;English%20%2F%20%D8%A7%D8%B1%D8%AF%D9%88%20%E2%80%94%20one%20click%20to%20switch.;Click%20a%20button%20below%20to%20explore%20%E2%86%93" alt="Typing headline" />
</p>

<p align="center">
  <a href="https://rishta-elite.vercel.app"><img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-C4602A?style=for-the-badge&logo=vercel&logoColor=white" alt="Live demo" /></a>
  <a href="https://github.com/shahidabuali/RishtaElite"><img src="https://img.shields.io/badge/View%20Source-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="View source" /></a>
  <a href="https://github.dev/shahidabuali/RishtaElite"><img src="https://img.shields.io/badge/Open%20in-VS%20Code-007ACC?style=for-the-badge&logo=vscodium&logoColor=white" alt="Open in VS Code" /></a>
  <a href="https://github.com/shahidabuali/RishtaElite/issues/new"><img src="https://img.shields.io/badge/Report%20Issue-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Report an issue" /></a>
  <a href="https://shahidas-portfolio.vercel.app/"><img src="https://img.shields.io/badge/Portfolio-Visit-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/shahidabuali/"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=black" alt="Supabase" />
</p>

## 📑 Contents

[The pitch](#pitch) · [Take the tour](#tour) · [Features](#features) · [Flow](#flow) · [Run locally](#run) · [Author](#author)

<a id="pitch"></a>
## 💛 The pitch

A bilingual (English / اردو) matchmaking platform concept for Pakistani families — built as a design-heavy front-end prototype with verified-profile workflows, privacy controls, family co-access, membership tiers, messaging and an admin panel.

<a id="tour"></a>
## 🗺️ Take the tour

| Page | What's inside |
| --- | --- |
| [index.html](rishta%20website/index.html) | Landing page: animated preloader, orbit animation, jaali pattern, how-it-works, membership tiers, testimonials |
| [profiles.html](rishta%20website/profiles.html) | Searchable profile cards with gender / country / age / marital-status filters |
| [messages.html](rishta%20website/messages.html) | Inbox view with unread badge |
| [profile-viewers.html](rishta%20website/profile-viewers.html) | Who viewed your profile |
| [register.html](rishta%20website/register.html) · [login.html](rishta%20website/login.html) · [reset-password.html](rishta%20website/reset-password.html) | Demo auth flows |
| [contact.html](rishta%20website/contact.html) | Contact form |
| [Admin.html](rishta%20website/Admin.html) | Admin panel |
| [App.js](rishta%20website/App.js) | All the demo logic: data store, auth, filters, profile modal, toasts |
| [style.css](rishta%20website/style.css) | Design system: light/dark themes, animations, cards, grids |

<a id="features"></a>
<details>
<summary>✨ Interaction checklist — click to expand</summary>

- [x] **EN / UR language switch** across the whole landing page
- [x] Dark / light theme toggle with animated sun/moon icons
- [x] Hand-drawn preloader with animated logo, letter reveal and progress bar
- [x] Hero orbit animation with canvas ripple and floating avatars
- [x] Cursor glow, magnetic buttons, scroll reveals and staggered entrances
- [x] 3D tilt on membership cards; hover-reveal "chroma grid" testimonials
- [x] Six seeded demo profiles with search, filters, verified badges and interest buttons
- [x] Membership tiers: Free, Premium (PKR 2,500/mo) and VIP (PKR 6,000/mo)
- [x] Demo auth (register, login, logout), messages, profile viewers and admin panel

</details>

<a id="flow"></a>
<details>
<summary>🏗️ How the flows connect — click to view the diagram</summary>

```mermaid
flowchart LR
    A[Register / Login] --> B[Build verified profile]
    B --> C[Browse & filter profiles]
    C --> D[Send interest / message]
    D --> E[Family reviews together]
    A --> F[Admin panel]
```

</details>

<a id="run"></a>
<details>
<summary>▶️ Run it locally — click for commands</summary>

```bash
cd "rishta website"
python -m http.server 8000
# open http://localhost:8000/index.html
```

Supabase config is no longer stored in source. Copy `config.example.js` to `config.js` and add your own values locally; `config.js` is git-ignored. The front-end demo itself still uses `localStorage`.

</details>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/shahidabuali/RishtaElite?style=flat-square" alt="Last commit" />
  <img src="https://img.shields.io/github/stars/shahidabuali/RishtaElite?style=flat-square" alt="Stars" />
  <img src="https://img.shields.io/github/license/shahidabuali/RishtaElite?style=flat-square" alt="License" />
</p>

<a id="author"></a>
<p align="center">Designed and coded by <a href="https://github.com/shahidabuali">Shahida Bu Ali</a> · <a href="https://shahidas-portfolio.vercel.app/">Portfolio</a> · <a href="https://www.linkedin.com/in/shahidabuali/">LinkedIn</a></p>

<p align="center"><a href="#top">↑ Back to top</a></p>
