export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

export interface LogEntry {
    timestamp: Date;
    level: LogLevel;
    message: string;
    context?: Record<string, any>;
    appName?: string;
}

export interface LoggerOptions {
    appName?: string;
    level?: LogLevel;
    outputMode?: OutputMode;
    enableColors?: boolean;
    dateFormat?: string;
}