import "../styles/auth.css";
import { Link } from "react-router-dom";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    try {
        await register({name,email,password});
        alert("Registration Successful");
        navigate("/login");
    } catch (err) {
        alert(err.response?.data?.detail || "Registration Failed");
    }
};

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

        <form className="auth-form" onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?
          <Link to="/login">  Sign In</Link>
        </div>

      </div>
    </div>
  );
}