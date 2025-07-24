// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function Signup() {
//   return (
//     <div className="h-screen flex items-center justify-center bg-black text-white">
//       <form className="space-y-4 p-8 rounded-xl w-full max-w-sm bg-[#1a1a1a] shadow-lg">
//         <h1 className="text-2xl font-bold text-center">Sign Up</h1>
//         <Input type="email" placeholder="Email" />
//         <Input type="password" placeholder="Password" />
//         <Button className="w-full">Create Account</Button>
//       </form>
//     </div>
//   );
// }

//pt2
// src/pages/login.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-black text-white flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-4xl font-bold mb-6 hover:text-blue-500 transition-colors duration-300">
        FEARHIM
      </h1>
      <form className="flex flex-col gap-4 w-72">
        <input
          type="text"
          placeholder="Username or Email"
          className="bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
        />
        <input
          type="password"
          placeholder="Password"
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
