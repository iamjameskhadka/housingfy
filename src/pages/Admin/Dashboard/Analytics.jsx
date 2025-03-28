import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import { ArrowUpIcon, ArrowDownIcon, HomeIcon, UsersIcon, DollarSignIcon, FileTextIcon } from 'lucide-react';
import { ArrowDown, ArrowUp, Home, Briefcase, Users, CreditCard, CheckCircle, XCircle, Eye, Edit, Trash2, Pencil } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const data = [
  { month: 'Jan', income: 16000, expense: 14000 },
  { month: 'Feb', income: 17000, expense: 16000 },
  { month: 'Mar', income: 19000, expense: 15000 },
  { month: 'Apr', income: 21000, expense: 17000 },
  { month: 'May', income: 18000, expense: 16000 },
  { month: 'Jun', income: 16000, expense: 15000 },
  { month: 'Jul', income: 19000, expense: 18000 },
  { month: 'Aug', income: 17000, expense: 16000 },
];

const locations = [
  { name: "Canada", value: "71.1%", lat: 56.1304, lon: -106.3468 },
  { name: "USA", value: "67.0%", lat: 37.0902, lon: -95.7129 },
  { name: "Brazil", value: "53.9%", lat: -14.2350, lon: -51.9253 },
  { name: "Russia", value: "49.2%", lat: 55.7558, lon: 37.6173 },
  { name: "China", value: "38.8%", lat: 35.8617, lon: 104.1954 },
];

const images = [
  "https://techzaa.in/lahomes/admin/assets/images/properties/p-1.jpg",
  "https://techzaa.in/lahomes/admin/assets/images/properties/p-2.jpg",
  "https://techzaa.in/lahomes/admin/assets/images/properties/p-3.jpg",
  "https://techzaa.in/lahomes/admin/assets/images/properties/p-4.jpg",
  "https://techzaa.in/lahomes/admin/assets/images/properties/p-5.jpg",
];

