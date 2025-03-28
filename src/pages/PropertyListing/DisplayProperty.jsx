import React from 'react'
import PropertyList from '../../pages/PropertyListing/PropertyList';
import FilterSection from '../../pages/PropertyListing/Filter';
import QuickLinks from '../../pages/PropertyListing/QuickLinks';
import SearchBar from '../../pages/PropertyListing/SearchBar';

const DisplayProperty = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-12">
      {/* Top Search Bar */}
      <div className="bg-white shadow-sm py-3 px-4 mb-4">
        <SearchBar />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Filters */}
          <div className="hidden">
            <FilterSection />
          </div>

          {/* Middle - Property Listings */}
          <div className="lg:flex-1 lg:min-w-0">
            <PropertyList />
          </div>

          {/* Right Side - Quick Links */}
          <div className="lg:w-1/4 lg:min-w-[300px]">
            <QuickLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayProperty
