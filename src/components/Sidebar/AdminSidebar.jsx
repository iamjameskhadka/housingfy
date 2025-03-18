import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, Building, User, ChevronDown,
  ClipboardList, MessageSquare, Inbox, FileText, UserCheck,
  CreditCard, Star, Settings, ShoppingBag, BarChart2,
  PieChart, UserPlus, Key, LogOut, HelpCircle, Bell,
  Briefcase, FileBarChart, Home, Mail, X
} from "lucide-react";
import navlogo from '../../assets/navlogo.png';

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isPropertiesOpen, setPropertiesOpen] = useState(false);
  const [isAgentsOpen, setAgentsOpen] = useState(false);
  const [isCustomersOpen, setCustomersOpen] = useState(false);
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);

  // Set the initial active item based on the current route
  const initialActiveItem = location.pathname.split('/').pop() || 'dashboard';
  const [activeItem, setActiveItem] = useState(initialActiveItem);

  const toggleProperties = () => setPropertiesOpen(!isPropertiesOpen);
  const toggleAgents = () => setAgentsOpen(!isAgentsOpen);
  const toggleCustomers = () => setCustomersOpen(!isCustomersOpen);
  const toggleDashboard = () => setDashboardOpen(!isDashboardOpen);
  const toggleAuth = () => setAuthOpen(!isAuthOpen);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Auto close other dropdowns when one is opened
  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  // Add this function to check if a menu item or its submenu is active
  const isMenuActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.submenu) {
      return item.submenu.some(subItem => location.pathname === subItem.path);
    }
    return false;
  };

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
      submenu: [
        { title: 'Analytics', path: '/admin/analytics', icon: <BarChart2 size={16} /> },
        { title: 'Agent', path: '/admin/agent', icon: <UserCheck size={16} /> },
        { title: 'Customer', path: '/admin/customer', icon: <User size={16} /> },
      ],
    },
    {
      title: 'Properties',
      path: '/admin/properties',
      icon: <Building className="h-5 w-5" />,
      submenu: [
        { title: 'All Properties', path: '/admin/properties', icon: <Home size={16} /> },
        { title: 'Add Property', path: '/admin/properties/add', icon: <FileBarChart size={16} /> },
        { title: 'Properties Details', path: '/admin/properties/details', icon: <ClipboardList size={16} /> },
      ],
    },
    {
      title: 'Agents',
      path: '/admin/agents',
      icon: <Users className="h-5 w-5" />,
      submenu: [
        { title: 'All Agents', path: '/admin/agents', icon: <Users size={16} /> },
        { title: 'Add Agent', path: '/admin/agents/add', icon: <UserPlus size={16} /> },
        { title: 'Agents Details', path: '/admin/agents/details', icon: <Briefcase size={16} /> },
      ],
    },
    {
      title: 'Customers',
      path: '/admin/customers',
      icon: <User className="h-5 w-5" />,
      submenu: [
        { title: 'All Customers', path: '/admin/customers', icon: <Users size={16} /> },
        { title: 'Add Customer', path: '/admin/customers/add', icon: <UserPlus size={16} /> },
        { title: 'Customers Details', path: '/admin/customers/details', icon: <ClipboardList size={16} /> },
      ],
    },
    {
      title: 'Orders',
      path: '/admin/orders',
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      title: 'Transactions',
      path: '/admin/transactions',
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: 'Reviews',
      path: '/admin/reviews',
      icon: <Star className="h-5 w-5" />,
    },

  ];

  const customItems = [
    {
      title: 'Authentication',
      path: '/admin/auth',
      icon: <Key className="h-5 w-5" />,
      submenu: [
        { title: 'Sign In', path: '/admin/auth/register', icon: <LogOut size={16} /> },
        { title: 'Login', path: '/admin/auth/login', icon: <UserCheck size={16} /> },
        { title: 'Forgot Password', path: '/admin/auth/forgot-password', icon: <Key size={16} /> },
      ],
    },
    {
      title: 'Settings',
      path: '/admin/settings',
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: 'Help Center',
      path: '/admin/help',
      icon: <HelpCircle className="h-5 w-5" />,
    },
  ];

  return (
    <div className="relative flex h-full">
      {/* Background Gradient Patterns */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-violet-200 to-violet-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Main Sidebar Container */}
      <div className={`admin-sidebar relative z-20 h-screen transition-all duration-300 
        backdrop-blur-md bg-white/70 shadow-lg border-r border-gray-100/50
        ${isOpen ? 'w-64' : 'w-16'} flex flex-col`}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0 sticky top-0 z-30 bg-gradient-to-b from-white/90 via-white/80 to-transparent backdrop-blur-md">
          <div className={`p-2.5 border-b border-red-500/10 ${!isOpen ? 'flex justify-center' : ''}`}>
            <Link to="/admin/analytics"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center">
                {isOpen ? (
                  <>
                    <div className="flex items-center mr-2">
                      <Home className="h-10 w-10 text-red-500" />
                    </div>
                    <img
                      src={navlogo}
                      alt="Logo"
                      className="w-25 h-8 object-contain"
                    />
                  </>
                ) : (
                  <Home className="h-7 w-7 text-red-500" />
                )}
              </div>
            </Link>

          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 sidebar-scroll">
          <div className="admin-sidebar-content px-4 py-6 space-y-8">
            {/* Menu Section */}
            <div className="admin-sidebar-item">
              {isOpen && (
                <h2 className="text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-600 
                  bg-clip-text text-transparent uppercase tracking-wider mb-4">
                  Menu
                </h2>
              )}

              <nav className="space-y-1">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => !isOpen && setHoveredItem(index)}
                    onMouseLeave={() => !isOpen && setHoveredItem(null)}
                  >
                    {!item.submenu ? (
                      <Link
                        to={item.path}
                        className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 
                          backdrop-blur-sm hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100/50
                          ${isMenuActive(item)
                            ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-500 shadow-sm'
                            : 'text-gray-600'} 
                          ${!isOpen && 'justify-center'}`}
                      >
                        <span className={`transition-transform duration-300 ${isOpen ? 'mr-3' : 'mr-0'} 
                          group-hover:scale-110`}>
                          {item.icon}
                        </span>
                        {isOpen && <span>{item.title}</span>}

                        {/* Tooltip for non-dropdown items when collapsed */}
                        {!isOpen && (
                          <div className="absolute left-full top-0 ml-2 px-2 py-1 bg-gray-800 text-white text-sm 
                            rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-300 whitespace-nowrap z-50">
                            {item.title}
                          </div>
                        )}
                      </Link>
                    ) : (
                      <>
                        <div
                          onClick={() => handleDropdownClick(item.title)}
                          className={`flex items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 
                            backdrop-blur-sm hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100/50
                            ${isMenuActive(item)
                              ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-500 shadow-sm'
                              : 'text-gray-600'}
                            ${!isOpen && 'justify-center'}`}
                        >
                          <span className={`transition-transform duration-300 ${isOpen ? 'mr-3' : 'mr-0'} 
                            group-hover:scale-110`}>
                            {item.icon}
                          </span>
                          {isOpen && (
                            <div className="flex items-center justify-between flex-1">
                              <span>{item.title}</span>
                              <ChevronDown className={`h-4 w-4 transition-transform duration-300 
                                ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                              />
                            </div>
                          )}

                          {/* Tooltip for dropdown items when collapsed */}
                          {!isOpen && (
                            <div className="absolute left-full top-0 ml-2 px-2 py-1 bg-gray-800 text-white text-sm 
                              rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                              transition-all duration-300 whitespace-nowrap z-50">
                              {item.title}
                            </div>
                          )}
                        </div>

                        {/* Updated Submenu Positioning */}
                        {((isOpen && activeDropdown === item.title) || (!isOpen && hoveredItem === index)) && (
                          <div
                            className={`${isOpen
                              ? 'pl-12 py-2 space-y-1'
                              : 'absolute left-full top-0 ml-2 bg-white/80 backdrop-blur-md shadow-lg rounded-xl py-2 min-w-[200px]'}`}
                            style={!isOpen ? {
                              zIndex: 50,
                              marginTop: '-10px',
                            } : {}}
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                className={`flex items-center px-4 py-2 text-sm text-gray-600 
                                  hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100/50 rounded-lg
                                  transition-all duration-300 hover:translate-x-1
                                  ${location.pathname === subItem.path
                                    ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-500'
                                    : ''}`}
                              >
                                {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                                <span className="whitespace-nowrap">{subItem.title}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Custom Section */}
            <div className="admin-sidebar-item">
              <div className="relative pt-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r 
                  from-transparent via-gray-200/50 to-transparent" />

                {isOpen && (
                  <h2 className="text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-600 
                    bg-clip-text text-transparent uppercase tracking-wider mb-4">
                    Custom
                  </h2>
                )}

                <nav className="space-y-1">
                  {customItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => !isOpen && setHoveredItem(`custom-${index}`)}
                      onMouseLeave={() => !isOpen && setHoveredItem(null)}
                    >
                      {!item.submenu ? (
                        <Link
                          to={item.path}
                          className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 
                            backdrop-blur-sm hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100/50
                            ${isMenuActive(item)
                              ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-500 shadow-sm'
                              : 'text-gray-600'}
                            ${!isOpen && 'justify-center'}`}
                        >
                          <span className={`transition-transform duration-300 ${isOpen ? 'mr-3' : 'mr-0'} 
                            group-hover:scale-110`}>
                            {item.icon}
                          </span>
                          {isOpen && <span>{item.title}</span>}

                          {/* Tooltip for non-dropdown items when collapsed */}
                          {!isOpen && (
                            <div className="absolute left-full top-0 ml-2 px-2 py-1 bg-gray-800 text-white text-sm 
                              rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                              transition-all duration-300 whitespace-nowrap z-50">
                              {item.title}
                            </div>
                          )}
                        </Link>
                      ) : (
                        <>
                          <div
                            onClick={() => handleDropdownClick(`custom-${item.title}`)}
                            className={`flex items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 
                              backdrop-blur-sm hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100/50
                              ${isMenuActive(item)
                                ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-500 shadow-sm'
                                : 'text-gray-600'}
                              ${!isOpen && 'justify-center'}`}
                          >
                            <span className={`transition-transform duration-300 ${isOpen ? 'mr-3' : 'mr-0'} 
                              group-hover:scale-110`}>
                              {item.icon}
                            </span>
                            {isOpen && (
                              <div className="flex items-center justify-between flex-1">
                                <span>{item.title}</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 
                                  ${activeDropdown === `custom-${item.title}` ? 'rotate-180' : ''}`}
                                />
                              </div>
                            )}

                            {/* Tooltip for dropdown items when collapsed */}
                            {!isOpen && (
                              <div className="absolute left-full top-0 ml-2 px-2 py-1 bg-gray-800 text-white text-sm 
                                rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                transition-all duration-300 whitespace-nowrap z-50">
                                {item.title}
                              </div>
                            )}
                          </div>

                          {/* Updated Custom Submenu Positioning */}
                          {((isOpen && activeDropdown === `custom-${item.title}`) || (!isOpen && hoveredItem === `custom-${index}`)) && (
                            <div
                              className={`${isOpen
                                ? 'pl-12 py-2 space-y-1'
                                : 'absolute left-full top-0 ml-2 bg-white/80 backdrop-blur-md shadow-lg rounded-xl py-2 min-w-[200px]'}`}
                              style={!isOpen ? {
                                zIndex: 50,
                                marginTop: '-10px',
                              } : {}}
                            >
                              {item.submenu?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className={`flex items-center px-4 py-2 text-sm text-gray-600 
                                    hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100/50 rounded-lg
                                    transition-all duration-300 hover:translate-x-1
                                    ${location.pathname === subItem.path
                                      ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-500'
                                      : ''}`}
                                >
                                  {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                                  <span className="whitespace-nowrap">{subItem.title}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
