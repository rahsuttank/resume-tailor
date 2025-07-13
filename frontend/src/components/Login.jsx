// src/components/Login.jsx
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { loginUser } from "../services/api";

const Login = () => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await loginUser(email, password);
      setUser(res.user);
      localStorage.setItem("token", res.token);
      navigate("/upload");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center mb-2">Sign in to ResumeMatch</h2>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <Button type="submit" loading={loading} fullWidth>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
        <div className="text-center text-sm text-gray-500 mt-2">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;