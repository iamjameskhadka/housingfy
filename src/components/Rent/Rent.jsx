import React, { useState, useEffect } from 'react';
import { FaSearch, FaChevronDown, FaTruck, FaCreditCard, FaFileAlt, FaCoins, FaBroom, FaGlobe, FaUserTie, FaFileContract, FaHome, FaFileSignature, FaRegHeart, FaRegFlag } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsFileText, BsTruck } from 'react-icons/bs';
import house from '../../assets/house.png';
import CountUp from 'react-countup';
import EnquiryForm from '../EnquiryForm/EnquiryForm';
import PropertyPostForm from '../PropertyPost/PropertyPostForm';
import TypeWriter from '../TypeWriter/TypeWriter';
import { Link } from 'react-router-dom';

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

const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: "1 BHK House For Sale In Nilje Village",
    location: "Independent House, Nilje Village",
    price: "₹20 Lacs",
    pricePerSqft: "₹4,211 per sq.ft.",
    emi: "₹11,462/Month",
    size: "475 sqft",
    details: {
      facing: "West",
      type: "1 BHK",
      bathrooms: "1",
      parking: "Bike"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 2,
    title: "2 BHK Flat For Sale In Andheri",
    location: "Apartment, Andheri West",
    price: "₹65 Lacs",
    pricePerSqft: "₹10,500 per sq.ft.",
    emi: "₹35,000/Month",
    size: "950 sqft",
    details: {
      facing: "North-East",
      type: "2 BHK",
      bathrooms: "2",
      parking: "Car + Bike"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 3,
    title: "3 BHK Villa For Sale In Whitefield",
    location: "Villa, Whitefield, Bangalore",
    price: "₹1.5 Crore",
    pricePerSqft: "₹8,200 per sq.ft.",
    emi: "₹75,000/Month",
    size: "1,850 sqft",
    details: {
      facing: "East",
      type: "3 BHK",
      bathrooms: "3",
      parking: "2 Cars"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 4,
    title: "Studio Apartment For Sale In Pune",
    location: "Studio Apartment, Hinjewadi, Pune",
    price: "₹35 Lacs",
    pricePerSqft: "₹9,500 per sq.ft.",
    emi: "₹18,000/Month",
    size: "450 sqft",
    details: {
      facing: "South",
      type: "Studio",
      bathrooms: "1",
      parking: "Bike"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 5,
    title: "4 BHK Independent House For Sale In Noida",
    location: "Independent House, Sector 50, Noida",
    price: "₹2.3 Crore",
    pricePerSqft: "₹12,000 per sq.ft.",
    emi: "₹1,20,000/Month",
    size: "2,200 sqft",
    details: {
      facing: "West",
      type: "4 BHK",
      bathrooms: "4",
      parking: "3 Cars"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 6,
    title: "Luxury Penthouse For Sale In Gurgaon",
    location: "Penthouse, Golf Course Road, Gurgaon",
    price: "₹3.8 Crore",
    pricePerSqft: "₹15,000 per sq.ft.",
    emi: "₹1,90,000/Month",
    size: "2,800 sqft",
    details: {
      facing: "North",
      type: "Penthouse",
      bathrooms: "4",
      parking: "2 Cars"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 7,
    title: "2 BHK Flat For Sale In Chennai",
    location: "Apartment, Adyar, Chennai",
    price: "₹55 Lacs",
    pricePerSqft: "₹9,200 per sq.ft.",
    emi: "₹30,000/Month",
    size: "850 sqft",
    details: {
      facing: "South-East",
      type: "2 BHK",
      bathrooms: "2",
      parking: "Car + Bike"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 8,
    title: "3 BHK Villa For Sale In Hyderabad",
    location: "Villa, Gachibowli, Hyderabad",
    price: "₹2.2 Crore",
    pricePerSqft: "₹11,500 per sq.ft.",
    emi: "₹1,10,000/Month",
    size: "1,950 sqft",
    details: {
      facing: "East",
      type: "3 BHK",
      bathrooms: "3",
      parking: "2 Cars"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 9,
    title: "1 BHK Flat For Sale In Kochi",
    location: "Apartment, Marine Drive, Kochi",
    price: "₹38 Lacs",
    pricePerSqft: "₹7,500 per sq.ft.",
    emi: "₹20,000/Month",
    size: "500 sqft",
    details: {
      facing: "West",
      type: "1 BHK",
      bathrooms: "1",
      parking: "Bike"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 10,
    title: "5 BHK Luxury Bungalow For Sale In Delhi",
    location: "Bungalow, New Friends Colony, Delhi",
    price: "₹6.5 Crore",
    pricePerSqft: "₹18,000 per sq.ft.",
    emi: "₹3,25,000/Month",
    size: "3,600 sqft",
    details: {
      facing: "North-West",
      type: "5 BHK",
      bathrooms: "5",
      parking: "3 Cars"
    },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg?im_w=720&im_format=avif",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  }
];

const PropertyCard = ({ property, onEnquire }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [property.images.length]);

  return (
    <div className="flex flex-col md:flex-row  rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
      {/* Image Carousel Section */}
      <div className="relative w-full md:w-[40%]">
        <div className="relative h-64 md:h-full">
          {property.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${property.title} - Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
          {/* Image Navigation Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <FaRegHeart className="text-red-500" size={20} />
          </button>
        </div>
      </div>

      {/* Property Details Section */}
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800 hover:text-red-500 transition-colors">
            {property.title}
          </h3>
          <span className="text-xl font-bold text-gray-900">{property.price}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 flex items-center gap-1">
          <MdLocationOn className="text-gray-400" size={18} />
          {property.location}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
            <p className="text-gray-500 text-sm group-hover:text-gray-700">Price/sqft</p>
            <p className="font-medium group-hover:text-red-500">{property.pricePerSqft}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
            <p className="text-gray-500 text-sm group-hover:text-gray-700">EMI</p>
            <p className="font-medium group-hover:text-red-500">{property.emi}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
            <p className="text-gray-500 text-sm group-hover:text-gray-700">Size</p>
            <p className="font-medium group-hover:text-red-500">{property.size}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {Object.entries(property.details).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-gray-600 capitalize">{`${value} ${key}`}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex gap-2">
          <button
            onClick={onEnquire}
            className="flex-1 bg-red-500 text-white px-4 py-2.5 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
          >
            Get Owner Details
          </button>
          <button className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FaRegFlag className="text-gray-500" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Rent = () => {

  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showAllProperties, setShowAllProperties] = useState(false);
  const [showPropertyForm, setShowPropertyForm] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
      {/* Hero Section */}
      <section className="mb-8 sm:mb-12">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-['Playfair_Display'] text-center font-semibold mb-4 sm:mb-6 leading-relaxed px-4">
          <TypeWriter
            text="Rent Smart with Housingfy – Affordable Rooms & Flats, Zero Brokerage!"
            speed={50}
          />
        </h1>

        <div className="bg-[#fff9f0] rounded-lg p-4 flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
            <BsFileText className="text-xl" />
            <span>Rental Agreement</span>
          </div>
          <div className="h-6 w-[1px] bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
            <BsTruck className="text-xl" />
            <span>Next Day Delivery</span>
          </div>
          <div className="h-6 w-[1px] bg-gray-300 hidden sm:block"></div>

        </div>
      </section>

      {/* Property Listings Section */}
      <section className="mb-16">
        <Link to="/rent/description">
          <div className="grid grid-cols-1 gap-6">
            {(showAllProperties ? SAMPLE_PROPERTIES : SAMPLE_PROPERTIES.slice(0, 6)).map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onEnquire={() => setShowEnquiryForm(true)}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllProperties(!showAllProperties)}
              className="bg-white text-red-500 border-2 border-red-500 px-6 py-2 rounded-lg hover:bg-red-500 hover:text-black transition-colors"
            >
              {showAllProperties ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </Link>
      </section>

      {/* Property Owner Section */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">Are you a Property Owner?</p>
        <button
          onClick={() => setShowPropertyForm(true)}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors active:scale-95"
        >
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
                  <button
                    onClick={() => setShowEnquiryForm(true)}
                    className="bg-transparent border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg w-full sm:w-auto"
                  >
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

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-50">
          <div className="relative">
            <EnquiryForm onClose={() => setShowEnquiryForm(false)} />
          </div>
        </div>
      )}

      {showPropertyForm && <PropertyPostForm onClose={() => setShowPropertyForm(false)} />}
    </div>
  );
};

export default Rent;
