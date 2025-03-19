import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Facebook, Twitter, Instagram, Mail, Home, UserPlus, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import FileUpload from '../Properties/components/FileUpload';

const AddAgent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    agentNumber: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    facebookUrl: '',
    instagramUrl: '',
    twitterUrl: '',
    photo: null
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (files) => {
    setFormData(prev => ({
      ...prev,
      photo: files[0]
    }));
  };

  const toggleForm = () => {
    setShowForm(true);
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Add Agent</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Link to="/admin/dashboard" className="hover:text-red-500 transition-colors">
            Real Estate
          </Link>
          <span className="mx-2">›</span>
          <span>Add Agent</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Preview Card */}
        <div className="col-span-12 md:col-span-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={formData.photo ? URL.createObjectURL(formData.photo) : "https://randomuser.me/api/portraits/men/1.jpg"}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-red-100"
              />
              <div>
                <h3 className="font-medium">{formData.fullName || 'Michael A. Miner'}</h3>
                <p className="text-sm text-gray-500">{formData.email || 'michaelminer@dayrep.com'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Home className="text-red-500" />
              <div>
                <div className="font-medium">243 Properties</div>
                <div className="text-sm text-gray-500">
                  {formData.address || 'Lincoln Drive Harrisburg, PA 17101 U.S.A'}
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-500">Social Media:</span>
              <div className="flex gap-2">
                {[
                  { platform: 'facebook', icon: Facebook, url: formData.facebookUrl, color: 'text-blue-600' },
                  { platform: 'instagram', icon: Instagram, url: formData.instagramUrl, color: 'text-pink-600' },
                  { platform: 'twitter', icon: Twitter, url: formData.twitterUrl, color: 'text-blue-400' },
                  { platform: 'whatsapp', icon: FaWhatsapp, url: '#', color: 'text-green-500' },
                  { platform: 'email', icon: Mail, url: formData.email, color: 'text-gray-600' }
                ].map(({ platform, icon: Icon, url, color }) => (
                  <a
                    key={platform}
                    href={url || '#'}
                    className="w-8 h-8 flex items-center justify-center rounded-full
                      bg-gray-100 hover:bg-gray-200 transition-all"
                  >
                    <Icon size={16} className={color} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              {!showForm && (
                <button
                  onClick={toggleForm}
                  className="w-full px-4 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium flex items-center justify-center gap-2 cursor-pointer "
                >
                  <UserPlus size={16} />
                  Add Agent
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="col-span-12 md:col-span-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close form"
              >
                <X size={20} className="text-gray-500 hover:text-red-500" />
              </button>

              {/* Photo Upload */}
              <div className="mb-8">
                <FileUpload
                  label="Add Agent Photo"
                  accept="image/*"
                  multiple={false}
                  files={formData.photo ? [formData.photo] : []}
                  onChange={handlePhotoChange}
                  preview={true}
                />
              </div>

              {/* Agent Information */}
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">Agent Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Agent Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Agent Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Agent Number
                    </label>
                    <input
                      type="text"
                      name="agentNumber"
                      placeholder="Enter Number"
                      value={formData.agentNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Properties Number
                    </label>
                    <input
                      type="text"
                      name="propertiesNumber"
                      placeholder="Enter Properties Number"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agent Address
                </label>
                <textarea
                  name="address"
                  rows="3"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                    focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="zip-code"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <div className="relative">
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                          focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none"
                      >
                        <option value="">Choose a city</option>
                        <option value="new-york">New York</option>
                        <option value="london">London</option>
                        <option value="paris">Paris</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                          focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none"
                      >
                        <option value="">Choose a country</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="france">France</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-lg font-medium mb-4">Social Links</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <input
                      type="url"
                      name="facebookUrl"
                      placeholder="Enter URL"
                      value={formData.facebookUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      name="instagramUrl"
                      placeholder="Enter URL"
                      value={formData.instagramUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      name="twitterUrl"
                      placeholder="Enter URL"
                      value={formData.twitterUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-4 mt-8 pt-6 border-t">
                <button
                  type="button"
                  className="px-6 py-2.5 border border-gray-300 rounded-lg
                  hover:bg-gray-50 transition-colors text-sm font-medium"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button className="px-6 py-2.5 bg-red-500 text-white rounded-lg
                  hover:bg-red-600 transition-colors text-sm font-medium">
                  Create Agent
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddAgent;
