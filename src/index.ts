// Import types first
import type { LoggerOptions } from './types.js';
import { Logger } from './logger/logger.js';
import { ConsoleInterceptor } from './core/interceptor.js';

// Re-export everything
export { LogLevel, LoggerOptions, OutputMode } from './types.js';
export { Formatter } from './core/formatter.js';
export { Logger } from './logger/logger.js';
export { ConsoleInterceptor } from './core/interceptor.js';

// Now we can use LoggerOptions and Logger in the function
export function createLogger(options?: LoggerOptions): Logger {
  return new Logger(options);
}

// Convenience function for console interception
export function interceptConsole(options?: any): void {
  const interceptor = new ConsoleInterceptor({
    outputMode: 'pretty',
    enableColors: true,
    dateFormat: 'YYYY-MM-DD HH:mm:ss',
    ...options
  });
  
  interceptor.intercept();
}