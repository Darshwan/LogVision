export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

export interface LogEntry {
    timestamp: Date;
    level: LogLevel;
    message: string;
}

export interface LoggerOptions {
    appName?: string;
}