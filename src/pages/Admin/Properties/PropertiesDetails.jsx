import React, { useState } from 'react';
import { MapPin, Edit2, Phone, MessageSquare, Facebook, Instagram, Twitter, Share2, Home, Building, Users, Star, Heart, ChevronLeft, ChevronRight, Share, Bed, Bath, Ruler, Castle, DollarSign, Calendar, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const PropertiesDetails = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [tourData, setTourData] = useState({
    date: '',
    time: '',
    fullName: '',
    email: '',
    number: '',
    message: ''
  });

  // Add multiple images
  const propertyImages = [
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    // Add more images as needed
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === propertyImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? propertyImages.length - 1 : prev - 1
    );
  };

  // Update property data
  const property = {
    id: 1,
    title: "Hayfield Ashton Place Residences at Willow Brook Valley",
    location: "1668 Lincoln Drive Harrisburg, PA 17101 U.S.A",
    price: 80675.00,
    status: "For Sale",
    features: {
      bedrooms: 4,
      bathrooms: 3,
      area: "2,400",
      floor: 2
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    amenities: [
      "Air Conditioning",
      "Swimming Pool",
      "Garden",
      "Gym",
      "Parking",
      "Security"
    ]
  };

  const propertyFeatures = {
    interior: [
      "Hardwood Floors",
      "Central Heating",
      "Central Cooling",
      "Furnished",
      "Alarm System",
      "Window Coverings"
    ],
    exterior: [
      "Backyard",
      "Swimming Pool",
      "Garden",
      "Outdoor Kitchen",
      "Garage",
      "Security Cameras"
    ],
    community: [
      "24/7 Security",
      "Fitness Center",
      "Tennis Court",
      "Community Pool",
      "Playground",
      "BBQ Area"
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      date: "2024-02-15",
      comment: "Beautiful property with amazing amenities. The location is perfect and the staff is very professional.",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb"
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
      date: "2024-02-10",
      comment: "Great property overall. The only minor issue was the parking situation.",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb"
      ]
    }
  ];

  const handleTourSubmit = (e) => {
    e.preventDefault();
    console.log('Tour Data:', tourData);
  };

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Property Title and Actions */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{property.title}</h1>
            <div className="flex items-center text-gray-500 mt-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-full ${isFavorite ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-500'}`}
            >
              <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 rounded-full bg-gray-50 text-gray-500">
              <Share className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Price and Status */}
        <div className="flex items-center gap-4 mt-4">
          <div className="text-2xl font-bold text-red-500">
            <span className="flex items-center">
              <DollarSign className="h-6 w-6" />
              {property.price.toLocaleString()}
            </span>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
            {property.status}
          </span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        <img
          src={propertyImages[currentImageIndex]}
          alt={`Property ${currentImageIndex + 1}`}
          className="w-full h-[600px] object-cover"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {propertyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Property Quick Info */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { icon: <Bed className="h-5 w-5" />, label: 'Bedrooms', value: property.features.bedrooms },
          { icon: <Bath className="h-5 w-5" />, label: 'Bathrooms', value: property.features.bathrooms },
          { icon: <Ruler className="h-5 w-5" />, label: 'Square Ft', value: `${property.features.area}` },
          { icon: <Castle className="h-5 w-5" />, label: 'Floors', value: property.features.floor }
        ].map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg text-red-500">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Property Owner Details & Tour Form */}
        <div className="col-span-12 lg:col-span-4">
          {/* Property Owner Details Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fRI8eX7PMVLH-_LiRO1ZZZDNGJX2PDMgGw&s"
                alt="Gaston Lapierre"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">James Khadka</h3>
              <p className="text-gray-500 text-sm">(Owner)</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-600 hover:text-green-700">
                  <FaWhatsapp className="h-5 w-5" />
                </a>
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  <Phone className="h-4 w-4" />
                  Call Us
                </button>
                <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </button>
              </div>
            </div>
          </div>

          {/* Schedule Tour Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Schedule A Tour</h3>
            <form onSubmit={handleTourSubmit} className="space-y-4">
              <div>
                <input
                  type="date"
                  value={tourData.date}
                  onChange={(e) => setTourData({ ...tourData, date: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <input
                  type="time"
                  value={tourData.time}
                  onChange={(e) => setTourData({ ...tourData, time: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={tourData.fullName}
                  onChange={(e) => setTourData({ ...tourData, fullName: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={tourData.email}
                  onChange={(e) => setTourData({ ...tourData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Number"
                  value={tourData.number}
                  onChange={(e) => setTourData({ ...tourData, number: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  value={tourData.message}
                  onChange={(e) => setTourData({ ...tourData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Send Information
              </button>
            </form>
          </div>
        </div>

        {/* Center Column - Property Details */}
        <div className="col-span-12 lg:col-span-8">
          {/* Tabs */}
          <div className="border-b mb-6">
            <div className="flex space-x-8">
              {['details', 'features', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 text-sm font-medium capitalize transition-colors
                    ${activeTab === tab
                      ? 'text-red-500 border-b-2 border-red-500'
                      : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'details' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Property Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Property Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(property.features).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <span className="text-gray-600 capitalize">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-600">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-8">
                {/* Interior Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-2">
                      <Home className="h-5 w-5 text-red-500" />
                    </span>
                    Interior Features
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {propertyFeatures.interior.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-600">
                        <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exterior Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                      <Building className="h-5 w-5 text-blue-500" />
                    </span>
                    Exterior Features
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {propertyFeatures.exterior.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-600">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2">
                      <Users className="h-5 w-5 text-green-500" />
                    </span>
                    Community Features
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {propertyFeatures.community.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-600">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {/* Reviews Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.5</span>
                    <span className="text-gray-500">({reviews.length} reviews)</span>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{review.name}</h4>
                            <span className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, index) => (
                              <Star
                                key={index}
                                className={`h-4 w-4 ${index < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                                  }`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-gray-600">{review.comment}</p>

                          {/* Review Images */}
                          {review.images.length > 0 && (
                            <div className="flex gap-2 mt-3">
                              {review.images.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`Review ${index + 1}`}
                                  className="w-20 h-20 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Review Button */}
                <div className="text-center mt-8">
                  <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Write a Review
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Width Map Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Location</h3>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <iframe
            title="property-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1647627175573!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetails;
