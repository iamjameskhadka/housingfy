import React from 'react'
import { useState } from "react";


const cities = [
  { name: "All Properties", projects: "All" },
  { name: "Bangalore", projects: 18 },
  { name: "Hyderabad", projects: 8 },
  { name: "Mumbai", projects: 7 },
  { name: "Cochin", projects: 4 },
  { name: "Mangalore", projects: 2 },
  { name: "Chennai", projects: 2 },
];

const projects = [
  {
    name: "Clover Leaf @ Prestige White Meadows",
    location: "Whitefield, Bangalore",
    price: "₹ 5.79* Crore Onwards",
    projectType: "Apartment",
    bedrooms: "3, 4 BHK",
    developmentSize: "28.5 Acres",
    totalUnits: "104 Units",
    img: "https://api.basobaas.com/api/files/a4alnectuppemjo/cb3qbobephs478o/dsc_9282_1686219265_9FMsyihChM.jpg",
    city: "Bangalore",
  },
  {
    name: "Forest Hills @ The Prestige City",
    location: "Yogi Hills, Mulund, Mumbai",
    price: "₹ 3.79* Crore Onwards",
    projectType: "Apartment",
    bedrooms: "3, 4 BHK",
    developmentSize: "9 Acres",
    totalUnits: "316 Units",
    img: "https://bhatnagars.co.in/wp-content/uploads/2018/06/onyx.jpeg",
    city: "Mumbai",
  },
  {
    name: "Prestige Pine Forest",
    location: "Whitefield, Bangalore",
    price: "₹ 8* Crore Onwards",
    projectType: "Apartment",
    bedrooms: "3, 4 BHK",
    developmentSize: "9 Acres",
    totalUnits: "316 Units",
    img: "https://www.pbctoday.co.uk/news/wp-content/uploads/2022/05/0932_SKennedy_ARUP_EGH-055.jpeg",
    city: "Bangalore",
  },
];


const Commercial = () => {
  const [selectedCity, setSelectedCity] = useState("All Properties");
  return (
    <div className="flex mt-20 flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-[150px] bg-[#FFFFF8] p-6 ">
        <h3 className="text-xl  font-bold mb-4">Properties</h3>
        <ul>
          {cities.map(({ name, projects }) => (
            <li
              key={name}
              onClick={() => setSelectedCity(name)}
              className={`cursor-pointer p-3 rounded-lg transition ${selectedCity === name ? "bg-red-200 text-white" : "hover:bg-gray-200"
                }`}
            >
              <span className="block font-semibold">{name}</span>
              {projects !== "All" && <span className="text-gray-500">{projects} Projects Available</span>}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-[85%] p-6">
        <h2 className="text-3xl text-left text-red-500 mb-6">Commercial Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter(({ city }) => selectedCity === "All Properties" || city === selectedCity)
            .map(({ name, location, price, img }) => (
              <div
                key={name}
                className="relative bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 h-[450px] min-w-[300px]"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:blur-sm group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold">NEW LAUNCH</div>
                </div>

                {/* Text Section */}
                <div className="p-5">
                  <h3 className="text-2xl truncate">{name}</h3>
                  <p className="text-gray-500 truncate">{location}</p>
                  <p className="text-xl font-semibold text-red-500">{price}</p>
                </div>

                {/* Hover Buttons */}
                <div className="absolute bottom-2 left-2 right-2 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                  <a
                    href="#"
                    className="flex-1 bg-gray-500 text-white text-center py-3 text-sm flex items-center justify-center gap-2"
                  >
                    📩 Enquire Now
                  </a>
                  <a
                    href="#"
                    className="flex-1 bg-gray-500 text-white text-center py-3 text-sm flex items-center justify-center gap-2"
                  >
                    📅 Book a Site Visit
                  </a>
                </div>
              </div>
            ))}
        </div>
      </main>

    </div>
  )
}

export default Commercial
