import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import UploadBoard from "./pages/UploadBoard";
import GenerateOutfit from "./components/GenerateOutfit";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes path="/profile" element={<Profile />}>
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<UploadBoard />} />
      <Route path="/generate" element={<GenerateOutfit />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
