import type { LogLevel, LoggerOptions, LogEntry } from '../types.js';
import { Formatter } from '../core/formatter.js';

export class Logger {
  private formatter: Formatter;

  constructor(private options: LoggerOptions = {}) {
    this.options = {
      level: 'INFO',
      outputMode: 'pretty',
      enableColors: true,
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      ...options
    };

    this.formatter = new Formatter({
      outputMode: this.options.outputMode!,
      enableColors: this.options.enableColors!,
      dateFormat: this.options.dateFormat!
    });
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: Record<LogLevel, number> = {
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3
    };

    return levels[level] >= levels[this.options.level!];
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>): void {
    if (!this.shouldLog(level)) return;

    const entry: LogEntry = {
      timestamp: new Date(),
      level,
      message,
      context,
      appName: this.options.appName
    };

    const formatted = this.formatter.format(entry);
    console.log(formatted);
  }

  info(message: string, context?: Record<string, any>): void {
    this.log('INFO', message, context);
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log('WARN', message, context);
  }

  error(message: string, context?: Record<string, any>): void {
    this.log('ERROR', message, context);
  }

  debug(message: string, context?: Record<string, any>): void {
    this.log('DEBUG', message, context);
  }
}