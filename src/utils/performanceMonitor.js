// Performance monitoring utility

// Measure component render time
export const measureRenderTime = (Component) => {
  return (props) => {
    const startTime = performance.now();

    // Use useEffect for class components or functional components
    const MeasuredComponent = (
      <React.Fragment>
        <Component {...props} />
        {(() => {
          const endTime = performance.now();
          console.log(`${Component.name || 'Component'} rendered in ${endTime - startTime}ms`);
          return null;
        })()}
      </React.Fragment>
    );

    return MeasuredComponent;
  };
};

// Track route change performance
export const setupRoutePerformanceTracking = (history) => {
  let lastTransitionTime = performance.now();

  history.listen(() => {
    const now = performance.now();
    console.log(`Route transition took ${now - lastTransitionTime}ms`);
    lastTransitionTime = now;
  });
};

// Create a basic performance logger
export const logPerformance = (label, callback) => {
  const start = performance.now();
  const result = callback();
  const end = performance.now();
  console.log(`${label}: ${end - start}ms`);
  return result;
};

export default {
  measureRenderTime,
  setupRoutePerformanceTracking,
  logPerformance
};
