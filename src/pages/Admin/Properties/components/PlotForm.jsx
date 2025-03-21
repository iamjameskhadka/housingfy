import React, { useState } from 'react';
import {
  Info,
  Layout,
  CheckSquare,
  Settings,
  Map,
  ImageIcon,
  Video,
  Building,
  DollarSign,
  Users,
  Shield,
  Coffee,
  Wifi,
  Wind,
  Droplet,
  Plus,
  X,
  Train,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
  Plane,
  Bus,
  Factory,
  Navigation
} from 'lucide-react';
import FileUpload from './FileUpload';

const inputStyles = "w-full p-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 outline-none border-none";
const cardStyles = "bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300";
const labelStyles = "block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-hover:text-red-500";
const buttonStyles = "flex items-center gap-2 px-4 py-2 text-sm bg-red-50 text-red-500 hover:bg-red-100 rounded-lg transition-all duration-300 hover:shadow-sm";

const PlotForm = ({ files, setFiles }) => {
  const [specifications, setSpecifications] = useState([
    { heading: '', description: '' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* About Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Info className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">About Property</h2>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <label className={labelStyles}>
                Property Title
              </label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter property title"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>
                Property Type
              </label>
              <select className={inputStyles}>
                <option value="">Select type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="agricultural">Agricultural</option>
                <option value="mixed-use">Mixed-Use</option>
                <option value="recreational">Recreational</option>
                <option value="institutional">Institutional</option>
              </select>

            </div>
            <div className="group">
              <label className={labelStyles}>
                Price
              </label>
              <div className="relative">
                <DollarSign className="absolute left-0 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  className={inputStyles}
                  placeholder="Enter price"
                />
              </div>
            </div>
            <div className="group">
              <label className={labelStyles}>
                Built-up Area (sq.ft)
              </label>
              <input
                type="number"
                className={inputStyles}
                placeholder="Enter area"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>
                Total Floors
              </label>
              <input
                type="number"
                className={inputStyles}
                placeholder="Enter floors"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>
                Property Age
              </label>
              <input
                type="text"
                className={inputStyles}
                placeholder="e.g., 2-5 years"
              />
            </div>
          </div>
          <div>
            <label className={labelStyles}>
              Overview
            </label>
            <textarea
              className={inputStyles}
              rows="4"
              placeholder="Enter property overview"
            />
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Layout className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Property Plans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: 'locationMap', label: 'Location Map' },
            { id: 'masterPlan', label: 'Master Plan' },
            { id: '3bhk', label: '3 BHK Plans' },
            { id: 'clusterPlan', label: 'Cluster Plan' },
            { id: '4bhk', label: '4 BHK Plans' }
          ].map((plan) => (
            <FileUpload
              key={plan.id}
              label={plan.label}
              accept="image/*"
              multiple={true}
              files={files.plans[plan.id] || []}
              onChange={(newFiles) => {
                setFiles(prev => ({
                  ...prev,
                  plans: {
                    ...prev.plans,
                    [plan.id]: newFiles
                  }
                }));
              }}
            />
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <CheckSquare className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Amenities</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Admin Office', icon: Building },
            { label: 'Conference Room', icon: Users },
            { label: 'Parking', icon: Building },
            { label: 'Security', icon: Shield },
            { label: 'CCTV', icon: Shield },
            { label: 'Fire Safety', icon: Shield },
            { label: 'Power Backup', icon: Building },
            { label: 'Lift', icon: Building },
            { label: 'Cafeteria', icon: Coffee },
            { label: 'Internet', icon: Wifi },
            { label: 'Air Conditioning', icon: Wind },
            { label: 'Water Supply', icon: Droplet }
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

      {/* Specifications Section */}
      <div className={cardStyles}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-medium">Specifications</h2>
          </div>
          <button
            type="button"
            onClick={() => setSpecifications([...specifications, { heading: '', description: '' }])}
            className={buttonStyles}
          >
            <Plus className="w-4 h-4" />
            Add Specification
          </button>
        </div>
        <div className="space-y-6">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className="relative p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md 
                transition-all duration-300 group"
            >
              {specifications.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const newSpecs = specifications.filter((_, i) => i !== index);
                    setSpecifications(newSpecs);
                  }}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 
                    opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div className="grid grid-cols-1 gap-4">
                <div className="group">
                  <label className={labelStyles}>
                    Heading
                  </label>
                  <input
                    type="text"
                    value={spec.heading}
                    onChange={(e) => {
                      const newSpecs = [...specifications];
                      newSpecs[index].heading = e.target.value;
                      setSpecifications(newSpecs);
                    }}
                    className={inputStyles}
                    placeholder="Enter specification heading"
                  />
                </div>
                <div className="group">
                  <label className={labelStyles}>
                    Description
                  </label>
                  <textarea
                    value={spec.description}
                    onChange={(e) => {
                      const newSpecs = [...specifications];
                      newSpecs[index].description = e.target.value;
                      setSpecifications(newSpecs);
                    }}
                    className={inputStyles}
                    rows="3"
                    placeholder="Enter specification details"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Map className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Location</h2>
        </div>
        <div className="space-y-6">
          {/* Main Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className={labelStyles}>
                Address
              </label>
              <textarea
                className={inputStyles}
                rows="3"
                placeholder="Enter complete address"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>
                Landmarks
              </label>
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
                District
              </label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter District Name"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>
                City
              </label>
              <input
                type="text"
                className={inputStyles}
                placeholder="Enter city Name"
              />
            </div>
            <div className="group">
              <label className={labelStyles}>
                Province No.
              </label>
              <input
                type="number"
                className={inputStyles}
                placeholder="Enter Province number"
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

      {/* Gallery Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <ImageIcon className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Gallery</h2>
        </div>
        <div className="space-y-6">
          <FileUpload
            label="Property Images"
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

      {/* Walkthrough Video Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Video className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Walkthrough Video</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyles}>
              Video URL
            </label>
            <input
              type="url"
              className={inputStyles}
              placeholder="Enter YouTube or video URL"
            />
          </div>
          <FileUpload
            label="Upload Video"
            accept="video/*"
            multiple={false}
            files={files.video ? [files.video] : []}
            onChange={(newFiles) => {
              setFiles(prev => ({
                ...prev,
                video: newFiles[0]
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

export default PlotForm;  