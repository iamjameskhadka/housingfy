import React, { useState } from 'react';
import {
  Info,
  Building,
  DollarSign,
  Calendar,
  Users,
  Home,
  Bed,
  Sofa,
  Compass,
  ParkingCircle,
  Key,
  Clock,
  DoorOpen,
  ImageIcon,
  Video,
  Map,
  CheckSquare,
  Shield,
  Wifi,
  Wind,
  Coffee,
  Zap,
  Droplet,
  Train,
  Bus,
  GraduationCap,
  ShoppingBag,
  Stethoscope,
  Building2,
  FileText,
  Plane,
  Factory,
  Navigation
} from 'lucide-react';
import FileUpload from './FileUpload';

const inputStyles = "w-full p-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 outline-none border-none";
const cardStyles = "bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300";
const labelStyles = "block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-hover:text-red-500";

const RentForm = ({ files, setFiles }) => {
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
              <label className={labelStyles}>Property Title</label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter property title"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>Property Type</label>
              <select className={inputStyles}>
                <option value="">Select type</option>
                <option value="apartment">Apartment</option>
                <option value="house">Independent House</option>
                <option value="villa">Villa</option>
                <option value="pg">PG/Co-living</option>
              </select>
            </div>
            <div className="group">
              <label className={labelStyles}>Built-up Area</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className={inputStyles}
                  placeholder="Enter area"
                />
                <select className={`${inputStyles} w-32`}>
                  <option value="sqft">Sq.Ft</option>
                  <option value="sqm">Sq.M</option>
                  <option value="sqyd">Sq.Yd</option>
                </select>
              </div>
            </div>
            <div className="group">
              <label className={labelStyles}>BHK Type</label>
              <select className={inputStyles}>
                <option value="">Select BHK</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
                <option value="4+">4+ BHK</option>
              </select>
            </div>
            <div className="group">
              <label className={labelStyles}>Floor Number</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  className={inputStyles}
                  placeholder="Floor no."
                />
                <input
                  type="number"
                  className={inputStyles}
                  placeholder="Total floors"
                />
              </div>
            </div>
            <div className="group">
              <label className={labelStyles}>Property Age</label>
              <input
                type="text"
                className={inputStyles}
                placeholder="e.g., 2-5 years"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">About Property</h2>
        </div>
        <div className="space-y-6">
          <div className="group">
            <label className={labelStyles}>Property Description</label>
            <textarea
              className={inputStyles}
              rows="4"
              placeholder="Enter detailed description of the property..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <label className={labelStyles}>Total Bathrooms</label>
              <input
                type="number"
                className={inputStyles}
                placeholder="Number of bathrooms"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>Balconies</label>
              <input
                type="number"
                className={inputStyles}
                placeholder="Number of balconies"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>Parking Slots</label>
              <input
                type="number"
                className={inputStyles}
                placeholder="Available parking slots"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>Water Supply</label>
              <select className={inputStyles}>
                <option value="">Select type</option>
                <option value="24x7">24x7 Supply</option>
                <option value="municipal">Municipal</option>
                <option value="borewell">Borewell</option>
                <option value="tanker">Water Tanker</option>
              </select>
            </div>
            <div className="group">
              <label className={labelStyles}>Power Backup</label>
              <select className={inputStyles}>
                <option value="">Select type</option>
                <option value="full">Full Backup</option>
                <option value="partial">Partial Backup</option>
                <option value="none">No Backup</option>
              </select>
            </div>
            <div className="group">
              <label className={labelStyles}>Property View</label>
              <select className={inputStyles}>
                <option value="">Select view</option>
                <option value="garden">Garden View</option>
                <option value="pool">Pool View</option>
                <option value="city">City View</option>
                <option value="street">Street View</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className={labelStyles}>Additional Features</label>
              <textarea
                className={inputStyles}
                rows="3"
                placeholder="Enter any additional features or highlights..."
              />
            </div>
            <div className="group">
              <label className={labelStyles}>Restrictions (if any)</label>
              <textarea
                className={inputStyles}
                rows="3"
                placeholder="Enter any restrictions or conditions..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rental Details Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Rental Details</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group">
            <label className={labelStyles}>Monthly Rent</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                className={`${inputStyles} pl-10`}
                placeholder="Enter monthly rent"
              />
            </div>
          </div>
          <div className="group">
            <label className={labelStyles}>Security Deposit</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                className={`${inputStyles} pl-10`}
                placeholder="Enter security deposit"
              />
            </div>
          </div>
          <div className="group">
            <label className={labelStyles}>Maintenance Charges</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                className={`${inputStyles} pl-10`}
                placeholder="Enter maintenance charges"
              />
            </div>
          </div>
          <div className="group">
            <label className={labelStyles}>Preferred Tenant</label>
            <select className={inputStyles}>
              <option value="">Select tenant type</option>
              <option value="family">Family</option>
              <option value="bachelors">Bachelors</option>
              <option value="company">Company</option>
              <option value="any">Any</option>
            </select>
          </div>
          <div className="group">
            <label className={labelStyles}>Available From</label>
            <input
              type="date"
              className={inputStyles}
            />
          </div>
          <div className="group">
            <label className={labelStyles}>Minimum Lease Period</label>
            <select className={inputStyles}>
              <option value="">Select period</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
              <option value="24">24 Months</option>
            </select>
          </div>
        </div>
      </div>

      {/* Amenities & Features */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Sofa className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Amenities & Features</h2>
        </div>
        <div className="space-y-6">
          <div className="group">
            <label className={labelStyles}>Furnishing Status</label>
            <select className={inputStyles}>
              <option value="">Select status</option>
              <option value="furnished">Fully Furnished</option>
              <option value="semi-furnished">Semi Furnished</option>
              <option value="unfurnished">Unfurnished</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Air Conditioning', icon: Wind },
              { label: 'Wifi', icon: Wifi },
              { label: 'Power Backup', icon: Zap },
              { label: 'Water Supply', icon: Droplet },
              { label: 'Security', icon: Shield },
              { label: 'Parking', icon: ParkingCircle },
              { label: 'Lift', icon: DoorOpen },
              { label: 'Gym', icon: Users },
              { label: 'Swimming Pool', icon: Droplet },
              { label: 'Club House', icon: Building },
              { label: 'Garden', icon: Coffee },
              { label: 'Children Play Area', icon: Users }
            ].map((amenity) => (
              <label
                key={amenity.label}
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-red-50 
                  cursor-pointer transition-all duration-300 group"
              >
                <input
                  type="checkbox"
                  className="rounded text-red-500 focus:ring-red-500 transition-colors duration-300"
                />
                <div className="flex items-center gap-2">
                  <amenity.icon className="w-4 h-4 text-gray-400 group-hover:text-red-500 
                    transition-colors duration-300" />
                  <span className="group-hover:text-red-500 transition-colors duration-300">
                    {amenity.label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Location & Connectivity */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Map className="w-5 h-5 text-red-500" />
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
          <h2 className="text-lg font-medium">Property Images</h2>
        </div>
        <div className="space-y-6">
          <FileUpload
            label="Upload Property Images"
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

      {/* Submit and Cancel Buttons */}
      <div className="flex items-center justify-end gap-4 bg-white pt-4 rounded-lg">
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

export default RentForm; 