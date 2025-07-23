// //pt1
// import { useEffect, useState } from "react";

// export default function GenerateOutfit() {
//   const [styleboards, setStyleboards] = useState([]);
//   const [selectedImageUrl, setSelectedImageUrl] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [outfit, setOutfit] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Fetch styleboards on mount
//   useEffect(() => {
//     const fetchBoards = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/styleboards", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         if (!res.ok) throw new Error("Failed to load styleboards.");
//         const data = await res.json();
//         setStyleboards(data);
//       } catch (err) {
//         console.error("Error fetching styleboards:", err);
//         setError("Could not load styleboards.");
//       }
//     };

//     fetchBoards();
//   }, []);

//   const handleSubmit = async () => {
//     if (!selectedImageUrl) {
//       setError("Please select a styleboard.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch("http://localhost:3000/api/generate-outfit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ imageUrl: selectedImageUrl, prompt }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Failed to generate outfit");

//       setOutfit(data.outfit);
//     } catch (err) {
//       console.error("Outfit generation error:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 text-white">
//       <h2 className="text-3xl font-bold mb-4">🧠 Generate AI Outfit</h2>

//       {/* Dropdown for Styleboards */}
//       <label className="block mb-2 text-sm">Choose a styleboard:</label>
//       <select
//         className="w-full bg-gray-800 border border-gray-700 px-3 py-2 rounded mb-4"
//         value={selectedImageUrl}
//         onChange={(e) => setSelectedImageUrl(e.target.value)}
//       >
//         <option value="">-- Select Styleboard --</option>
//         {styleboards.map((sb) => (
//           <option key={sb.id} value={sb.imageUrl}>
//             {new Date(sb.createdAt).toLocaleString()}
//           </option>
//         ))}
//       </select>

//       {/* Optional Prompt */}
//       <label className="block mb-2 text-sm">Optional prompt:</label>
//       <input
//         type="text"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         className="w-full bg-gray-800 border border-gray-700 px-3 py-2 rounded mb-4"
//         placeholder="grunge casual, monochrome, streetwear..."
//       />

//       {/* Button */}
//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
//       >
//         {loading ? "Generating..." : "Generate Outfit"}
//       </button>

//       {/* Error Message */}
//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {/* Output */}
//       {outfit && (
//         <div className="mt-6 bg-gray-900 p-4 rounded border border-gray-700">
//           <h3 className="text-xl font-semibold mb-2">Suggested Outfit:</h3>
//           <pre className="whitespace-pre-wrap text-sm">{outfit}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

//pt2
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function GenerateOutfit() {
//   const [styleboards, setStyleboards] = useState([]);
//   const [selectedStyleboardId, setSelectedStyleboardId] = useState("");
//   const [outfit, setOutfit] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch uploaded styleboards
//   useEffect(() => {
//     const fetchStyleboards = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/styleboards", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await res.json();
//         setStyleboards(data);
//       } catch (err) {
//         console.error("Error fetching styleboards:", err);
//       }
//     };

//     fetchStyleboards();
//   }, []);

//   const handleGenerate = async () => {
//     if (!selectedStyleboardId) return;

//     setLoading(true);
//     try {
//       // TEMP: dummy AI output
//       const mockOutfit = {
//         top: "Black leather jacket",
//         bottom: "Slim-fit distressed jeans",
//         shoes: "Chelsea boots",
//         accessory: "Silver chain",
//       };

//       // Simulate API delay
//       setTimeout(() => {
//         setOutfit(mockOutfit);
//         setLoading(false);
//       }, 1000);
//     } catch (err) {
//       console.error("Error generating outfit:", err);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-8">
//       <h1 className="text-3xl font-bold mb-4">🎨 Generate Outfit</h1>

//       <label className="block mb-2">Choose a styleboard:</label>
//       <select
//         value={selectedStyleboardId}
//         onChange={(e) => setSelectedStyleboardId(e.target.value)}
//         className="text-black p-2 rounded mb-4"
//       >
//         <option value="">-- Select --</option>
//         {styleboards.map((sb) => (
//           <option key={sb.id} value={sb.id}>
//             {sb.imageUrl.split("/").pop().slice(0, 20)}...
//           </option>
//         ))}
//       </select>

//       <button
//         onClick={handleGenerate}
//         className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
//       >
//         {loading ? "Generating..." : "Generate Outfit"}
//       </button>

//       {outfit && (
//         <div className="mt-6 bg-zinc-900 p-4 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2">✨ AI Generated Look</h2>
//           <ul className="list-disc ml-5">
//             <li>
//               <strong>Top:</strong> {outfit.top}
//             </li>
//             <li>
//               <strong>Bottom:</strong> {outfit.bottom}
//             </li>
//             <li>
//               <strong>Shoes:</strong> {outfit.shoes}
//             </li>
//             <li>
//               <strong>Accessory:</strong> {outfit.accessory}
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

//pt3
import { useState, useEffect } from "react";
import axios from "axios";

export default function GenerateOutfit() {
  const [styleboards, setStyleboards] = useState([]);
  const [selectedStyleboardId, setSelectedStyleboardId] = useState("");
  const [outfit, setOutfit] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch uploaded styleboards
  useEffect(() => {
    const fetchStyleboards = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/styleboards", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        setStyleboards(data);
      } catch (err) {
        console.error("Error fetching styleboards:", err);
      }
    };

    fetchStyleboards();
  }, []);

  const handleGenerate = async () => {
    if (!selectedStyleboardId) return;

    setLoading(true);
    try {
      // TEMP: dummy AI output
      const mockOutfit = {
        top: "Black leather jacket",
        bottom: "Slim-fit distressed jeans",
        shoes: "Chelsea boots",
        accessory: "Silver chain",
      };

      // Simulate AI delay
      setTimeout(async () => {
        setOutfit(mockOutfit);
        setLoading(false);

        //  Save to backend
        try {
          await fetch("http://localhost:3000/api/outfits", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              styleboardId: selectedStyleboardId,
              top: mockOutfit.top,
              bottom: mockOutfit.bottom,
              shoes: mockOutfit.shoes,
              accessory: mockOutfit.accessory,
              imageUrl: selectedStyleboardId,
            }),
          });
        } catch (err) {
          console.error("Error saving outfit to backend:", err);
        }
      }, 1000);
    } catch (err) {
      console.error("Error generating outfit:", err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">🎨 Generate Outfit</h1>

      <label className="block mb-2">Choose a styleboard:</label>
      <select
        value={selectedStyleboardId}
        onChange={(e) => setSelectedStyleboardId(e.target.value)}
        className="text-black p-2 rounded mb-4"
      >
        <option value="">-- Select --</option>
        {styleboards.map((sb) => (
          <option key={sb.id} value={sb.id}>
            {sb.imageUrl.split("/").pop().slice(0, 20)}...
          </option>
        ))}
      </select>

      <button
        onClick={handleGenerate}
        className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
      >
        {loading ? "Generating..." : "Generate Outfit"}
      </button>

      {outfit && (
        <div className="mt-6 bg-zinc-900 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">✨ AI Generated Look</h2>
          <ul className="list-disc ml-5">
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
      )}
    </div>
  );
}
