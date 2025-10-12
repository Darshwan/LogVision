import { LogLevel, LoggerOptions, LogEntry } from '../types.js';
import { Formatter } from '../core/formatter.js';

export class Logger {
  private formatter: Formatter;

  constructor(private options: LoggerOptions = {}) {
    // Set default options
    this.options = {
      level: 'INFO',
      outputMode: 'pretty',
      enableColors: true,
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      ...options
    };

    // Create our formatter instance
    this.formatter = new Formatter({
      outputMode: this.options.outputMode!,
      enableColors: this.options.enableColors!,
      dateFormat: this.options.dateFormat!
    });
  }

  // We'll implement the log methods next
}