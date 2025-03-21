import React, { useState, useRef } from 'react';
import { Building, Home, MapPin, Image as ImageIcon, Info, Layout, Settings, Video, FileText, CheckSquare, Map, TrendingUp, PieChart as PieChartIcon, X, Building2, HomeIcon, DollarSign, Briefcase, ArrowUpRight, ArrowDownRight, Activity, Store, Key, Trophy, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import CommercialForm from './components/CommercialForm';
import PlotForm from './components/PlotForm';
import HomePlotForm from './components/HomePlotForm';
import HomeLandForm from './components/HomeLandForm';
import RentForm from './components/RentForm';
import FeatureProjectForm from './components/FeatureProjectForm';
import { motion } from 'framer-motion';

const AddProperties = () => {
  const [propertyType, setPropertyType] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [files, setFiles] = useState({
    plans: {
      locationMap: [],
      masterPlan: [],
      threeBHK: [],
      clusterPlan: [],
      fourBHK: []
    },
    propertyImages: [],
    exteriorImages: [],
    interiorImages: [],
    amenityImages: [],
    gallery: [],
    video: null,
    hero: [],
    layout: null,
    floorPlans: [],
    brochure: null,
    priceList: null,
    legalDocs: [],
  });
  const [specifications, setSpecifications] = useState([{ title: '', details: [''] }]);

  const propertyTypes = [
    {
      id: 'commercial',
      title: 'Commercial',
      icon: Store,
      description: 'Office spaces, retail shops, and commercial buildings',
      color: 'violet',
      bgGradient: 'from-violet-50 to-violet-100',
      iconBg: 'bg-violet-500'
    },
    {
      id: 'plot',
      title: 'Plot',
      icon: MapPin,
      description: 'Residential and commercial plots',
      color: 'blue',
      bgGradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-500'
    },
    {
      id: 'land',
      title: 'Land',
      icon: HomeIcon,
      description: 'Agricultural and non-agricultural lands',
      color: 'emerald',
      bgGradient: 'from-emerald-50 to-emerald-100',
      iconBg: 'bg-emerald-500'
    },
    {
      id: 'rent',
      title: 'Rent',
      icon: Key,
      description: 'Properties available for rent',
      color: 'rose',
      bgGradient: 'from-rose-50 to-rose-100',
      iconBg: 'bg-rose-500'
    },
    {
      id: 'know-more',
      title: 'Featured Projects',
      icon: Trophy,
      description: 'Premium Featured Properties',
      color: 'indigo',
      bgGradient: 'from-indigo-50 to-indigo-100',
      iconBg: 'bg-indigo-500'
    }
  ];

  const renderPropertyForm = () => {
    switch (propertyType) {
      case 'commercial':
        return <CommercialForm files={files} setFiles={setFiles} />;
      case 'plot':
        return <PlotForm files={files} setFiles={setFiles} />;
      case 'land':
        return <HomeLandForm files={files} setFiles={setFiles} />;
      case 'rent':
        return <RentForm files={files} setFiles={setFiles} />;
      case 'know-more':
        return <FeatureProjectForm files={files} setFiles={setFiles} />;
      // Add other property type forms
      default:
        return null;
    }
  };

  // Handle specification changes
  const handleSpecificationChange = (index, field, value, detailIndex = null) => {
    const newSpecifications = [...specifications];
    if (detailIndex !== null) {
      newSpecifications[index].details[detailIndex] = value;
    } else {
      newSpecifications[index][field] = value;
    }
    setSpecifications(newSpecifications);
  };

  // Add new specification
  const addSpecification = () => {
    setSpecifications([...specifications, { title: '', details: [''] }]);
  };

  // Add new detail to specification
  const addDetail = (specIndex) => {
    const newSpecifications = [...specifications];
    newSpecifications[specIndex].details.push('');
    setSpecifications(newSpecifications);
  };

  // Update the data structure for better visualization
  const monthlyData = [
    { month: 'Jan', listings: 65, value: 45 },
    { month: 'Feb', listings: 75, value: 52 },
    { month: 'Mar', listings: 85, value: 58 },
    { month: 'Apr', listings: 95, value: 65 },
    { month: 'May', listings: 80, value: 72 },
    { month: 'Jun', listings: 90, value: 78 },
    { month: 'Jul', listings: 100, value: 85 },
    { month: 'Aug', listings: 110, value: 92 },
    { month: 'Sep', listings: 120, value: 98 },
    { month: 'Oct', listings: 130, value: 105 },
    { month: 'Nov', listings: 140, value: 112 },
    { month: 'Dec', listings: 150, value: 118 }
  ];

  // Update the property distribution data
  const propertyTypeData = [
    { name: 'Commercial', value: 35, color: '#ef4444' },  // red
    { name: 'Plot', value: 25, color: '#f97316' },       // orange
    { name: 'Home Land', value: 15, color: '#84cc16' },  // green
    { name: 'Home Plot', value: 10, color: '#06b6d4' },  // cyan
    { name: 'Rent', value: 15, color: '#8b5cf6' },       // purple
    { name: 'Featured Projects', value: 15, color: '#ec4899' }  // pink
  ];



  // Modify the property type click handler
  const handlePropertyTypeClick = (typeId) => {
    if (propertyType === typeId && showForm) {
      // If clicking the same type and form is shown, hide it
      setShowForm(false);
    } else {
      // If clicking different type or form is hidden, show it
      setPropertyType(typeId);
      setShowForm(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-violet-200 to-violet-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-48 -left-24 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-24 left-48 w-96 h-96 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Property Management
            </h1>
            <div className="flex gap-4">
              <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm 
                focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300">
                <option value="all">All Time</option>
                <option value="year">This Year</option>
                <option value="month">This Month</option>
                <option value="week">This Week</option>
              </select>
            </div>
          </div>
        </div>

        {/* Analytics Dashboard - Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: Building2,
              title: "Total Properties",
              value: "248",
              growth: 12.5,
              color: "violet",
              bgGradient: "from-violet-50 to-violet-100",
              iconBg: "bg-violet-500",
              metric: "properties"
            },
            {
              icon: Briefcase,
              title: "Active Listings",
              value: "186",
              growth: 8.3,
              color: "blue",
              bgGradient: "from-blue-50 to-blue-100",
              iconBg: "bg-blue-500",
              metric: "listings"
            },
            {
              icon: DollarSign,
              title: "Total Value",
              value: "₹14.8Cr",
              growth: 15.2,
              color: "emerald",
              bgGradient: "from-emerald-50 to-emerald-100",
              iconBg: "bg-emerald-500",
              metric: "value"
            },
            {
              icon: Activity,
              title: "Avg. Price",
              value: "₹62.5L",
              growth: -5.7,
              color: "amber",
              bgGradient: "from-amber-50 to-amber-100",
              iconBg: "bg-amber-500",
              metric: "price"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`relative overflow-hidden bg-gradient-to-br ${stat.bgGradient} 
                p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              {/* Background Pattern */}
              <div className="absolute right-0 top-0 -mt-4 -mr-4 w-32 h-32 
                bg-white/10 rounded-full blur-3xl transform rotate-45" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm 
                    ${stat.growth >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.growth >= 0 ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    <span className="font-medium">{Math.abs(stat.growth)}%</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className={`text-sm font-medium text-${stat.color}-700`}>
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-bold tracking-tight text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">
                    vs. previous month
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(Math.abs(stat.growth) * 2, 100)}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`absolute bottom-0 left-0 h-1 
                    ${stat.growth >= 0 ? `bg-${stat.color}-500/50` : 'bg-red-500/50'}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section - Add animations and hover effects */}
        <div className="space-y-8 mb-8">
          {/* First Row: Property Distribution - Larger Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm 
              hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-medium mb-6">Property Distribution</h3>
            <div className="flex items-center justify-between">
              <ResponsiveContainer width="75%" height={400}>
                <PieChart>
                  <Pie
                    data={propertyTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={160}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {propertyTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ payload }) => {
                      if (payload && payload.length) {
                        return (
                          <div className="bg-white p-2 shadow-lg rounded-lg border">
                            <p className="font-medium" style={{ color: payload[0].payload.color }}>
                              {payload[0].name}
                            </p>
                            <p className="text-gray-600">
                              {payload[0].value}%
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="w-1/4">
                {propertyTypeData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="text-sm font-medium ml-auto">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Second Row: Monthly Performance Line Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm 
              hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Monthly Performance</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm text-gray-600">Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm text-gray-600">Value (Cr)</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                />
                <YAxis
                  yAxisId="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                />
                <Tooltip
                  content={({ payload, label }) => {
                    if (payload && payload.length) {
                      return (
                        <div className="bg-white p-3 shadow-lg rounded-lg border">
                          <p className="font-medium mb-2">{label}</p>
                          <p className="text-red-500">
                            Listings: {payload[0].value}
                          </p>
                          <p className="text-blue-500">
                            Value: ₹{payload[1].value}Cr
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="listings"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Third Row: Property Values Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm 
              hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-medium mb-6">Property Values by Category</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={propertyTypeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666' }}
                  tickFormatter={(value) => `₹${value / 100000}L`}
                />
                <Tooltip
                  content={({ payload, label }) => {
                    if (payload && payload.length) {
                      return (
                        <div className="bg-white p-3 shadow-lg rounded-lg border">
                          <p className="font-medium mb-2" style={{ color: payload[0].payload.color }}>
                            {label}
                          </p>
                          <p className="text-gray-600">
                            Value: ₹{payload[0].value / 100000}L
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="value"
                  radius={[4, 4, 0, 0]}
                >
                  {propertyTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Property Type Selection - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 
            bg-clip-text text-transparent">
            Select Property Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyTypes.map((type, index) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePropertyTypeClick(type.id)}
                className={`relative overflow-hidden text-left p-6 rounded-2xl shadow-sm 
                  backdrop-blur-sm transition-all duration-300 
                  bg-gradient-to-br ${type.bgGradient} 
                  ${propertyType === type.id && showForm
                    ? `ring-2 ring-offset-2 ring-${type.color}-500 shadow-lg shadow-${type.color}-500/20`
                    : 'hover:shadow-lg'}`}
              >
                {/* Background Pattern */}
                <div className="absolute right-0 top-0 -mt-4 -mr-4 w-32 h-32 
                  bg-white/10 rounded-full blur-3xl transform rotate-45" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${type.iconBg}`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className={`w-5 h-5 text-${type.color}-500 
                      transform transition-transform duration-300 
                      ${propertyType === type.id && showForm ? 'rotate-90' : ''}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className={`text-lg font-bold text-${type.color}-700`}>
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: propertyType === type.id && showForm ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-0 left-0 h-1 bg-${type.color}-500/50`}
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Form Section */}
        {propertyType && showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Add {propertyTypes.find(t => t.id === propertyType)?.title}</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-red-500 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-8">
              {renderPropertyForm()}
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AddProperties;

