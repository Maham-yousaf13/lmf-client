import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function AdminDashboard() {
  const [member, setMember] = useState({ name: "", designation: "", about: "", image: "", instaLink: "" });

  const addMember = async () => {
    try {
      await addDoc(collection(db, "teamMembers"), member);
      alert("Member added successfully!");
      setMember({ name: "", designation: "", about: "", image: "", instaLink: "" }); // Reset form
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  return (
    <div className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-2xl text-[#C5A065] font-bold mb-6">Add New Member</h1>
      <div className="flex flex-col gap-4 max-w-lg">
        <input placeholder="Name" className="p-2 bg-gray-900 border" onChange={(e) => setMember({...member, name: e.target.value})} />
        <input placeholder="Designation" className="p-2 bg-gray-900 border" onChange={(e) => setMember({...member, designation: e.target.value})} />
        <input placeholder="About" className="p-2 bg-gray-900 border" onChange={(e) => setMember({...member, about: e.target.value})} />
        <input placeholder="Image URL" className="p-2 bg-gray-900 border" onChange={(e) => setMember({...member, image: e.target.value})} />
        <input placeholder="Instagram Link" className="p-2 bg-gray-900 border" onChange={(e) => setMember({...member, instaLink: e.target.value})} />
        <button onClick={addMember} className="bg-[#C5A065] text-black font-bold p-2">Submit</button>
      </div>
    </div>
  );
}

export default AdminDashboard;