import React, { Suspense } from 'react';

// Utility function to lazy load components with a fallback
export const lazyLoad = (importFunc, fallback = null) => {
  const LazyComponent = React.lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallback || <div className="loading-spinner">Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default lazyLoad;
