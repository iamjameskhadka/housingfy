import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import { ArrowUpIcon, ArrowDownIcon, HomeIcon, UsersIcon, DollarSignIcon, FileTextIcon } from 'lucide-react';
import { ArrowDown, ArrowUp, Home, Briefcase, Users, CreditCard, CheckCircle, XCircle, Eye, Edit, Trash2 } from 'lucide-react';
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
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-1xl font-bold">Analytics</h1>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
          <HomeIcon className="h-8 w-8 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">No. of Properties</h3>
            <p className="text-1xl ">2,854</p>
            <p className="text-green-500 flex items-center"><ArrowUpIcon className="h-4 w-4" /> 7.34%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
          <UsersIcon className="h-8 w-8 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Reg. Agents</h3>
            <p className="text-1xl ">705</p>
            <p className="text-green-500 flex items-center"><ArrowUpIcon className="h-4 w-4" /> 76.89%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
          <FileTextIcon className="h-8 w-8 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Customers</h3>
            <p className="text-1xl ">9,431</p>
            <p className="text-red-500 flex items-center"><ArrowDownIcon className="h-4 w-4" /> 45.00%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
          <DollarSignIcon className="h-8 w-8 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-1xl ">$78.3M</p>
            <p className="text-green-500 flex items-center"><ArrowUpIcon className="h-4 w-4" /> 8.76%</p>
          </div>
        </div>
      </div>

      {/* Sales Analytics and Balance Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
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

        {/* Balance Section */}
        <div className=" p-6 rounded-xl shadow-lg text-white">
          <h3 className="text-lg text-black font-semibold">My Balance</h3>
          <p className="text-1xl ">$117,000.43</p>
          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded-md">
                  <ArrowDown className="mr-2" /> $13,321.12 Income
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">Receive</button>
              </div>
              <div className="flex flex-col items-center">
                <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded-md">
                  <ArrowUp className="mr-2" /> $7,566.11 Expense
                </button>
                <button className="bg-orange-500 text-white py-2 px-4 rounded-md mt-2">Send</button>
              </div>
            </div>
          </div>
          {/* Property & Revenue Section */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center h-64 w-60">
              <Home className="text-gray-600 w-10 h-10 mb-2" />
              <div className="text-gray-600">Property</div>
              <p className="text-2xl font-bold">15,780</p>
              <p className="text-gray-500">60% Target</p>
              <div className="bg-gray-200 h-3 rounded-full mt-2 w-full">
                <div className="bg-blue-500 h-3 rounded-full w-3/5"></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center h-64 w-60">
              <Briefcase className="text-gray-600 w-10 h-10 mb-2" />
              <div className="text-gray-600">Revenue</div>
              <p className="text-2xl font-bold">$78.3M</p>
              <p className="text-gray-500">80% Target</p>
              <div className="bg-gray-200 h-3 rounded-full mt-2 w-full">
                <div className="bg-green-500 h-3 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
          {/* View More */}
          <div className="text-center mt-6">
            <a href="#" className="text-blue-500 font-semibold">View More →</a>
          </div>
        </div>
      </div>

      {/* Revenue Sources Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
          <DollarSignIcon className="h-8 w-8 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Income</h3>
            <p className="text-1xl ">$23,675.00</p>
            <p className="text-green-500 flex items-center"><ArrowUpIcon className="h-4 w-4" /> 0.08%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
          <DollarSignIcon className="h-8 w-8 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Expenses</h3>
            <p className="text-1xl ">$11,562.00</p>
            <p className="text-red-500 flex items-center"><ArrowDownIcon className="h-4 w-4" /> 5.38%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center">
          <DollarSignIcon className="h-8 w-8 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Balance</h3>
            <p className="text-1xl ">$67,365.00</p>
            <p className="text-green-500 flex items-center"><ArrowUpIcon className="h-4 w-4" /> 2.89%</p>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Social Source */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <h3 className="text-lg font-semibold">Social Source</h3>
          <p className="text-gray-500">Total Traffic In This Week</p>
          <div className="relative flex justify-center items-center w-40 h-40 my-4">
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
            <span className="absolute text-2xl font-bold">70</span>
          </div>
          <p className="flex items-center text-lg font-semibold">
            <Users className="mr-2" /> Buyers: 70
          </p>
          <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md">See Details</button>
        </div>
        {/* Most Sales Location */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Most Sales Location</h3>
          <div className="mt-4">
            <img src="https://www.google.com/maps/place/Itahari/@26.6703595,87.2263997,13z/data=!4m15!1m8!3m7!1s0x39ef6c66e80fbfa9:0x38094d1a7c974283!2sItahari!3b1!8m2!3d26.6646381!4d87.271781!16s%2Fm%2F02vzwpq!3m5!1s0x39ef6c66e80fbfa9:0x38094d1a7c974283!8m2!3d26.6646381!4d87.271781!16s%2Fm%2F02vzwpq?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" alt="Map" className="w-full" />
          </div>
          <div className="grid grid-cols-5 mt-4">
            {[
              { name: 'Canada', value: '71.1%' },
              { name: 'USA', value: '67.0%' },
              { name: 'Brazil', value: '53.9%' },
              { name: 'Russia', value: '49.2%' },
              { name: 'China', value: '38.8%' }
            ].map((loc, index) => (
              <div key={index} className="text-center">
                <p className="text-sm font-semibold">{loc.name}</p>
                <p className="text-purple-500 font-bold">{loc.value}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Weekly Sales */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold">Weekly Sales</h3>
          <div className="overflow-hidden">
            <div ref={galleryRef} className="flex space-x-4 transition-transform duration-300">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Property ${index + 1}`} className="w-64 h-40 object-cover rounded-lg" />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500">Total Property Sales: 5,746</p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md">View More</button>
          </div>
        </div>
      </div>
      {/* Latest Transactions */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-6">
        <h3 className="text-lg font-semibold">Latest Transaction</h3>
        <table className="w-full mt-4">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Purchase ID</th>
              <th>Buyer Name</th>
              <th>Invoice</th>
              <th>Purchase Date</th>
              <th>Total Amount</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'TZ2540', name: 'Michael A. Miner', invoice: 'IN-4563', date: '07 Jan, 2023', amount: '$45,842', method: 'Mastercard', status: 'Completed' },
              { id: 'TZ3924', name: 'Theresa T. Brose', invoice: 'IN-3728', date: '03 Dec, 2023', amount: '$78,483', method: 'Visa', status: 'Canceled' }
            ].map((transaction, index) => (
              <tr key={index} className=" text-5">
                <td className="py-2">#{transaction.id}</td>
                <td>{transaction.name}</td>
                <td>{transaction.invoice}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.method}</td>
                <td className={`font-bold ${transaction.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                  {transaction.status === 'Completed' ? <CheckCircle className="inline-block mr-1" /> : <XCircle className="inline-block mr-1" />}
                  {transaction.status}
                </td>
                <td className="flex space-x-2">
                  <button className="text-gray-500 hover:text-black p-1 rounded transition-colors">
                    <Eye size={18} />
                  </button>
                  <button className="text-blue-500 hover:text-blue-700 p-1 rounded transition-colors">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded transition-colors">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
