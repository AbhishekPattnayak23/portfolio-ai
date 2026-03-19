/**
 * Performance monitoring utility for React applications
 */

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined' || !window.performance) {
    console.warn('Performance API not supported in this environment');
    return;
  }

  // Log navigation timing metrics
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfEntries = performance.getEntriesByType('navigation');
      if (perfEntries && perfEntries.length > 0) {
        const navEntry = perfEntries[0];
        console.log('Navigation Performance Metrics:', {
          dnsLookup: Math.round(navEntry.domainLookupEnd - navEntry.domainLookupStart),
          tcpConnection: Math.round(navEntry.connectEnd - navEntry.connectStart),
          serverResponse: Math.round(navEntry.responseStart - navEntry.requestStart),
          contentDownload: Math.round(navEntry.responseEnd - navEntry.responseStart),
          domParsing: Math.round(navEntry.domInteractive - navEntry.responseEnd),
          domContentLoaded: Math.round(navEntry.domContentLoadedEventEnd - navEntry.navigationStart),
          pageLoad: Math.round(navEntry.loadEventEnd - navEntry.navigationStart)
        });
      }
    }, 0);
  });

  // Monitor component render time
  return {
    measureRender: (componentName) => {
      const startMark = `${componentName}-start`;
      const endMark = `${componentName}-end`;

      performance.mark(startMark);
      return () => {
        try {
          performance.mark(endMark);
          performance.measure(componentName, startMark, endMark);
          const entries = performance.getEntriesByName(componentName);
          if (entries.length > 0) {
            console.log(`${componentName} render time: ${entries[0].duration.toFixed(2)}ms`);
          }
          // Clean up
          performance.clearMarks(startMark);
          performance.clearMarks(endMark);
          performance.clearMeasures(componentName);
        } catch (error) {
          console.error('Error measuring component render time:', error);
        }
      };
    }
  };
};

export default initPerformanceMonitoring;
