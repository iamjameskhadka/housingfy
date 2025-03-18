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
  Plane
} from 'lucide-react';
import FileUpload from './FileUpload';

const inputStyles = "w-full p-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-300 outline-none border-none";
const cardStyles = "bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300";
const labelStyles = "block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-hover:text-red-500";

const FeatureProjectForm = ({ files, setFiles }) => {
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

      {/* Location Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Map className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Location</h2>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className={labelStyles}>Complete Address</label>
              <textarea className={inputStyles} rows="3" placeholder="Enter complete address" />
            </div>
            <div className="group">
              <label className={labelStyles}>Google Maps Link</label>
              <input type="url" className={inputStyles} placeholder="Enter Google Maps URL" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Metro Station', icon: Train },
              { label: 'Railway Station', icon: Train },
              { label: 'Bus Stand', icon: Bus },
              { label: 'Airport', icon: Plane }
            ].map((point) => (
              <div key={point.label} className="group">
                <label className={labelStyles}>
                  <div className="flex items-center gap-2">
                    <point.icon className="w-4 h-4" />
                    {point.label}
                  </div>
                </label>
                <div className="flex gap-2">
                  <input type="text" className={inputStyles} placeholder={`Nearest ${point.label}`} />
                  <input type="number" className={inputStyles} placeholder="Distance (km)" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className={cardStyles}>
        <div className="flex items-center gap-2 mb-6">
          <Layout className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-medium">Plans</h2>
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
          <h2 className="text-lg font-medium">Price</h2>
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
          <h2 className="text-lg font-medium">Amenities</h2>
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
          <div className="group">
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
          </div>
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