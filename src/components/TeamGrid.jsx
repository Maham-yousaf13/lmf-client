import { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function TeamGrid() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "teamMembers"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTeam(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto py-10">
      {team.map((member) => (
        <div 
          key={member.id} 
          className="bg-[#0f0f0f] border border-[#C5A065]/20 p-6 rounded-lg text-center hover:border-[#C5A065] transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
        >
          {member.image && (
            <div className="w-full h-80 mb-4 bg-[#0a0a0a] rounded-md overflow-hidden flex items-center justify-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-contain" 
              />
            </div>
          )}
          <h1 className="text-[#C5A065] text-xl font-bold mb-1">{member.name}</h1>
          <p className="text-gray-400 text-sm font-semibold mb-3">{member.designation}</p>
          <p className="text-gray-500 text-sm mb-6 flex-grow">{member.about}</p>
          
          {/* Instagram Link added here */}
           <a 
            href="https://ig.me/m/legalmatesfederation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#C5A065] text-black px-6 py-2 rounded font-bold transition-all duration-200 ease-in-out hover:bg-[#b08d56] active:scale-95 active:bg-[#8b6e41] mt-auto block text-center"
            >
            CONTACT
            </a>
        </div>
      ))}
    </div>
  );
}

export default TeamGrid;