import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Bell, Sun, Menu, Settings, User, Calendar, DollarSign, HelpCircle, Lock, LogOut } from "lucide-react"; // Import icons
import { Link } from 'react-router-dom';
import me from '../../assets/me.png';

const AdminHeader = ({ toggleSidebar, isSidebarOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);
  const notificationsRef = useRef(null);

  const notifications = useMemo(() => [
    {
      id: 1,
      user: {
        name: "Josephine Thompson",
        avatar: "https://ui-avatars.com/api/?name=Josephine+Thompson&background=random"
      },
      message: "commented on admin panel \" Wow 🔥 ! this admin looks good and awesome design\"",
      time: "2 mins ago"
    },
    {
      id: 2,
      user: {
        name: "Donoghue Susan",
        avatar: "https://ui-avatars.com/api/?name=D+S&background=random"
      },
      message: "Hi, How are you? What about our next meeting",
      time: "1 hour ago"
    },
    {
      id: 3,
      user: {
        name: "Jacob Gines",
        avatar: "https://ui-avatars.com/api/?name=Jacob+Gines&background=random"
      },
      message: "Answered to your comment on the Minimal",
      time: "3 hours ago"
    },
  ], []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 right-0 z-40 flex h-16 items-center justify-between border-b border-red-500 
      bg-white/95 backdrop-blur-md px-4 md:px-6 rounded-lg shadow-sm transition-all duration-300
      left-0 ${isSidebarOpen ? 'lg:left-64 lg:w-[calc(100%-16rem)]' : 'lg:left-20 lg:w-[calc(100%-5rem)]'}`}>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-6 w-6 cursor-pointer" />
        </button>
        <form onSubmit={handleSearch} className="relative hidden md:block w-full max-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:border-red-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">

        {/* notification */}
        <div className="relative" ref={notificationsRef}>
          <button
            className="relative p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
            aria-label="Notifications"
            onClick={toggleNotifications}
          >
            <Bell className="h-5 w-5" />
            {notifications.length > 0 && (
              <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">{notifications.length}</span>
            )}
          </button>
          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-[#161C24] rounded-lg shadow-lg z-50 border border-gray-800 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-800 flex justify-between items-center">
                <h3 className="font-semibold text-base text-white">Notifications</h3>
                <button className="text-sm text-gray-400 hover:text-white transition-colors">
                  Clear All
                </button>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="px-4 py-3 hover:bg-gray-800/50 border-b border-gray-800 last:border-b-0 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={notification.user.avatar}
                        alt={notification.user.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-300">
                          <span className="font-medium text-white">{notification.user.name}</span>
                          {" "}
                          <span className="text-gray-400">{notification.message}</span>
                        </p>
                        <span className="text-xs text-gray-500 mt-1 block">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2.5 border-t border-gray-800 bg-gray-900/50">
                <Link
                  to="/notifications"
                  className="text-sm text-[#6B7280] hover:text-white block text-center transition-colors"
                >
                  View All Notification →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* mode */}
        <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 hidden sm:block" aria-label="Toggle Dark Mode">
          <Sun className="h-5 w-5" />
        </button>

        {/* setting */}
        <Link
          to="/admin/settings"
          className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 hidden sm:block"
          aria-label="Settings"
        >
          <Settings className="h-5 w-5" />
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center p-1.5 border border-transparent hover:border-red-100 rounded-full transition-all duration-200"
            aria-label="Profile Menu"
          >
            <img src={me} alt="Profile" className="h-10 w-10 rounded-full object-cover cursor-pointer" />
          </button>
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg z-50 border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-red-50 to-white">
                <p className="text-sm font-medium text-gray-900">Welcome James Khadka!</p>
                <p className="text-xs text-gray-500 mt-1">Admin</p>
              </div>
              <div className="py-1">
                <Link to="/admin/schedule" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <Calendar className="mr-3 h-4 w-4 text-gray-500" />
                  My Schedules
                </Link>
                <Link to="/admin/pricing" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <DollarSign className="mr-3 h-4 w-4 text-gray-500" />
                  Pricing
                </Link>
                <Link to="/admin/help" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <HelpCircle className="mr-3 h-4 w-4 text-gray-500" />
                  Help
                </Link>
                <Link to="/lock-screen" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <Lock className="mr-3 h-4 w-4 text-gray-500" />
                  Lock Screen
                </Link>
              </div>
              <div className="py-1 border-t border-gray-100 bg-gray-50">
                <Link to="/admin/auth/login" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  <LogOut className="mr-3 h-4 w-4" />
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
