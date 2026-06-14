import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { id: 1, name: "CHAUDRY HAIDER SAHI", designation: "CHAIRMAN", img: "/haider.jpeg" },
  { id: 2, name: "MALIK ABDUR REHMAN ILYAS", designation: "PRESIDENT", img: "/abdur.jpeg" },
  { id: 3, name: "CHAUDRY TALHA DUGGAL", designation: "VICE PRESIDENT", img: "/talha.jpeg" },
  { id: 4, name: "CHAUDRY ZAIN BHATTI", designation: "SOCIAL MEDIA HEAD", img: "/zain.jpeg" },
  { id: 5, name: "AYTULLAH HASSAN GANTHER", designation: "GENERAL SECRETARY", img: "/aytullah.jpeg" },
  { id: 6, name: "MUHAMMAD ALI GUJJAR", designation: "SECRETARY", img: "/ali.jpeg" },
];

const TeamGrid = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-5xl text-[#C5A065] mb-16">OUR LEADERSHIP</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <motion.div key={member.id} whileHover={{ y: -10 }} className="border border-[#C5A065]/30 p-2 rounded-xl bg-[#0f0f0f]">
              <div className="overflow-hidden rounded-lg bg-black">
                <img src={member.img} alt={member.name} className="w-full h-80 object-contain" />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-[#C5A065] font-serif text-xl">{member.name}</h4>
                <p className="text-gray-300 text-sm mb-6">{member.designation}</p>
                <a href="https://ig.me/m/legalmatesfederation" className="bg-[#C5A065] text-black font-bold py-2 px-8 rounded-full hover:bg-white transition-all">CONTACT</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamGrid;