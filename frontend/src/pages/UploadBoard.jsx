// import { useState } from "react";

// export default function UploadBoard() {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");
//   const [uploading, setUploading] = useState(false);
//   const [uploadedUrl, setUploadedUrl] = useState("");

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleUpload = async () => {
//     if (!image) return;
//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", "unsigned_fearhim"); // ✅ Create this in your Cloudinary settings
//     formData.append("folder", "styleboards"); // Optional: organizes uploads

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dek35zezn/image/upload", // ✅ Using your actual Cloud name
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       if (data.secure_url) {
//         setUploadedUrl(data.secure_url);
//       } else {
//         throw new Error("Upload failed");
//       }
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Upload failed. Please check console for details.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="p-8 text-white">
//       <h1 className="text-3xl font-bold mb-4">Upload Your Style Board</h1>

//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       {preview && (
//         <img src={preview} className="mt-4 max-w-xs rounded" alt="preview" />
//       )}

//       <button
//         onClick={handleUpload}
//         disabled={uploading}
//         className="mt-4 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition"
//       >
//         {uploading ? "Uploading..." : "Upload"}
//       </button>

//       {uploadedUrl && (
//         <div className="mt-4">
//           <p>Uploaded to:</p>
//           <a
//             href={uploadedUrl}
//             className="underline text-blue-400"
//             target="_blank"
//             rel="noreferrer"
//           >
//             {uploadedUrl}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

//pt2
// import { useState } from "react";

// export default function UploadBoard() {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");
//   const [uploading, setUploading] = useState(false);
//   const [uploadedUrl, setUploadedUrl] = useState("");

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleUpload = async () => {
//     if (!image) return;
//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", "unsigned_fearhim"); // ✅ from your Cloudinary settings
//     formData.append("folder", "styleboards"); // Optional folder

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dek35zezn/image/upload", // ✅ your Cloud name
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();

//       if (data.secure_url) {
//         setUploadedUrl(data.secure_url);
//       } else {
//         throw new Error("Upload failed");
//       }
//     } catch (err) {
//       console.error("Upload failed:", err);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="p-8 text-white">
//       <h1 className="text-3xl font-bold mb-4">Upload Your Style Board</h1>

//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       {preview && (
//         <img
//           src={preview}
//           className="mt-4 max-w-xs rounded border border-gray-700"
//           alt="preview"
//         />
//       )}

//       <button
//         onClick={handleUpload}
//         disabled={uploading}
//         className="mt-4 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition"
//       >
//         {uploading ? "Uploading..." : "Upload"}
//       </button>

//       {uploadedUrl && (
//         <div className="mt-4">
//           <p>Uploaded to:</p>
//           <a
//             href={uploadedUrl}
//             className="underline text-blue-400"
//             target="_blank"
//             rel="noreferrer"
//           >
//             {uploadedUrl}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

//pt3
import { useState } from "react";

export default function UploadBoard() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "unsigned_fearhim");
    formData.append("folder", "styleboards");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dek35zezn/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.secure_url) {
        setUploadedUrl(data.secure_url);

        // ✅ Save uploaded image URL to backend
        await fetch("http://localhost:3000/api/styleboards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ imageUrl: data.secure_url }),
        });
      } else {
        throw new Error("Upload failed");
      }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Upload Your Style Board</h1>

      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <img
          src={preview}
          className="mt-4 max-w-xs rounded border border-gray-700"
          alt="preview"
        />
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {uploadedUrl && (
        <div className="mt-4">
          <p>Uploaded to:</p>
          <a
            href={uploadedUrl}
            className="underline text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            {uploadedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
