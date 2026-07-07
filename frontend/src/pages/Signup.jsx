import "../styles/auth.css";
import { Link } from "react-router-dom";


export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="logo-section">
          <div className="logo-icon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <h1>CodeMan Sachs</h1>
          <p>AI Code Migration and Generation Platform</p>
        </div>

        <h2>Create Account</h2>

        <p className="subtitle">
          Build software with autonomous AI agents
        </p>

        <form className="auth-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?
          <Link to="/">  Sign In</Link>
        </div>

      </div>
    </div>
  );
}