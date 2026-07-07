import "./../styles/auth.css";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card signup-card">

        <div className="logo-section">
          <div className="logo-icon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <h1>CodeMan Sachs</h1>

          <p>
            AI Code Migration and Generation Platform
          </p>
        </div>

        <h2>Welcome Back</h2>

        <p className="subtitle">
          Sign in to continue
        </p>

        <form className="auth-form">

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Sign In
          </button>

        </form>

        <div className="auth-footer">
          Don't have an account?
          <Link to="/signup">  Sign Up</Link>
        </div>

      </div>
    </div>
  );
}