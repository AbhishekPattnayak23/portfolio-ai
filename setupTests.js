// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock console.error/warn to make tests fail on warnings/errors
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

console.error = function (message) {
  originalConsoleError.apply(console, arguments);
  throw new Error(`Console error was triggered: ${message}`);
};

console.warn = function (message) {
  originalConsoleWarn.apply(console, arguments);
  // Uncomment the line below if you want warnings to fail tests too
  // throw new Error(`Console warning was triggered: ${message}`);
};

// This is to silence React 18 warnings about act()
const originalError = console.error;
console.error = (...args) => {
  if (/Warning.*not wrapped in act/.test(args[0])) {
    return;
  }
  originalError.call(console, ...args);
};
