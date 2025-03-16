import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Bar, BarChart } from 'recharts';
import {
  Users, TrendingUp, MapPin, Phone, Laptop, Monitor,
  Smartphone, Target, Award, Mail, Bed, Bath, Home, Building,
  ArrowUp, ArrowRight, Globe, Tablet
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Customer data by country
const customersByCountry = [
  {
    country: "Brazil",
    revenue: 15781,
    customers: 3474,
    growth: 10.0,
    lat: -14.2350,
    lon: -51.9253
  },
  {
    country: "Canada",
    revenue: 23263,
    customers: 7843,
    growth: 4.1,
    lat: 56.1304,
    lon: -106.3468
  },
  {
    country: "Russia",
    revenue: 30562,
    customers: 5933,
    growth: 7.1,
    lat: 55.7558,
    lon: 37.6173
  },
  {
    country: "USA",
    revenue: 41341,
    customers: 8901,
    growth: 12.0,
    lat: 37.0902,
    lon: -95.7129
  }
];

// Top customers data
const topCustomers = [
  {
    name: "Tiia Karppinen",
    email: "tiiakarppinen@teleworm.us",
    amount: 733291,
    image: "https://ui-avatars.com/api/?name=Tiia+Karppinen&background=6366f1&color=fff"
  },
  {
    name: "Harland R. Orsini",
    email: "harlandrorsini@dayrep.com",
    amount: 831760,
    image: "https://ui-avatars.com/api/?name=Harland+Orsini&background=8b5cf6&color=fff"
  },
  {
    name: "David Padgett",
    email: "davidpadgett@armyspy.com",
    amount: 647900,
    image: "https://ui-avatars.com/api/?name=David+Padgett&background=ec4899&color=fff"
  },
  {
    name: "Yusra Hasibah",
    email: "yusraHasibahadad@rhyta.com",
    amount: 530389,
    image: "https://ui-avatars.com/api/?name=Yusra+Hasibah&background=14b8a6&color=fff"
  },
  {
    name: "Valerie Obrien",
    email: "valerieobrien@dayrep.com",
    amount: 763829,
    image: "https://ui-avatars.com/api/?name=Valerie+Obrien&background=f97316&color=fff"
  }
];

// Device usage data
const deviceData = [
  { name: 'Mobile', value: 60, devices: 2435 },
  { name: 'Desktop', value: 20, devices: 578 },
  { name: 'Tablet', value: 20, devices: 487 }
];

// First, update the customerVisitData to include more details
const customerVisitData = [
  { month: 'Jan', value: 12.3, visits: 4521, growth: '+2.3%' },
  { month: 'Feb', value: 3.1, visits: 3280, growth: '-1.2%' },
  { month: 'Mar', value: 4.0, visits: 3521, growth: '+0.9%' },
  { month: 'Apr', value: 10.1, visits: 4290, growth: '+6.1%' },
  { month: 'May', value: 6.0, visits: 3890, growth: '-4.1%' },
  { month: 'Jun', value: 2.3, visits: 3180, growth: '-3.7%' },
  { month: 'July', value: 19.4, visits: 5120, growth: '+17.1%' }
];

const recentCustomerInvest = [
  {
    name: "John Smith",
    image: "https://ui-avatars.com/api/?name=John+Smith&background=6366f1&color=fff"
  },
  {
    name: "Sarah Wilson",
    image: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=8b5cf6&color=fff"
  },
  {
    name: "Michael Chen",
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=ec4899&color=fff"
  },
  {
    name: "Emma Davis",
    image: "https://ui-avatars.com/api/?name=Emma+Davis&background=14b8a6&color=fff"
  },
  {
    name: "James Brown",
    image: "https://ui-avatars.com/api/?name=James+Brown&background=f97316&color=fff"
  }
];

const COLORS = ['#6366f1', '#22c55e', '#f97316'];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border">
        <p className="font-semibold text-gray-800">{label}</p>
        <p className="text-purple-500 font-medium">
          Growth Rate: {payload[0].payload.value}%
        </p>
        <p className="text-gray-600">
          Visits: {payload[0].payload.visits.toLocaleString()}
        </p>
        <p className={`${payload[0].payload.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {payload[0].payload.growth} from last month
        </p>
      </div>
    );
  }
  return null;
};

// Add this constant at the top with other data constants
const propertyImages = [
  {
    main: "https://techzaa.in/lahomes/admin/assets/images/properties/p-1.jpg",
    thumbnail: "https://techzaa.in/lahomes/admin/assets/images/properties/p-2.jpg"
  }
];

// Add this new data constant at the top with other data constants
const deviceTrendData = [
  { name: 'Mon', mobile: 2100, desktop: 1200, tablet: 800 },
  { name: 'Tue', mobile: 2400, desktop: 1400, tablet: 900 },
  { name: 'Wed', mobile: 2000, desktop: 1300, tablet: 850 },
  { name: 'Thu', mobile: 2700, desktop: 1600, tablet: 1000 },
  { name: 'Fri', mobile: 2300, desktop: 1500, tablet: 950 },
  { name: 'Sat', mobile: 2800, desktop: 1700, tablet: 1100 },
  { name: 'Sun', mobile: 2500, desktop: 1800, tablet: 1200 }
];

const Customers = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Customer Dashboard</h1>

      {/* Customer by Country Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {customersByCountry.map((data, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{data.country}</h3>
                <p className="text-purple-500 font-bold">${data.revenue} Per Month</p>
              </div>
              <Globe className="text-blue-500" size={24} />
            </div>
            <div className="mt-4">
              <p className="text-gray-500">Total Customer</p>
              <div className="flex items-center mt-1">
                <ArrowUp className={`${data.growth >= 0 ? 'text-green-500' : 'text-red-500'} mr-1`} size={16} />
                <span className={`${data.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>+{data.growth}%</span>
              </div>
              <p className="text-2xl font-bold mt-2">{data.customers}</p>
              <p className="text-sm text-gray-500 mt-1">Goal: 10,000</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Customer Invest */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-semibold">Recent Customers Invest</h3>
            <div className="flex items-center mt-2">
              <p className="text-gray-500">Customer Buy Property</p>
              <div className="flex -space-x-3 ml-4">
                {recentCustomerInvest.map((customer, index) => (
                  <img
                    key={index}
                    src={customer.image}
                    alt={customer.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-green-500">+22.0</p>
            <p className="text-2xl font-bold">$67,435.00</p>
            <p className="text-sm text-gray-500">Revenue</p>
          </div>
        </div>

        {/* Customer Visit Graph */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={customerVisitData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                ticks={[0, 5, 10, 15, 20]}
                domain={[0, 20]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="value"
                fill="#6366f1"
                radius={[4, 4, 0, 0]}
                barSize={40}
              >
                {customerVisitData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.growth.startsWith('+') ? '#6366f1' : '#94a3b8'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Map and Top Customers Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Customer Map */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Customer By Country</h3>
          <div className="h-[400px]">
            <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {customersByCountry.map((location, index) => (
                <Marker key={index} position={[location.lat, location.lon]}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-semibold">{location.country}</h3>
                      <p>Customers: {location.customers}</p>
                      <p>Revenue: ${location.revenue}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Top Customers */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-semibold">Top Customers</h3>
              <p className="text-sm text-gray-500">390 Customers</p>
            </div>
            <button className="text-blue-500 hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-6">
            {topCustomers.map((customer, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div className="flex items-center space-x-4">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{customer.name}</h4>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Mail className="mr-1" size={14} />
                      {customer.email}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-500">
                    ${customer.amount.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device Usage and Recent Purchase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Usage */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Customer Visit by Device</h3>
          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-bold">67,893</p>
            <p className="text-green-500">+0.66%</p>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold flex items-center">
                  <Smartphone className="mr-2 text-purple-500" size={20} />
                  Mobile
                </h4>
                <p className="text-gray-500">2,435 (60%)</p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center">
                  <Monitor className="mr-2 text-green-500" size={20} />
                  Desktop
                </h4>
                <p className="text-gray-500">578 (20%)</p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center">
                  <Tablet className="mr-2 text-orange-500" size={20} />
                  Tablet
                </h4>
                <p className="text-gray-500">487 (20%)</p>
              </div>
            </div>
          </div>

          {/* Add new graph section */}
          <div className="mt-6 border-t pt-6">
            <h4 className="font-semibold mb-4">Weekly Device Usage Trend</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={deviceTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    ticks={[0, 1000, 2000, 3000]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="mobile"
                    stroke="#6366f1"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="desktop"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="tablet"
                    stroke="#f97316"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm text-gray-600">Mobile</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">Desktop</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                <span className="text-sm text-gray-600">Tablet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Purchase Property */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Recent Purchase Property</h3>
          <div className="border rounded-lg p-4">
            {/* Property Images */}
            <div className="mb-4">
              <div className="relative h-48 rounded-lg overflow-hidden mb-2">
                <img
                  src={propertyImages[0].main}
                  alt="Property"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Sold
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-16 rounded-lg overflow-hidden">
                    <img
                      src={propertyImages[0].thumbnail}
                      alt={`Property view ${index + 1}`}
                      className="w-full h-full object-cover hover:opacity-75 transition-opacity cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Woodis B. Apartment</h4>
                <p className="text-gray-500 flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Bungalow Road Niobrara
                </p>
              </div>

              <p className="text-xl font-bold text-purple-500">$80,675.00</p>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center">
                  <Bed className="mr-2 text-gray-400" size={20} />
                  <span>4 Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="mr-2 text-gray-400" size={20} />
                  <span>3 Bath</span>
                </div>
                <div className="flex items-center">
                  <Home className="mr-2 text-gray-400" size={20} />
                  <span>1700ft</span>
                </div>
                <div className="flex items-center">
                  <Building className="mr-2 text-gray-400" size={20} />
                  <span>6 Floor</span>
                </div>
              </div>

              {/* Buyer Info */}
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://ui-avatars.com/api/?name=Tiia+Karppinen&background=6366f1&color=fff"
                      alt="Buyer"
                      className="w-12 h-12 rounded-full border-2 border-purple-100"
                    />
                    <div>
                      <h4 className="font-semibold">Tiia Karppinen</h4>
                      <p className="text-sm text-gray-500">tiiakarppinen@teleworm.us</p>
                    </div>
                  </div>
                  <button className="text-purple-500 hover:text-purple-700 flex items-center">
                    View Details
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
