import React from 'react';
import ProjectsPage from './pages/ProjectsPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">GenAI Portfolio</div>
          <nav>
            <ul>
              <li className="active">Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <ProjectsPage />
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} GenAI Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
