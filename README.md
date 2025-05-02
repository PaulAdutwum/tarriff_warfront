# Tariff Warfront

**Global Tariff Impact Tracker & Educational Analytics Platform**

A single-page full-stack web application designed to make **trade-policy analytics** **clear**, **interactive**, and **actionable**—so that **policymakers**, **researchers**, **educators**, and **new readers** can immediately grasp the impact of ongoing tariff changes and share insights with their followers or stakeholders.

---

---

## 🚧 Project Status & What’s Next

**Today (v0.3 Alpha)**  
- The live **dashboard, map, and time‑series charts** are up and running with hourly tariff feeds from WTO, USTR, and USITC.  
- AI summaries are generated via the OpenAI GPT‑4 API, giving one‑sentence context for each new policy event.  

**In Progress (Shipping Soon)**  
- **Trend‑forecast module:** we’re integrating a PyTorch + TensorFlow Lite model to predict sector‑level tariff impacts 30 days out, so users can see “what’s likely next.”  
- **Enhanced NLP:** migrating the quick‑summary pipeline to a compact TensorFlow text model for faster, on‑device inference (edge caching).  
- **User watchlists & alert rules:** subscribe to specific HS codes, countries, or sectors and receive instant email/SMS notifications.  

Stay tuned—new features drop every two weeks, and you can follow progress on the [roadmap board](../../projects) or open an issue to request a feature.


## 🎥 Demo Video



[![Tariff War Demo](https://img.youtube.com/vi/ZMTcpeIl2yE/maxresdefault.jpg)](https://www.youtube.com/watch?v=ZMTcpeIl2yE)

---

## 🎯 Purpose & Vision

- **Simplify Complex Data**  
  Turn raw tariff schedules and trade figures into intuitive visuals and summaries.

- **Educate & Inform**  
  Provide context, definitions, and AI-powered summaries to help non-expert audiences (students, journalists, community advocates) understand why tariffs matter.

- **Empower Policymakers**  
  Surface real-time alerts and deep-dive panels so decision-makers can spot sectoral risks, compare policy scenarios, and share data-backed recommendations.

- **Engage & Share**  
  Enable easy export (CSV/PDF) and social-ready snapshots for reports, presentations, or social media posts.

---

## 🚀 Key Features

- **Live Tariff Feed**  
  Fetch Section 301/232 and MFN rates for 100+ countries (USTR, WTO, USITC).

- **Interactive Map & Charts**  
  Color-coded world map + time-series graphs by country or economic sector (e.g. Healthcare, Education, Transportation).

- **AI-Powered Summaries**  
  One-sentence breakdowns of the latest trade-policy news (via OpenAI GPT-4).

- **Detail Panels & Glossary**  
  Click any event to see definitions, policy links, impact metrics, and related news—perfect for educational walkthroughs.

- **Custom Alerts & Exports**  
  Subscribe to email/SMS alerts or generate on-demand CSV/PDF reports for easy distribution.

- **User Notes & Collaboration**  
  Add comments, upvote expert analyses, and tag “must-share” events for your network.

---

## 🛠️ Built With

| Layer            | Tools & Technologies                          |
| ---------------- | --------------------------------------------- |
| **Frontend**     | Next.js 14 + TypeScript <br> Tailwind CSS v4   |
| **Data Viz**     | Mapbox GL JS <br> Chart.js / Recharts         |
| **State & Fetch**| React Query / SWR                             |
| **Backend**      | NestJS + TypeScript <br> FastAPI (Python)     |
| **Databases**    | PostgreSQL (Prisma ORM) <br> MongoDB Atlas     |
| **AI/NLP**       | OpenAI GPT-4 API <br> Pydantic                |
| **DevOps**       | Docker & Docker Compose <br> GitHub Actions   |
| **Deployment**   | Vercel (frontend) <br> Render (backend)       |
| **Monitoring**   | Sentry                                        |

---

## 📈 Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/YOUR-USERNAME/tariff-warfront.git
   cd tariff-warfront
