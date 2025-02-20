import React, { useState } from 'react';
import { X } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope, FaLink } from 'react-icons/fa';

const SharePopup = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-[95%] max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-2xl font-semibold text-gray-800">SHARE WEBSITE</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-7 h-7 text-gray-500" />
          </button>
        </div>

        {/* Property Preview */}
        <div className="p-6 flex gap-6">
          <img
            src="https://photos.zillowstatic.com/fp/cf62acca8ba8570d1a93f5a130b84c6a-cc_ft_960.jpg"
            alt="Property"
            className="w-40 h-40 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h4 className="text-gray-500 font-medium text-lg">Housingfy Real Estate  </h4>
            <h3 className="text-2xl font-semibold mb-2">Find Your Perfect Home</h3>
            <p className="text-base text-gray-600">
              Search from millions of properties across top cities
            </p>
          </div>
        </div>

        {/* Link Section */}
        <div className="px-6 py-4 bg-gray-50 flex items-center gap-4">
          <div className="flex-1 bg-white border rounded-lg p-3 text-base text-gray-600 truncate">
            https://housingfy.vercel.app/about-us
          </div>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 p-2"
          >
            <FaLink size={24} />
          </button>
        </div>

        {/* Share Options */}
        <div className="p-6 text-center">
          <p className="text-base text-gray-600 mb-6">Share via:</p>
          <div className="flex justify-center gap-8">
            <button
              className="p-3 rounded-full text-white bg-gradient-to-r from-[#FEDA75] via-[#D62976] to-[#4F5BD5] hover:opacity-90"
            >
              <FaInstagram size={28} />
            </button>

            <button className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-90">
              <FaFacebookF size={28} />
            </button>
            <button className="p-3 rounded-full bg-[#1DA1F2] text-white hover:opacity-90">
              <FaTwitter size={28} />
            </button>
            <button className="p-3 rounded-full bg-gray-600 text-white hover:opacity-90">
              <FaEnvelope size={28} />
            </button>
          </div>
        </div>

        {/* Copy Success Message */}
        {copied && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg text-base">
            Link copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};

export default SharePopup; 