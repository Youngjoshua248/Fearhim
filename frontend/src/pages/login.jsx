// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reload
//     console.log("Logging in with:", { email, password });

//     // TODO: Replace this with actual fetch to backend login route
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-black text-white">
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4 p-8 rounded-xl w-full max-w-sm bg-[#1a1a1a] shadow-lg"
//       >
//         <h1 className="text-2xl font-bold text-center">Login</h1>

//         <Input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <Input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <Button type="submit" className="w-full">
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }

///pt2
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../lib/auth"; // make sure this path is still correct

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // ✅ For redirecting

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const data = await loginUser({ email, password });
//       console.log("✅ Logged in!", data);

//       localStorage.setItem("token", data.token); // ✅ Save token
//       alert("Logged in!");
//       navigate("/dashboard"); // ✅ Redirect to dashboard
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         className="input"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         className="input"
//         required
//       />
//       <button type="submit" className="btn">
//         Login
//       </button>
//       {error && <p className="text-red-500">{error}</p>}
//     </form>
//   );
// }

//pt3
// src/pages/login.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [fadeIn, setFadeIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
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
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-72">
        <input
          type="text"
          placeholder="Username or Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
        <button
          type="submit"
          className="mt-4 border border-white text-white py-2 hover:bg-blue-500 transition-colors duration-300"
        >
          Log In
        </button>
        <p
          onClick={() => navigate("/signup")}
          className="text-sm text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-300 text-center"
        >
          Don’t have an account? Sign up
        </p>
      </form>
    </div>
  );
}
