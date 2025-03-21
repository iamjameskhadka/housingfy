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
  Home,
  MessageCircle,
  MoreVertical,
  LineChart,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { motion } from 'framer-motion';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const AllAgent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Development Task');
  const [showingCount, setShowingCount] = useState(311);

  // Development Task Stats
  const developmentStats = {
    totalProperties: 250,
    pending: 30,
    daysLeft: 4,
    percentageIncrease: 34.4
  };

  const agents = [
    {
      id: 1,
      number: '#1',
      name: 'Michael A. Miner',
      email: 'michaelminer@dayrep.com',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      properties: 243,
      address: 'Lincoln Drive Harrisburg, PA 17101 U.S.A',
      status: 'Available',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        whatsapp: '#',
        email: 'michaelminer@dayrep.com'
      }
    },
    {
      id: 2,
      name: 'Theresa T. Brose',
      email: 'theresabrose@dayrep.com',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      properties: 451,
      address: 'Boulevard Cockeysville TX 75204',
      status: 'Available',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        whatsapp: '#',
        email: 'theresabrose@dayrep.com'
      }
    },
    {
      id: 3,
      name: 'Walter L. Calab',
      email: 'walterlcalab@jourrapide.com',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      properties: 190,
      address: 'Woodside Circle Panama City, FL 32401',
      status: 'Unavailable',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        whatsapp: '#',
        email: 'walterlcalab@jourrapide.com'
      }
    },
    {
      id: 4,
      name: 'Samantha R. Pierce',
      email: 'samanthapierce@mailinator.com',
      photo: 'https://randomuser.me/api/portraits/women/4.jpg',
      properties: 320,
      address: 'Lakeview Avenue Seattle, WA 98101',
      status: 'Available',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        whatsapp: '#',
        email: 'samanthapierce@mailinator.com'
      }
    },
    {
      id: 5,
      name: 'David M. Schultz',
      email: 'davidschultz@mailinator.com',
      photo: 'https://randomuser.me/api/portraits/men/5.jpg',
      properties: 280,
      address: 'Maple Street Denver, CO 80202',
      status: 'Available',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        whatsapp: '#',
        email: 'davidschultz@mailinator.com'
      }
    },
    {
      id: 6,
      name: 'Emily J. Connors',
      email: 'emilyconnors@mailinator.com',
      photo: 'https://randomuser.me/api/portraits/women/6.jpg',
      properties: 410,
      address: 'Sunset Boulevard Los Angeles, CA 90001',
      status: 'Available',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        whatsapp: '#',
        email: 'emilyconnors@mailinator.com'
      }
    }
  ];


  // Chart data for Total Seal Properties
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        fill: true,
        label: 'Properties Sealed',
        data: [320, 380, 350, 410, 380, 450],
        borderColor: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: 'white',
        pointHoverBorderColor: 'white',
        pointHoverBorderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'white',
        titleColor: '#6B7280',
        bodyColor: '#6B7280',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 8,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.parsed.y} Properties`;
          }
        }
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Agent Grid</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Link to="/admin/dashboard" className="hover:text-red-500">
              Real Estate
            </Link>
            <span className="mx-2">›</span>
            <span>Agent Grid</span>
          </div>
        </div>

        {/* Development Task Dropdown */}
        <div className="relative">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5
              focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500
              cursor-pointer hover:border-gray-400 transition-colors min-w-[200px]"
          >
            <option>Development Task</option>
            <option>Marketing Task</option>
            <option>Design Task</option>
          </select>
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Development Task Stats Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Properties Stats */}
        <div className="bg-white rounded-xl p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium">Welcome Back, Gaston</h2>
            <p className="text-sm text-gray-500">This is your properties portfolio report</p>
          </div>

          <div className="flex gap-8">
            {/* Donut Chart */}
            <div className="relative w-32 h-32">
              <div className="relative w-full h-full">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-semibold">{developmentStats.totalProperties}</span>
                </div>
              </div>
            </div>

            {/* Properties Legend */}
            <div className="flex-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-violet-500"></span>
                  <span className="text-sm">80 Vacant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <span className="text-sm">40 Occupied</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-sm">30 Unlisted</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-4">
            Last Updated: 4 day ago
          </div>
        </div>

        {/* Total Seal Properties with updated graph */}
        <div className="bg-violet-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium">Total Seal Properties</h2>
            <div className="text-sm opacity-80">Last Updated: 12 hour ago</div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <div className="text-4xl font-semibold mb-2">450</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-300">+34.4%</span>
                <span className="opacity-80">vs last month</span>
              </div>
            </div>

            {/* Updated Chart */}
            <div className="h-30 w-60">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Agent List Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64
                focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <span className="text-sm text-gray-500">
            Showing all {showingCount} Agent
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300
            rounded-lg hover:bg-gray-50">
            <Settings size={18} />
            More Setting
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500
            text-white rounded-lg hover:bg-green-600">
            <Plus size={18} />
            New Agent
          </button>
        </div>
      </div>

      {/* Agents Grid - Simplified animations */}
      <Link to="/admin/agents/details">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[600px]">
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 hover:shadow-lg 
              transition-all duration-300 border border-gray-200
              hover:border-red-100"
            >
              <div className="flex flex-col">
                {/* Profile Section */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-20 h-20 rounded-full object-cover ring-2 ring-red-100"
                    />
                    <div>
                      <h3 className="text-lg font-medium hover:text-red-500 transition-colors">
                        {agent.name}
                      </h3>
                      <p className="text-sm text-gray-500">{agent.email}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1  bg-green-500 text-white text-sm rounded-full">
                    {agent.status}
                  </span>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Properties : </span>
                    <div className="flex items-center gap-2">
                      <Home className="text-red-500 w-4 h-4" />
                      <span className="text-sm">{agent.properties} Properties</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Address : </span>
                    <span className="text-sm">{agent.address}</span>
                  </div>
                </div>

                {/* Social Information */}
                <div>
                  <div className="text-gray-500 text-sm mb-3">Social Information :</div>
                  <div className="flex gap-2">
                    {Object.entries(agent.social).map(([platform, link]) => {
                      const Icon = {
                        facebook: Facebook,
                        instagram: Instagram,
                        twitter: Twitter,
                        whatsapp: FaWhatsapp,
                        email: Mail
                      }[platform];

                      const bgColor = {
                        facebook: 'bg-blue-50',
                        instagram: 'bg-pink-50',
                        twitter: 'bg-blue-50',
                        whatsapp: 'bg-green-50',
                        email: 'bg-orange-50'
                      }[platform];

                      const textColor = {
                        facebook: 'text-blue-500',
                        instagram: 'text-pink-500',
                        twitter: 'text-blue-400',
                        whatsapp: 'text-green-500',
                        email: 'text-orange-500'
                      }[platform];

                      return Icon ? (
                        <a
                          key={platform}
                          href={link}
                          className={`w-8 h-8 flex items-center justify-center rounded-full ${bgColor}`}
                        >
                          <Icon size={16} className={textColor} />
                        </a>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5
                    bg-red-500 text-white rounded-lg hover:bg-red-600
                    transition-colors text-sm font-medium"
                  >
                    <Phone size={16} />
                    <span>Call Us</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5
                    border border-gray-300 rounded-lg hover:bg-gray-50
                    transition-all hover:border-red-300 text-sm font-medium"
                  >
                    <MessageCircle size={16} />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Link>

      {/* Pagination - Simple hover effects */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-500">
          Showing {agents.length} of {showingCount} agents
        </span>
        <div className="flex items-center gap-2">
          <button
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg
              transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Previous
          </button>
          <div className="flex gap-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-9 h-9 flex items-center justify-center rounded-lg
                  font-medium transition-colors ${page === 1
                    ? 'bg-violet-500 text-white hover:bg-violet-600'
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
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllAgent;
