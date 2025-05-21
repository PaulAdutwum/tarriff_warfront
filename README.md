# Tariff Warfront

**Global Tariff Impact Tracker & Educational Analytics Platform**

I developed a full-stack platform for real-time trade policy analysis and public insight delivery. Built with Next.js and NestJS, the application aggregates live tariff data from official sources like the USTR and WTO, integrating it with real-time market indicators to provide a unified view of policy impact. I designed and implemented interactive dashboards featuring maps, graphs, and AI-generated summaries to help policymakers, educators, and researchers quickly grasp complex trade shifts. To streamline information consumption, I integrated natural language summarization models that condense over 1,000 daily updates into actionable insights to reduce plicy research times. The platform was built to serve both technical and non-technical audiences, with customizable visualizations and exportable reports for stakeholder communication.

---


## 🎥 Demo Video



[![Tariff War Demo](https://img.youtube.com/vi/ZMTcpeIl2yE/maxresdefault.jpg)](https://www.youtube.com/watch?v=ZMTcpeIl2yE)

---


## 🚀 Key Features

- **Live Tariff Feed**  
  Fetch Section 301/232 and MFN rates for 100+ countries (USTR, WTO, USITC).

- **Interactive Map & Charts**  
  Color-coded world map + graphs by country or economic sector (e.g. Healthcare, Education, Transportation).

- **AI-Powered Summaries**  
  Sentence breakdowns of the latest trade-policy news (via OpenAI GPT-4).

- **Detail Panels & Glossary**  
  Click any event to see definitions, policy links, impact metrics, and related news—perfect for educational walkthroughs.

- **Custom Alerts & Exports**  
  Subscribe to email/SMS alerts or generate on-demand CSV/PDF reports for easy distribution.

- **User Notes & Collaboration**  
  Add comments, upvote expert analyses, and tag “must-share” events for your network.

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
