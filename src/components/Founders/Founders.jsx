import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    category: "Board of Directors",
    members: [
      { name: "Uzma Irfan", role: "Director", img: "https://coloradosprings.gov/sites/default/files/styles/large/public/2024-09/Aimee%20Cox.jpg?itok=hPog1iZT" },
      { name: "Neshea Chhabra", role: "Independent Director", img: "image_url" },
      { name: "S N Nagendra", role: "Independent Director", img: "image_url" },
    ],
  },
  {
    category: "Executive Directors",
    members: [
      { name: "Faiz Rezwan", role: "Executive Director - Contracts & Projects", img: "https://coloradosprings.gov/sites/default/files/styles/large/public/2024-09/Aimee%20Cox.jpg?itok=hPog1iZT" },
      { name: "Zaccharias Husain", role: "Executive Director - Land Acquisition", img: "image_url" },
      { name: "Zaid Sadiq", role: "Executive Director - Sales And Marketing", img: "image_url" },
      { name: "Arpina Jung", role: "Executive Director - Interior Designing", img: "https://coloradosprings.gov/sites/default/files/styles/large/public/2024-09/Aimee%20Cox.jpg?itok=hPog1iZT" },
    ],
  },
  {
    category: "Chief Executive Officer",
    members: [
      { name: "Juggy Marwaha", role: "Chief Executive Officer - Prestige Office Ventures", img: "https://coloradosprings.gov/sites/default/files/styles/large/public/2024-09/Aimee%20Cox.jpg?itok=hPog1iZT" },
      { name: "Tariq Ahmed", role: "Chief Executive Officer - West India", img: "image_url" },
      { name: "Mohammed Ali", role: "Chief Executive Officer - Retail", img: "image_url" },
      { name: "Javed Shahry Rao", role: "Chief Executive Officer - Property Management", img: "image_url" },
    ],
  },
  {
    category: "Chief Financial Officer",
    members: [
      { name: "Amit Moir", role: "Chief Financial Officer", img: "https://coloradosprings.gov/sites/default/files/styles/large/public/2024-09/Aimee%20Cox.jpg?itok=hPog1iZT" },
    ],
  },
];

const Founders = () => {

  const [selectedCategory, setSelectedCategory] = useState(teamMembers[0].category);

  return (
    <div className="text-center">

      <div className="p-3 max-w-8xl mx-auto mt-30">
        <h2 className="text-3xl  text-center text-red-500 mb-6">The Management</h2>
        <h1 className="text-3xl font-bold text-center mb-10 ">Team</h1>
        <div className="flex space-x-4 overflow-x-auto pb-7 ">
          {teamMembers.map(({ category }) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg border transition-all cursor-pointer ${selectedCategory === category ? "bg-red-500 text-white" : "bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 cursor-pointer">
          {teamMembers
            .find(({ category }) => category === selectedCategory)
            .members.map(({ name, role, img }) => (
              <div key={name} className="relative p-4 bg-white rounded-lg text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl group">
                <div className="relative overflow-hidden rounded-lg">
                  <img src={img} alt={name} className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:blur-md group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-red-500 text-lg font-semibold  bg-opacity-60 px-4 py-2 rounded-lg">Visit Me <ChevronRight /></a>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{name}</h3>
                <p className="text-gray-500">{role}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

};

export default Founders;
