import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamGrid from "./components/TeamGrid";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
// Separate component for the home page layout
function HomePage() {
  return (
    <>
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-serif text-[#C5A065] mb-6">LEGAL MATES FEDERATION</h1>
        <p className="text-lg italic mb-10">“United by Law, Driven by Purpose.”</p>
        
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-[#0f0f0f] p-8 border border-[#C5A065]/20 rounded-lg">
            <h3 className="text-[#C5A065] text-2xl mb-4 font-bold">OUR VISION</h3>
            <p className="text-gray-300">To create a united and empowered community of law students who are committed to excellence, justice, and positive societal impact.</p>
          </div>
          <div className="bg-[#0f0f0f] p-8 border border-[#C5A065]/20 rounded-lg">
            <h3 className="text-[#C5A065] text-2xl mb-4 font-bold">OUR MISSION</h3>
            <p className="text-gray-300">To inspire, educate, and equip future legal professionals with the knowledge, leadership skills, and ethical values needed to shape a better future.</p>
          </div>
        </div>
      </section>

      <TeamGrid />

      <footer className="py-10 border-t border-[#C5A065]/20 text-center">
        <p className="mb-2">For inquiries reach us at:</p>
        <a href="mailto:legalmatesfederation@gmail.com" className="text-[#C5A065] font-bold text-xl">legalmatesfederation@gmail.com</a>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-black text-[#F5F1E6] min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;