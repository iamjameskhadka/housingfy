import { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaRegFlag } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useSavedProperties } from '../../context/SavedPropertiesContext';

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { toggleSaveProperty, isPropertySaved } = useSavedProperties();

  // Auto change image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [property.images.length]);

  const handleSaveProperty = (e) => {
    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Stop event from bubbling up
    toggleSaveProperty(property);
  };

  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white border border-gray-200">
      {/* Image Carousel Section */}
      <div className="relative w-full md:w-[600px] h-[400px]">
        <div className="relative h-full">
          {property.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${property.title} - Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              onError={(e) => {
                e.target.src = "https://ext.same-assets.com/4095440380/3906646564.png";
              }}
            />
          ))}
          {/* Image Navigation Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
          <button
            onClick={handleSaveProperty}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          >
            {isPropertySaved(property.id) ? (
              <FaHeart className="text-red-500" size={20} />
            ) : (
              <FaRegHeart className="text-red-500" size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Property Details Section */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800 hover:text-red-500 transition-colors">
            {property.title}
          </h3>
          <div className="text-xl font-bold text-gray-900">₹{property.rent.toLocaleString()}/mo</div>
        </div>

        <p className="text-sm text-gray-600 mb-6 flex items-center gap-1">
          <MdLocationOn className="text-gray-400" size={18} />
          {property.location}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Deposit</p>
            <p className="font-medium">₹{property.deposit.toLocaleString()}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Room Type</p>
            <p className="font-medium">{property.roomType}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Food</p>
            <p className="font-medium">{property.foodFacility}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-gray-600 text-sm">For {property.preferredTenants}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-gray-600 text-sm">Gate closes {property.gateClosingTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-gray-600 text-sm">Posted {property.postedDaysAgo} days ago</span>
          </div>
        </div>

        <div className="mt-auto flex gap-2">
          <button className="flex-1 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium">
            Get Owner Details
          </button>
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FaRegFlag className="text-gray-500" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;