import { Link } from "react-router-dom";
import "../styles/landing.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <div className="logo-circle">
          C
        </div>

        <div className="logo-text">
          <h2>CodeMan Sachs</h2>
          <span>AI Code Migration Platform</span>
        </div>

      </div>

      <div className="nav-links">

        <a href="#features">Features</a>

        <a href="#workflow">Workflow</a>

        <a href="#agents">AI Agents</a>

        <a href="#tech">Tech Stack</a>

      </div>

      <div className="nav-buttons">

        <Link to="/" className="signin-btn">
          Sign In
        </Link>

        <button className="primary-btn">
          Start Migration
        </button>

      </div>

    </nav>
  );
}