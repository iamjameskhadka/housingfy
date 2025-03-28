import { useState, useEffect } from "react";
import { Share2, CalendarCheck, MessageCircle } from "lucide-react";
import { MdLocationOn } from "react-icons/md";
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import FeaturePro from "../components/FeatureProject/FeaturePro";
import SharePopup from '../components/Share/SharePopup';
import ScheduleVisitForm from '../components/ScheduleVisit/ScheduleVisitForm';
import { Link } from "react-router-dom";

const Home = () => {
  // Search States
  const [activeTab, setActiveTab] = useState("buy");
  const [location, setLocation] = useState("Mumbai");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bhkType, setBhkType] = useState("");
  const [availability, setAvailability] = useState("");

  // Floating Button State
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // City Options
  const cities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"];

  // Add these new states at the top with other states
  const [propertyStatus, setPropertyStatus] = useState("");
  const [showNewProjects, setShowNewProjects] = useState(false);

  // Add these states in the Home component
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [showScheduleForm, setShowScheduleForm] = useState(false);

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Search Function
  const handleSearch = () => {
    console.log({
      activeTab,
      location,
      searchQuery,
      propertyType,
      bhkType,
      availability
    });
  };

  // Add handleWhatsApp function
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in your property listing");
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, '_blank');
  };

  return (
    <section>
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Hero Section */}
        <div
          className="relative w-full h-[80vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://photos.zillowstatic.com/fp/cf62acca8ba8570d1a93f5a130b84c6a-cc_ft_960.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40" />

          {/* Hero Text */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center text-white mb-8 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">Find Your Perfect Home</h1>
            <p className="text-base sm:text-lg">Search from millions of properties across top cities</p>
          </div>

          {/* Search Interface */}
          <section className="absolute top-[55%] sm:top-1/2 left-1/2 -translate-x-1/2 w-[100%] sm:w-[90%] max-w-7xl">
            {/* Tabs */}
            <div className="flex  backdrop-blur-md  rounded-t-lg overflow-hidden divide-x divide-gray-200">
              {["buy", "rent", "commercial"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    relative flex-1 py-3 text-center capitalize text-sm sm:text-base font-medium
                    ${activeTab === tab
                      ? "text-red-500"
                      : "text-white hover:text-red-500"
                    }
                    transition-colors duration-200
                  `}
                >
                  {tab}
                  {/* Underline */}
                  <div
                    className={`
                      absolute bottom-0 left-0 w-full h-0.5
                      ${activeTab === tab
                        ? "bg-red-500"
                        : "bg-transparent"
                      }
                      transition-colors duration-200
                    `}
                  />
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="bg-white rounded-b-lg shadow-sm border border-red-400 p-3 sm:p-4">
              {/* City and Search Input Row */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                {/* City Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={() => setShowCityDropdown(!showCityDropdown)}
                    className="w-full sm:w-40 px-3 sm:px-4 py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-sm sm:text-base"
                  >
                    <span className="text-gray-700">{location}</span>
                    <FaChevronDown
                      className={`text-gray-400 transition-transform duration-200 ${showCityDropdown ? 'rotate-180' : ''
                        }`}
                      size={12}
                    />
                  </button>
                  {showCityDropdown && (
                    <div className="absolute z-20 w-full sm:w-40 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 max-h-[200px] overflow-y-auto">
                      {cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setLocation(city);
                            setShowCityDropdown(false);
                          }}
                          className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200 border-b border-gray-50 last:border-none"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Input */}
                <div className="flex-1">
                  <div className="relative">
                    <MdLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search upto 3 localities or landmarks"
                      className="w-full pl-10 pr-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <Link to='/display-properties'>
                  <button
                    onClick={handleSearch}
                    className="w-full sm:w-auto bg-red-500 text-white px-4 sm:px-8 py-2.5 rounded-lg hover:bg-red-600 transition-colors cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                  >
                    <FaSearch size={14} />

                    <span>Search</span>

                  </button>
                </Link>
              </div>

              {/* Property Filters based on active tab */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {/* Buy Tab Content */}
                {activeTab === "buy" && (
                  <>
                    <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 w-full sm:w-auto">
                      <label className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="propertyType"
                          checked={propertyType === "Full House"}
                          onChange={() => {
                            setPropertyType("Full House");
                            setBhkType("");
                            setPropertyStatus("");
                            setShowNewProjects(false);
                          }}
                          className="appearance-none w-4 sm:w-5 h-4 sm:h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        />
                        <span className="text-sm sm:text-base text-gray-700 group-hover:text-red-500 transition-colors">Full House</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="propertyType"
                          checked={propertyType === "Land/Plot"}
                          onChange={() => {
                            setPropertyType("Land/Plot");
                            setPropertyStatus("");
                          }}
                          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        />
                        <span className="text-gray-700 group-hover:text-red-500 transition-colors">Land/Plot</span>
                      </label>
                    </div>

                    {propertyType === "Full House" && (
                      <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={bhkType}
                            onChange={(e) => setBhkType(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">BHK Type</option>
                            <option value="1">1 BHK</option>
                            <option value="2">2 BHK</option>
                            <option value="3">3 BHK</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>

                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={propertyStatus}
                            onChange={(e) => setPropertyStatus(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">Property Status</option>
                            <option value="ready">Ready to Move</option>
                            <option value="under-construction">Under Construction</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>

                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={showNewProjects}
                            onChange={(e) => setShowNewProjects(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                          />
                          <span className="text-xs sm:text-sm text-gray-700 group-hover:text-red-500 transition-colors">New Builder Projects</span>
                        </label>
                      </div>
                    )}

                    {propertyType === "Land/Plot" && (
                      <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={propertyStatus}
                            onChange={(e) => setPropertyStatus(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">Plot Type</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="agricultural">Agricultural</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Rent Tab Content */}
                {activeTab === "rent" && (
                  <>
                    <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 w-full sm:w-auto">
                      <label className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="propertyType"
                          checked={propertyType === "Full House"}
                          onChange={() => {
                            setPropertyType("Full House");
                            setBhkType("");
                            setAvailability("");
                          }}
                          className="appearance-none w-4 sm:w-5 h-4 sm:h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        />
                        <span className="text-sm sm:text-base text-gray-700 group-hover:text-red-500 transition-colors">Full House</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="propertyType"
                          checked={propertyType === "Rooms"}
                          onChange={() => setPropertyType("Rooms")}
                          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        />
                        <span className="text-gray-700 group-hover:text-red-500 transition-colors">Rooms</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="propertyType"
                          checked={propertyType === "Flatmates"}
                          onChange={() => setPropertyType("Flatmates")}
                          className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        />
                        <span className="text-gray-700 group-hover:text-red-500 transition-colors">Flatmates</span>
                      </label>
                    </div>

                    {propertyType === "Full House" && (
                      <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={bhkType}
                            onChange={(e) => setBhkType(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">BHK Type</option>
                            <option value="1">1 BHK</option>
                            <option value="2">2 BHK</option>
                            <option value="3">3 BHK</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>

                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">Availability</option>
                            <option value="immediate">Immediate</option>
                            <option value="15days">Within 15 Days</option>
                            <option value="30days">Within 30 Days</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>
                      </div>
                    )}

                    {propertyType === "Rooms" && (
                      <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={bhkType}
                            onChange={(e) => setBhkType(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">Room Type</option>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                            <option value="triple">Triple</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>

                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={propertyStatus}
                            onChange={(e) => setPropertyStatus(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">Preferred Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="any">Any</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>

                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">Availability</option>
                            <option value="immediate">Immediate</option>
                            <option value="15days">Within 15 Days</option>
                            <option value="30days">Within 30 Days</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>
                      </div>
                    )}

                    {propertyType === "Flatmates" && (
                      <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={bhkType}
                            onChange={(e) => setBhkType(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">BHK Type</option>
                            <option value="1">1 BHK</option>
                            <option value="2">2 BHK</option>
                            <option value="3">3 BHK</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>

                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={propertyStatus}
                            onChange={(e) => setPropertyStatus(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">Preferred Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="any">Any</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>

                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">Availability</option>
                            <option value="immediate">Immediate</option>
                            <option value="15days">Within 15 Days</option>
                            <option value="30days">Within 30 Days</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}

                {activeTab === "commercial" && (
                  <>
                    <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 w-full sm:w-auto">
                      <label className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="commercialType"
                          checked={propertyType === "Rent"}
                          onChange={() => {
                            setPropertyType("Rent");
                            setPropertyStatus("");
                          }}
                          className="appearance-none w-4 sm:w-5 h-4 sm:h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        />
                        <span className="text-sm sm:text-base text-gray-700 group-hover:text-red-500 transition-colors">Rent</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="commercialType"
                          checked={propertyType === "Buy"}
                          onChange={() => setPropertyType("Buy")}
                          className="appearance-none w-4 sm:w-5 h-4 sm:h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        />
                        <span className="text-sm sm:text-base text-gray-700 group-hover:text-red-500 transition-colors">Buy</span>
                      </label>
                    </div>

                    {propertyType && (
                      <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full sm:w-auto">
                        <div className="relative w-[48%] sm:w-40">
                          <select
                            value={propertyStatus}
                            onChange={(e) => setPropertyStatus(e.target.value)}
                            className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                          >
                            <option value="">Property Type</option>
                            <option value="office">Office Space</option>
                            <option value="shop">Shop/Showroom</option>
                            <option value="warehouse">Warehouse/Godown</option>
                            <option value="land">Commercial Land</option>
                          </select>
                          <FaChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={12}
                          />
                        </div>

                        {propertyType === "Buy" && (
                          <div className="relative w-[48%] sm:w-40">
                            <select
                              value={availability}
                              onChange={(e) => setAvailability(e.target.value)}
                              className="w-full px-2 sm:px-4 py-2 sm:py-2.5 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-xs sm:text-sm"
                            >
                              <option value="">Availability</option>
                              <option value="ready">Ready to Move</option>
                              <option value="under-construction">Under Construction</option>
                            </select>
                            <FaChevronDown
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                              size={12}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Floating Action Button */}
        <div
          className={`
            fixed z-[1000] flex flex-col items-end space-y-2
            ${scrollPosition > 100
              ? 'bottom-20 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8'
              : 'xl:top-120 lg:top-250 lg:right-4 md:top-180 md:right-4 sm:bottom-6 sm:right-4 top-155 right-4'
            }
          `}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            className={`
              relative rounded-full shadow-lg transition-all duration-300 
              flex items-center justify-center bg-red-500
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
              hover:shadow-xl active:scale-95
              ${isOpen ? "rotate-45" : ""}
            `}
          >
            <div className={`
              rounded-full flex items-center justify-center
              bg-white transition-all duration-300
              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
              ${isOpen ? "bg-red-200" : "bg-white"}
            `}>
              <span className="text-black text-3xl font-semibold">+</span>
            </div>
          </button>

          {isOpen && (
            <div className="absolute bottom-full mb-2 right-0">
              <div className="bg-white backdrop-blur-md rounded-lg shadow-xl p-3">
                <button
                  onClick={() => setShowSharePopup(true)}
                  className="flex items-center w-full gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100/80 rounded-lg"
                >
                  <Share2 className="w-5 h-5" />
                  <span className="whitespace-nowrap text-sm font-medium">Share</span>
                </button>
                <button
                  onClick={() => setShowScheduleForm(true)}
                  className="flex items-center w-full gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100/80 rounded-lg"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span className="whitespace-nowrap text-sm font-medium">Schedule Visit</span>
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center w-full gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100/80 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="whitespace-nowrap text-sm font-medium">WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Feature Projects Section */}
      <div className="-mt-40">
        <FeaturePro />
      </div>

      {/* Remove default select styling */}
      {/* <style jsx global>{`
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `}</style> */}

      {showSharePopup && <SharePopup onClose={() => setShowSharePopup(false)} />}
      {showScheduleForm && <ScheduleVisitForm onClose={() => setShowScheduleForm(false)} />}
    </section>
  );
};

export default Home;
