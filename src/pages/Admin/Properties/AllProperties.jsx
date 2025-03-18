import React, { useState } from 'react';
import { Building, Bath, Bed, Home, Square, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyPostForm from '../../../components/PropertyPost/PropertyPostForm';

const AllProperties = () => {
  const [properties] = useState([
    {
      id: 1,
      title: 'Dvilla Residences Batu',
      address: '4604, Phili Lane Kiowa',
      image: 'https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2Fc3b60c03-5a74-4a89-9d6f-c5d0efe0f40c.webp&w=1920&q=75',
      beds: 5,
      baths: 4,
      floors: 3,
      rooms: 140,
      price: 8930.00,
      status: 'For Rent'
    },
    {
      id: 2,
      title: 'PIK Villa House',
      address: '127, Boulevard Cockeysville',
      image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3',
      beds: 6,
      baths: 3,
      floors: 3,
      rooms: 170,
      price: 60599.00,
      status: 'Sold'
    },
    {

      id: 3,
      title: 'PIK Villa House',
      address: '127, Boulevard Cockeysville',
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1071679171346400010/original/2f7971fa-49ee-467b-9ec7-85ecef1d6368.jpeg',
      beds: 6,
      baths: 3,
      floors: 3,
      rooms: 170,
      price: 60599.00,
      status: 'Sold'
    },
    {

      id: 4,

      title: 'PIK Villa House',
      address: '127, Boulevard Cockeysville',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      beds: 6,
      baths: 3,
      floors: 3,
      rooms: 170,
      price: 60599.00,
      status: 'Sold'
    },
    // Add more properties as needed
  ]);
  const [priceRange, setPriceRange] = useState({ min: 6000, max: 100000 });
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [showPropertyForm, setShowPropertyForm] = useState(false);

  const bedroomOptions = ['1 BHK', '2 BHK', '3 BHK', '4 & 5 BHK'];
  const amenities = ['Balcony', 'Parking', 'Spa', 'Restaurant', 'Pool', 'Fitness Club'];
  const propertyTypes = ['All Properties', 'Villas', 'Apartment', 'Cottage', 'Duplex Bungalow'];

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Property Image */}
      <div className="relative overflow-hidden group">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0  bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium
          ${property.status === 'For Rent' ? 'bg-green-500' : 'bg-red-500'} 
          text-white transform transition-transform duration-300 hover:scale-105`}>
          {property.status}
        </span>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Building className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            {property.address}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 hover:text-red-500 transition-colors">
          {property.title}
        </h3>

        {/* Property Features */}
        <div className="flex items-center gap-4 mb-4">
          {[
            { icon: <Bed className="h-4 w-4" />, value: `${property.beds} Beds` },
            { icon: <Bath className="h-4 w-4" />, value: `${property.baths} Bath` },
            { icon: <Square className="h-4 w-4" />, value: `${property.rooms}M²` },
            { icon: <Home className="h-4 w-4" />, value: `${property.floors} Floor` }
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-1 group">
              <span className="text-gray-400 group-hover:text-red-500 transition-colors">
                {feature.icon}
              </span>
              <span className="text-sm text-gray-600 group-hover:text-red-500 transition-colors">
                {feature.value}
              </span>
            </div>
          ))}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="text-lg font-bold text-red-500">
            ${property.price.toLocaleString()}
          </div>
          <Link
            to={`/admin/properties/details`}
            className="text-red-500 hover:text-red-600 text-sm font-medium group flex items-center gap-1 transition-all duration-300 hover:gap-2"
          >
            More Inquiry
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );

  const FilterButton = ({ children, onClick, isActive }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-sm rounded-full border transition-all duration-300
        ${isActive
          ? 'bg-red-500 text-white border-red-500 shadow-md transform scale-105'
          : 'text-gray-600 border-gray-300 hover:border-red-500 hover:text-red-500 hover:shadow'
        }`}
    >
      {children}
    </button>
  );

  const handleAddProperty = () => {
    setShowPropertyForm(true);
  };

  const handleCloseForm = () => {
    setShowPropertyForm(false);
  };

  return (
    <div className="p-6 flex gap-6">
      {/* Left Sidebar Filters */}
      <div className="w-72 flex-shrink-0 bg-white rounded-lg shadow-md p-4 h-fit filter-section">
        <div className="space-y-6">
          {/* Properties Header */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Properties</h2>
            <p className="text-sm text-gray-500">Show 15,780 Properties</p>
          </div>

          {/* Location Filter */}

          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-gray-700">Properties Location</label>
            <div className="relative">
              <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-red-500 text-sm bg-white" style={{ zIndex: 9999, position: 'relative' }}>
                <option value="">Choose a city</option>
                <option value="Taplejung">Taplejung</option>
                <option value="Ithari">Ithari</option>
                <option value="Damak">Damak</option>
                <option value="Morang">Morang</option>
                <option value="Birtamod">Birtamod</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Properties Location</label>
              <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-red-500 text-sm">
                <option>Choose a city</option>
                <option>Taplejung</option>
                <option>Ithari</option>
                <option>Damak</option>
                <option>Morang</option>
                <option>Birtamod</option>

              </select>

            </div>

            {/* Type Filter */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Properties Type</label>
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500 animated-checkbox" />
                  <span className="text-sm text-gray-600">{type}</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Custom Price Range</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="6000"
                  max="100000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500 price-slider"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    className="w-24 p-1 text-sm border rounded focus:ring-2 focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-500">to</span>
                  <input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    className="w-24 p-1 text-sm border rounded focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Accessibility Features */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Accessibility Features</label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500 animated-checkbox" />
                  <span className="text-sm text-gray-600">For Rent</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500 animated-checkbox" />
                  <span className="text-sm text-gray-600">For Sale</span>
                </label>
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
              <div className="flex flex-wrap gap-2">
                {bedroomOptions.map((option) => (
                  <FilterButton
                    key={option}
                    onClick={() => setSelectedBedrooms([...selectedBedrooms, option])}
                    isActive={selectedBedrooms.includes(option)}
                  >
                    {option}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Amenities Filter */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Accessibility Features</label>
              {amenities.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => {
                      if (selectedAmenities.includes(amenity)) {
                        setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
                      } else {
                        setSelectedAmenities([...selectedAmenities, amenity]);
                      }
                    }}
                    className="rounded border-gray-300 text-red-500 focus:ring-red-500 animated-checkbox"
                  />
                  <span className="text-sm text-gray-600">{amenity}</span>
                </label>
              ))}
            </div>

            {/* Apply Button */}
            <button className="px-4 py-4 w-full  bg-red-500 text-white rounded-lg hover:bg-red-600 
            transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
              Apply
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 smooth-scroll">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6 animate-fadeIn">
            <div className="flex items-center gap-2">
              <Sliders className="h-5 w-5 text-gray-400" />
              <h1 className="text-xl font-bold text-gray-800"> Properties Listing </h1>
            </div>
            <button
              onClick={handleAddProperty}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 
              transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Add New Property
            </button>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <div key={property.id}
                className="property-card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          {/* Property Post Form Modal */}
          {showPropertyForm && (
            <PropertyPostForm onClose={handleCloseForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
