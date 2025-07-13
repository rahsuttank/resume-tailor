import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="bg-white border-b shadow-sm px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold tracking-tight text-blue-700">
        ResumeMatch AI
      </Link>
      <nav className="flex items-center gap-6 text-base font-medium">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/upload" className="hover:text-blue-600 transition">Upload Resume</Link>
        <Link to="/results" className="hover:text-blue-600 transition">Results</Link>
        {user && (
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header; 