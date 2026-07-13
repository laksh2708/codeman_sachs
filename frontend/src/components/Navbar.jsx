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

      <div className="nav-actions">
        <Link to="/login" className="signin-btn">
          Sign In
        </Link>
      </div>

    </nav>
  );
}