import React, { useState } from 'react';
import { X } from 'lucide-react';
import { MdLocationOn, MdCloudUpload } from 'react-icons/md';

const PropertyPostForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    pricePerSqft: '',
    emi: '',
    size: '',
    details: {
      facing: '',
      type: '',
      bathrooms: '',
      parking: ''
    },
    images: []
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [errors, setErrors] = useState({});

  const inputClasses = "w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500 hover:border-red-300 transition-colors";

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('details.')) {
      const detailName = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        details: {
          ...prev.details,
          [detailName]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setImageFiles(prev => [...prev, ...files]);
      // Create preview URLs for the images
      const imageUrls = files.map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...imageUrls]
      }));
    }
  };

  const removeImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/50 overflow-y-auto">
      <div className="bg-white w-full sm:w-[95%] min-h-screen sm:min-h-fit sm:max-w-3xl sm:rounded-lg p-4 sm:p-6 sm:my-8">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white flex justify-between items-center mb-4 sm:mb-6 pb-2 border-b">
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500">Post Your Property</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 hover:bg-red-50 p-1.5 sm:p-2 rounded-full transition-all"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Basic Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-red-500 transition-colors">
                Property Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g., 2 BHK Apartment for Sale"
                required
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-red-500 transition-colors">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g., Andheri West, Mumbai"
                required
              />
            </div>
          </div>

          {/* Price Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-red-500 transition-colors">
                Price
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g., ₹50 Lacs"
                required
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-red-500 transition-colors">
                Price per sq.ft.
              </label>
              <input
                type="text"
                name="pricePerSqft"
                value={formData.pricePerSqft}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g., ₹5,000"
                required
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-red-500 transition-colors">
                EMI
              </label>
              <input
                type="text"
                name="emi"
                value={formData.emi}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g., ₹25,000/Month"
                required
              />
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-red-500 transition-colors">
                Size (sqft)
              </label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g., 1000"
                required
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-red-500 transition-colors">
                Facing
              </label>
              <select
                name="details.facing"
                value={formData.details.facing}
                onChange={handleChange}
                className={inputClasses}
                required
              >
                <option value="">Select Facing</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North-East">North-East</option>
                <option value="North-West">North-West</option>
                <option value="South-East">South-East</option>
                <option value="South-West">South-West</option>
              </select>
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-red-500 transition-colors">
                Type
              </label>
              <select
                name="details.type"
                value={formData.details.type}
                onChange={handleChange}
                className={inputClasses}
                required
              >
                <option value="">Select Type</option>
                <option value="Studio">Studio</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK</option>
                <option value="5 BHK">5 BHK</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-red-500 transition-colors">
                Bathrooms
              </label>
              <select
                name="details.bathrooms"
                value={formData.details.bathrooms}
                onChange={handleChange}
                className={inputClasses}
                required
              >
                <option value="">Select Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Images</label>
            <div className="border-2 border-dashed rounded-lg p-3 sm:p-4 hover:border-red-300 transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="images"
              />
              <label
                htmlFor="images"
                className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform py-4"
              >
                <MdCloudUpload className="text-3xl sm:text-4xl text-gray-400 group-hover:text-red-500" />
                <span className="mt-2 text-xs sm:text-sm text-gray-500 group-hover:text-red-500">
                  Click to upload images
                </span>
              </label>
            </div>
            {formData.images.length > 0 && (
              <div className="mt-3 sm:mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-20 sm:h-24 object-cover rounded-lg transition-transform group-hover:scale-105"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <X size={14} className="sm:w-4 sm:h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3 sm:gap-4 sticky bottom-0 bg-white pt-2 border-t mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 sm:px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-red-300 transition-all text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm"
            >
              Post Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyPostForm; 