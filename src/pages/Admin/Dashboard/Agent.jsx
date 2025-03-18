import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Bar } from 'recharts';
import {
  TrendingUp, Users, DollarSign, PieChart, Building, Star, ArrowUp, ArrowRight,
  Percent, Target, BarChart2, ShoppingBag, Mail, MapPin, Calendar,
  TrendingDown, CircleDollarSign, UserPlus, Award, ChartBar
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const data = [
  { month: 'Jan', income: 12000 },
  { month: 'Feb', income: 13500 },
  { month: 'Mar', income: 14200 },
  { month: 'Apr', income: 15800 },
  { month: 'May', income: 16400 },
  { month: 'Jun', income: 12167 },
  { month: 'Jul', income: 14900 },
];

// Sales Funnel Data
const salesFunnelData = [
  { name: 'Jan', visitors: 100, views: 80, leads: 60, market: 40 },
  { name: 'Feb', visitors: 120, views: 90, leads: 70, market: 45 },
  { name: 'Mar', visitors: 140, views: 100, leads: 80, market: 50 },
  { name: 'Apr', visitors: 160, views: 120, leads: 90, market: 55 },
  { name: 'May', visitors: 180, views: 140, leads: 100, market: 60 },
  { name: 'Jun', visitors: 200, views: 160, leads: 120, market: 70 },
];

// Location Data
const locations = [
  { name: "United States", value: "82.05%", lat: 37.0902, lon: -95.7129, visitors: '659k' },
  { name: "Russia", value: "70.5%", lat: 55.7558, lon: 37.6173, visitors: '485k' },
  { name: "China", value: "65.8%", lat: 35.8617, lon: 104.1954, visitors: '355k' },
  { name: "Canada", value: "55.8%", lat: 56.1304, lon: -106.3468, visitors: '204k' },
];

// Add this new data constant at the top with other data constants
const rentCollectionData = [
  { month: 'Jan', value: 85 },
  { month: 'Feb', value: 95 },
  { month: 'Mar', value: 65 },
  { month: 'Apr', value: 105 },
  { month: 'May', value: 75 },
  { month: 'Jun', value: 80 },
  { month: 'Jul', value: 45 },
  { month: 'Aug', value: 25 },
  { month: 'Sep', value: 85 },
  { month: 'Oct', value: 40 },
  { month: 'Nov', value: 85 },
  { month: 'Dec', value: 35 }
];

// Add this new data constant at the top with other data constants
const recentAgentStatusData = [
  { month: 'Jan', value: 85, trend: 35 },
  { month: 'Feb', value: 95, trend: 38 },
  { month: 'Mar', value: 65, trend: 25 },
  { month: 'Apr', value: 105, trend: 25 },
  { month: 'May', value: 75, trend: 45 },
  { month: 'Jun', value: 80, trend: 45 },
  { month: 'Jul', value: 45, trend: 75 },
  { month: 'Aug', value: 25, trend: 75 },
  { month: 'Sep', value: 85, trend: 45 },
  { month: 'Oct', value: 40, trend: 45 },
  { month: 'Nov', value: 85, trend: 50 },
  { month: 'Dec', value: 35, trend: 50 }
];

// Add this constant at the top with other data constants
const topAgents = [
  {
    name: "Lahomes Group, Pvt Ltd",
    location: "Markova, USA",
    rating: 4.5,
    image: "https://ui-avatars.com/api/?name=Lahomes+Group&background=random",
    deals: 245,
    revenue: "$1.2M"
  },
  {
    name: "Sarah Wilson Real Estate",
    location: "New York, USA",
    rating: 4.8,
    image: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=random",
    deals: 189,
    revenue: "$980K"
  },
  {
    name: "Michael Chen Properties",
    location: "Toronto, Canada",
    rating: 4.6,
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=random",
    deals: 156,
    revenue: "$850K"
  },
  {
    name: "Emma Thompson Realty",
    location: "London, UK",
    rating: 4.7,
    image: "https://ui-avatars.com/api/?name=Emma+Thompson&background=random",
    deals: 134,
    revenue: "$720K"
  }
];

// Add this constant at the top with other data constants
const recentJoinAgents = [
  {
    name: 'Ryan G. Harris',
    email: 'ryangharris@jourrapide.com',
    date: 'May 2024',
    image: "https://ui-avatars.com/api/?name=Ryan+Harris&background=6366f1&color=fff",
    location: "New York, USA",
    role: "Senior Agent"
  },
  {
    name: 'Michael Coch',
    email: 'michaelbco@armyspy.com',
    date: 'May 2024',
    image: "https://ui-avatars.com/api/?name=Michael+Coch&background=8b5cf6&color=fff",
    location: "Los Angeles, USA",
    role: "Property Consultant"
  },
  {
    name: 'Danielle C. Thom',
    email: 'danielompson@dayrep.com',
    date: 'May 2024',
    image: "https://ui-avatars.com/api/?name=Danielle+Thom&background=ec4899&color=fff",
    location: "Chicago, USA",
    role: "Real Estate Agent"
  },
  {
    name: 'Julia V. Quincy',
    email: 'juliabquincy@armyspy.com',
    date: 'May 2024',
    image: "https://ui-avatars.com/api/?name=Julia+Quincy&background=14b8a6&color=fff",
    location: "Miami, USA",
    role: "Junior Agent"
  }
];

const Agent = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Agent Dashboard</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500">Earn of the Month</h3>
            <CircleDollarSign className="text-purple-500" size={24} />
          </div>
          <p className="text-2xl font-bold">$3,548.09</p>
          <div className="flex items-center mt-2">
            <TrendingUp className="text-green-500 mr-2" size={20} />
            <span className="text-green-500">44% Growth</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500">Conversation Rate</h3>
            <Target className="text-blue-500" size={24} />
          </div>
          <p className="text-2xl font-bold">78.8%</p>
          <div className="bg-gray-200 h-2 rounded-full mt-2">
            <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500">Total Revenue</h3>
            <ChartBar className="text-green-500" size={24} />
          </div>
          <p className="text-2xl font-bold">$15,563.786</p>
          <p className="text-green-500 text-sm mt-2 flex items-center">
            <ArrowUp className="mr-1" size={16} />
            <span>4.53% - Gained $978.56 This Month!</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500">Gross Profit Margin</h3>
            <Percent className="text-purple-500" size={24} />
          </div>
          <p className="text-2xl font-bold">34.00%</p>
          <div className="bg-gray-200 h-2 rounded-full mt-2">
            <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
          </div>
        </div>
      </div>

      {/* Sales Funnel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Sales Funnel</h3>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesFunnelData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="leads"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="market"
                  stackId="1"
                  stroke="#ff7300"
                  fill="#ff7300"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-r">
              <p className="text-gray-500">Visitors</p>
              <p className="text-xl font-bold">123.7k</p>
            </div>
            <div>
              <p className="text-gray-500">Views</p>
              <p className="text-xl font-bold">167.1k</p>
            </div>
            <div className="border-r">
              <p className="text-gray-500">Leads</p>
              <p className="text-xl font-bold">89.7k</p>
            </div>
            <div>
              <p className="text-gray-500">Market</p>
              <p className="text-xl font-bold">34.8k</p>
            </div>
          </div>
        </div>

        {/* Revenue Sources */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <DollarSign className="mr-2 text-purple-500" size={24} />
            Revenue Sources
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <Building className="mr-2 text-blue-500" size={20} />
                Rent
              </span>
              <span className="font-bold">$12,223.78</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <ShoppingBag className="mr-2 text-green-500" size={20} />
                Sales
              </span>
              <span className="font-bold">$56,131.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <Users className="mr-2 text-purple-500" size={20} />
                Broker Deal
              </span>
              <span className="font-bold">$1,340.15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <BarChart2 className="mr-2 text-orange-500" size={20} />
                Market
              </span>
              <span className="font-bold">$600.46</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Agent Status */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold">Recent Agent Status</h3>
            <p className="text-sm text-gray-500">More than $50K</p>
          </div>
          <select className="border rounded-md px-3 py-1 text-sm">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-gray-500">Today</p>
            <p className="text-xl font-bold">$8,839</p>
          </div>
          <div>
            <p className="text-gray-500">This Month</p>
            <div className="flex items-center">
              <p className="text-xl font-bold">$52,356</p>
              <span className="text-green-500 text-sm ml-2">0.2%</span>
            </div>
          </div>
          <div>
            <p className="text-gray-500">This Year</p>
            <div className="flex items-center">
              <p className="text-xl font-bold">$78M</p>
              <span className="text-green-500 text-sm ml-2">0.1%</span>
            </div>
          </div>
        </div>

        {/* Graph */}
        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={recentAgentStatusData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                ticks={[0, 20, 40, 60, 80, 100, 120]}
              />
              <Tooltip />
              {/* Main bar chart */}
              <Bar
                dataKey="value"
                fill="#6366f1"
                radius={[4, 4, 0, 0]}
                barSize={20}
              />
              {/* Trend line */}
              <Line
                type="monotone"
                dataKey="trend"
                stroke="#f97316"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Collection of Rent */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold">Collection of Rent</h3>
            <p className="text-sm text-gray-500">More than $50K</p>
          </div>
          <select className="border rounded-md px-3 py-1 text-sm">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-gray-500">Today</p>
            <p className="text-xl font-bold">$8,839</p>
          </div>
          <div>
            <p className="text-gray-500">This Month</p>
            <div className="flex items-center">
              <p className="text-xl font-bold">$52,356</p>
              <span className="text-green-500 text-sm ml-2">0.2%</span>
            </div>
          </div>
          <div>
            <p className="text-gray-500">This Year</p>
            <div className="flex items-center">
              <p className="text-xl font-bold">$78M</p>
              <span className="text-green-500 text-sm ml-2">0.1%</span>
            </div>
          </div>
        </div>

        {/* Graph */}
        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rentCollectionData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                ticks={[0, 20, 40, 60, 80, 100, 120]}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
                dot={false}
              />
              {/* Add dotted trend line */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f97316"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-gray-500">Total</p>
            <p className="text-xl font-bold">$500.50K</p>
          </div>
          <div>
            <p className="text-gray-500">Collected</p>
            <p className="text-xl font-bold text-green-500">$250.50K</p>
          </div>
          <div>
            <p className="text-gray-500">Pending</p>
            <p className="text-xl font-bold text-red-500">$250.00K</p>
          </div>
        </div>
      </div>

      {/* Sessions by Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Sessions by Country</h3>
          <p className="text-2xl font-bold mb-4">145,678 <span className="text-sm text-gray-500">(Total Visitors)</span></p>
          <div className="h-64 mb-4">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: "100%", width: "100%" }}
              className="rounded-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location, index) => (
                <Marker key={index} position={[location.lat, location.lon]}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-semibold">{location.name}</h3>
                      <p>Visitors: {location.visitors}</p>
                      <p>Percentage: {location.value}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div className="space-y-4">
            {locations.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <div className="text-right">
                  <span className="font-bold">{item.visitors}</span>
                  <div className="text-sm text-gray-500">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Agents */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Top Agents</h3>
            <button className="text-blue-500 hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-6">
            {topAgents.map((agent, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div className="flex items-center space-x-4">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{agent.name}</h4>
                    <p className="text-gray-500 text-sm">{agent.location}</p>
                    <div className="flex items-center mt-1">
                      <Star className="text-yellow-400" size={16} />
                      <span className="ml-1 text-sm">{agent.rating}/5</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{agent.deals} Deals</p>
                  <p className="font-semibold text-green-500">{agent.revenue}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors">
              Add Other
            </button>
          </div>
        </div>
      </div>

      {/* Recent Join Agent */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold">Recent Join Agent</h3>
            <p className="text-sm text-gray-500">190 New Agents this month</p>
          </div>
          <button className="text-blue-500 hover:text-blue-700">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentJoinAgents.map((agent, index) => (
            <div key={index} className="bg-white rounded-xl border p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{agent.name}</h4>
                  <p className="text-sm text-purple-500 flex items-center">
                    <Award className="mr-1" size={14} />
                    {agent.role}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center">
                    <MapPin className="mr-1" size={12} />
                    {agent.location}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600 mb-1 flex items-center">
                  <Mail className="mr-1" size={14} />
                  <span className="text-gray-400">Email: </span>
                  {agent.email}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400 flex items-center">
                    <Calendar className="mr-1" size={12} />
                    Joined {agent.date}
                  </p>
                  <button className="text-purple-500 hover:text-purple-700 text-sm font-medium flex items-center">
                    View Profile
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 transition-colors flex items-center space-x-2">
            <span>View All New Agents</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agent;
