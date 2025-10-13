import { Formatter } from './formatter.js';
import type { LogLevel, LoggerOptions } from '../types.js';

export class ConsoleInterceptor {
  private originalConsole: Partial<typeof console>;
  private formatter: Formatter;
  private isIntercepted = false;

  constructor(options: LoggerOptions) {
    this.formatter = new Formatter(options);
    this.originalConsole = { ...console };
  }

  intercept(): void {
    if (this.isIntercepted) return;

    const methods: Record<string, LogLevel> = {
      log: 'INFO',
      info: 'INFO',
      warn: 'WARN',
      error: 'ERROR',
      debug: 'DEBUG',
    };

    Object.keys(methods).forEach((method) => {
      const original = console[method as keyof typeof console] as (...args: any[]) => void;

      // ✅ Cast console method type to 'any' to avoid type errors
      (console as any)[method] = (...args: any[]) => {
        const message = args
          .map((arg) => (typeof arg === 'object' ? JSON.stringify(arg) : String(arg)))
          .join(' ');

        const entry = {
          timestamp: new Date(),
          level: methods[method],
          message,
        };

        const formatted = this.formatter.format(entry);
        original(formatted);
      };
    });

    this.isIntercepted = true;
  }

  restore(): void {
    if (!this.isIntercepted) return;

    Object.keys(this.originalConsole).forEach((method) => {
      (console as any)[method] = this.originalConsole[method as keyof typeof console];
    });

    this.isIntercepted = false;
  }
}
