import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Home,
  Bed,
  Bath,
  Maximize,
  Building,
  ChevronRight,
  ChevronLeft,
  CreditCard,
  Calendar,
  Download,
  MoreVertical,
  Facebook,
  Twitter,
  Instagram,
  Lock,
  DollarSign,
  Eye,
  Pencil,
  Trash2,
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProgressCircle = ({ percentage, size = 80 }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          className="text-gray-100"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          className="text-red-500 transition-all duration-500"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-red-500 font-semibold">
        {percentage}%
      </div>
    </div>
  );
};

const CustomerDetails = () => {
  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        type: 'bar',
        label: 'Inquiries',
        data: [85, 95, 65, 105, 75, 80, 45, 25, 85, 40, 85, 35],
        backgroundColor: '#6366f1',
        borderRadius: 4,
        barThickness: 20
      },
      {
        type: 'line',
        label: 'Trend',
        data: [35, 38, 25, 25, 45, 45, 75, 75, 45, 45, 50, 50],
        borderColor: '#f97316',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0
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
        backgroundColor: '#fff',
        titleColor: '#1f2937',
        bodyColor: '#1f2937',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#9ca3af'
        }
      },
      y: {
        grid: {
          color: '#f3f4f6',
          drawBorder: false
        },
        ticks: {
          color: '#9ca3af',
          padding: 10,
          stepSize: 20
        }
      }
    }
  };

  const propertyStats = [
    {
      title: 'Active Property',
      count: 350,
      subtext: 'Property Active',
      icon: Home,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      progress: 80
    },
    {
      title: 'View Property',
      count: 231,
      subtext: 'Property View',
      icon: Building,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      progress: 60
    },
    {
      title: 'Own Property',
      count: 27,
      subtext: 'Property Own',
      icon: Lock,
      color: 'text-violet-500',
      bgColor: 'bg-violet-50',
      progress: 40
    },
    {
      title: 'Invest On Property',
      count: '$928,128',
      subtext: 'Total Investment',
      icon: DollarSign,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      progress: 75
    }
  ];

  const interestedProperties = [
    {
      id: 1,
      title: 'Dvilla Residences Batu',
      address: '4604, Philli Lane Kiowa',
      image: 'https://techzaa.in/lahomes/admin/assets/images/properties/p-1.jpg',
      specs: {
        beds: 5,
        baths: 4,
        area: '1400ft',
        floors: 3
      }
    },
    {
      id: 2,
      title: 'Tungis Luxury',
      address: '900, Creside WI 54913',
      image: 'https://techzaa.in/lahomes/admin/assets/images/properties/p-2.jpg',
      specs: {
        beds: 4,
        baths: 3,
        area: '1200ft',
        floors: 2
      }
    },
    {
      id: 3,
      title: 'Luxury Penthouse',
      address: 'Sumner Street Los Angeles',
      image: 'https://techzaa.in/lahomes/admin/assets/images/properties/p-3.jpg',
      specs: {
        beds: 7,
        baths: 6,
        area: '2000ft',
        floors: 1
      }
    }
  ];

  const transactions = [
    {
      id: 'ORD-75234',
      date: '15/03/2023',
      customer: {
        name: 'Daavid Nummi',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      amount: '$928,128',
      paymentMethod: {
        type: 'Credit Card',
        category: 'VISA',
        icon: '/src/assets/cards/visa.svg'
      },
      agentName: 'Michael A. Miner',
      investedProperty: '123 Maple St, 456 Oak Ave',
      status: 'Completed'
    },
    {
      id: 'ORD-54222',
      date: '20/03/2023',
      customer: {
        name: 'Daavid Nummi',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      amount: '$84,091',
      paymentMethod: {
        type: 'PayPal',
        category: 'Digital Payment',
        icon: '/src/assets/cards/paypal.svg'
      },
      agentName: 'Michael A. Miner',
      investedProperty: '789 Pine Blvd',
      status: 'Pending'
    },
    {
      id: 'ORD-63111',
      date: '25/03/2023',
      customer: {
        name: 'Daavid Nummi',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      amount: '$83,120',
      paymentMethod: {
        type: 'Credit Card',
        category: 'Mastercard',
        icon: '/src/assets/cards/mastercard.svg'
      },
      agentName: 'Michael A. Miner',
      investedProperty: '101 Birch Ct, 202 Cedar Ln',
      status: 'Completed'
    }
  ];

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Customer Overview</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Link to="/admin/customers" className="hover:text-red-500">
              Customers
            </Link>
            <span className="mx-2">›</span>
            <span>Customer Overview</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {propertyStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-gray-500 text-sm">{stat.title}</span>
                <h3 className="text-2xl font-semibold mt-1">{stat.count}</h3>
                <span className="text-sm text-gray-500">{stat.subtext}</span>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${stat.color.replace('text', 'bg')}`}
                style={{ width: `${stat.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            {/* Profile Header */}
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Daavid Nummi"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <span className="absolute bottom-4 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <h2 className="text-xl font-semibold">Daavid Nummi</h2>
              <p className="text-gray-500">EastTribune.nl</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-gray-500 text-sm">Email Address :</span>
                <div className="flex items-center gap-2 mt-1">
                  <Mail size={16} className="text-gray-400" />
                  <span>daavidnumminen@teleworm.us</span>
                </div>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Phone Number :</span>
                <div className="flex items-center gap-2 mt-1">
                  <Phone size={16} className="text-gray-400" />
                  <span>+231 06-75820711</span>
                </div>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Location :</span>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin size={16} className="text-gray-400" />
                  <span>Schoolstraat 161 5151 HH Drunen</span>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mb-6">
              <span className="text-gray-500 text-sm">Status :</span>
              <div className="mt-1">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  Available
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <span className="text-gray-500 text-sm">Social Media :</span>
              <div className="flex gap-2 mt-2">
                {[
                  { icon: Facebook, color: 'text-blue-500 bg-blue-50' },
                  { icon: Twitter, color: 'text-blue-400 bg-blue-50' },
                  { icon: Instagram, color: 'text-pink-500 bg-pink-50' },
                  { icon: FaWhatsapp, color: 'text-green-500 bg-green-50' },
                  { icon: Mail, color: 'text-orange-500 bg-orange-50' }
                ].map(({ icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${color}`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div>
              <span className="text-gray-500 text-sm">Preferences :</span>
              <div className="mt-2 space-y-2">
                <div className="text-sm">• 3-4 bedrooms, 2-3 bathrooms</div>
                <div className="text-sm">• Close to public transportation, good school district, backyard, modern kitchen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Interested Properties */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Interested Properties (3)</h3>
              <div className="flex gap-2">
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {interestedProperties.map(property => (
                <div key={property.id} className="group cursor-pointer">
                  <div className="relative mb-3">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full
                      opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                  <h4 className="font-medium mb-1">{property.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{property.address}</p>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Bed size={14} />
                      <span>{property.specs.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={14} />
                      <span>{property.specs.baths} Bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize size={14} />
                      <span>{property.specs.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building size={14} />
                      <span>{property.specs.floors} Floor</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4">
          {/* Investment Overview */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Investment Overview</h3>
                <p className="text-sm text-gray-500">Total investment statistics</p>
              </div>
              <ProgressCircle percentage={75} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500">Total Invest</span>
                <div className="text-lg font-semibold">$928,128</div>
              </div>
              <div>
                <span className="text-sm text-gray-500">Income</span>
                <div className="text-lg font-semibold">$613,321.12</div>
              </div>
            </div>
          </div>

          {/* Weekly Inquiry Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Weekly Inquiry</h3>
                <p className="text-sm text-gray-500">Jan-Dec 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">First Week</span>
                <span className="font-semibold">85</span>
              </div>
            </div>
            <div className="h-[240px]">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Table */}
      <div className="bg-white rounded-xl border border-gray-200 mt-6 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold">Transaction History</h3>
            <p className="text-sm text-gray-500">Recent order transactions</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search transactions..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                  focus:ring-2 focus:ring-red-500 focus:border-red-500 w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg
              hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>

            {/* Period Selector */}
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                <th className="pb-4 font-medium">Order ID</th>
                <th className="pb-4 font-medium">Date</th>
                <th className="pb-4 font-medium">Amount</th>
                <th className="pb-4 font-medium">Payment Method</th>
                <th className="pb-4 font-medium">Agent Name</th>
                <th className="pb-4 font-medium">Properties Address</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-blue-600 font-medium">{transaction.id}</td>
                  <td className="py-4">{transaction.date}</td>
                  <td className="py-4 font-medium">{transaction.amount}</td>
                  <td className="py-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <img
                          src={transaction.paymentMethod.icon}
                          alt={transaction.paymentMethod.type}
                          className="h-6 w-auto"
                        />
                        <span className="font-medium">{transaction.paymentMethod.type}</span>
                      </div>
                      <span className="text-sm text-gray-500 ml-8">{transaction.paymentMethod.category}</span>
                    </div>
                  </td>
                  <td className="py-4">{transaction.agentName}</td>
                  <td className="py-4">{transaction.investedProperty}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs 
                      ${transaction.status === 'Completed' ? 'bg-green-100 text-green-600' :
                        transaction.status === 'Cancelled' ? 'bg-red-100 text-red-600' :
                          'bg-orange-100 text-orange-600'}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors
                        group tooltip-trigger">
                        <Eye className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
                        <span className="tooltip">View Details</span>
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-blue-50 transition-colors
                        group tooltip-trigger">
                        <Pencil className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
                        <span className="tooltip">Edit Transaction</span>
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors
                        group tooltip-trigger">
                        <Trash2 className="w-4 h-4 text-red-600 group-hover:text-red-700" />
                        <span className="tooltip">Delete Transaction</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-500">
            Showing {transactions.length} of {transactions.length} transactions
          </span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg
              transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <div className="flex gap-1">
              <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-500 
                text-white font-medium">
                1
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100
                text-gray-600 font-medium transition-colors">
                2
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100
                text-gray-600 font-medium transition-colors">
                3
              </button>
            </div>
            <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg
              transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
