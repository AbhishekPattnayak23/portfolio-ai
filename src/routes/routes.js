import React, { lazy } from 'react';
import LazyLoader from '../utils/LazyLoader';

// Lazy loaded components
const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ '../pages/About'));
const Projects = lazy(() => import(/* webpackChunkName: "projects" */ '../pages/Projects'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ '../pages/Contact'));

// Loading fallback for pages
const PageLoadingFallback = () => (
  <div className="page-loading">
    <h2>Loading page content...</h2>
    <div className="loading-indicator"></div>
  </div>
);

/**
 * Application routes with lazy loaded components
 * Each route uses LazyLoader to handle suspense and error boundaries
 */
const routes = [
  {
    path: '/',
    element: <LazyLoader component={Home} fallback={<PageLoadingFallback />} />,
    exact: true
  },
  {
    path: '/about',
    element: <LazyLoader component={About} fallback={<PageLoadingFallback />} />
  },
  {
    path: '/projects',
    element: <LazyLoader component={Projects} fallback={<PageLoadingFallback />} />
  },
  {
    path: '/contact',
    element: <LazyLoader component={Contact} fallback={<PageLoadingFallback />} />
  }
];

export default routes;
