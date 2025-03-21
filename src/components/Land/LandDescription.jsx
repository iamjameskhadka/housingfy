import { useState } from "react"
import {
  FaRegHeart,
  FaRegCalendarAlt,
  FaWhatsapp,
  FaHome,
  FaRegClock,
  FaTint,
  FaSwimmingPool,
  FaDumbbell,
  FaCar,
  FaTree,
  FaBolt,
  FaUserShield,
  FaArrowsAlt,
  FaUsers,
  FaRupeeSign,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaBus,
  FaTrain,
  FaRegHospital,
  FaShoppingCart,
  FaStore,
  FaCreditCard,
  FaUniversity,
  FaFileAlt,
  FaMapMarkedAlt,
  FaRoad,
  FaWater,
} from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { BiArea } from "react-icons/bi"
import { Link } from "react-router-dom"
import TypeWriter from "../TypeWriter/TypeWriter"
//import EnquiryForm from '../EnquiryForm/EnquiryForm';

const LandDescription = () => {
  // const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('transit');

  const images = [
    "https://img.freepik.com/premium-photo/aerial-view-lush-green-rice-fields-with-beautiful-landscape-nature-agriculture_1132312-10256.jpg?w=1380",
    "https://img.freepik.com/free-photo/beautiful-green-field-costa-rican-countryside_23-2148248872.jpg?t=st=1740292862~exp=1740296462~hmac=9fe34998d8087186557ff645a80cad996f259f218c4ddee84f2441812d22dfc6&w=1380",
    "https://img.freepik.com/free-photo/view-land-plot-real-estate-business-development_23-2149916736.jpg?t=st=1740292883~exp=1740296483~hmac=a26fd86d713cc6351bc3ceca2e63c5552a0ca58ab02e3b5e9848688a6ac81629&w=1380",


  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
      {/* Quote Section */}
      <div className="mb-12 text-center relative">

        <h1 className="text-lg sm:text-2xl md:text-3xl font-['Playfair_Display'] text-center font-semibold mb-4 sm:mb-6 leading-relaxed px-4">
          <TypeWriter
            text="Invest in your future—own a piece of prime land and build your dreams."
            speed={50}
          />
        </h1>

      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-red-500 transition-all duration-300 hover:underline transform hover:translate-x-1">
          Home
        </Link> /
        <Link to="/land" className="hover:text-red-500">Land for Sale in Mumbai</Link> /
        <Link to="/land" className="hover:text-red-500">Land for Sale in Katrap</Link> /
        <span className="text-gray-900">Agricultural Land for Sale in Katrap</span>
      </div>

      {/* Image Gallery and Specifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left Side - Image Gallery */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt="Property"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/60'
                    }`}
                />
              ))}
            </div>
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            >
              →
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 mt-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-1 h-20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${index === currentImageIndex ? 'ring-2 ring-red-500' : ''
                  }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Specifications */}
        <div className="space-y-6">
          {/* Title and Price Section */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                  "Agricultural Land for Sale in Katrap, Badlapur East – Fertile Soil, Great Investment!"
                </h1>
                <p className="flex items-center text-gray-600 text-sm">
                  <MdLocationOn className="text-gray-400 mr-1" />
                  Katrap, Badlapur East
                </p>
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold text-gray-900">₹10,00,000/Plot</div>
                <div className="text-sm text-gray-500">Negotiable</div>
              </div>

            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg transition-all duration-300 group hover:bg-red-50 hover:shadow-md hover:-translate-y-1 hover:scale-105">
                <FaMapMarkedAlt className="text-gray-400 mb-1 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12" size={20} />
                <div className="text-sm font-medium group-hover:text-red-500 transition-all duration-300">Agricultural</div>
                <div className="text-xs text-gray-500 group-hover:text-red-400 transition-all duration-300">Land Type</div>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg transition-all duration-300 group hover:bg-red-50 hover:shadow-md hover:-translate-y-1 hover:scale-105">
                <BiArea className="text-gray-400 mb-1 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12" size={20} />
                <div className="text-sm font-medium group-hover:text-red-500 transition-all duration-300">5 Acres</div>
                <div className="text-xs text-gray-500 group-hover:text-red-400 transition-all duration-300">Land Area</div>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg transition-all duration-300 group hover:bg-red-50 hover:shadow-md hover:-translate-y-1 hover:scale-105">
                <FaRupeeSign className="text-gray-400 mb-1 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12" size={20} />
                <div className="text-sm font-medium group-hover:text-red-500 transition-all duration-300">₹50 Lakhs/Acre</div>
                <div className="text-xs text-gray-500 group-hover:text-red-400 transition-all duration-300">Price per Acre</div>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg transition-all duration-300 group hover:bg-red-50 hover:shadow-md hover:-translate-y-1 hover:scale-105">
                <FaRegCalendarAlt className="text-gray-400 mb-1 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12" size={20} />
                <div className="text-sm font-medium group-hover:text-red-500 transition-all duration-300">Immediately</div>
                <div className="text-xs text-gray-500 group-hover:text-red-400 transition-all duration-300">Possession</div>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg transition-all duration-300 group hover:bg-red-50 hover:shadow-md hover:-translate-y-1 hover:scale-105">
                <FaRoad className="text-gray-400 mb-1 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12" size={20} />
                <div className="text-sm font-medium group-hover:text-red-500 transition-all duration-300">15 Feet</div>
                <div className="text-xs text-gray-500 group-hover:text-red-400 transition-all duration-300">Road Access</div>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg transition-all duration-300 group hover:bg-red-50 hover:shadow-md hover:-translate-y-1 hover:scale-105">
                <FaWater className="text-gray-400 mb-1 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12" size={20} />
                <div className="text-sm font-medium group-hover:text-red-500 transition-all duration-300">Available</div>
                <div className="text-xs text-gray-500 group-hover:text-red-400 transition-all duration-300">Water Source</div>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg transition-all duration-300 group hover:bg-red-50 hover:shadow-md hover:-translate-y-1 hover:scale-105">
                <FaTint className="text-gray-400 mb-1 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12" size={20} />
                <div className="text-sm font-medium group-hover:text-red-500 transition-all duration-300">Fertile</div>
                <div className="text-xs text-gray-500 group-hover:text-red-400 transition-all duration-300">Soil Type</div>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg transition-all duration-300 group hover:bg-red-50 hover:shadow-md hover:-translate-y-1 hover:scale-105">
                <FaTree className="text-gray-400 mb-1 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12" size={20} />
                <div className="text-sm font-medium group-hover:text-red-500 transition-all duration-300">Suitable</div>
                <div className="text-xs text-gray-500 group-hover:text-red-400 transition-all duration-300">For Cultivation</div>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg transition-all duration-300 group hover:bg-red-50 hover:shadow-md hover:-translate-y-1 hover:scale-105">
                <FaRegClock className="text-gray-400 mb-1 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12" size={20} />
                <div className="text-sm font-medium group-hover:text-red-500 transition-all duration-300">Feb 20, 2025</div>
                <div className="text-xs text-gray-500 group-hover:text-red-400 transition-all duration-300">Posted On</div>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowEnquiryForm(true)}
              className="w-full bg-red-500 text-white py-3 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:-translate-y-1 active:scale-95"
            >
              Get Owner Details
            </button>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
              <FaWhatsapp size={20} />
              WhatsApp
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:border-red-500 hover:shadow-lg hover:-translate-y-1 active:scale-95">
              <FaRegHeart size={20} className="text-red-500 group-hover:scale-110" />
              Shortlist
            </button>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6 transition-all duration-300 hover:shadow-lg">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 group transition-all duration-300 hover:text-red-500">
          <FaMapMarkedAlt className="text-red-500 transition-all duration-300 group-hover:rotate-12" size={24} />
          Land Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Land Details */}
          <div className="space-y-4">
            <h3 className="text-gray-700 font-medium flex items-center gap-2 group transition-all duration-300 hover:text-red-500">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-125 transition-all duration-300"></span>
              Basic Details
            </h3>
            <div className="space-y-4 transition-all duration-300 hover:bg-gray-50/50 p-4 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaMapMarkedAlt className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Land Type
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">Agricultural</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <BiArea className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Total Area
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">5 Acres</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaTint className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Soil Type
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">Fertile Loam</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaTree className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Cultivation Status
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">Ready for Farming</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Price Details */}
          <div className="space-y-4">
            <h3 className="text-gray-700 font-medium flex items-center gap-2 group transition-all duration-300 hover:text-red-500">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-125 transition-all duration-300"></span>
              Price Details
            </h3>
            <div className="space-y-4 transition-all duration-300 hover:bg-gray-50/50 p-4 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaRupeeSign className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Price per Acre
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">₹50 Lakhs</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaMoneyBillWave className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Total Price
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">₹2.5 Crores</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaCalendarCheck className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Possession
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">Immediate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-4">
            <h3 className="text-gray-700 font-medium flex items-center gap-2 group transition-all duration-300 hover:text-red-500">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover:scale-125 transition-all duration-300"></span>
              Additional Details
            </h3>
            <div className="space-y-4 transition-all duration-300 hover:bg-gray-50/50 p-4 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaWater className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Water Source
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">Well, Borewell</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaRoad className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Road Access
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">15 Feet Wide</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaBolt className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Electricity
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">Available</span>
                </li>
                <li className="flex items-center justify-between py-2 border-b transition-all duration-300 hover:bg-red-50 hover:px-4 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                  <span className="text-gray-600 flex items-center gap-2 group-hover:text-red-500 transition-all duration-300">
                    <FaFileAlt className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={24} />
                    Legal Status
                  </span>
                  <span className="font-medium text-gray-900 group-hover:text-red-500 transition-all duration-300">Clear Title</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-8">
          <h3 className="text-gray-700 font-medium flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            Amenities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: FaArrowsAlt, name: 'Lift' },
              { icon: FaBolt, name: 'Power Backup' },
              { icon: FaUserShield, name: 'Security' },
              { icon: FaCar, name: 'Car Parking' },
              { icon: FaTree, name: 'Garden' },
              { icon: FaUsers, name: 'Club House' },
              { icon: FaSwimmingPool, name: 'Swimming Pool' },
              { icon: FaDumbbell, name: 'Gym' }
            ].map((amenity) => (
              <div
                key={amenity.name}
                className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-red-50 hover:shadow-md hover:-translate-y-1 group"
              >
                <amenity.icon
                  className="text-red-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  size={28}
                />
                <span className="text-gray-700 group-hover:text-red-500">{amenity.name}</span>
              </div>
            ))}
          </div>

          {/* Property Description */}
          <div className="mt-18">
            {/* About Property Tag as heading */}
            <div className="flex items-center mb-4">
              <div className="relative flex items-center group">
                <div className="absolute inset-0 bg-red-100 rounded-full transform -rotate-6 transition-transform group-hover:rotate-6"></div>
                <div className="relative bg-red-500 text-white px-8 py-4 rounded-full flex items-center gap-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <FaFileAlt className="text-white text-2xl transition-all duration-300 group-hover:rotate-12" />
                  <span className="text-2xl font-semibold">About Land</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Overview */}
              <div className="p-4 rounded-lg transition-all duration-300 hover:bg-red-50 group">
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-all duration-300">
                  This premium agricultural land is located in the fertile region of Katrap, Badlapur East, offering an excellent opportunity for farming or investment. Spanning across 5 acres, the land is well-connected to key locations and comes with essential amenities for agricultural use.
                </p>
              </div>

              {/* Key Features */}
              <div className="p-4 rounded-lg transition-all duration-300 hover:bg-red-50 group">
                <h4 className="text-lg font-medium mb-3 text-gray-800 group-hover:text-red-500 transition-all duration-300">Key Features</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 group-hover:text-gray-700">
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Fertile loam soil suitable for various crops
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Ample water supply with well and borewell
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    15-feet wide road access for easy transportation
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Electricity connection available
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Clear land title with all legal approvals
                  </li>
                </ul>
              </div>

              {/* Location Advantages */}
              <div className="p-4 rounded-lg transition-all duration-300 hover:bg-red-50 group">
                <h4 className="text-lg font-medium mb-3 text-gray-800 group-hover:text-red-500 transition-all duration-300">Location Advantages</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 group-hover:text-gray-700">
                  <li className="transition-all duration-300 hover:translate-x-1">
                    5 km from Badlapur Railway Station
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Close to local markets for easy produce sale
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Nearby agricultural supply stores
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Good connectivity to Mumbai-Pune Expressway
                  </li>
                </ul>
              </div>

              {/* Additional Information */}
              <div className="p-4 rounded-lg transition-all duration-300 hover:bg-red-50 group">
                <h4 className="text-lg font-medium mb-3 text-gray-800 group-hover:text-red-500 transition-all duration-300">Additional Information</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 group-hover:text-gray-700">
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Suitable for organic farming
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Potential for agro-tourism development
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Government agricultural schemes available
                  </li>
                  <li className="transition-all duration-300 hover:translate-x-1">
                    Surrounded by other agricultural lands
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Nearby Locations */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Nearby Locations</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:shadow-md hover:scale-105 cursor-pointer">
              Badlapur Railway Station
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:shadow-md hover:scale-105 cursor-pointer">
              Local Farmers Market
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:shadow-md hover:scale-105 cursor-pointer">
              Agricultural Supply Store
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
              Katrap Village Center
            </span>
          </div>
        </div>

        {/* Report Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Report what was not correct in this property</p>
          <div className="flex justify-center gap-3">
            <button className="px-4 py-2 border rounded-lg text-sm transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:border-red-500 hover:shadow-md hover:-translate-y-1 active:scale-95">
              Listed by Broker
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:border-red-500 hover:shadow-md hover:-translate-y-1 active:scale-95">
              Sold Out
            </button>
            <button className="px-4 py-2 border rounded-lg text-sm transition-all duration-300 hover:bg-red-50 hover:text-red-500 hover:border-red-500 hover:shadow-md hover:-translate-y-1 active:scale-95">
              Wrong Info
            </button>
          </div>
        </div>

        {/* Neighbourhood Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <MdLocationOn className="text-red-500" size={24} />
            Neighbourhood
          </h2>

          {/* Map and Transit Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Section - Takes up 2 columns */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <MdLocationOn className="text-red-500" size={20} />
                  <span className="text-gray-600">Your Location -</span>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Type in place to get direction"
                    className="w-full px-4 py-2 border rounded-lg transition-all duration-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-300"
                  />
                </div>
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:-translate-y-1 active:scale-95">
                  Get Directions
                </button>
              </div>

              {/* Map Container */}
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.22!2d72.85!3d19.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzAwLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1635770000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Transit Info Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Navigation Tabs */}
              <div className="flex border-b mb-6">
                <button
                  onClick={() => setActiveTab('transit')}
                  className={`px-6 py-2 transition-all duration-300 cursor-pointer relative hover:bg-red-50 ${activeTab === 'transit'
                    ? 'text-red-500 border-b-2 border-red-500 font-medium'
                    : 'text-gray-500 hover:text-red-500'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
                >
                  Transit
                </button>
                <button
                  onClick={() => setActiveTab('essentials')}
                  className={`px-6 py-2 transition-all duration-300 cursor-pointer relative hover:bg-red-50 ${activeTab === 'essentials'
                    ? 'text-red-500 border-b-2 border-red-500 font-medium'
                    : 'text-gray-500 hover:text-red-500'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
                >
                  Essentials
                </button>
                <button
                  onClick={() => setActiveTab('utility')}
                  className={`px-6 py-2 transition-all duration-300 cursor-pointer relative hover:bg-red-50 ${activeTab === 'utility'
                    ? 'text-red-500 border-b-2 border-red-500 font-medium'
                    : 'text-gray-500 hover:text-red-500'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
                >
                  Utility
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {/* Transit Content */}
                {activeTab === 'transit' && (
                  <>
                    <div>
                      <h3 className="text-gray-700 font-medium mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        Bus Stations
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                            <FaBus className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={20} />
                            Badlapur Railway Station
                          </span>
                          <div className="text-right transition-all duration-300">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">0.8 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">3 mins</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                            <FaBus className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={20} />
                            Badlapur Station Bus Stop
                          </span>
                          <div className="text-right transition-all duration-300">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">2.2 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">7 mins</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-gray-700 font-medium mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        Train Station
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                            <FaTrain className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={20} />
                            Badlapur Railway Station
                          </span>
                          <div className="text-right transition-all duration-300">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">0.8 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">3 mins</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Essentials Content */}
                {activeTab === 'essentials' && (
                  <>
                    <div>
                      <h3 className="text-gray-700 font-medium mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        Schools & Colleges
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300">City International School</span>
                          <div className="text-right">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">1.2 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">5 mins</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300">St. Xavier's College</span>
                          <div className="text-right">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">1.8 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">8 mins</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-gray-700 font-medium mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        Hospitals
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                            <FaRegHospital className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={20} />
                            Kimaya Hospital
                          </span>
                          <div className="text-right">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">0.5 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">2 mins</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                            <FaRegHospital className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={20} />
                            City Care Hospital
                          </span>
                          <div className="text-right">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">1.5 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">6 mins</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Utility Content */}
                {activeTab === 'utility' && (
                  <>
                    <div>
                      <h3 className="text-gray-700 font-medium mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        Shopping
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                            <FaShoppingCart className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={20} />
                            D-Mart Supermarket
                          </span>
                          <div className="text-right">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">1.0 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">4 mins</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                            <FaStore className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={20} />
                            City Mall
                          </span>
                          <div className="text-right">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">2.5 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">10 mins</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-gray-700 font-medium mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        Banks & ATMs
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                            <FaCreditCard className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={20} />
                            HDFC Bank ATM
                          </span>
                          <div className="text-right">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">0.3 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">1 min</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 transition-all duration-300 hover:bg-red-50 rounded-lg group hover:shadow-sm hover:-translate-x-1">
                          <span className="text-gray-600 group-hover:text-red-500 transition-all duration-300 flex items-center gap-2">
                            <FaUniversity className="text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:rotate-12 group-hover:scale-110" size={20} />
                            SBI Branch
                          </span>
                          <div className="text-right">
                            <div className="text-gray-900 group-hover:text-red-500 transition-all duration-300">0.8 km</div>
                            <div className="text-sm text-gray-500 group-hover:text-red-400 transition-all duration-300">3 mins</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form Modal */}
        {/* {showEnquiryForm && <EnquiryForm onClose={() => setShowEnquiryForm(false)} />} */}
      </div>
    </div>
  );
};

export default LandDescription;

