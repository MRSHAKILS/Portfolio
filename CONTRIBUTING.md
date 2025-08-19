# 🤝 Contributing to Portfolio Application

Thank you for your interest in contributing to the Portfolio Application! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Reporting Issues](#reporting-issues)

## 🚀 Getting Started

1. **Fork the repository**

   ```bash
   git clone https://github.com/MRSHAKILS/Portfolio.git
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**

   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Test your changes**

   ```bash
   # Backend tests
   cd backend && pytest

   # Frontend tests
   cd frontend && npm test
   ```

## 🛠️ Development Setup

### Backend Development

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn server:app --reload
```

### Frontend Development

```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

## 📝 Contributing Guidelines

### Types of Contributions

- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- ⚡ **Performance optimizations**
- 🧪 **Testing improvements**

### Before You Contribute

1. Check existing issues to see if your idea/bug is already being worked on
2. Open an issue to discuss major changes before implementing
3. Make sure your development environment is set up correctly
4. Ensure all tests pass before submitting

## 🔄 Pull Request Process

1. **Update Documentation**

   - Update README.md with details of changes if applicable
   - Update API documentation for backend changes
   - Add JSDoc comments for new frontend components

2. **Follow Commit Message Convention**

   ```
   type(scope): description

   feat(frontend): add new portfolio section
   fix(backend): resolve authentication bug
   docs(readme): update installation instructions
   style(ui): improve mobile responsiveness
   ```

3. **Test Coverage**

   - Add tests for new features
   - Ensure existing tests still pass
   - Aim for 80%+ test coverage

4. **Code Review**
   - Request review from maintainers
   - Address feedback promptly
   - Keep PRs focused and reasonably sized

## 🎨 Code Style

### Python (Backend)

- Follow PEP 8 guidelines
- Use type hints for all functions
- Use Black for code formatting
- Use isort for import sorting

```python
from typing import List, Optional

async def get_users(limit: int = 10) -> List[Dict[str, Any]]:
    """Get a list of users with optional limit."""
    # Implementation here
    pass
```

### JavaScript/React (Frontend)

- Use ESLint and Prettier configurations
- Follow React best practices
- Use functional components with hooks
- Use TypeScript when possible

```jsx
import React from "react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  onView: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  onView,
}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Button onClick={onView}>View Project</Button>
    </div>
  );
};
```

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use CSS custom properties for theming
- Keep consistent spacing and typography

## 🐛 Reporting Issues

When reporting issues, please include:

1. **Bug Description**: Clear description of the problem
2. **Steps to Reproduce**: Detailed steps to reproduce the issue
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Environment**: OS, browser, Node.js version, Python version
6. **Screenshots**: If applicable

### Issue Template

```markdown
## Bug Description

A clear description of what the bug is.

## Steps to Reproduce

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior

A clear description of what you expected to happen.

## Screenshots

If applicable, add screenshots to help explain your problem.

## Environment

- OS: [e.g. Windows 10, macOS Big Sur]
- Browser: [e.g. Chrome 91, Safari 14]
- Node.js: [e.g. 18.0.0]
- Python: [e.g. 3.11.0]
```

## 🏆 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes for significant contributions
- GitHub contributors graph

## 📞 Questions?

If you have questions about contributing:

- Open an issue with the 'question' label
- Reach out to [@MRSHAKILS](https://github.com/MRSHAKILS)

Thank you for contributing to make this portfolio application better! 🚀