const Analytics = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({
          left: galleryRef.current.clientWidth,
          behavior: 'smooth',
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Analytics</h1>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg flex items-center">
          <HomeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-3 sm:mr-4" />
          <div>
            <h3 className="text-sm sm:text-lg font-semibold">No. of Properties</h3>
            <p className="text-lg sm:text-xl">2,854</p>
            <p className="text-green-500 flex items-center text-sm"><ArrowUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> 7.34%</p>
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg flex items-center">
          <UsersIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-3 sm:mr-4" />
          <div>
            <h3 className="text-sm sm:text-lg font-semibold">Reg. Agents</h3>
            <p className="text-lg sm:text-xl">705</p>
            <p className="text-green-500 flex items-center text-sm"><ArrowUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> 76.89%</p>
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg flex items-center">
          <FileTextIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-3 sm:mr-4" />
          <div>
            <h3 className="text-sm sm:text-lg font-semibold">Customers</h3>
            <p className="text-lg sm:text-xl">9,431</p>
            <p className="text-red-500 flex items-center text-sm"><ArrowDownIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> 45.00%</p>
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg flex items-center">
          <DollarSignIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-3 sm:mr-4" />
          <div>
            <h3 className="text-sm sm:text-lg font-semibold">Revenue</h3>
            <p className="text-lg sm:text-xl">$78.3M</p>
            <p className="text-green-500 flex items-center text-sm"><ArrowUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" /> 8.76%</p>
          </div>
        </div>
      </div>

      {/* Sales Analytics and Balance Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
          <div className="h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Balance Section */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">My Balance</h3>
          <p className="text-xl sm:text-2xl font-bold">$117,000.43</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col items-center">
              <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded-md text-sm sm:text-base">
                <ArrowDown className="mr-2" /> $13,321.12 Income
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 text-sm sm:text-base">Receive</button>
            </div>
            <div className="flex flex-col items-center">
              <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded-md text-sm sm:text-base">
                <ArrowUp className="mr-2" /> $7,566.11 Expense
              </button>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-md mt-2 text-sm sm:text-base">Send</button>
            </div>
          </div>

          {/* Property & Revenue Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md text-center flex flex-col items-center">
              <Home className="text-gray-600 w-8 h-8 sm:w-10 sm:h-10 mb-2" />
              <div className="text-gray-600 text-sm sm:text-base">Property</div>
              <p className="text-xl sm:text-2xl font-bold">15,780</p>
              <p className="text-gray-500 text-sm">60% Target</p>
              <div className="bg-gray-200 h-2 sm:h-3 rounded-full mt-2 w-full">
                <div className="bg-blue-500 h-2 sm:h-3 rounded-full w-3/5"></div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md text-center flex flex-col items-center">
              <Briefcase className="text-gray-600 w-8 h-8 sm:w-10 sm:h-10 mb-2" />
              <div className="text-gray-600 text-sm sm:text-base">Revenue</div>
              <p className="text-xl sm:text-2xl font-bold">$78.3M</p>
              <p className="text-gray-500 text-sm">80% Target</p>
              <div className="bg-gray-200 h-2 sm:h-3 rounded-full mt-2 w-full">
                <div className="bg-green-500 h-2 sm:h-3 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
        {/* Social Source */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md flex flex-col items-center">
          <h3 className="text-lg font-semibold">Social Source</h3>
          <p className="text-gray-500 text-sm">Total Traffic In This Week</p>
          <div className="relative flex justify-center items-center w-32 h-32 sm:w-40 sm:h-40 my-4">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-purple-500"
                strokeWidth="4"
                fill="none"
                strokeDasharray="70, 100"
                strokeLinecap="round"
                d="M18 2.084a 16 16 0 1 1 0 31.832 16 16 0 1 1 0-31.832"
              ></path>
            </svg>
            <span className="absolute text-xl sm:text-2xl font-bold">70</span>
          </div>
          <p className="flex items-center text-base sm:text-lg font-semibold">
            <Users className="mr-2" /> Buyers: 70
          </p>
          <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md text-sm sm:text-base">See Details</button>
        </div>

        {/* Most Sales Location */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Most Sales Location</h3>
          <div className="mt-4 h-[200px] sm:h-[250px]">
            <img src="https://www.google.com/maps/place/Itahari/@26.6703595,87.2263997,13z/data=!4m15!1m8!3m7!1s0x39ef6c66e80fbfa9:0x38094d1a7c974283!2sItahari!3b1!8m2!3d26.6646381!4d87.271781!16s%2Fm%2F02vzwpq!3m5!1s0x39ef6c66e80fbfa9:0x38094d1a7c974283!8m2!3d26.6646381!4d87.271781!16s%2Fm%2F02vzwpq?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              alt="Map"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 mt-4">
            {locations.map((loc, index) => (
              <div key={index} className="text-center">
                <p className="text-xs sm:text-sm font-semibold">{loc.name}</p>
                <p className="text-purple-500 text-xs sm:text-sm font-bold">{loc.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Sales */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Weekly Sales</h3>
          <div className="overflow-hidden">
            <div ref={galleryRef} className="flex space-x-4 transition-transform duration-300">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="w-48 h-32 sm:w-64 sm:h-40 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 mt-4">
            <p className="text-gray-500 text-sm">Total Property Sales: 5,746</p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md text-sm">View More</button>
          </div>
        </div>
      </div>

      {/* Latest Transactions */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mt-4 sm:mt-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Latest Transaction</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 text-sm">Purchase ID</th>
                <th className="py-2 text-sm">Buyer Name</th>
                <th className="py-2 text-sm">Invoice</th>
                <th className="py-2 text-sm">Purchase Date</th>
                <th className="py-2 text-sm">Total Amount</th>
                <th className="py-2 text-sm">Payment Method</th>
                <th className="py-2 text-sm">Payment Status</th>
                <th className="py-2 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'TZ2540', name: 'Michael A. Miner', invoice: 'IN-4563', date: '07 Jan, 2023', amount: '$45,842', method: 'Mastercard', status: 'Completed' },
                { id: 'TZ3924', name: 'Theresa T. Brose', invoice: 'IN-3728', date: '03 Dec, 2023', amount: '$78,483', method: 'Visa', status: 'Canceled' }
              ].map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 text-sm">#{transaction.id}</td>
                  <td className="py-2 text-sm">{transaction.name}</td>
                  <td className="py-2 text-sm">{transaction.invoice}</td>
                  <td className="py-2 text-sm">{transaction.date}</td>
                  <td className="py-2 text-sm">{transaction.amount}</td>
                  <td className="py-2 text-sm">{transaction.method}</td>
                  <td className={`py-2 text-sm font-bold ${transaction.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.status === 'Completed' ? <CheckCircle className="inline-block mr-1" /> : <XCircle className="inline-block mr-1" />}
                    {transaction.status}
                  </td>
                  <td className="py-2">
                    <div className="flex space-x-2">
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors group">
                        <Eye className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-blue-50 transition-colors group">
                        <Pencil className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors group">
                        <Trash2 className="w-4 h-4 text-red-600 group-hover:text-red-700" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
