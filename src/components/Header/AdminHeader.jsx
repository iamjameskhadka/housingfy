import React, { useState, useMemo } from 'react';
import { Search, Bell, Sun, Menu, Settings, User, Calendar, DollarSign, HelpCircle, Lock, LogOut } from "lucide-react"; // Import icons
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const AdminHeader = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = useMemo(() => [
    { id: 1, message: "New message from John", time: "2 mins ago" },
    { id: 2, message: "Your appointment is confirmed", time: "1 hour ago" },
    { id: 3, message: "New comment on your post", time: "3 hours ago" },
  ], []);

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
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-red-500 bg-white px-4 md:px-6  rounded-lg">
      <div className="flex items-center gap-2">
        <button onClick={toggleSidebar} className="p-2 text-gray-500 hover:text-red-500" aria-label="Toggle Sidebar">
          <Menu className="h-8 w-8 cursor-pointer" />
        </button>
        <form onSubmit={handleSearch} className="relative w-full max-w-[300px]">
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
        <button className="relative p-2 text-gray-500 hover:text-red-500" aria-label="Notifications" onClick={toggleNotifications}>
          <Bell className="h-5 w-5" />
          {notifications.length > 0 && (
            <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">{notifications.length}</span>
          )}
        </button>
        {showNotifications && (
          <div className="absolute right-5 mt-78 w-48 bg-white rounded-md shadow-lg z-50">
            {notifications.map((notification) => (
              <div key={notification.id} className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                <p>{notification.message}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            ))}
          </div>
        )}
        <button className="p-2 text-gray-500 hover:text-red-500" aria-label="Toggle Dark Mode">
          <Sun className="h-5 w-5" />
        </button>
        <button className="p-2 text-gray-500 hover:text-red-500" aria-label="Settings">
          <Settings className="h-5 w-5" />
        </button>
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center" aria-label="Profile Menu">
            <img src={logo} alt="Profile" className="h-8 w-8 rounded-full" />
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
              <div className="px-4 py-2 text-gray-700">Welcome Gaston!</div>
              <Link to="/schedules" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Calendar className="mr-2 h-4 w-4" />
                My Schedules
              </Link>
              <Link to="/pricing" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <DollarSign className="mr-2 h-4 w-4" />
                Pricing
              </Link>
              <Link to="/help" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </Link>
              <Link to="/lock-screen" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <Lock className="mr-2 h-4 w-4" />
                Lock Screen
              </Link>
              <hr />
              <Link to="/logout" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
