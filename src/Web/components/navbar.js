import React from "react";
import "./navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const handleHome = () => {
    window.location.href = "/home";
  };
  const handleSignUp = () => {
    window.location.href = "/signup";
  };
  const handleLogin = () => {
    window.location.href = "/login";
  };
  const handlePrivacy = () => {
    window.location.href = "/privacy";
  };

  return (
    <header className="header">
      <h1 className="title">Nexa Sphere</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#Home" onClick={handleHome}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#learn-more" onClick={handlePrivacy}>
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a href="#support">Support</a>
          </li>
          <li className="nav-item">
            <a href="#login" onClick={handleLogin}>Login</a>
          </li>
          <li className="nav-item">
            <a href="#signup" onClick={handleSignUp}>
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
