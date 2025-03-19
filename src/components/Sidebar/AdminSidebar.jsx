import React, { useState, useEffect, useRef } from 'react';
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const sidebarRef = useRef(null);

  // Set the initial active item based on the current route
  const initialActiveItem = location.pathname.split('/').pop() || 'dashboard';
  const [activeItem, setActiveItem] = useState(initialActiveItem);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const position = sidebarRef.current.scrollTop;
        setScrollPosition(position);
      }
    };

    const sidebarElement = sidebarRef.current;
    if (sidebarElement) {
      sidebarElement.addEventListener('scroll', handleScroll);
      return () => {
        sidebarElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

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
      ],
    },
    {
      title: 'Agents',
      path: '/admin/agents',
      icon: <Users className="h-5 w-5" />,
      submenu: [
        { title: 'All Agents', path: '/admin/agents', icon: <Users size={16} /> },
        { title: 'Add Agent', path: '/admin/agents/add', icon: <UserPlus size={16} /> },
      ],
    },
    {
      title: 'Customers',
      path: '/admin/customers',
      icon: <User className="h-5 w-5" />,
      submenu: [
        { title: 'All Customers', path: '/admin/customers', icon: <Users size={16} /> },
        { title: 'Add Customer', path: '/admin/customers/add', icon: <UserPlus size={16} /> },
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

  // Calculate background opacity based on scroll position
  const headerBgClass = scrollPosition > 20
    ? `bg-white/95 backdrop-blur-md shadow-sm border-b border-red-500/10`
    : 'bg-gradient-to-b from-white/90 via-white/80 to-transparent backdrop-blur-md';

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-white shadow-lg transition-all duration-300 ease-in-out rounded-lg
        ${isOpen ? 'w-64' : 'w-20'} ${!isOpen ? 'overflow-visible' : 'overflow-hidden'}`}>
      {/* Logo Section */}
      <div className={`flex-shrink-0 ${headerBgClass}`}>
        <div className={`p-2.5 border-b border-red-500 rounded-lg mt-7 ${!isOpen ? 'flex justify-center' : ''}`}>
          <Link to="/admin/analytics"
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center -mt-5">
              {isOpen ? (
                <img
                  src={navlogo}
                  alt="Logo"
                  className="w-30 h-10 object-contain"
                />
              ) : (
                <Home className="h-7 w-7 text-red-500" />
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={sidebarRef}
        className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar"
      >
        <div className="px-4 py-6 space-y-8">
          {/* Menu Section */}
          <div>
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
          <div>
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
    </aside>
  );
};

export default AdminSidebar;
