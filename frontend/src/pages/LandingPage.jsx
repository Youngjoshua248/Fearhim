import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-black text-white transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1
        onClick={() => navigate("/login")}
        className="text-6xl font-bold cursor-pointer hover:text-blue-500 transition-colors duration-300"
      >
        FEARHIM
      </h1>
    </div>
  );
}

//pt2;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import fearhimLogo from "../assets/fearhim-logo.png";

// export default function LandingPage() {
//   const navigate = useNavigate();
//   const [fadeIn, setFadeIn] = useState(false);

//   useEffect(() => {
//     setFadeIn(true);
//   }, []);

//   return (
//     <div
//       className={`min-h-screen flex items-center justify-center bg-black relative overflow-hidden transition-opacity duration-1000 ${
//         fadeIn ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       {/* Apple-style radial glow */}
//       <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[180px] opacity-40"></div>

//       {/* FEARHIM image-button */}
//       <img
//         src={fearhimLogo}
//         alt="FEARHIM"
//         onClick={() => navigate("/login")}
//         className="w-[500px] max-w-[90%] cursor-pointer hover:scale-105 transition duration-300 drop-shadow-xl"
//       />
//     </div>
//   );
// }
