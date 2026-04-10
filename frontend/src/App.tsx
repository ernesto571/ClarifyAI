import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/LandingPage/Navbar";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import AuthCallback from "./pages/AuthPages/AuthCallback";
import AuthListener from "./hooks/AuthListener";
import Dashboard from "./pages/DashboardPages/Dashboard";
import { useAuthStore } from "./store/AuthStore";

function App() {
  const { isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader className="size-10 animate-spin text-[#9D174D]" />
      </div>
    );
  }

  return (
    <>
      <AuthListener />
      <Routes>
        <Route path="/" element={<><Navbar /><LandingPage /></>} />
        <Route path="/signup" element={<><Navbar /><SignUpPage /></>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          style: { background: "#1f2937", color: "#fff", borderRadius: "10px" },
        }}
      />
    </>
  );
}

export default App;