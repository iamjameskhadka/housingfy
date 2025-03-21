import React, { useState, useEffect } from 'react'
import EnquiryForm from '../EnquiryForm/EnquiryForm';
import ScheduleVisitForm from '../ScheduleVisit/ScheduleVisitForm';
import { Link } from 'react-router-dom';
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
    img: "https://www.hiranandaniparks.com/blog/wp-content/uploads/2023/10/01_Is-buying-residential-plots-a-good-investment-in-Oragadam-Chennai.jpg",
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
    img: "https://is1-2.housingcdn.com/01c16c28/a64bfb19ad76eb3244efe62da0f03fbc/v0/fs/residential_plot-for-sale-poranki-Krishna-plot_view.jpg",
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
    img: "https://www.wisdomproperties.com/web/assets/images/residential-plots/kalvoy.webp",
    city: "Bangalore",
  },
];

const Plots = () => {
  const [selectedCity, setSelectedCity] = useState("All Properties");
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showScheduleVisitForm, setShowScheduleVisitForm] = useState(false);

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex mt-20 flex-col md:flex-row">
      {/* Horizontal Scrollable Sidebar for Mobile/Tablet */}
      <aside className="w-full md:w-[150px] bg-[#FFFFF8] p-4 overflow-x-auto">
        <div className="flex md:flex-col gap-4 min-w-max md:min-w-0">
          {cities.map(({ name, projects }) => (
            <div
              key={name}
              onClick={() => setSelectedCity(name)}
              className={`cursor-pointer p-3 rounded-lg transition whitespace-nowrap
                ${selectedCity === name ? "bg-red-500 text-white" : "hover:bg-gray-200"}`}>
              <span className="block font-semibold">{name}</span>
              {projects !== "All" && (
                <span className="text-black text-sm">{projects} Projects</span>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-[85%] p-6">
        <h2 className="text-3xl text-left text-red-500 mb-6">Plot Projects</h2>
        <Link to="/plots/description">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(({ city }) => selectedCity === "All Properties" || city === selectedCity)
              .map(({ name, location, price, img }) => (
                <div
                  key={name}
                  className="relative bg-white shadow-lg rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 h-[450px] min-w-[300px]"
                  onClick={() => isMobile && setActiveCard(activeCard === name ? null : name)}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={img}
                      alt={name}
                      className={`w-full h-[300px] object-cover transition-transform duration-300 
                      ${isMobile
                          ? activeCard === name && 'blur-sm scale-105'
                          : 'group-hover:blur-sm group-hover:scale-105'
                        }`}
                    />
                    <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold">
                      NEW LAUNCH
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="p-5">
                    <h3 className="text-2xl truncate">{name}</h3>
                    <p className="text-gray-500 truncate">{location}</p>
                    <p className="text-xl font-semibold text-red-500">{price}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className={`
                  absolute bottom-2 left-2 right-2 flex gap-2 transition-all duration-300
                  ${isMobile
                      ? activeCard === name ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      : 'opacity-0 group-hover:opacity-100'
                    }
                `}>
                    <a
                      href="#"
                      className="flex-1 bg-gray-500 text-white text-center py-3 text-sm flex items-center justify-center gap-2 hover:bg-gray-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowEnquiryForm(true);
                      }}
                    >
                      📩 Enquire Now
                    </a>
                    <a
                      href="#"
                      className="flex-1 bg-gray-500 text-white text-center py-3 text-sm flex items-center justify-center gap-2 hover:bg-gray-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowScheduleVisitForm(true);
                      }}
                    >
                      📅 Book a Site Visit
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </Link>
      </main>
      <button
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white py-2 px-4 rounded-l-lg shadow-lg rotate-90 hover:bg-red-600 transition-colors duration-300 z-50"
        onClick={() => setShowEnquiryForm(true)}
      >
        <span className="text-sm sm:text-base font-medium">Enquire Now</span>
      </button>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black/50 z-[1000] flex xl:left-280 items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white rounded-lg w-full max-w-md mx-auto my-8 sm:my-0">
            <EnquiryForm onClose={() => setShowEnquiryForm(false)} />
          </div>
        </div>
      )}

      {/* Schedule Visit Form Modal */}
      {showScheduleVisitForm && (
        <div className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white rounded-lg w-full max-w-md mx-auto my-8 sm:my-0">
            <ScheduleVisitForm onClose={() => setShowScheduleVisitForm(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Plots
