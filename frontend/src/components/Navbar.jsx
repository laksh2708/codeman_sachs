import { Link,useNavigate } from "react-router-dom";
import "../styles/landing.css";
import { isAuthenticated } from "../utils/auth";


export default function Navbar() {

    const navigate = useNavigate();
  
    const handleStartMigration = () => {
    if (!isAuthenticated()) {
        navigate("/login");
        return;
    }
    navigate("/dashboard");
};

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

        <Link to="/login" className="signin-btn">
          Sign In
        </Link>

        <button className="primary-btn" onClick={handleStartMigration}>Start Migration</button>
        
      </div>

    </nav>
  );
}