import "./../styles/auth.css";
import { Link } from "react-router-dom";
import { login } from "../services/authService";
import { saveToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await login({email,password});
        saveToken(response.data.access_token);
        const user = await api.get("/auth/user");
        localStorage.setItem("userName", user.data.name);
        navigate("/dashboard");
    } catch (err) {
        alert(err.response?.data?.detail || "Invalid Email or Password");
    }
};
  

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

        <form className="auth-form" onSubmit={handleLogin}>

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