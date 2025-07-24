// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// const handleLogout = () => {
//   localStorage.removeItem("token");
//   navigate("/login");
// };

// export default function Profile() {
//   const [editing, setEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     username: "FearlessUser",
//     email: "user@example.com",
//     avatar: null,
//   });

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setProfile({ ...profile, avatar: URL.createObjectURL(e.target.files[0]) });
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
//       <div className="bg-zinc-900 rounded-xl shadow-xl p-6 max-w-md w-full space-y-6 transition-all duration-500 ease-in-out">
//         <div className="flex flex-col items-center">
//           <img
//             src={
//               profile.avatar ||
//               "https://api.dicebear.com/6.x/initials/svg?seed=User"
//             }
//             alt="avatar"
//             className="w-24 h-24 rounded-full object-cover mb-4 border border-white"
//           />
//           {editing && (
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="text-sm text-white"
//             />
//           )}
//         </div>

//         <div className="space-y-3">
//           <label className="block text-sm font-medium">Username</label>
//           <input
//             name="username"
//             disabled={!editing}
//             value={profile.username}
//             onChange={handleChange}
//             className="w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="block text-sm font-medium mt-4">Email</label>
//           <input
//             name="email"
//             disabled={!editing}
//             value={profile.email}
//             onChange={handleChange}
//             className="w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           onClick={() => setEditing((prev) => !prev)}
//           className="w-full mt-6 bg-white text-black font-semibold py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
//         >
//           {editing ? "Save Changes" : "Edit Profile"}
//         </button>
//       </div>
//     </div>
//   );
// }

//pt2
// export default function Profile() {
//   const [fadeIn, setFadeIn] = useState(false);
//   const navigate = useNavigate();

//   // Dummy saved outfits
//   const [savedOutfits, setSavedOutfits] = useState([
//     {
//       id: 1,
//       top: "Oversized Hoodie",
//       bottom: "Cargo Pants",
//       shoes: "White Air Force 1s",
//       accessory: "Bucket Hat",
//     },
//     {
//       id: 2,
//       top: "Turtleneck",
//       bottom: "Plaid Trousers",
//       shoes: "Derby Shoes",
//       accessory: "Gold Earrings",
//     },
//   ]);

//   useEffect(() => {
//     setFadeIn(true);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div
//       className={`min-h-screen bg-black text-white p-8 transition-opacity duration-1000 ${
//         fadeIn ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       <h1 className="text-4xl font-bold mb-6">👤 Profile</h1>

//       {/* User Info Placeholder */}
//       <div className="mb-8">
//         <p className="text-xl">
//           Logged in as: <span className="font-semibold">fearhim_user</span>
//         </p>
//       </div>

//       {/* Saved Outfits */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">💾 Saved Outfits</h2>
//         <div className="space-y-4">
//           {savedOutfits.map((fit) => (
//             <div
//               key={fit.id}
//               className="bg-zinc-900 p-4 rounded-lg shadow hover:shadow-lg transition"
//             >
//               <p>
//                 <strong>Top:</strong> {fit.top}
//               </p>
//               <p>
//                 <strong>Bottom:</strong> {fit.bottom}
//               </p>
//               <p>
//                 <strong>Shoes:</strong> {fit.shoes}
//               </p>
//               <p>
//                 <strong>Accessory:</strong> {fit.accessory}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Logout */}
//       <button
//         onClick={handleLogout}
//         className="mt-10 px-4 py-2 bg-white text-black rounded-full hover:text-blue-500 transition-colors"
//       >
//         Log Out
//       </button>
//     </div>
//   );
// }

//pt3
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "FearlessUser",
    email: "user@example.com",
    avatar: null,
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, avatar: URL.createObjectURL(e.target.files[0]) });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 animate-fade-in">
      {/* Logout button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="text-white border border-white px-4 py-1 rounded-full hover:bg-blue-500 hover:text-white transition"
        >
          Logout
        </button>
      </div>

      {/* Profile card */}
      <div className="bg-zinc-900 rounded-xl shadow-xl p-6 max-w-md w-full space-y-6 transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-center">
          <img
            src={
              profile.avatar ||
              "https://api.dicebear.com/6.x/initials/svg?seed=User"
            }
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover mb-4 border border-white"
          />
          {editing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="text-sm text-white"
            />
          )}
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium">Username</label>
          <input
            name="username"
            disabled={!editing}
            value={profile.username}
            onChange={handleChange}
            className="w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-sm font-medium mt-4">Email</label>
          <input
            name="email"
            disabled={!editing}
            value={profile.email}
            onChange={handleChange}
            className="w-full bg-zinc-800 border border-zinc-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={() => setEditing((prev) => !prev)}
          className="w-full mt-6 bg-white text-black font-semibold py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
        >
          {editing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}
