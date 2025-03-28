import { useState, useEffect, useRef } from 'react';
import { SlidersHorizontal } from 'lucide-react';

const FilterSection = ({ isOpen, onToggle }) => {
  const [propertyType, setPropertyType] = useState('All');
  const [propertyStatus, setPropertyStatus] = useState('For Rent');
  const [bedrooms, setBedrooms] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 5000, max: 100000 });
  const [amenities, setAmenities] = useState([]);
  const [furnished, setFurnished] = useState([]);
  const [showOnly, setShowOnly] = useState([]);
  const filterRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target) && isOpen) {
        onToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

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

  const handlePropertyTypeChange = (value) => {
    setPropertyType(value);
  };

  const handlePropertyStatusChange = (value) => {
    setPropertyStatus(value);
  };

  const handleBedroomsChange = (value) => {
    if (bedrooms.includes(value)) {
      setBedrooms(bedrooms.filter(type => type !== value));
    } else {
      setBedrooms([...bedrooms, value]);
    }
  };

  const handleAmenitiesChange = (value) => {
    if (amenities.includes(value)) {
      setAmenities(amenities.filter(item => item !== value));
    } else {
      setAmenities([...amenities, value]);
    }
  };

  const handleFurnishedChange = (value) => {
    if (furnished.includes(value)) {
      setFurnished(furnished.filter(item => item !== value));
    } else {
      setFurnished([...furnished, value]);
    }
  };

  const handleShowOnlyChange = (value) => {
    if (showOnly.includes(value)) {
      setShowOnly(showOnly.filter(item => item !== value));
    } else {
      setShowOnly([...showOnly, value]);
    }
  };

  const handleApplyFilters = () => {
    // Here you can add logic to apply the filters
    console.log('Applying filters:', {
      propertyType,
      propertyStatus,
      bedrooms,
      priceRange,
      amenities,
      furnished,
      showOnly
    });
    onToggle(); // Close the filter panel
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onToggle}
        />
      )}

      {/* Filter Button */}
      <button
        onClick={onToggle}
        className="fixed left-4 top-25 p-3 bg-white rounded-lg shadow-md hover:bg-red-100 z-50 cursor-pointer"
      >
        <SlidersHorizontal className={`w-6 h-6 text-red-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Filter Panel */}
      <div
        ref={filterRef}
        className={`fixed top-0 right-0 h-screen w-[350px] bg-white shadow-xl transition-transform duration-300 ease-in-out z-50 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {isOpen && (
          <>
            {/* Fixed Header */}
            <div className="sticky top-0 p-4 border-b bg-white">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <SlidersHorizontal className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                    <p className="text-sm text-gray-500">Customize your search</p>
                  </div>
                </div>
                <button
                  onClick={onToggle}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <span className="text-2xl text-gray-500">&times;</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto h-[calc(100vh-140px)] p-4">
              <div className="space-y-6">
                {/* Property Type */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Property Type</label>
                  <div className="flex flex-wrap gap-2">
                    {['All', 'Full House', 'Flat', 'Room'].map((option) => (
                      <FilterButton
                        key={option}
                        onClick={() => handlePropertyTypeChange(option)}
                        isActive={propertyType === option}
                      >
                        {option}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* Property Status */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Property Status</label>
                  <div className="flex flex-wrap gap-2">
                    {['For Rent', 'For Sale'].map((option) => (
                      <FilterButton
                        key={option}
                        onClick={() => handlePropertyStatusChange(option)}
                        isActive={propertyStatus === option}
                      >
                        {option}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                  <div className="flex flex-wrap gap-2">
                    {['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'].map((option) => (
                      <FilterButton
                        key={option}
                        onClick={() => handleBedroomsChange(option)}
                        isActive={bedrooms.includes(option)}
                      >
                        {option}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Price Range</label>
                  <div className="space-y-2 bg-white p-3 rounded-lg shadow-sm">
                    <input
                      type="range"
                      min="5000"
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
                        className="w-24 p-1 text-sm border rounded focus:ring-2 focus:ring-red-500 bg-white"
                      />
                      <span className="text-sm text-gray-500">to</span>
                      <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                        className="w-24 p-1 text-sm border rounded focus:ring-2 focus:ring-red-500 bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Amenities</label>
                  <div className="flex flex-wrap gap-2">
                    {['Parking', 'Balcony', 'Gym', 'Swimming Pool', 'Security', 'Lift'].map((option) => (
                      <FilterButton
                        key={option}
                        onClick={() => handleAmenitiesChange(option)}
                        isActive={amenities.includes(option)}
                      >
                        {option}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* Furnished Status */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Furnished Status</label>
                  <div className="flex flex-wrap gap-2">
                    {['Furnished', 'Semi-Furnished', 'Unfurnished'].map((option) => (
                      <FilterButton
                        key={option}
                        onClick={() => handleFurnishedChange(option)}
                        isActive={furnished.includes(option)}
                      >
                        {option}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* Show Only */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Show Only</label>
                  <div className="flex flex-wrap gap-2">
                    {['With Photos', 'Verified Properties', 'New Properties'].map((option) => (
                      <FilterButton
                        key={option}
                        onClick={() => handleShowOnlyChange(option)}
                        isActive={showOnly.includes(option)}
                      >
                        {option}
                      </FilterButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Footer with Apply Button */}
            <div className="sticky bottom-0 p-4 border-t bg-white">
              <button
                onClick={handleApplyFilters}
                className="px-4 py-3 w-full bg-red-500 text-white rounded-lg hover:bg-red-600 
                  transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Apply Filters
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default FilterSection;