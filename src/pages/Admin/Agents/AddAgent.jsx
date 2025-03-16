import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Facebook, Twitter, Instagram, Mail, Home } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

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

  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFiles = (files) => {
    setFormData(prev => ({
      ...prev,
      photo: files[0]
    }));
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
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all">
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
              <button className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-lg
                hover:bg-red-600 transition-colors text-sm font-medium">
                Add Agent
              </button>
              <button className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg
                hover:bg-gray-50 transition-colors text-sm font-medium">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-span-12 md:col-span-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            {/* Photo Upload */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Add Agent Photo</h2>
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center
                  ${dragActive ? 'border-red-500 bg-red-50' : 'border-gray-300'}
                  ${formData.photo ? 'bg-gray-50' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                  accept="image/*"
                />
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  Drop your images here, or{' '}
                  <label
                    htmlFor="fileInput"
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    click to browse
                  </label>
                </p>
                <p className="text-sm text-gray-500">
                  1600 x 1200 (4:3 recommended). PNG, JPG & GIF files are allowed
                </p>
              </div>
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
                </div>
                <div>
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
              <button className="px-6 py-2.5 border border-gray-300 rounded-lg
                hover:bg-gray-50 transition-colors text-sm font-medium">
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-red-500 text-white rounded-lg
                hover:bg-red-600 transition-colors text-sm font-medium">
                Create Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAgent;
