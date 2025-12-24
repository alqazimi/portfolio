# Portfolio Website

This is my personal portfolio website, built to showcase my work, skills, and experience as a Software Engineer. It focuses on clarity, usability, and real-world projects so potential employers and clients can quickly see what I can do.

## About This Portfolio

- **Performance-focused**: Built with Vite for fast development and optimized production builds.
- **Clean and simple design**: Minimalist interface to highlight content and projects.
- **Real projects and side projects**: Shows both client work and personal initiatives.
- **Maintainable codebase**: Organized component structure for easy updates.
- **Recruiter-friendly**: Clear, scannable layout to communicate skills effectively.

## Featured Projects

### Real Projects

- **Business Management System** – Multi-tenant business management platform built with React, Convex, and TypeScript. Handles inventory, sales, orders, customers, loans, and expenses with role-based access control. [Live demo](https://ganacsipro.com) and [GitHub](https://github.com/alqazimi/ganasipro) links included.

### Side Projects & Tools

- **React Native Mobile App** – Mobile application built with React Native (details to be updated).
- **Frontend Project** – Frontend application (details to be updated).

## Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Backend**: Convex (Serverless), Node.js, Express
- **Database**: Real-time Database, Prisma / Supabase / other as applicable
- **Other Tools**: TypeScript, React Router, Git, Vite, JavaScript ES2024

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

1. Clone this repository:

```bash
git clone <your-repo-url>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The optimized files will be in the `dist` folder.

## Deployment to Vercel

**Vercel CLI:**

```bash
npm i -g vercel
vercel
```

**GitHub Integration:** Import repository via [vercel.com](https://vercel.com), Vercel auto-detects Vite, click Deploy.

**Dashboard Upload:** Build project (`npm run build`) and upload `dist` folder via Vercel dashboard.

## Customization

- **Update Contact Info**: `src/sections/Contact.jsx`
- **Update About Section**: `src/sections/About.jsx`
- **Add or modify Projects**: `src/data/projects.js`
- **Update Skills**: `src/sections/Skills.jsx`
- **Change Accent Color**: `tailwind.config.js` → `colors.accent`
- **Update Meta Tags**: `index.html`

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── ProjectCard.jsx
│   ├── sections/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## License

This project is open source under the MIT License

