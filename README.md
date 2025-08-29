# 🚀 Modern Portfolio Application

<div align="center">

![Portfolio Banner](https://via.placeholder.com/800x400/0a0a0b/00d4ff?text=Modern+Portfolio+App)

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.5.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-r1ggt98f6-mrshakils-projects.vercel.app/)

**A modern, responsive portfolio application built with cutting-edge technologies**

[🌟 Live Demo](https://portfolio-r1ggt98f6-mrshakils-projects.vercel.app/) | [📖 Documentation](#documentation) | [🚀 Getting Started](#getting-started)

</div>

---

## ✨ Features

<div align="center">
<table>
<tr>
<td align="center">
<img src="https://img.icons8.com/fluency/48/000000/react.png" width="40px"/>
<br><strong>Modern React</strong>
<br>React 19 with hooks & functional components
</td>
<td align="center">
<img src="https://img.icons8.com/color/48/000000/api-settings.png" width="40px"/>
<br><strong>FastAPI Backend</strong>
<br>High-performance async Python API
</td>
<td align="center">
<img src="https://img.icons8.com/color/48/000000/tailwindcss.png" width="40px"/>
<br><strong>Tailwind CSS</strong>
<br>Utility-first styling framework
</td>
</tr>
<tr>
<td align="center">
<img src="https://img.icons8.com/color/48/000000/mongodb.png" width="40px"/>
<br><strong>MongoDB</strong>
<br>NoSQL database with async operations
</td>
<td align="center">
<img src="https://img.icons8.com/fluency/48/000000/smartphone-tablet.png" width="40px"/>
<br><strong>Responsive Design</strong>
<br>Mobile-first responsive layouts
</td>
<td align="center">
<img src="https://img.icons8.com/color/48/000000/lightning-bolt.png" width="40px"/>
<br><strong>Performance</strong>
<br>Optimized for speed and SEO
</td>
</tr>
</table>
</div>

### 🎯 Key Features

- **🎨 Modern UI/UX**: Beautiful, dark-themed interface with smooth animations
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Server-side rendering and optimized bundle sizes
- **� Live Deployment**: Successfully deployed and accessible on Vercel
- **�🔒 Secure**: JWT authentication and secure API endpoints
- **🎭 Interactive**: Smooth animations with Framer Motion
- **🧩 Component Library**: Built with Radix UI components
- **📊 Analytics Ready**: Easy integration with analytics platforms
- **🔍 SEO Optimized**: Meta tags and structured data for better search visibility

---

## 🛠️ Tech Stack

### Frontend

```
📦 React 19.0.0          - Modern React with latest features
🎨 Tailwind CSS 3.4.17   - Utility-first CSS framework
🧩 Radix UI              - Accessible component primitives
✨ Framer Motion 12.23   - Smooth animations and transitions
📱 React Router 7.5.1    - Client-side routing
🎪 Lucide React 0.507    - Beautiful icon library
📊 Recharts              - Data visualization (if needed)
🎯 React Hook Form 7.56  - Form validation and handling
```

### Backend

```
🚀 FastAPI 0.110.1       - High-performance Python web framework
🐍 Python 3.11+          - Modern Python with type hints
🗄️ MongoDB 4.5.0         - NoSQL database
⚡ Motor 3.3.1           - Async MongoDB driver
🔐 JWT & Passlib         - Authentication and security
📝 Pydantic 2.6.4        - Data validation with type safety
🔄 Uvicorn 0.25.0        - ASGI server for production
```

### Development Tools

```
🧪 Pytest 8.0.0         - Testing framework
🎯 Black & isort         - Code formatting
🔍 MyPy                  - Static type checking
📝 ESLint & Prettier     - Frontend code quality
🔧 CRACO                 - Create React App configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **Python** (v3.11 or higher)
- **MongoDB** (v4.4 or higher)
- **Git**

### 📥 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MRSHAKILS/Portfolio.git
   cd Portfolio
   ```

2. **Backend Setup**

   ```bash
   # Navigate to backend directory
   cd backend

   # Create virtual environment
   python -m venv .venv

   # Activate virtual environment
   # Windows:
   .venv\Scripts\activate
   # macOS/Linux:
   source .venv/bin/activate

   # Install dependencies
   pip install -r requirements.txt
   ```

3. **Frontend Setup**

   ```bash
   # Navigate to frontend directory
   cd ../frontend

   # Install dependencies
   npm install --legacy-peer-deps
   ```

4. **Environment Configuration**

   ```bash
   # Backend (.env)
   cp backend/.env.example backend/.env

   # Frontend (.env)
   cp frontend/.env.example frontend/.env
   ```

   Update the environment variables:

   ```env
   # Backend .env
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=portfolio_db
   JWT_SECRET=your-super-secret-jwt-key
   CORS_ORIGINS=http://localhost:3000,http://localhost:3001

   # Frontend .env
   REACT_APP_BACKEND_URL=http://localhost:8000
   ```

### 🏃‍♂️ Running the Application

#### 🚀 Quick Start (Recommended)

1. **Install all dependencies:**

   ```bash
   npm run install:all
   ```

2. **Run both frontend and backend together:**
   ```bash
   npm run dev
   ```

#### 🔧 Manual Start (Alternative)

1. **Start the Backend Server**

   ```bash
   npm run dev:backend
   ```

   Or manually:

   ```bash
   cd backend
   python -m uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

2. **Start the Frontend Development Server** (in another terminal)

   ```bash
   npm run dev:frontend
   ```

   Or manually:

   ```bash
   cd frontend
   npm start
   ```

#### 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

#### 🐛 Troubleshooting

If you encounter issues:

1. **Frontend dependency conflicts:**

   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

2. **Backend dependencies:**

   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Clean and reinstall everything:**
   ```bash
   npm run clean
   npm run install:all
   ```

---

## 📱 Screenshots

<div align="center">

### 🖥️ Desktop View

![Desktop View](https://via.placeholder.com/800x500/0a0a0b/00d4ff?text=Desktop+Portfolio+View)

### 📱 Mobile View

<img src="https://via.placeholder.com/400x600/0a0a0b/00d4ff?text=Mobile+Portfolio+View" width="300px" alt="Mobile View"/>

### 🎨 Dark Theme

![Dark Theme](https://via.placeholder.com/800x400/1a1a1b/ffffff?text=Dark+Theme+Portfolio)

</div>

---

## 🏗️ Project Structure

```
📁 Portfolio/
├── 📁 backend/                 # FastAPI backend
│   ├── 📄 server.py           # Main FastAPI application
│   ├── 📄 requirements.txt    # Python dependencies
│   ├── 📄 .env                # Environment variables
│   └── 📁 __pycache__/        # Python cache files
├── 📁 frontend/               # React frontend
│   ├── 📁 public/             # Static files
│   ├── 📁 src/                # Source code
│   │   ├── 📁 components/     # React components
│   │   │   ├── 📄 About.jsx   # About section
│   │   │   ├── 📄 Hero.jsx    # Hero section
│   │   │   ├── 📄 Projects.jsx # Projects showcase
│   │   │   └── 📁 ui/         # Reusable UI components
│   │   ├── 📁 data/           # Mock data
│   │   ├── 📁 hooks/          # Custom React hooks
│   │   └── 📁 lib/            # Utility functions
│   ├── 📄 package.json        # Node.js dependencies
│   └── 📄 tailwind.config.js  # Tailwind configuration
├── 📁 tests/                  # Test files
├── 📄 README.md              # Project documentation
└── 📄 .gitignore             # Git ignore rules
```

---

## 🎨 Customization

### 🎨 Theming

The portfolio uses CSS custom properties for easy theming:

```css
:root {
  --color-bg-primary: #0a0a0b;
  --color-bg-secondary: #1a1a1b;
  --color-accent-primary: #00d4ff;
  --color-text-primary: #ffffff;
  /* ... more variables */
}
```

### 🧩 Components

All UI components are built with Radix UI and styled with Tailwind CSS:

```jsx
// Example component usage
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProjectCard({ project }) {
  return (
    <Card className="bg-card hover:bg-accent transition-colors">
      <h3>{project.title}</h3>
      <Button variant="outline">View Project</Button>
    </Card>
  );
}
```

---

## 🧪 Testing

### Backend Testing

```bash
cd backend
pytest tests/ -v
```

### Frontend Testing

```bash
cd frontend
npm test
```

---

## 🚀 Deployment

### 🌟 **Live Application**

✅ **Frontend is deployed and live on Vercel!**

� **Live Demo**: [https://portfolio-r1ggt98f6-mrshakils-projects.vercel.app/](https://portfolio-r1ggt98f6-mrshakils-projects.vercel.app/)

### �📦 Build for Production

**Frontend:**

```bash
cd frontend
npm run build
```

**Vercel Deployment:**

```bash
# Automatic deployment on push to main branch
npm run vercel-build
```

**Backend (Local Development):**

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn server:app --host 0.0.0.0 --port 8000
```

### 🌐 Deployment Status

- ✅ **Frontend**: Successfully deployed on [Vercel](https://vercel.com/)
- ⏳ **Backend**: Available for local development (can be deployed separately on Railway, Heroku, etc.)
- ⏳ **Database**: MongoDB Atlas integration ready

### 🔧 Deployment Configuration

The project includes:
- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files excluded from deployment
- Optimized build process with `--legacy-peer-deps` support

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**MRSHAKILS** - [@MRSHAKILS](https://github.com/MRSHAKILS)

Project Link: [https://github.com/MRSHAKILS/Portfolio](https://github.com/MRSHAKILS/Portfolio)

---

<div align="center">

### 🌟 Show your support

Give a ⭐️ if this project helped you!

![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)
![Powered by React](https://img.shields.io/badge/Powered%20by-React-61DAFB.svg)
![Built with FastAPI](https://img.shields.io/badge/Built%20with-FastAPI-009688.svg)

</div>
