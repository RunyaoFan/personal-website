import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PhotoPage from './pages/PhotoPage';
// import { Link } from 'react-router-dom';
import React, { ReactNode, useState } from 'react';

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/photo" element={<PhotoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

interface NavbarProps {
  location: any; // Replace any with the correct type of location
}

const Navbar: React.FC<NavbarProps> = ({ location }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="link-container">
      <div className="links">
        <Link className="link" to="/" style={{ color: location.pathname === '/' ? 'black' : 'grey' }}>[ HOME ]</Link>
        <Link className="link" to="/about" style={{ color: location.pathname === '/about' ? 'black' : 'grey' }}>[ ABOUT ]</Link>
        <Link className="link" to="/photo" style={{ color: location.pathname === '/photo' ? 'black' : 'grey' }}>[ PHOTO ]</Link>
      </div>

      <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <div className="dropdown-header">
        Menu
    </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <Link className="dropdown-link" to="/" style={{ color: location.pathname === '/' ? 'black' : 'grey' }}>[ HOME ]</Link>
            <Link className="dropdown-link" to="/about" style={{ color: location.pathname === '/about' ? 'black' : 'grey' }}>[ ABOUT ]</Link>
            <Link className="dropdown-link" to="/photo" style={{ color: location.pathname === '/photo' ? 'black' : 'grey' }}>[ PHOTO ]</Link>
          </div>
        )}
      </div>
    </div>
  );
}

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  let location = useLocation();

  return (
    <div className="container">
      <div className="header">
        <span className="name">
          <span>Runyao</span>
          <span>Fan</span>
        </span>
        <Navbar location={location} />
      </div>
      <div>
        {children}
      </div>
      <footer className="footer">
        Copyright © {new Date().getFullYear()} Runyao Fan. All rights reserved.
      </footer>
    </div>
  );
}


export default App;






