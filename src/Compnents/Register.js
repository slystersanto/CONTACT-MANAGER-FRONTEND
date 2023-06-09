import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:9000/register", { email, password });
      console.log(res.data);
      alert('Registered Successfully');
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Error creating user");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f2f2f2" }}>
      <div style={{ maxWidth: "400px", padding: "40px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "5px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px", color: "#333", fontSize: "28px" }}>Register Here</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" style={{ textAlign: "left", marginBottom: "12px", color: "#555", fontSize: "14px" }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              required
              style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "16px", width: "100%", fontSize: "16px" }}
            />
          </div>

          <div>
            <label htmlFor="password" style={{ textAlign: "left", marginBottom: "12px", color: "#555", fontSize: "14px" }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              required
              style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "16px", width: "100%", fontSize: "16px" }}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" style={{ textAlign: "left", marginBottom: "12px", color: "#555", fontSize: "14px" }}>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirmPassword"
              name="confirmPassword"
              required
              style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "16px", width: "100%", fontSize: "16px" }}
            />
          </div>
          <button type="submit" style={{ padding: "12px 20px", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", transition: "background-color 0.3s ease" }}>
            Register
          </button>
        </form>
        <div style={{ marginTop: "16px", fontSize: "14px", color: "#888" }}>
          <span>
            Already have an account? <Link to="/" style={{ color: "#333", textDecoration: "none", transition: "color 0.3s ease" }}>Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
