import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Home,
  Edit2,
  Trash2,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Calendar,
  Star,
  Clock,
  DollarSign,
  ChevronRight,
  Building,
  MoreVertical,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const AgentDetails = () => {
  // Mock data - replace with real data
  const agent = {
    id: 1,
    name: 'Michael A. Miner',
    email: 'michaelminer@dayrep.com',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    phone: '+1 234 567 890',
    properties: 243,
    address: 'Lincoln Drive Harrisburg, PA 17101 U.S.A',
    joinDate: 'January 15, 2023',
    rating: 4.8,
    totalSales: '$1.2M',
    activeListings: 15,
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      whatsapp: '#'
    },
    recentProperties: [
      {
        id: 1,
        title: 'Modern Apartment',
        address: '123 Main St, New York',
        price: '$450,000',
        image: 'https://techzaa.in/lahomes/admin/assets/images/properties/p-1.jpg'
      },
      {
        id: 2,
        title: 'Luxury Villa',
        address: '456 Park Ave, Miami',
        price: '$850,000',
        image: 'https://techzaa.in/lahomes/admin/assets/images/properties/p-2.jpg'
      },
      {
        id: 3,
        title: 'Cozy Apartment',
        address: '789 Broadway, Chicago',
        price: '$350,000',
        image: 'https://techzaa.in/lahomes/admin/assets/images/properties/p-3.jpg'
      },
      {
        id: 4,
        title: 'Modern Apartment',
        address: '123 Main St, New York',
        price: '$450,000',
        image: 'https://techzaa.in/lahomes/admin/assets/images/properties/p-1.jpg'
      },
      {
        id: 5,
        title: 'Modern Apartment',
        address: '123 Main St, New York',
        price: '$450,000',
        image: 'https://techzaa.in/lahomes/admin/assets/images/properties/p-1.jpg'
      }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: 'John Smith',
          photo: 'https://randomuser.me/api/portraits/men/32.jpg',
          location: 'New York, USA'
        },
        rating: 5,
        date: '2 days ago',
        comment: "Michael was extremely professional and knowledgeable. He helped us find our dream home within our budget. Highly recommended!",
        helpful: 24,
        replies: 3
      },
      {
        id: 2,
        user: {
          name: 'Sarah Johnson',
          photo: 'https://randomuser.me/api/portraits/women/44.jpg',
          location: 'Miami, FL'
        },
        rating: 4,
        date: '1 week ago',
        comment: "Great experience working with Michael. He was always available to answer our questions and made the whole process smooth.",
        helpful: 18,
        replies: 2
      },
      {
        id: 3,
        user: {
          name: 'David Wilson',
          photo: 'https://randomuser.me/api/portraits/men/67.jpg',
          location: 'Chicago, IL'
        },
        rating: 5,
        date: '2 weeks ago',
        comment: "Exceptional service! Michael's expertise in the local market was invaluable. He helped us get the best deal possible.",
        helpful: 31,
        replies: 5
      }
    ]
  };

  // Add this state for show more/less
  const [showAll, setShowAll] = useState(false);

  // Calculate properties to display
  const displayProperties = showAll
    ? agent.recentProperties
    : agent.recentProperties.slice(0, 4);

  // Add another state for reviews show more/less
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Calculate reviews to display
  const displayReviews = showAllReviews
    ? agent.reviews
    : agent.reviews.slice(0, 2); // Show only 2 reviews initially

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Agent Details</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Link to="/admin/dashboard" className="hover:text-red-500 transition-colors">
              Real Estate
            </Link>
            <span className="mx-2">›</span>
            <Link to="/admin/agents" className="hover:text-red-500 transition-colors">
              Agents
            </Link>
            <span className="mx-2">›</span>
            <span>{agent.name}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300
            rounded-lg hover:bg-gray-50 transition-colors">
            <Edit2 size={18} />
            <span>Edit</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white
            rounded-lg hover:bg-red-600 transition-colors">
            <Trash2 size={18} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Agent Profile Card */}
        <div className="col-span-12 md:col-span-4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Cover Image */}
            <div className="h-32 bg-gradient-to-r from-red-500 to-red-600"></div>

            {/* Profile Info */}
            <div className="p-6 -mt-14">
              <div className="flex justify-between items-start mb-4">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Active
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-1">{agent.name}</h2>
              <p className="text-gray-500 mb-4">{agent.email}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="text-red-500" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-red-500" />
                  <span>{agent.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-red-500" />
                  <span>Joined {agent.joinDate}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Properties</div>
                  <div className="text-xl font-semibold">{agent.properties}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Rating</div>
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-semibold">{agent.rating}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Total Sales</div>
                  <div className="text-xl font-semibold">{agent.totalSales}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Active</div>
                  <div className="text-xl font-semibold">{agent.activeListings}</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                {[
                  { icon: Facebook, url: agent.social.facebook, color: 'text-blue-600' },
                  { icon: Instagram, url: agent.social.instagram, color: 'text-pink-600' },
                  { icon: Twitter, url: agent.social.twitter, color: 'text-blue-400' },
                  { icon: FaWhatsapp, url: agent.social.whatsapp, color: 'text-green-500' }
                ].map(({ icon: Icon, url, color }) => (
                  <a
                    key={url}
                    href={url}
                    className={`w-10 h-10 flex items-center justify-center rounded-full
                      bg-gray-100 hover:bg-gray-200 transition-all ${color}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Properties - Updated with show more/less */}
        <div className="col-span-12 md:col-span-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Recent Properties</h2>
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-red-500 hover:text-red-600 text-sm flex items-center gap-1"
              >
                {showAll ? (
                  <>
                    Show Less
                    <ChevronRight size={16} className="rotate-90" />
                  </>
                ) : (
                  <>
                    View All
                    <ChevronRight size={16} />
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayProperties.map(property => (
                <div
                  key={property.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md
                    transition-all group"
                >
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white
                      rounded-full text-sm">
                      For Sale
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{property.title}</h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <MapPin size={14} />
                      <span>{property.address}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-red-500">
                        {property.price}
                      </span>
                      <button className="text-sm text-red-500 hover:text-red-600">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show total count when collapsed */}
            {!showAll && agent.recentProperties.length > 4 && (
              <div className="mt-4 text-center text-sm text-gray-500">
                Showing 4 of {agent.recentProperties.length} properties
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="col-span-12">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold">Client Reviews</h2>
                <p className="text-sm text-gray-500">Recent feedback from clients</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-medium">{agent.rating}</span>
                </div>
                <span className="text-sm text-gray-500">
                  ({agent.reviews.length} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {displayReviews.map(review => (
                <div key={review.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-start gap-4">
                    <img
                      src={review.user.photo}
                      alt={review.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{review.user.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300 fill-gray-300'
                                    }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{review.user.location}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={20} />
                        </button>
                      </div>

                      <p className="mt-3 text-gray-600">{review.comment}</p>

                      <div className="flex items-center gap-6 mt-4">
                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                          <ThumbsUp size={16} />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
                          <MessageSquare size={16} />
                          <span>Reply ({review.replies})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show total count when collapsed */}
            {!showAllReviews && agent.reviews.length > 2 && (
              <div className="mt-4 text-center text-sm text-gray-500">
                Showing 2 of {agent.reviews.length} reviews
              </div>
            )}

            {/* Updated View All button */}
            {agent.reviews.length > 2 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 
                    text-sm font-medium"
                >
                  {showAllReviews ? (
                    <>
                      Show Less
                      <ChevronRight size={16} className="rotate-90" />
                    </>
                  ) : (
                    <>
                      View All Reviews
                      <ChevronRight size={16} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;