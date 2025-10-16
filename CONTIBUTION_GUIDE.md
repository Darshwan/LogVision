# Contributing to LogVision 🌟
Thank you for your interest in contributing to LogVision! We're excited to have you join our community of developers who believe that logs should be beautiful and meaningful.

# Our Philosophy
- Developer Experience First: Every feature should make logging easier and more enjoyable
- Simplicity Over Complexity: Keep the API intuitive and straightforward
- TypeScript Native: Maintain excellent TypeScript support and type safety
- Zero Configuration: Sensible defaults that work out of the box

## 1. Fork and Clone
```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/Darshwan/LogVision.git
cd logvision

# Add upstream remote
git remote add upstream https://github.com/Darshwan/LogVision.git
```
## 2. Install & Setup
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests to ensure everything works
npm test
```
## 3. Create a Branch
```bash
# For new features
git checkout -b feature/amazing-feature

# For bug fixes  
git checkout -b fix/annoying-bug

# For documentation
git checkout -b docs/improve-readme
```

##  Development Workflow
## Project Structure
```text
logvision/
├── src/
│   ├── core/           # Core formatting and interception logic
│   ├── logger/         # Logger class and related utilities
│   ├── cli/            # CLI commands and interface
│   ├── types.ts        # TypeScript type definitions
│   └── index.ts        # Main package exports
├── bin/                # CLI entry points
├── test-*.js          # Test files for different components
├── examples/          # Usage examples (you can add more!)
 |── Readme.md/        # Documentation
└── otherFiles....
```

## Building and Testing 
```typescript
# Build the project
npm run build

# Build in watch mode (development)
npm run dev

# Run all tests
npm test

# Run specific test suites
npm run test:formatter
npm run test:logger  
npm run test:interceptor
npm run test:cli
```

## Code Quality
We use TypeScript's strict mode and ESLint for code quality. Please ensure:
- All tests pass before submitting PR
- TypeScript compiles without errors
- New features include appropriate tests
- Code follows the existing style


# Pull Request Process
## 1. Before You Start
- Check existing issues and PRs to avoid duplicates
- Discuss major changes in an issue first
- Ensure your code follows our coding standards

## 2. Making Changes
```typescript
# Sync with upstream
git fetch upstream
git rebase upstream/main

# Make your changes
# Add tests for new functionality
# Update documentation if needed

# Commit with descriptive message
git commit -m "feat: add log grouping functionality"
```

## 3. Commit Message Convention
We follow conventional commits:
feat: New features
fix: Bug fixes
docs: Documentation changes
style: Code style changes (formatting, etc.)
refactor: Code refactoring
test: Adding or updating tests
chore: Maintenance tasks

## 4. Submitting PR
1. Push to your fork: git push origin your-branch
2. Create PR against the main repository
3. Fill out the PR template completely
4. Wait for review and address any feedback

## Feature Development Guide
### Adding New Log Levels
1. Update LogLevel type in src/types.ts
2. Add formatting in src/core/formatter.ts
3. Add method in src/logger/logger.ts
4. Update tests in relevant test files

### Adding CLI Commands
1. Add command in src/cli/index.ts
2. Update help documentation
3. Add tests in test-cli.js
4. Update README with usage examples

Example: Adding a New Feature
```typescript
// 1. Update types
export type LogLevel = 'INFO' | 'SUCCESS' | 'WARN' | 'ERROR' | 'DEBUG' | 'TRACE';

// 2. Add formatter support
const icons: Record<LogLevel, string> = {
  // ... existing icons
  TRACE: '🔍'
};

// 3. Add logger method
trace(message: string, context?: Record<string, any>): void {
  this.log('TRACE', message, context);
}

// 4. Add tests
// 5. Update documentation
```

# Bug Reports
When reporting bugs, please include:
## Bug Report Template

```bash
## Description
Clear description of the bug

## Steps to Reproduce
1. ...
2. ...
3. ...

## Expected Behavior
What should happen

## Actual Behavior  
What actually happens

## Environment
- LogVision version:
- Node.js version:
- OS:
- Terminal:

## Additional Context
Screenshots, error messages, etc.
```

# Feature Requests
We love new ideas! When suggesting features:
## Feature Request Template
```bash
// Problem
What problem does this solve?

// Proposed Solution
How should it work?

// Alternatives Considered
Other ways to solve this problem

// Additional Context
Examples, use cases, etc.
```

# Architecture Guidelines
## Core Principles
1. Separation of Concerns: Formatters, loggers, and interceptors should be independent
2. Extensibility: Easy to add new output formats or log levels
3. Performance: Minimal overhead for production use
4. Compatibility: Work with existing console.log usage

## Code Standards
- Use TypeScript for type safety
- Prefer functional programming patterns where appropriate
- Write self-documenting code with clear variable names
- Include JSDoc comments for public APIs

## Testing Strategy
- Unit tests for individual components
- Integration tests for CLI commands
- Example-based tests for documentation
- Performance benchmarks for critical paths

##  Documentation
- We value great documentation! When contributing:
- Update README.md for user-facing changes
- Add JSDoc comments for new APIs
- Include code examples for new features
- Consider adding to the examples/ directory

##  Recognition
Contributors will be:
- Listed in our CONTRIBUTORS.md file
- Thanked in release notes
- Celebrated in our community!

## Need Help?
- Check existing documentation
- Look at closed issues and PRs
- Ask questions in GitHub Discussions
- Join our community chat (if available)

# License
By contributing, you agree that your contributions will be licensed under the project's MIT License.

# Thank You!
Thank you for considering contributing to LogVision! Your time and expertise help make logging better for everyone in the Node.js ecosystem.

Happy coding! 🎉