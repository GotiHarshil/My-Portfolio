# Harshil Goti — Portfolio (MERN + MVC)

A full-stack portfolio website built with the **MERN stack** (MongoDB, Express, React, Node.js) following the **MVC architecture** pattern.

---

## 📁 Project Structure

```
portfolio-mern/
│
├── server/                     # ── BACKEND (Express + MongoDB) ──
│   ├── config/
│   │   └── db.js               # MongoDB connection config
│   ├── controllers/            # ── C (Controllers) ──
│   │   ├── profileController.js
│   │   ├── experienceController.js
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   ├── educationController.js
│   │   ├── certificationController.js
│   │   └── contactController.js
│   ├── models/                 # ── M (Models) ──
│   │   ├── Profile.js
│   │   ├── Experience.js
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   ├── Education.js
│   │   ├── Certification.js
│   │   └── Contact.js
│   ├── routes/                 # Route definitions
│   │   ├── profileRoutes.js
│   │   ├── experienceRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── skillRoutes.js
│   │   ├── educationRoutes.js
│   │   ├── certificationRoutes.js
│   │   └── contactRoutes.js
│   ├── data/
│   │   └── seed.js             # Seed script (populates DB)
│   ├── server.js               # Express entry point
│   ├── .env                    # Environment variables
│   └── package.json
│
├── client/                     # ── FRONTEND (React) ── V (View)
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/         # Reusable UI components
│       │   ├── Navbar.jsx / .css
│       │   ├── Hero.jsx / .css
│       │   ├── About.jsx / .css
│       │   ├── Experience.jsx / .css
│       │   ├── Projects.jsx / .css
│       │   ├── Skills.jsx / .css
│       │   ├── Education.jsx / .css
│       │   ├── Certifications.jsx / .css
│       │   ├── Contact.jsx / .css
│       │   └── Footer.jsx / .css
│       ├── pages/
│       │   └── HomePage.jsx    # Main page (data-fetching)
│       ├── styles/
│       │   └── global.css      # Global styles & CSS variables
│       ├── utils/
│       │   ├── api.js          # Axios API layer
│       │   └── useReveal.js    # Scroll-reveal hook
│       ├── App.js
│       └── index.js
│
├── package.json                # Root (concurrently scripts)
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **MongoDB** (local or Atlas cloud)

### 1. Clone & install

```bash
git clone https://github.com/harshilgoti/portfolio-mern.git
cd portfolio-mern
npm run install:all
```

### 2. Configure environment

Edit `server/.env`:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/harshil_portfolio
CLIENT_URL=http://localhost:3000
```

Or use a **MongoDB Atlas** connection string for cloud hosting.

### 3. Seed the database

```bash
cd server
node data/seed.js
```

This populates MongoDB with all your portfolio data (profile, experience, projects, skills, education, certifications).

### 4. Run in development

```bash
# From the root folder
npm run dev
```

This starts **both** the Express server (port 5000) and the React dev server (port 3000) concurrently.

### 5. Build for production

```bash
npm run build    # Builds the React client
npm start        # Serves everything from Express
```

---

## 🔌 API Endpoints

| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| GET    | `/api/profile`            | Get profile info         |
| PUT    | `/api/profile`            | Update profile           |
| GET    | `/api/experiences`        | List all experiences     |
| POST   | `/api/experiences`        | Create experience        |
| PUT    | `/api/experiences/:id`    | Update experience        |
| DELETE | `/api/experiences/:id`    | Delete experience        |
| GET    | `/api/projects`           | List all projects        |
| GET    | `/api/projects/featured`  | List featured projects   |
| POST   | `/api/projects`           | Create project           |
| PUT    | `/api/projects/:id`       | Update project           |
| DELETE | `/api/projects/:id`       | Delete project           |
| GET    | `/api/skills`             | List skill groups        |
| POST   | `/api/skills`             | Create skill group       |
| PUT    | `/api/skills/:id`         | Update skill group       |
| DELETE | `/api/skills/:id`         | Delete skill group       |
| GET    | `/api/education`          | List education entries   |
| POST   | `/api/education`          | Create education         |
| PUT    | `/api/education/:id`      | Update education         |
| DELETE | `/api/education/:id`      | Delete education         |
| GET    | `/api/certifications`     | List certifications      |
| POST   | `/api/certifications`     | Create certification     |
| DELETE | `/api/certifications/:id` | Delete certification     |
| POST   | `/api/contact`            | Submit contact message   |
| GET    | `/api/contact`            | List messages (admin)    |
| GET    | `/api/health`             | Server health check      |

---

## 🎨 Design

- **Theme**: Dark editorial with lime-green accent (`#c9f06b`)
- **Fonts**: Instrument Serif (headings) + DM Sans (body) + JetBrains Mono (code)
- **Animations**: Scroll-triggered reveals, hover micro-interactions
- **Responsive**: Fully mobile-friendly with hamburger nav

---

## 📄 License

MIT — Harshil Goti
