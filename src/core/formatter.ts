import type { LogEntry, LoggerOptions, LogLevel } from '../types.js';
import chalk from 'chalk';
import dayjs from 'dayjs';

export class Formatter {
  constructor(private options: LoggerOptions) {}

  format(entry: LogEntry): string {
    switch (this.options.outputMode) {
      case 'json':
        return this.formatJson(entry);
      case 'minimal':
        return this.formatMinimal(entry);
      case 'pretty':
      default:
        return this.formatPretty(entry);
    }
  }

  private formatPretty(entry: LogEntry): string {
    const timestamp = dayjs(entry.timestamp).format(this.options.dateFormat);
    const level = this.formatLevel(entry.level);
    const appName = entry.appName ? `[${entry.appName}]` : '';
    
    let message = entry.message;
    if (entry.context && Object.keys(entry.context).length > 0) {
      message += ` ${this.formatContext(entry.context)}`;
    }

    return `${timestamp} ${appName} ${level} ${message}`;
  }

  private formatMinimal(entry: LogEntry): string {
    const level = this.formatLevel(entry.level);
    return `${level} ${entry.message}`;
  }

  private formatJson(entry: LogEntry): string {
    return JSON.stringify({
      timestamp: entry.timestamp.toISOString(),
      level: entry.level,
      message: entry.message,
      context: entry.context,
      appName: entry.appName
    });
  }

  private formatLevel(level: LogLevel): string {
    if (!this.options.enableColors) {
      return `[${level}]`;
    }

    const icons: Record<LogLevel, string> = {
      INFO: '🌿',
      WARN: '⚠️',
      ERROR: '❌',
      DEBUG: '🐛'
    };

    // Fix: Use simpler type for chalk since chalk v5 has different types
    const colors: Record<LogLevel, any> = {
      INFO: chalk.green,
      WARN: chalk.yellow,
      ERROR: chalk.red,
      DEBUG: chalk.blue
    };

    return colors[level](`${icons[level]} ${level}`);
  }

  private formatContext(context: Record<string, any>): string {
    if (!this.options.enableColors) {
      return JSON.stringify(context);
    }
    
    return chalk.gray(JSON.stringify(context));
  }
}