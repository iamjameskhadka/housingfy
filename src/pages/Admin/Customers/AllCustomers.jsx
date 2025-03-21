import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Settings,
  Plus,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Edit2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const AllCustomers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showingCount] = useState(311);

  const customers = [
    {
      id: 1,
      name: 'Daavid Nummi',
      email: 'daavidnumminen@teleworm.us',
      phone: '+231 06-7582071',
      address: 'Schoolstraat 161 5151 HH Drunen',
      status: 'Available',
      stats: {
        viewProperty: 231,
        ownProperty: 27,
        investOnProperty: '$928,128'
      },
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        whatsapp: '#',
        email: 'daavidnumminen@teleworm.us'
      }
    },
    {
      id: 2,
      name: 'Sinikka Penttinen',
      email: 'sinikkapenttinen@dayrep.com',
      phone: '+231 47-23456789',
      address: 'Jean Racinelaan 48 5629 PK Eindhoven',
      status: 'Available',
      stats: {
        viewProperty: 134,
        ownProperty: 13,
        investOnProperty: '$435,892'
      },
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        whatsapp: '#',
        email: 'sinikkapenttinen@dayrep.com'
      }
    },
    {
      id: 3,
      name: 'Jere Palmu',
      email: 'jerepalmu@rhyta.com',
      phone: '+231 73-34567890',
      address: 'Alkmenehof 124 2728 KA Zoetermeer',
      status: 'Available',
      stats: {
        viewProperty: 301,
        ownProperty: 15,
        investOnProperty: '$743,120'
      },
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        whatsapp: '#',
        email: 'jerepalmu@rhyta.com'
      }
    }
  ];

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Customer Grid</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Link to="/admin/dashboard" className="hover:text-red-500">
            Customers
          </Link>
          <span className="mx-2">›</span>
          <span>Customer Grid</span>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            Showing all <span className="font-medium text-gray-900">{showingCount}</span> Customers
          </span>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100
            rounded-lg transition-colors border border-gray-300 flex-1 md:flex-initial justify-center">
            <Settings size={18} />
            <span>More Setting</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white
            rounded-lg hover:bg-red-600 transition-colors flex-1 md:flex-initial justify-center">
            <Plus size={18} />
            <span>Add Customer</span>
          </button>
        </div>
      </div>

      {/* Customer Grid */}
      <Link to="/admin/customers/details">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-white rounded-xl p-6 border border-gray-200
            hover:shadow-md transition-all">
              <div className="flex justify-end mb-4">
                <button className="text-gray-400 hover:text-gray-600">
                  <Edit2 size={18} />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`https://randomuser.me/api/portraits/${customer.id % 2 ? 'men' : 'women'}/${customer.id}.jpg`}
                  alt={customer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium  hover:text-red-500 transition-colors">{customer.name}</h3>
                    <span className="px-2 py-1 text-white bg-green-500 text-xs rounded-full">
                      {customer.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{customer.email}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={16} className="text-gray-400" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="text-gray-400" />
                  <span>{customer.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500">View Property</div>
                  <div className="font-semibold">{customer.stats.viewProperty}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Own Property</div>
                  <div className="font-semibold">{customer.stats.ownProperty}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Invest On Property</div>
                  <div className="font-semibold">{customer.stats.investOnProperty}</div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="text-sm text-gray-500 mb-3">Social Information:</div>
                <div className="flex gap-2">
                  {Object.entries(customer.social).map(([platform, link]) => {
                    const Icon = {
                      facebook: Facebook,
                      instagram: Instagram,
                      twitter: Twitter,
                      whatsapp: FaWhatsapp,
                      email: Mail
                    }[platform];

                    return Icon ? (
                      <a
                        key={platform}
                        href={link}
                        className="w-8 h-8 flex items-center justify-center rounded-full
                        bg-gray-100 hover:bg-gray-200 transition-all"
                      >
                        <Icon size={16} className={
                          platform === 'whatsapp' ? 'text-green-500' :
                            platform === 'facebook' ? 'text-blue-600' :
                              platform === 'instagram' ? 'text-pink-600' :
                                platform === 'twitter' ? 'text-blue-400' :
                                  'text-gray-600'
                        } />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <button className="flex items-center justify-center gap-2 px-4 py-2
                bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  Open Chat
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2
                border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Call To Customer
                </button>
              </div>
            </div>
          ))}

        </div>
      </Link>


      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">
          Showing {customers.length} of {showingCount} customers
        </span>
        <div className="flex items-center gap-2">
          <button
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg
              transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          >
            <div className="flex items-center gap-2">
              <ChevronLeft size={16} />
              Previous
            </div>
          </button>
          <div className="flex gap-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 flex items-center justify-center rounded-lg
                  font-medium transition-colors ${page === currentPage
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg
              transition-colors"
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            <div className="flex items-center gap-2">
              Next
              <ChevronRight size={16} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCustomers;
