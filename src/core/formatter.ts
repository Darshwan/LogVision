import { LogEntry, FormatterOptions } from '../types.js';
import chalk from 'chalk';
import dayjs from 'dayjs';

export class Formatter {
  constructor(private options: FormatterOptions) {}

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
    
    return `${timestamp} ${appName} ${level} ${entry.message}`;
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
      appName: entry.appName
    });
  }

  private formatLevel(level: LogLevel): string {
    if (!this.options.enableColors) {
      return `[${level}]`;
    }

    // Add colors and icons - our first chalk usage!
    const icons = {
      INFO: '🌿',
      WARN: '⚠️',
      ERROR: '❌',
      DEBUG: '🐛'
    };

    const colors = {
      INFO: chalk.green,
      WARN: chalk.yellow,
      ERROR: chalk.red,
      DEBUG: chalk.blue
    };

    return colors[level](`${icons[level]} ${level}`);
  }
}