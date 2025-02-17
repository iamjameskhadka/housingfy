import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaTruck, FaCreditCard, FaFileAlt, FaCoins, FaBroom, FaGlobe, FaUserTie, FaFileContract, FaHome, FaFileSignature } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsFileText, BsTruck } from 'react-icons/bs';
import house from '../../assets/house.png';
import CountUp from 'react-countup';

const SERVICES = [
  {
    icon: FaTruck,
    title: "Packers & Movers",
    tag: "Lowest Price"
  },
  {
    icon: FaCreditCard,
    title: "Pay rent",
    tag: "New Offers"
  },
  {
    icon: FaFileAlt,
    title: "Rental Agreement",
    tag: "Flat 30% off"
  },
  {
    icon: FaCoins,
    title: "Click & Earn"
  },
  {
    icon: FaBroom,
    title: "Painting & Cleaning",
    tag: "New"
  },
  {
    icon: FaGlobe,
    title: "NoBroker For NRIs"
  }
];

const FEATURES = [
  {
    icon: FaUserTie,
    title: "Avoid Brokers",
    description: "We directly connect you to verified owners to save brokerage"
  },
  {
    icon: FaFileContract,
    title: "Free Listing",
    description: "Easy listing process. Also using WhatsApp"
  },
  {
    icon: FaHome,
    title: "Shortlist without Visit",
    description: "Extensive Information makes it easy"
  },
  {
    icon: FaFileSignature,
    title: "Rental Agreement",
    description: "Assistance in creating Rental agreement & Paper work"
  }
];

const STATISTICS = [
  {
    prefix: "₹",
    value: "130",
    suffix: "cr+",
    label: "Brokerage saved monthly"
  },
  {
    value: "30",
    suffix: "Lakh+",
    label: "Customers Connected Monthly"
  },
  {
    value: "2",
    suffix: "Lakh+",
    label: "New Listings Monthly"
  }
];

const Rent = () => {
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [propertyType, setPropertyType] = useState('Full House');
  const [bhkType, setBhkType] = useState('');
  const [availability, setAvailability] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai'];

  const handleSearch = () => {
    console.log({
      city: selectedCity,
      propertyType,
      bhkType,
      availability,
      searchQuery
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-2xl md:text-3xl text-gray-700 text-center font-medium mb-6">
          "Rent Smart with Housingfy – Affordable Rooms & Flats, Zero Brokerage!"
        </h1>

        <div className="bg-[#fff9f0] rounded-lg p-4 flex items-center justify-center gap-8">
          <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
            <BsFileText className="text-xl" />
            <span>Rental Agreement</span>
          </div>
          <div className="h-6 w-[1px] bg-gray-300"></div>
          <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
            <BsTruck className="text-xl" />
            <span>Next Day Delivery</span>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-sm border border-red-400 p-4">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* City Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="w-full md:w-40 px-4 py-2 border rounded-lg flex items-center justify-between hover:border-red-500 focus:border-red-500 focus:outline-none transition-all duration-200"
              >
                <span className="text-gray-700">{selectedCity}</span>
                <FaChevronDown className={`text-gray-400 transition-transform duration-200 ${showCityDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showCityDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setShowCityDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200 border-b border-gray-50 last:border-none"
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
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="bg-red-500 text-white px-8 py-2 rounded-lg hover:bg-red-600 transition-colors cursor-pointer active:scale-95"
            >
              <FaSearch className="inline-block mr-2" />
              Search
            </button>
          </div>

          {/* Property Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Radio Buttons */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="propertyType"
                checked={propertyType === 'Full House'}
                onChange={() => setPropertyType('Full House')}
                className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <span className="text-gray-700 group-hover:text-red-500 transition-colors">Full House</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="propertyType"
                checked={propertyType === 'Rooms'}
                onChange={() => setPropertyType('Rooms')}
                className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <span className="text-gray-700 group-hover:text-red-500 transition-colors">Rooms</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="propertyType"
                checked={propertyType === 'Flatmates'}
                onChange={() => setPropertyType('Flatmates')}
                className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-red-500 checked:border-[6px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <span className="text-gray-700 group-hover:text-red-500 transition-colors">Flatmates</span>
            </label>

            {/* Select Dropdowns */}
            <select
              value={bhkType}
              onChange={(e) => setBhkType(e.target.value)}
              className="border rounded-lg px-4 py-2 hover:border-red-500 focus:border-red-500 focus:outline-none cursor-pointer"
            >
              <option value="">BHK Type</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
            </select>

            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="border rounded-lg px-4 py-2 hover:border-red-500 focus:border-red-500 focus:outline-none cursor-pointer"
            >
              <option value="">Availability</option>
              <option value="immediate">Immediate</option>
              <option value="15days">Within 15 Days</option>
              <option value="30days">Within 30 Days</option>
            </select>
          </div>
        </div>
      </section>

      {/* Property Owner Section */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">Are you a Property Owner?</p>
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors active:scale-95">
          Post Free Property Ad
        </button>
      </section>

      {/* Services Section */}
      <section className="mb-16 mt-16">
        <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          <span className="px-2 md:px-4">Services</span>
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-4 cursor-pointer group h-full">
              <div className="flex flex-col items-center justify-between h-full">
                {/* Tag */}
                {service.tag && (
                  <span className="text-xs text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full">
                    {service.tag}
                  </span>
                )}
                {/* Icon */}
                <div className="my-4">
                  <div className="text-red-400 group-hover:text-red-500 transform group-hover:-translate-y-1 transition-all duration-300">
                    <service.icon size={40} className="transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                {/* Title */}
                <p className="text-sm text-gray-600 text-center group-hover:text-red-500 transition-colors font-medium">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Use NoBroker Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            <span className="px-2 md:px-4">Why Use No Broker</span>
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 cursor-pointer group">
              <div className="mb-4 text-red-400 group-hover:text-red-500 transform group-hover:-translate-y-1 transition-all duration-300">
                <feature.icon
                  size={40}
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-red-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Assist Plan Section */}
      <section className="mb-16 bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          <span className="px-2 md:px-4">Business Assist Plan</span>
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        </h2>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">Ready to Grow Your Real Estate Business?</h3>
                <p className="text-gray-600 text-lg">Connect with us to showcase and market your properties effectively</p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mt-8">
                  <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg w-full sm:w-auto">
                    Enquire Now
                  </button>
                  <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                    <span className="text-gray-700 font-medium">Call us:</span>
                    <a href="tel:+919108050400" className="text-red-500 font-semibold hover:text-red-600">
                      +91 91080 50400
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-600">Dedicated Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-600">Premium Listings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-600">Marketing Tools</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={house}
                alt="Business Plan"
                className="max-w-[80%] md:max-w-full hover:scale-105 transition-transform duration-300 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mb-16">
        <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          <span className="px-2 md:px-4">We Make A Difference</span>
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {STATISTICS.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full border-2 border-red-100 flex items-center justify-center group-hover:border-red-200 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-red-500 font-semibold group-hover:scale-110 transition-transform duration-300">
                    {stat.prefix && <span className="text-2xl">{stat.prefix}</span>}
                    <CountUp
                      end={parseInt(stat.value)}
                      duration={2.5}
                      separator=","
                      className="text-3xl"
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    <span className="text-lg">{stat.suffix}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 group-hover:text-gray-800 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rent;
