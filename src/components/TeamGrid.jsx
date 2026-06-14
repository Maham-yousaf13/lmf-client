import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function TeamGrid() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const q = query(collection(db, "teamMembers"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTeam(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 max-w-6xl mx-auto">
      {team.map((member) => (
        <div
          key={member.id}
          // Yahan 'border-[#C5A065]/20' permanent hai, hover par border change nahi hoga
          className="bg-[#0f0f0f] border border-[#C5A065]/20 p-6 rounded-lg text-center flex flex-col items-center
                     transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#C5A065]/60 hover:shadow-[0_0_15px_rgba(197,160,101,0.2)]"
        >
          {member.image && (
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-64 object-contain mb-4 rounded-md"
            />
          )}
          <h2 className="text-[#C5A065] text-xl font-bold">{member.name}</h2>
          <p className="text-gray-400 font-semibold mb-3">{member.designation}</p>

          <p className="text-gray-500 text-sm mb-5 leading-relaxed line-clamp-3">
            {member.about || ""}
          </p>

          <a
            href={member.instaLink || "#"}
            target="_blank"
            rel="noreferrer"
            // 'active:bg-[#...]' button click hone par rang badlega
            className="w-full bg-[#C5A065] text-black font-bold uppercase text-sm py-3 px-4 rounded 
                        transition-all duration-150 
                        hover:bg-[#a88755] 
                        active:bg-[#8e7247] active:scale-95" 
            >
            Contact
         </a>
        </div>
      ))}
    </div>
  );
}