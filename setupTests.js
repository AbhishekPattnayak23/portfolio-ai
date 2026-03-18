import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock scrollTo for tests
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true
});

// Mock IntersectionObserver
class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
    this.elements = new Set();
    this.instances = [];
  }

  observe(element) {
    this.elements.add(element);
  }

  unobserve(element) {
    this.elements.delete(element);
  }

  disconnect() {
    this.elements.clear();
  }

  // Helper for tests
  simulateIntersection(isIntersecting) {
    const entries = Array.from(this.elements).map(element => ({
      isIntersecting,
      target: element,
      intersectionRatio: isIntersecting ? 1 : 0,
      boundingClientRect: {},
      intersectionRect: {},
      rootBounds: null,
      time: Date.now(),
    }));

    this.callback(entries, this);
  }
}

global.IntersectionObserver = IntersectionObserverMock;

// Verify security testing capability
const securityTests = {
  hasXSSProtection: () => {
    // Check for XSS protection in rendered HTML
    const hasProtection = document.querySelector('meta[http-equiv="X-XSS-Protection"]');
    if (!hasProtection) {
      console.warn('Security Warning: X-XSS-Protection meta tag not found');
    }
    return !!hasProtection;
  },

  hasCSP: () => {
    // Check for CSP
    const hasCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!hasCSP) {
      console.warn('Security Warning: Content-Security-Policy meta tag not found');
    }
    return !!hasCSP;
  }
};

// Add security tests to global for use in tests
global.securityTests = securityTests;

// Mock localStorage for tests
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Add security-focused Jest matchers
expect.extend({
  toBeSecureLink(received) {
    const el = received;
    let pass = true;
    let message = '';

    if (el && el.tagName === 'A') {
      // Check for secure rel attribute
      const hasNoopener = (el.getAttribute('rel') || '').includes('noopener');
      const hasNoreferrer = (el.getAttribute('rel') || '').includes('noreferrer');

      if (!hasNoopener || !hasNoreferrer) {
        pass = false;
        message = `Expected link to have rel="noopener noreferrer", but got "${el.getAttribute('rel')}"`;
      }

      // Check for target="_blank" without proper security
      if (el.getAttribute('target') === '_blank' && !hasNoopener) {
        pass = false;
        message = 'Expected link with target="_blank" to have rel="noopener"';
      }
    } else {
      pass = false;
      message = 'Expected element to be an anchor (a) tag';
    }

    return {
      pass,
      message: () => message
    };
  }
});

// Console security warnings during tests
const originalWarn = console.warn;
console.warn = (msg, ...args) => {
  // Add special handling for security warnings
  if (typeof msg === 'string' && msg.includes('Security Warning')) {
    // You can add additional logic here, like failing tests
    // for security warnings in CI environments
  }
  originalWarn(msg, ...args);
};
