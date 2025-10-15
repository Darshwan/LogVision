# "LogVision" — Beautiful, Structured, and Developer-Friendly Logs

> Make your console logs clean, colorful, and insightful — right from your terminal.  
> Designed for Node.js & TypeScript developers who want structured, professional logging with zero setup.

---

## Installation

```bash
# Using npm
npm install logvision

// Using yarn
yarn add logvision

// Using pnpm
pnpm add logvision

// Install globally for CLI usage
npm install -g logvision
```
## Quick Start
### As a Library:
```typescript
import { createLogger } from "logvision";

const log = createLogger({
  name: "MyApp",
  timestamp: true,
  color: true
});

log.info("Server started on port 3000");
log.success("Database connected");
log.warn("Low disk space");
log.error("Failed to fetch user data", { userId: 123, error: "Timeout" });
```
#### Output:
```bash
[2024-01-15 10:30:00] [MyApp] 🌿 INFO Server started on port 3000
[2024-01-15 10:30:01] [MyApp] ✅ SUCCESS Database connected  
[2024-01-15 10:30:02] [MyApp] ⚠️ WARN Low disk space
[2024-01-15 10:30:03] [MyApp] ❌ ERROR Failed to fetch user data {"userId":123,"error":"Timeout"}
```
### Automatic Console Interception
```typescript
import { interceptConsole } from "logvision";

// Make all console.log calls beautiful automatically!
interceptConsole();

console.log("This becomes pretty! 🌈");
console.error("This becomes a formatted error! ❌");
console.warn("This becomes a warning! ⚠️");
```
## Features
- ✨ Beautiful, color-coded logs (INFO, SUCCESS, WARN, ERROR, DEBUG)
- ⏰ Timestamps & context - Know when and where logs occurred
- 🎯 Zero configuration - Works out of the box
- 🔧 TypeScript native - Full type safety and IntelliSense
- 📁 File logging - Optional file output for production
- 🖥️ CLI tool - Analyze and visualize your logs
- 🔌 Framework agnostic - Works with Express, NestJS, Fastify, etc.
- 🎪 Multiple formats - Pretty, minimal, and JSON output modes

## CLI Usage

Once installed globally or used via npx:
```bash
# Analyze log files
npx logvision analyze ./logs/app.log

// Run any script with beautiful logs
npx logvision watch "node server.js"
npx logvision run "npm start"

// Watch with specific options
npx logvision watch "node server.js" --mode json --no-colors
```
#### Output Example:
```bash
📊 LogVision Report
──────────────────────────────
Total Logs: 158
Errors: 12
Warnings: 9
Last Error: 2025-10-13 14:02:11
──────────────────────────────
```
## API Reference 
> createLogger(options?: LoggerOptions): Logger

| Option      | Type               | Default  | Description                 |
| ----------- | ------------------ | -------- | --------------------------- |
| `name`      | `string`           | `"App"`  | Name of your application    |
| `timestamp` | `boolean`          | `true`   | Adds timestamps to each log |
| `color`     | `boolean`          | `true`   | Enables colorful logs       |
| `file`      | `boolean`          | `false`  | Enables log file saving     |
| `mode`      | `"pretty" \| "json" \| "minimal"` | `"pretty"` | Output format               |
| `level` |`"DEBUG"\| "INFO"\| "WARN"\| "ERROR"` | `"INFO"` | Minimum log level |

> interceptConsole(options?: LoggerOptions)

Seamlessly intercepts console.log, console.error, etc.
## Logger Methods
```typescript
const logger = createLogger({ name: "MyApp" });

logger.info("Informational message");
logger.success("Success message");
logger.warn("Warning message");
logger.error("Error message");
logger.debug("Debug information", { debugData: "value" });

// With context
logger.error("API call failed", { 
  endpoint: "/api/users", 
  status: 500, 
  duration: "2.3s" 
});
```
## 💡 Examples
### Express.js Application
```typescript
import express from 'express';
import { createLogger } from 'logvision';

const app = express();
const logger = createLogger({ name: 'ExpressApp' });

app.get('/', (req, res) => {
  logger.info('GET /', { ip: req.ip, userAgent: req.get('User-Agent') });
  res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
  logger.success('Server started on port 3000');
});
```
## Error Handling
```typescript
try {
  // Some operation that might fail
  await connectToDatabase();
} catch (error) {
  logger.error('Database connection failed', {
    error: error.message,
    stack: error.stack,
    attempt: 3
  });
}
```
## Production JSON Logging
```typescript
const logger = createLogger({
  name: 'MyApp',
  mode: 'json',
  color: false, // Disable colors for file output
  file: true    // Save to log file
});
```
## 🎯 Output Modes
### Pretty Mode (Default)
```text
[2024-01-15 10:30:00] [MyApp] 🌿 INFO Server started
[2024-01-15 10:30:01] [MyApp] ✅ SUCCESS DB connected
[2024-01-15 10:30:02] [MyApp] ⚠️ WARN High memory usage
[2024-01-15 10:30:03] [MyApp] ❌ ERROR Request failed
```
### Minimal Mode
```text
🌿 INFO Server started
✅ SUCCESS DB connected  
⚠️ WARN High memory usage
❌ ERROR Request failed
```
### JSON Mode
```bash
{"timestamp":"2024-01-15T10:30:00.000Z","level":"INFO","message":"Server started","name":"MyApp"}
{"timestamp":"2024-01-15T10:30:01.000Z","level":"SUCCESS","message":"DB connected","name":"MyApp"}
```
## Configuration
#### Via Code:
```typescript
const logger = createLogger({
  name: 'MyApp',
  timestamp: true,
  color: true,
  mode: 'pretty',
  level: 'DEBUG'
});
```
#### Via Environment Variables:
```bash
LOGVISION_NAME=MyApp
LOGVISION_COLOR=false
LOGVISION_MODE=json
LOGVISION_LEVEL=WARN
```
## Development
```bash
// Clone repository
git clone https://github.com/yourusername/logvision
cd logvision

// Install dependencies
npm install

// Build the project
npm run build

// Run tests
npm test

// Development mode with watch
npm run dev
```
# Contributing
We welcome contributions! Please see our Contributing Guide for details.

1. Fork the repository

2. Create a feature branch (git checkout -b feature/amazing-feature)

3. Commit your changes (git commit -m 'Add amazing feature')

4. Push to the branch (git push origin feature/amazing-feature)

5. Open a Pull Request

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# 🌟Show Your Support
If you find this project helpful, please give it a ⭐️ on GitHub!

#### Made with ❤️ for developers who care about their logs.
>Because your terminal deserves to be beautiful.
