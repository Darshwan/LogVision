// Import types first
import type { LoggerOptions } from './types.js';
import { Logger } from './logger/logger.js';

// Re-export everything
export { LogLevel, LoggerOptions, OutputMode } from './types.js';
export { Formatter } from './core/formatter.js';
export { Logger } from './logger/logger.js';

// Now we can use LoggerOptions and Logger in the function
export function createLogger(options?: LoggerOptions): Logger {
  return new Logger(options);
}