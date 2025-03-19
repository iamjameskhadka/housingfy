import React, { useState } from 'react';
import {
  Info,
  FileText,
  Map,
  ImageIcon,
  Video,
  DollarSign,
  Building,
  Home,
  Calendar,
  Ruler,
  Compass,
  Landmark,
  ParkingCircle,
  Users,
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
  Percent,
  CreditCard,
  CheckSquare,
  Layout,
  Plane,
  Factory,
  Navigation,
  MapPin
} from 'lucide-react';
import FileUpload from './FileUpload';

const inputStyles = "w-full p-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 outline-none border-none";
const cardStyles = "bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300";
const labelStyles = "block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-hover:text-red-500";

const FeatureProjectForm = ({ files, setFiles }) => {
  const [activeTab, setActiveTab] = useState('transit');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Overview Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Info className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Overview</h2>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <label className={labelStyles}>Project Title</label>
              <input type="text" className={inputStyles} placeholder="Enter project title" />
            </div>
            <div className="group">
              <label className={labelStyles}>Developer Name</label>
              <input type="text" className={inputStyles} placeholder="Enter developer name" />
            </div>
            <div className="group">
              <label className={labelStyles}>Project Type</label>
              <select className={inputStyles}>
                <option value="">Select type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="mixed">Mixed Use</option>
              </select>
            </div>
            <div className="group">
              <label className={labelStyles}>Project Status</label>
              <select className={inputStyles}>
                <option value="">Select status</option>
                <option value="upcoming">Upcoming</option>
                <option value="under-construction">Under Construction</option>
                <option value="ready-to-move">Ready to Move</option>
              </select>
            </div>
            <div className="group">
              <label className={labelStyles}>Possession Date</label>
              <input type="date" className={inputStyles} />
            </div>
            <div className="group">
              <label className={labelStyles}>Total Area</label>
              <div className="flex gap-2">
                <input type="number" className={inputStyles} placeholder="Enter area" />
                <select className={`${inputStyles} w-32`}>
                  <option value="acres">Acres</option>
                  <option value="sqft">Sq.Ft</option>
                  <option value="hectares">Hectares</option>
                </select>
              </div>
            </div>
          </div>
          <div className="group">
            <label className={labelStyles}>Project Description</label>
            <textarea className={inputStyles} rows="4" placeholder="Enter detailed project description..." />
          </div>
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

      {/* Plans Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Layout className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Plans Details</h2>
        </div>
        <div className="space-y-6">
          <div className="group">
            <label className={labelStyles}>Master Plan</label>
            <FileUpload
              label="Upload Master Plan"
              accept="image/*"
              multiple={false}
              files={files.plans?.masterPlan || []}
              onChange={(newFiles) => {
                setFiles(prev => ({
                  ...prev,
                  plans: { ...prev.plans, masterPlan: newFiles }
                }));
              }}
            />
          </div>
          <div className="group">
            <label className={labelStyles}>Unit Plans</label>
            <FileUpload
              label="Upload Unit Plans"
              accept="image/*"
              multiple={true}
              files={files.floorPlans || []}
              onChange={(newFiles) => {
                setFiles(prev => ({
                  ...prev,
                  floorPlans: newFiles
                }));
              }}
            />
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Price Details</h2>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group">
              <label className={labelStyles}>Starting Price</label>
              <div className="flex gap-2">
                <span className="flex items-center px-3 bg-gray-100 rounded-lg">₹</span>
                <input type="number" className={inputStyles} placeholder="Enter starting price" />
              </div>
            </div>
            <div className="group">
              <label className={labelStyles}>Price Per Sq.Ft</label>
              <div className="flex gap-2">
                <span className="flex items-center px-3 bg-gray-100 rounded-lg">₹</span>
                <input type="number" className={inputStyles} placeholder="Enter price per sq.ft" />
              </div>
            </div>
            <div className="group">
              <label className={labelStyles}>Booking Amount</label>
              <div className="flex gap-2">
                <span className="flex items-center px-3 bg-gray-100 rounded-lg">₹</span>
                <input type="number" className={inputStyles} placeholder="Enter booking amount" />
              </div>
            </div>
          </div>

          {/* EMI Section */}
          <div className="mt-4">
            <h3 className="text-md font-medium mb-4">EMI Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group">
                <label className={labelStyles}>Loan Amount Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex gap-2">
                    <span className="flex items-center px-3 bg-gray-100 rounded-lg">₹</span>
                    <input type="number" className={inputStyles} placeholder="Min" />
                  </div>
                  <div className="flex gap-2">
                    <span className="flex items-center px-3 bg-gray-100 rounded-lg">₹</span>
                    <input type="number" className={inputStyles} placeholder="Max" />
                  </div>
                </div>
              </div>
              <div className="group">
                <label className={labelStyles}>Interest Rate Range (%)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" step="0.01" className={inputStyles} placeholder="Min %" />
                  <input type="number" step="0.01" className={inputStyles} placeholder="Max %" />
                </div>
              </div>
              <div className="group">
                <label className={labelStyles}>Loan Term (Years)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" className={inputStyles} placeholder="Min years" />
                  <input type="number" className={inputStyles} placeholder="Max years" />
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className={labelStyles}>Processing Fee</label>
                <div className="flex gap-2">
                  <input type="number" step="0.01" className={inputStyles} placeholder="Enter fee percentage" />
                  <span className="flex items-center px-3 bg-gray-100 rounded-lg">%</span>
                </div>
              </div>
              <div className="group">
                <label className={labelStyles}>Recommended Banks</label>
                <input type="text" className={inputStyles} placeholder="Enter banks (comma separated)" />
              </div>
            </div>
            <div className="mt-4">
              <div className="group">
                <label className={labelStyles}>EMI Notes</label>
                <textarea className={inputStyles} rows="2" placeholder="Enter additional EMI information, special offers, etc." />
              </div>
            </div>
          </div>

          <div className="group">
            <label className={labelStyles}>Payment Plan</label>
            <textarea className={inputStyles} rows="3" placeholder="Enter payment plan details..." />
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Coffee className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Amenities & Features</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Swimming Pool', icon: Droplet },
            { label: 'Gym', icon: Users },
            { label: 'Club House', icon: Building },
            { label: 'Garden', icon: Coffee },
            { label: 'Kids Play Area', icon: Users },
            { label: 'Security', icon: Shield },
            { label: 'Power Backup', icon: Zap },
            { label: 'Parking', icon: ParkingCircle },
            { label: 'Sports Facility', icon: Users },
            { label: 'Community Hall', icon: Users },
            { label: 'Temple', icon: Landmark },
            { label: 'Shopping Complex', icon: ShoppingBag }
          ].map((amenity) => (
            <label key={amenity.label} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-red-50 cursor-pointer transition-all duration-300 group">
              <input type="checkbox" className="rounded text-red-500 focus:ring-red-500 transition-colors duration-300" />
              <div className="flex items-center gap-2">
                <amenity.icon className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
                <span className="group-hover:text-red-500 transition-colors duration-300">{amenity.label}</span>
              </div>
            </label>
          ))}
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
            label="Upload Project Images"
            accept="image/*"
            multiple={true}
            files={files.gallery || []}
            onChange={(newFiles) => {
              setFiles(prev => ({
                ...prev,
                gallery: newFiles
              }));
            }}
          />
        </div>
      </div>

      {/* Downloads Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Downloads</h2>
        </div>
        <div className="space-y-6">
          <div className="group">
            <label className={labelStyles}>Brochure</label>
            <FileUpload
              label="Upload Project Brochure"
              accept=".pdf"
              multiple={false}
              files={files.brochure ? [files.brochure] : []}
              onChange={(newFiles) => {
                setFiles(prev => ({
                  ...prev,
                  brochure: newFiles[0]
                }));
              }}
            />
          </div>
          {/* <div className="group">
            <label className={labelStyles}>Price List</label>
            <FileUpload
              label="Upload Price List"
              accept=".pdf,.xlsx,.xls"
              multiple={false}
              files={files.priceList ? [files.priceList] : []}
              onChange={(newFiles) => {
                setFiles(prev => ({
                  ...prev,
                  priceList: newFiles[0]
                }));
              }}
            />
          </div> */}
        </div>
      </div>

      {/* Compliances Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Shield className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Legal Compliances</h2>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className={labelStyles}>RERA Number</label>
              <input type="text" className={inputStyles} placeholder="Enter RERA number" />
            </div>
            <div className="group">
              <label className={labelStyles}>RERA Website</label>
              <input type="url" className={inputStyles} placeholder="Enter RERA website URL" />
            </div>
          </div>
          <div className="group">
            <label className={labelStyles}>Legal Clearances</label>
            <FileUpload
              label="Upload Legal Documents"
              accept=".pdf"
              multiple={true}
              files={files.legalDocs || []}
              onChange={(newFiles) => {
                setFiles(prev => ({
                  ...prev,
                  legalDocs: newFiles
                }));
              }}
            />
          </div>
        </div>
      </div>

      {/* Submit and Cancel Buttons */}
      <div className="flex items-center justify-end gap-4 bg-white pt-4 rounded-lg">
        <button
          type="button"
          className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
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
          className="px-6 py-2.5 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300 flex items-center gap-2"
        >
          <CheckSquare className="w-4 h-4" />
          Save Project
        </button>
      </div>
    </form>
  );
};

export default FeatureProjectForm; 