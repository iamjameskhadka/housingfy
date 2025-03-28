import { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Building2, X, List, Map, Save, Heart } from 'lucide-react';
import { useSavedProperties } from '../../context/SavedPropertiesContext';
import PropertyCard from './PropertyCard';

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState('Location');
  const [searchText, setSearchText] = useState('');
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeView, setActiveView] = useState('search'); // 'search' or 'saved'
  const searchRef = useRef(null);
  const { savedProperties } = useSavedProperties();

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchText);
  };

  const handleSaveSearch = () => {
    // Implement save search functionality
    console.log('Saving search:', searchText);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md mt-9 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 py-2">
          {/* Mobile View */}
          <div className="flex md:hidden items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchFocused(true)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 transition-colors"
              >
                <Search className="w-5 h-5 text-red-600" />
              </button>
              <div className="flex border rounded-full overflow-hidden h-9">
                <button
                  className={`px-4 text-sm font-medium transition-colors ${activeTab === 'Location'
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  onClick={() => setActiveTab('Location')}
                >
                  Location
                </button>
                <button
                  className={`px-4 text-sm font-medium transition-colors ${activeTab === 'Metro'
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  onClick={() => setActiveTab('Metro')}
                >
                  Metro
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveView(activeView === 'search' ? 'saved' : 'search')}
                className={`p-2 rounded-full transition-colors ${activeView === 'saved' ? 'bg-red-50 text-red-500' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
              >
                <Heart className={`w-5 h-5 ${activeView === 'saved' ? 'fill-current' : ''}`} />
              </button>

              <div className="flex border rounded-full overflow-hidden">
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                  <List className="w-5 h-5" />
                </button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                  <Map className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex md:flex-row md:items-center md:gap-4">
            {/* Existing desktop layout */}
            <div className="flex-1">
              <div className="relative" ref={searchRef}>
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100 transition-all duration-300">
                  <div className="flex items-center px-3 py-2 border-r border-gray-200">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter location, area, or landmark"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="w-full px-3 py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                  />
                  {searchText && (
                    <button
                      onClick={() => setSearchText('')}
                      className="px-3 py-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Search Suggestions for Desktop */}
                {isSearchFocused && (
                  <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="p-2">
                      <div className="flex items-center px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md cursor-pointer">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Popular Locations</span>
                      </div>
                      <div className="flex items-center px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 rounded-md cursor-pointer">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span>Popular Areas</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Property Type Tabs */}
            <div className="flex border rounded-lg overflow-hidden">
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'Location'
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('Location')}
              >
                Location
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'Metro'
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab('Metro')}
              >
                Metro
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 
                  transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
              {/* <button
                onClick={handleSaveSearch}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors 
                  flex items-center gap-2 text-sm"
              >
                <Save className="w-4 h-4" />
                Save
              </button> */}

              {/* Saved Properties Button */}
              <button
                onClick={() => setActiveView(activeView === 'search' ? 'saved' : 'search')}
                className={`p-2 rounded-full transition-colors ${activeView === 'saved' ? 'bg-red-50 text-red-500' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
              >
                <Heart className={`w-5 h-5 ${activeView === 'saved' ? 'fill-current' : ''}`} />
              </button>

              {/* View Toggle */}
              <div className="flex border rounded-lg overflow-hidden">
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                  <List className="w-4 h-4" />
                </button>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                  <Map className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Properties View */}
      {activeView === 'saved' && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="pt-24 md:pt-28">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveView('search')}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h2 className="text-xl font-semibold text-gray-800">Saved Properties</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">
                    {savedProperties.length} {savedProperties.length === 1 ? 'property' : 'properties'} saved
                  </span>
                </div>
              </div>

              <div className="h-[calc(100vh-200px)] overflow-y-auto">
                {savedProperties.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No saved properties yet</p>
                    <p className="text-gray-400 text-sm mt-2">Properties you save will appear here</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {savedProperties.map(property => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal for Mobile */}
      {isSearchFocused && activeView === 'search' && (
        <div className="fixed inset-0 z-50 bg-white md:hidden mt-8">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => setIsSearchFocused(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex-1">
                <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100">
                  <div className="flex items-center px-4 py-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search location..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full px-3 py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                    autoFocus
                  />
                  {searchText && (
                    <button
                      onClick={() => setSearchText('')}
                      className="px-4 py-2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center px-4 py-3 text-sm text-gray-500 hover:bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Popular Locations</span>
              </div>
              <div className="flex items-center px-4 py-3 text-sm text-gray-500 hover:bg-gray-50 rounded-lg">
                <Building2 className="w-5 h-5 mr-3" />
                <span>Popular Areas</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
