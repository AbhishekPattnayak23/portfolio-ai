import React from 'react';
import { lazyLoad } from '../utils/lazyLoad';

// Lazily loaded components - will only be loaded when needed
const Home = lazyLoad(() => import('../pages/Home'));
const About = lazyLoad(() => import('../pages/About'));
const Contact = lazyLoad(() => import('../pages/Contact'));
const Projects = lazyLoad(() => import('../pages/Projects'));
const NotFound = lazyLoad(() => import('../pages/NotFound'));

// Route configuration
const routes = [
  {
    path: '/',
    element: <Home />,
    exact: true
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
