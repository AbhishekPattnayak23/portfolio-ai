import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import routes from './routes';
import { setupRoutePerformanceTracking } from './utils/performanceMonitor';

// Navigation component with performance tracking
const NavigationTracker = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Setup performance tracking for route transitions
    const unlisten = setupRoutePerformanceTracking({ listen: (callback) => {
      window.addEventListener('popstate', callback);
      return () => window.removeEventListener('popstate', callback);
    }});

    return () => {
      if (typeof unlisten === 'function') {
        unlisten();
      }
    };
  }, [navigate]);

  return <>{children}</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <NavigationTracker>
        <div className="app">
          <header className="app-header">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/projects">Projects</a></li>
              </ul>
            </nav>
          </header>

          <main>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  exact={route.exact}
                />
              ))}
            </Routes>
          </main>
        </div>
      </NavigationTracker>
    </BrowserRouter>
  );
};

export default App;
