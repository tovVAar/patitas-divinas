# Patitas Divinas

Proyecto demo para la materia de admon de proyectos

## Tech Stack

- **React 19** - JavaScript library for building user interfaces
- **Vite 7** - Fast build tool and dev server
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tovVAar/patitas-divinas.git
cd patitas-divinas
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` configuration file is already set up.

To deploy:
1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the configuration and deploy

Alternatively, install the Vercel CLI and run:
```bash
npx vercel
```

## Project Structure

```
patitas-divinas/
├── public/          # Static assets
├── src/             # Source files
│   ├── assets/      # Images, fonts, etc.
│   ├── App.jsx      # Main App component
│   ├── App.css      # App styles
│   ├── index.css    # Global styles
│   └── main.jsx     # Application entry point
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
├── vercel.json      # Vercel deployment configuration
└── package.json     # Dependencies and scripts
```
