/**
 * Logger utility for consistent application logging
 * Provides different log levels and can be configured for different environments
 */
class Logger {
  static levels = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
  };

  static currentLevel = process.env.NODE_ENV === 'production' ?
    this.levels.WARN : this.levels.DEBUG;

  static setLevel(level) {
    if (this.levels[level] !== undefined) {
      this.currentLevel = this.levels[level];
    }
  }

  static formatMessage(message) {
    return `[${new Date().toISOString()}] ${message}`;
  }

  static debug(message, ...args) {
    if (this.currentLevel <= this.levels.DEBUG) {
      console.debug(this.formatMessage(`DEBUG: ${message}`), ...args);
    }
  }

  static info(message, ...args) {
    if (this.currentLevel <= this.levels.INFO) {
      console.info(this.formatMessage(`INFO: ${message}`), ...args);
    }
  }

  static warn(message, ...args) {
    if (this.currentLevel <= this.levels.WARN) {
      console.warn(this.formatMessage(`WARN: ${message}`), ...args);
    }
  }

  static error(message, ...args) {
    if (this.currentLevel <= this.levels.ERROR) {
      console.error(this.formatMessage(`ERROR: ${message}`), ...args);
    }
  }
}

export default Logger;
