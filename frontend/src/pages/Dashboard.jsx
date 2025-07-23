import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();
  const [styleboards, setStyleboards] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchStyleboards = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/styleboards", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(res.data);
        setStyleboards(res.data);
      } catch (err) {
        console.error("Failed to fetch styleboards:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStyleboards();
  }, []);

  return (
    <div className="min-h-screen px-6 py-8 bg-black text-white">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          👋 Welcome back
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Logout
        </button>
      </header>

      {loading ? (
        <p className="text-lg text-gray-300">Loading your styleboards...</p>
      ) : styleboards.length === 0 ? (
        <p className="text-lg text-gray-400">No styleboards uploaded yet.</p>
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {styleboards.map((board) => (
            <div
              key={board.id}
              className="rounded-2xl overflow-hidden border border-zinc-800 shadow-sm hover:shadow-md transition"
            >
              <img
                src={
                  "https://cdn.mos.cms.futurecdn.net/whowhatwear/posts/225010/easy-outfit-ideas-225010-1704999212588-main.jpg"
                }
                alt="Styleboard"
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

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
