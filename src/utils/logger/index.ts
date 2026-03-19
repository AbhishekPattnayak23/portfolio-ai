/**
 * Logger utility for consistent logging across the application
 */
type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogOptions {
  component?: string;
  data?: any;
}

class Logger {
  private static instance: Logger;
  private isProduction = process.env.NODE_ENV === 'production';

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: LogLevel, message: string, options?: LogOptions): string {
    const timestamp = new Date().toISOString();
    const component = options?.component ? `[${options.component}]` : '';
    return `${timestamp} ${level.toUpperCase()} ${component} ${message}`;
  }

  public info(message: string, options?: LogOptions): void {
    const formattedMessage = this.formatMessage('info', message, options);
    console.info(formattedMessage);
    if (options?.data) console.info(options.data);
  }

  public warn(message: string, options?: LogOptions): void {
    const formattedMessage = this.formatMessage('warn', message, options);
    console.warn(formattedMessage);
    if (options?.data) console.warn(options.data);
  }

  public error(message: string, error?: Error, options?: LogOptions): void {
    const formattedMessage = this.formatMessage('error', message, options);
    console.error(formattedMessage);
    if (error) console.error(error);
    if (options?.data) console.error(options.data);
  }

  public debug(message: string, options?: LogOptions): void {
    if (this.isProduction) return;
    const formattedMessage = this.formatMessage('debug', message, options);
    console.debug(formattedMessage);
    if (options?.data) console.debug(options.data);
  }
}

export const logger = Logger.getInstance();
