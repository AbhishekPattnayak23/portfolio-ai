import React from 'react';

const LoadingFallback = ({ message = 'Loading...' }) => {
  return (
    <div className="loading-fallback">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default LoadingFallback;
