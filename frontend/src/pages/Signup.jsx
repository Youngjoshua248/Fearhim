import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [fadeIn, setFadeIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Account created successfully! Please log in.");
        navigate("/login");
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div
      className={`min-h-screen bg-black text-white flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6 hover:text-blue-500 transition-colors duration-300">
        FEARHIM
      </h1>
      <form onSubmit={handleSignup} className="flex flex-col gap-4 w-72">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
          required
        />
        <button
          type="submit"
          className="mt-4 border border-white text-white py-2 hover:bg-blue-500 transition-colors duration-300"
        >
          Create Account
        </button>
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
        <p
          onClick={() => navigate("/login")}
          className="text-sm text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-300 text-center"
        >
          Already have an account? Log in
        </p>
      </form>
    </div>
  );
}
