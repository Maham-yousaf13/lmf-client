import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handles the admin authentication process
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Authenticate user with Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      
      // Redirect to the admin dashboard upon successful login
      navigate("/admin-dashboard"); 
    } catch (error) {
      alert("Login Failed: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#0a0a0a]">
      <form 
        onSubmit={handleLogin} 
        className="p-8 bg-[#0f0f0f] border border-[#C5A065]/30 rounded-lg w-full max-w-sm"
      >
        <h2 className="text-[#C5A065] text-2xl font-bold mb-6 text-center">Admin Login</h2>
        
        {/* Email input field */}
        <input 
          type="email" 
          placeholder="Email" 
          className="block w-full p-3 mb-4 bg-black border border-gray-700 text-white rounded focus:border-[#C5A065] outline-none" 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        
        {/* Password input field */}
        <input 
          type="password" 
          placeholder="Password" 
          className="block w-full p-3 mb-6 bg-black border border-gray-700 text-white rounded focus:border-[#C5A065] outline-none" 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        
        {/* Login submission button */}
        <button 
          type="submit" 
          className="w-full bg-[#C5A065] py-3 font-bold text-black rounded hover:bg-[#b08d56] transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;