import React, { useState } from 'react';
import {
  Info,
  Layout,
  Map,
  ImageIcon,
  Video,
  DollarSign,
  Ruler,
  Compass,
  MapPin,
  Home,
  Trees,
  Sun,
  Zap,
  ParkingCircle,
  Shield as SecurityIcon,
  Fence,
  Droplet,
  Shield,
  FileText,
  CreditCard,
  Bus,
  Train,
  Building,
  GraduationCap,
  Plane,
  Stethoscope,
  Building2,
  Store,
  Leaf,
  Cloud,
  Waves,
  Mountain,
  Calendar,
  CheckSquare,
  Factory,
  ShoppingBag,


  Navigation

} from 'lucide-react';
import FileUpload from './FileUpload';

const inputStyles = "w-full p-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 outline-none border-none";
const cardStyles = "bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300";
const labelStyles = "block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-hover:text-red-500";

const HomeLandForm = ({ files, setFiles }) => {
  const [activeTab, setActiveTab] = useState('transit');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Details Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Info className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Basic Details</h2>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <label className={labelStyles}>Land Title</label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter land title"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>Land Type</label>
              <select className={inputStyles}>
                <option value="">Select type</option>
                <option value="agricultural">Agricultural Land</option>
                <option value="non-agricultural">Non-Agricultural Land</option>
                <option value="farm-land">Farm Land</option>
                <option value="plantation">Plantation Land</option>
              </select>
            </div>
            <div className="group">
              <label className={labelStyles}>Total Area</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className={inputStyles}
                  placeholder="Enter area"
                />
                <select className={`${inputStyles} w-32`}>
                  <option value="acres">Acres</option>
                  <option value="hectares">Hectares</option>
                  <option value="sqft">Sq.Ft</option>
                  <option value="guntha">Guntha</option>
                </select>
              </div>
            </div>
            <div className="group">
              <label className={labelStyles}>Road Access Width</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className={inputStyles}
                  placeholder="Enter width"
                />
                <span className="flex items-center px-3 bg-gray-100 rounded-lg">
                  Feet
                </span>
              </div>
            </div>
            <div className="group">
              <label className={labelStyles}>Water Source</label>
              <select className={inputStyles}>
                <option value="">Select source</option>
                <option value="well">Well</option>
                <option value="borewell">Borewell</option>
                <option value="canal">Canal</option>
                <option value="river">River</option>
                <option value="rainwater">Rainwater</option>
              </select>
            </div>
            <div className="group">
              <label className={labelStyles}>Soil Type</label>
              <select className={inputStyles}>
                <option value="">Select soil type</option>
                <option value="fertile-loam">Fertile Loam</option>
                <option value="black">Black Soil</option>
                <option value="red">Red Soil</option>
                <option value="alluvial">Alluvial Soil</option>
                <option value="sandy">Sandy Soil</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* About Details Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Info className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">About Details</h2>
        </div>
        <div className="space-y-6">
          <div className="group">
            <label className={labelStyles}>Overview</label>
            <textarea
              className={inputStyles}
              rows="4"
              placeholder="Enter detailed overview of the land"
            />
          </div>

          <div className="group">
            <label className={labelStyles}>Current Cultivation</label>
            <textarea
              className={inputStyles}
              rows="3"
              placeholder="Enter current cultivation details (if any)"
            />
          </div>

          <div className="group">
            <label className={labelStyles}>Suitable Crops</label>
            <textarea
              className={inputStyles}
              rows="3"
              placeholder="Enter suitable crops for cultivation"
            />
          </div>

          <div className="group">
            <label className={labelStyles}>Key Features</label>
            <textarea
              className={inputStyles}
              rows="4"
              placeholder="Enter key features (one per line)"
            />
          </div>

          <div className="group">
            <label className={labelStyles}>Development Status</label>
            <select className={inputStyles}>
              <option value="">Select status</option>
              <option value="ready-for-cultivation">Ready for Cultivation</option>
              <option value="under-development">Under Development</option>
              <option value="raw-land">Raw Land</option>
              <option value="partially-developed">Partially Developed</option>
            </select>
          </div>

          <div className="group">
            <label className={labelStyles}>Possession Timeline</label>
            <select className={inputStyles}>
              <option value="">Select timeline</option>
              <option value="immediate">Immediate</option>
              <option value="within-3-months">Within 3 Months</option>
              <option value="within-6-months">Within 6 Months</option>
              <option value="custom">Custom Timeline</option>
            </select>
          </div>
        </div>
      </div>

      {/* Price Details Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Price Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group">
            <label className={labelStyles}>Total Price</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                className={`${inputStyles} pl-10`}
                placeholder="Enter total price"
              />
            </div>
          </div>
          <div className="group">
            <label className={labelStyles}>Price per Acre</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                className={`${inputStyles} pl-10`}
                placeholder="Enter price per acre"
              />
            </div>
          </div>
          <div className="group">
            <label className={labelStyles}>Price Negotiable</label>
            <select className={inputStyles}>
              <option value="">Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>

      {/* Land Features */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Land Features</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Irrigation System', icon: Droplet },
            { label: 'Fertile Soil', icon: Leaf },
            { label: 'Water Storage', icon: Waves },
            { label: 'Electricity', icon: Zap },
            { label: 'Farm House', icon: Building2 },
            { label: 'Storage Facility', icon: Building2 },
            { label: 'Natural Water Body', icon: Waves },
            { label: 'Plantation', icon: Trees },
            { label: 'Good Rainfall', icon: Cloud },
            { label: 'Road Connectivity', icon: MapPin },
            { label: 'Clear Title', icon: FileText },
            { label: 'Cultivation Ready', icon: Leaf }
          ].map((feature) => (
            <label
              key={feature.label}
              className="flex items-center space-x-2 p-3 rounded-lg hover:bg-red-50 
                cursor-pointer transition-all duration-300 group"
            >
              <input
                type="checkbox"
                className="rounded text-red-500 focus:ring-red-500 transition-colors duration-300"
              />
              <div className="flex items-center gap-2">
                <feature.icon className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                <span className="group-hover:text-red-500 transition-colors duration-300">
                  {feature.label}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Location Details */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Location Details</h2>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className={labelStyles}>Complete Address</label>
              <textarea
                className={inputStyles}
                rows="3"
                placeholder="Enter complete address"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>Landmarks</label>
              <textarea
                className={inputStyles}
                rows="3"
                placeholder="Enter nearby landmarks"
              />
            </div>
          </div>

          {/* Location URL */}
          <div className="mt-4">
            <div className="group">
              <label className={labelStyles}>
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Location URL
                </div>
              </label>
              <input
                type="url"
                className={inputStyles}
                placeholder="Enter Google Maps or location URL"
              />
              <p className="mt-1 text-xs text-gray-500">Add a Google Maps or any location service URL to help users find this property easily</p>
            </div>
          </div>

          {/* City, State, PIN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group">
              <label className={labelStyles}>
                City
              </label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter city"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>
                State
              </label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter state"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>
                PIN Code
              </label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter PIN code"
              />
            </div>
          </div>

          {/* Nearby Locations */}
          <div>
            <h3 className="text-md font-medium mb-4">Nearby Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Metro Stations */}
              <div className="group">
                <label className={labelStyles}>
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4" />
                    Metro Stations
                  </div>
                </label>
                <textarea
                  className={inputStyles}
                  rows="2"
                  placeholder="Enter nearby metro stations"
                />
              </div>

              {/* Shopping Centers */}
              <div className="group">
                <label className={labelStyles}>
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Shopping Centers
                  </div>
                </label>
                <textarea
                  className={inputStyles}
                  rows="2"
                  placeholder="Enter nearby shopping centers"
                />
              </div>

              {/* Schools & Colleges */}
              <div className="group">
                <label className={labelStyles}>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Schools & Colleges
                  </div>
                </label>
                <textarea
                  className={inputStyles}
                  rows="2"
                  placeholder="Enter nearby educational institutions"
                />
              </div>

              {/* Hospitals */}
              <div className="group">
                <label className={labelStyles}>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4" />
                    Hospitals
                  </div>
                </label>
                <textarea
                  className={inputStyles}
                  rows="2"
                  placeholder="Enter nearby hospitals"
                />
              </div>
            </div>
          </div>

          {/* Distance Matrix */}
          <div>
            <h3 className="text-md font-medium mb-4">Distance From Key Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: 'Airport', icon: Plane },
                { label: 'Railway Station', icon: Train },
                { label: 'Bus Stand', icon: Bus },
                { label: 'City Center', icon: Building },
                { label: 'Industrial Area', icon: Factory },
                { label: 'Highway', icon: Navigation }
              ].map((item) => (
                <div key={item.label} className="group">
                  <label className={labelStyles}>
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      className={inputStyles}
                      placeholder="Distance"
                    />
                    <select className={`${inputStyles} w-24`}>
                      <option value="km">km</option>
                      <option value="mi">mi</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group">
              <label className={labelStyles}>Village/Town</label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter village/town"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>District</label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter district"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>State</label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter state"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Locations */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Map className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Nearby Locations</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b mb-6">
          {['transit', 'essentials', 'utility'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 transition-all duration-300 cursor-pointer relative hover:bg-red-50 
                ${activeTab === tab
                  ? 'text-red-500 border-b-2 border-red-500 font-medium'
                  : 'text-gray-500 hover:text-red-500'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'transit' && (
            <>
              <div className="space-y-4">
                <label className={labelStyles}>Bus Stations</label>
                {[1, 2].map((index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className={inputStyles}
                      placeholder={`Bus Station ${index}`}
                    />
                    <div className="flex gap-4">
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Distance (km)"
                      />
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Time (mins)"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <label className={labelStyles}>Train Stations</label>
                {[1].map((index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className={inputStyles}
                      placeholder={`Train Station ${index}`}
                    />
                    <div className="flex gap-4">
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Distance (km)"
                      />
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Time (mins)"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'essentials' && (
            <>
              <div className="space-y-4">
                <label className={labelStyles}>Schools & Colleges</label>
                {[1, 2].map((index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className={inputStyles}
                      placeholder={`Institution ${index}`}
                    />
                    <div className="flex gap-4">
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Distance (km)"
                      />
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Time (mins)"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <label className={labelStyles}>Hospitals</label>
                {[1, 2].map((index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className={inputStyles}
                      placeholder={`Hospital ${index}`}
                    />
                    <div className="flex gap-4">
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Distance (km)"
                      />
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Time (mins)"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'utility' && (
            <>
              <div className="space-y-4">
                <label className={labelStyles}>Shopping Centers</label>
                {[1, 2].map((index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className={inputStyles}
                      placeholder={`Shopping Center ${index}`}
                    />
                    <div className="flex gap-4">
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Distance (km)"
                      />
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Time (mins)"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <label className={labelStyles}>Banks & ATMs</label>
                {[1, 2].map((index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className={inputStyles}
                      placeholder={`Bank/ATM ${index}`}
                    />
                    <div className="flex gap-4">
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Distance (km)"
                      />
                      <input
                        type="number"
                        className={inputStyles}
                        placeholder="Time (mins)"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Gallery Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <ImageIcon className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Land Images</h2>
        </div>
        <div className="space-y-6">
          <FileUpload
            label="Upload Land Images"
            accept="image/*"
            multiple={true}
            files={files.gallery}
            onChange={(newFiles) => {
              setFiles(prev => ({
                ...prev,
                gallery: newFiles
              }));
            }}
          />
        </div>
      </div>

      {/* Add this new section at the bottom, after the Gallery section */}
      <div className="flex items-center justify-end gap-4 bg-white pt-4">
        <button
          type="button"
          className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 
            hover:bg-gray-200 rounded-lg transition-colors duration-300"
          onClick={() => {
            if (window.confirm('Are you sure you want to cancel? All changes will be lost.')) {
              window.history.back();
            }
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 text-sm font-medium text-white bg-red-500 
            hover:bg-red-600 rounded-lg transition-colors duration-300 
            flex items-center gap-2"
        >
          <CheckSquare className="w-4 h-4" />
          Save Property
        </button>
      </div>
    </form>
  );
};

export default HomeLandForm;