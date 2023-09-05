import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PhotoPage from "./pages/PhotoPage";
import React, { ReactNode, useState, useRef, useEffect } from "react";

import "./App.css";

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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="link-container">
      <div className="links">
        <Link
          className="link"
          to="/"
          style={{ color: location.pathname === "/" ? "black" : "grey" }}
        >
          [ HOME ]
        </Link>
        <Link
          className="link"
          to="/about"
          style={{ color: location.pathname === "/about" ? "black" : "grey" }}
        >
          [ ABOUT ]
        </Link>
        <Link
          className="link"
          to="/photo"
          style={{ color: location.pathname === "/photo" ? "black" : "grey" }}
        >
          [ PHOTO ]
        </Link>
      </div>

      <div className="dropdown" ref={dropdownRef}>
        <div
          className="dropdown-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Menu
        </div>
        {isDropdownOpen && (
          <div
            className="dropdown-menu"
            style={{ display: isDropdownOpen ? "block" : "none" }}
          >
            <Link
              className="dropdown-link"
              to="/"
              style={{ color: location.pathname === "/" ? "black" : "grey" }}
              onClick={() => setIsDropdownOpen(false)}
            >
              [ HOME ]
            </Link>
            <Link
              className="dropdown-link"
              to="/about"
              style={{
                color: location.pathname === "/about" ? "black" : "grey",
              }}
              onClick={() => setIsDropdownOpen(false)}
            >
              [ ABOUT ]
            </Link>
            <Link
              className="dropdown-link"
              to="/photo"
              style={{
                color: location.pathname === "/photo" ? "black" : "grey",
              }}
              onClick={() => setIsDropdownOpen(false)}
            >
              [ PHOTO ]
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  let location = useLocation();

  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="page-logo">
          <span>Runyao</span>
          <span>Fan</span>
        </Link>

        <Navbar location={location} />
      </div>
      <div className="content">{children}</div>
      <footer className="footer">
        Copyright © {new Date().getFullYear()} Runyao Fan. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
