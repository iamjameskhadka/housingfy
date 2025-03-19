import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Upload,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Home,
  Phone,
  MapPin,
  X,
  ChevronDown,
  UserPlus
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import FileUpload from '../Properties/components/FileUpload';

const AddCustomers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    viewProperty: '',
    ownProperty: '',
    investProperty: '',
    facebookUrl: '',
    instagramUrl: '',
    twitterUrl: '',
    whatsappUrl: '',
    emailUrl: ''
  });

  const [showForm, setShowForm] = useState(false);
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
      handlePhotoChange(e.dataTransfer.files);
    }
  };

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
        <h1 className="text-2xl font-semibold text-gray-800">Add Customer</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Link to="/admin/customers" className="hover:text-red-500 transition-colors">
            Customers
          </Link>
          <span className="mx-2">›</span>
          <span>Add Customer</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Preview Card */}
        <div className="col-span-12 md:col-span-4">
          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
            <div className="flex flex-col">
              {/* Profile Image */}
              <img
                src={formData.photo ? URL.createObjectURL(formData.photo) : "https://randomuser.me/api/portraits/men/1.jpg"}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover mb-4"
              />

              {/* Name and Status */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">
                  {formData.fullName || 'Daavid Nummi'}
                </h3>
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                  Available
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Email Address : </span>
                  <span className="text-sm">{formData.email || 'daavidnumminen@teleworm.us'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Contact Number : </span>
                  <span className="text-sm">{formData.phone || '+231 06-7582071'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">Address : </span>
                  <span className="text-sm">{formData.address || 'Schoolstraat 161 5151 HH Drunen'}</span>
                </div>
              </div>

              {/* Property Stats */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-gray-500 text-sm">View Property</div>
                  <div className="font-medium">{formData.viewProperty || '231'}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Own Property</div>
                  <div className="font-medium">{formData.ownProperty || '27'}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Invest Property</div>
                  <div className="font-medium">${formData.investProperty || '142,465'}</div>
                </div>
              </div>

              {/* Social Information */}
              <div>
                <div className="text-gray-500 text-sm mb-3">Social Information :</div>
                <div className="flex gap-2">
                  {[
                    { platform: 'facebook', icon: Facebook, color: 'bg-blue-50' },
                    { platform: 'instagram', icon: Instagram, color: 'bg-pink-50' },
                    { platform: 'twitter', icon: Twitter, color: 'bg-blue-50' },
                    { platform: 'whatsapp', icon: FaWhatsapp, color: 'bg-green-50' },
                    { platform: 'email', icon: Mail, color: 'bg-orange-50' }
                  ].map(({ platform, icon: Icon, color }) => (
                    <a
                      key={platform}
                      href={formData[`${platform}Url`] || '#'}
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${color}`}
                    >
                      <Icon size={16} className={
                        platform === 'facebook' ? 'text-blue-500' :
                          platform === 'instagram' ? 'text-pink-500' :
                            platform === 'twitter' ? 'text-blue-400' :
                              platform === 'whatsapp' ? 'text-green-500' :
                                'text-orange-500'
                      } />
                    </a>
                  ))}
                </div>
              </div>

              {/* Add Customer Button */}
              <div className="mt-6">
                {!showForm && (
                  <button
                    onClick={toggleForm}
                    className="w-full px-4 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <UserPlus size={16} />
                    Add Customer
                  </button>
                )}
              </div>
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
                  label="Add Customer Photo"
                  accept="image/*"
                  multiple={false}
                  files={formData.photo ? [formData.photo] : []}
                  onChange={handlePhotoChange}
                  preview={true}
                />
              </div>

              {/* Basic Information */}
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter contact number"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter address"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">Property Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      View Property
                    </label>
                    <input
                      type="number"
                      name="viewProperty"
                      value={formData.viewProperty}
                      onChange={handleChange}
                      placeholder="Enter number"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Own Property
                    </label>
                    <input
                      type="number"
                      name="ownProperty"
                      value={formData.ownProperty}
                      onChange={handleChange}
                      placeholder="Enter number"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Invest Property
                    </label>
                    <input
                      type="number"
                      name="investProperty"
                      value={formData.investProperty}
                      onChange={handleChange}
                      placeholder="Enter amount"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-lg font-medium mb-4">Social Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <input
                      type="url"
                      name="facebookUrl"
                      value={formData.facebookUrl}
                      onChange={handleChange}
                      placeholder="Facebook URL"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      name="instagramUrl"
                      value={formData.instagramUrl}
                      onChange={handleChange}
                      placeholder="Instagram URL"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      name="twitterUrl"
                      value={formData.twitterUrl}
                      onChange={handleChange}
                      placeholder="Twitter URL"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      name="whatsappUrl"
                      value={formData.whatsappUrl}
                      onChange={handleChange}
                      placeholder="WhatsApp URL"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      name="emailUrl"
                      value={formData.emailUrl}
                      onChange={handleChange}
                      placeholder="Email URL"
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
                  Add Agent
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCustomers;
