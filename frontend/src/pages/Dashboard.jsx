// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [styleboards, setStyleboards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchStyleboards = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/styleboards", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         console.log(res.data);
//         setStyleboards(res.data);
//       } catch (err) {
//         console.error("Failed to fetch styleboards:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStyleboards();
//   }, []);

//   return (
//     <div className="min-h-screen px-6 py-8 bg-black text-white">
//       <header className="flex justify-between items-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
//           👋 Welcome back
//         </h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition"
//         >
//           Logout
//         </button>
//       </header>

//       {loading ? (
//         <p className="text-lg text-gray-300">Loading your styleboards...</p>
//       ) : styleboards.length === 0 ? (
//         <p className="text-lg text-gray-400">No styleboards uploaded yet.</p>
//       ) : (
//         <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {styleboards.map((board) => (
//             <div
//               key={board.id}
//               className="rounded-2xl overflow-hidden border border-zinc-800 shadow-sm hover:shadow-md transition"
//             >
//               <img
//                 src={
//                   "https://cdn.mos.cms.futurecdn.net/whowhatwear/posts/225010/easy-outfit-ideas-225010-1704999212588-main.jpg"
//                 }
//                 alt="Styleboard"
//                 className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
//               />
//             </div>
//           ))}
//         </section>
//       )}
//     </div>
//   );
// }

//pt2
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [styleboards, setStyleboards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchStyleboards = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/styleboards", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setStyleboards(data);
//       } catch (err) {
//         console.error("Error fetching styleboards:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStyleboards();
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-10">
//       <header className="flex items-center justify-between mb-8">
//         <h1 className="text-4xl font-semibold tracking-tight flex items-center gap-2">
//           👋 Welcome back
//         </h1>
//         <button
//           onClick={handleLogout}
//           className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
//         >
//           Logout
//         </button>
//       </header>

//       {loading ? (
//         <p className="text-gray-400">Loading your styleboards...</p>
//       ) : styleboards.length === 0 ? (
//         <p className="text-gray-500">No styleboards uploaded yet.</p>
//       ) : (
//         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {styleboards.map((board) => (
//             <div
//               key={board.id}
//               className="rounded-2xl overflow-hidden border border-zinc-800 shadow-md hover:shadow-xl transition"
//             >
//               <img
//                 src={board.imageUrl}
//                 alt="Styleboard"
//                 className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
//               />
//             </div>
//           ))}
//         </section>
//       )}
//     </div>
//   );
// }

//pt3
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [styleboards, setStyleboards] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const fetchStyleboards = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/styleboards", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setStyleboards(data);
//       } catch (err) {
//         console.error("Error fetching styleboards:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStyleboards();
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-10">
//       <header className="flex items-center justify-between mb-8">
//         <h1 className="text-4xl font-semibold tracking-tight flex items-center gap-2">
//           👋 Welcome back
//         </h1>
//         <button
//           onClick={handleLogout}
//           className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
//         >
//           Logout
//         </button>
//       </header>

//       {loading ? (
//         <p className="text-gray-400">Loading your styleboards...</p>
//       ) : styleboards.length === 0 ? (
//         <p className="text-gray-500">No styleboards uploaded yet.</p>
//       ) : (
//         <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {styleboards.map((board) => (
//             <div
//               key={board.id}
//               className="rounded-2xl overflow-hidden border border-zinc-800 shadow-md hover:shadow-xl transition"
//             >
//               <img
//                 src={board.image_url} //  <-- Correct field
//                 alt="Styleboard"
//                 className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
//               />
//             </div>
//           ))}
//         </section>
//       )}
//     </div>
//   );
// }

//pt5

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Dashboard() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    setFadeIn(true);

    const fetchOutfits = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/api/outfits", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        setOutfits(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching outfits:", err);
        setLoading(false);
      }
    };

    fetchOutfits();
  }, []);

  return (
    <div
      className={`min-h-screen bg-black text-white p-6 transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-wide">FEARHIM</h1>
        <button
          className="text-sm hover:text-blue-500 transition-colors"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>
      </div>

      {/* Search News */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search News"
          className="w-full px-4 py-2 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="bg-white text-black py-16 text-2xl font-bold hover:bg-blue-500 hover:text-white transition">
          PRADA
        </button>
        <button className="bg-white text-black py-16 text-2xl font-bold hover:bg-blue-500 hover:text-white transition">
          VOGUE
        </button>
      </div>

      {/* Fashion News */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📰 Fashion News</h2>
        <div className="space-y-4">
          {[
            {
              id: 1,
              title: "Prada drops futuristic Fall/Winter campaign",
              source: "VOGUE",
              link: "#",
            },
            {
              id: 2,
              title: "Streetwear meets haute couture in Paris",
              source: "HYPEBEAST",
              link: "#",
            },
            {
              id: 3,
              title: "Fear of God teases upcoming collaboration",
              source: "GQ",
              link: "#",
            },
          ].map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="block bg-zinc-900 p-4 rounded-lg border border-white hover:border-blue-500 transition shadow"
            >
              <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
              <p className="text-sm text-zinc-400">{article.source}</p>
            </a>
          ))}
        </div>
      </div>

      {/* AI Generator */}
      <div className="bg-white text-black p-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition mb-8">
        <h2 className="text-xl font-semibold mb-2">AI Generator</h2>
        <button
          className="w-full mt-2 px-4 py-2 bg-black text-white hover:bg-blue-500 transition"
          onClick={() => navigate("/generate")}
        >
          Generate Outfit
        </button>
      </div>

      {/* Saved Outfits */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Saved Outfits</h2>
        {loading ? (
          <Loader />
        ) : outfits.length === 0 ? (
          <p className="text-zinc-400">No outfits saved yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {outfits.map((outfit, index) => (
              <div
                key={outfit.id}
                className="bg-zinc-900 rounded-lg p-4 border border-zinc-700 hover:shadow-xl transition animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={outfit.image_url}
                  alt="Outfit"
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <ul className="text-sm space-y-1">
                  <li>
                    <strong>Top:</strong> {outfit.top}
                  </li>
                  <li>
                    <strong>Bottom:</strong> {outfit.bottom}
                  </li>
                  <li>
                    <strong>Shoes:</strong> {outfit.shoes}
                  </li>
                  <li>
                    <strong>Accessory:</strong> {outfit.accessory}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
