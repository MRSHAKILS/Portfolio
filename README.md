# 🚀 Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## ✨ Features

- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- ⚡ Fast and optimized React application
- 🎭 Interactive animations and effects
- 📝 Easy content management through mockData.js

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Build Tool**: Create React App with CRACO

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 8.x or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MRSHAKILS/Portfolio.git
cd Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📝 Editing Content

All portfolio content is stored in a single file for easy editing:

**File**: `frontend/src/data/mockData.js`

### What You Can Edit:

- **Personal Information**: Name, title, description
- **Profile Picture**: Avatar URL
- **Skills**: Frontend, backend, database, and tools
- **Experience**: Work history and achievements
- **Projects**: Portfolio projects with images and links
- **Achievements**: Awards, certifications, and contributions
- **Contact Information**: Email, LinkedIn, GitHub

### Example:

```javascript
export const portfolioData = {
  hero: {
    name: "Your Name", // Change this
    title: "Your Title", // Change this
    // ...
  },
  // ... more sections
};
```

Just save the file and the page will auto-reload with your changes! ✨

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `frontend/build` directory.

## 🌐 Deployment

This portfolio is configured for easy deployment to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MRSHAKILS/Portfolio)

Or manually:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy! 🎉

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Shakil Ahmed**

- GitHub: [@MRSHAKILS](https://github.com/MRSHAKILS)
- LinkedIn: [shakil-ahmed-cs](https://www.linkedin.com/in/shakil-ahmed-cs/)

---

⭐ Star this repo if you find it helpful!
