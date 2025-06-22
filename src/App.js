import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Glass from './components/Glass';
import Books from './components/Books';
import Projects from './components/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutMe />;
      case 'glass':
        return <Glass />;
      case 'books':
        return <Books />;
      case 'projects':
        return <Projects />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>Kerry Huang</h1>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('about')}
            >
              About Me
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'glass' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('glass')}
            >
              GLASS
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'books' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('books')}
            >
              Books
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'projects' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('projects')}
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
