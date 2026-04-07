import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/LandingPage/Navbar";


function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<>  <Navbar /> <LandingPage />  </> } />

        {/* // <Route path="/dashboard" element={ <ProtectedRoute> <Overview /> </ProtectedRoute> } />
        // <Route path="/dashboard/resumes" element={ <ProtectedRoute> <Resume /> </ProtectedRoute> } />
        // <Route path="/dashboard/analyze" element={ <ProtectedRoute> <Analyze /> </ProtectedRoute> } />
        // <Route path="/dashboard/insights" element={ <ProtectedRoute> <Insights /> </ProtectedRoute> } />
         */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "10px",
          },
        }}
      />
    </>
  );
}

export default App;