# Contributing to MonadFlow

Thank you for your interest in contributing to MonadFlow! This document provides guidelines and instructions for contributing.

## 🎯 Mission

MonadFlow aims to create the best discovery experience for the Monad ecosystem through:
- 🎨 Immersive 3D visualization
- 🤖 Intelligent AI recommendations
- 🎮 Engaging gamification
- 📊 Real-time data integration

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and OS information

### Suggesting Features

We welcome feature suggestions! Please:
- Check existing issues first
- Describe the feature clearly
- Explain the use case
- Consider implementation complexity

### Pull Requests

1. **Fork & Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/MonadFlow.git
   cd MonadFlow
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow our coding standards
   - Write clean, documented code
   - Add tests if applicable
   - Update documentation

4. **Test Your Changes**
   ```bash
   npm run dev
   npm run lint
   npm run type-check
   ```

5. **Commit**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes
   - `refactor:` - Code refactoring
   - `test:` - Test changes
   - `chore:` - Build/config changes

6. **Push & PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub.

## 📋 Code Standards

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` types when possible
- Use strict mode

### React/Next.js
- Use functional components with hooks
- Follow React best practices
- Use Server Components when possible
- Optimize for performance

### Styling
- Use TailwindCSS utility classes
- Follow the design system
- Use Monad brand colors
- Ensure responsive design

### File Organization
```
feature/
├── index.tsx          # Main component
├── types.ts           # Type definitions
├── hooks.ts           # Custom hooks
├── utils.ts           # Utility functions
└── components/        # Sub-components
```

### Comments
```typescript
/**
 * Brief description of function
 * @param param1 - Description of param1
 * @param param2 - Description of param2
 * @returns Description of return value
 */
function myFunction(param1: string, param2: number): boolean {
  // Implementation
}
```

## 🧪 Testing

- Test all new features
- Ensure existing tests pass
- Write unit tests for utilities
- Test on multiple browsers

## 📚 Documentation

- Update README.md if needed
- Add JSDoc comments
- Document complex logic
- Update API docs

## 🎨 Design Guidelines

### Colors
```typescript
// Monad Brand Colors
const colors = {
  purple: '#8B5CF6',
  blue: '#3B82F6',
  cyan: '#06B6D4',
};
```

### Typography
- Use Inter font
- Clear hierarchy
- Readable sizes
- Proper contrast

### Spacing
- Consistent padding/margins
- Follow 8px grid system
- Use Tailwind spacing scale

## 🚀 Development Workflow

1. **Daily Workflow**
   ```bash
   git pull origin main
   npm install
   npm run dev
   ```

2. **Before Committing**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

3. **Code Review**
   - Request review from team
   - Address feedback
   - Ensure CI/CD passes

## 🐛 Debugging

- Use browser DevTools
- Check console for errors
- Test on different screen sizes
- Verify wallet connections
- Test with different networks

## 📖 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Wagmi Docs](https://wagmi.sh/)
- [Monad Docs](https://docs.monad.xyz/)

## 🎯 Priority Areas

Current focus areas:
1. 3D visualization performance
2. AI recommendation accuracy
3. Mobile responsiveness
4. Data freshness
5. User experience

## ❓ Questions?

- Open an issue
- Reach out to the team
- Check existing documentation

## 🙏 Thank You!

Your contributions help make MonadFlow better for the entire Monad community!

---

**Remember:** Quality over quantity. Take time to write clean, maintainable code.
