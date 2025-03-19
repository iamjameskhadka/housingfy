import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminHeader from '../components/Header/AdminHeader'; // Keep AdminHeader for admin routes
import AdminSidebar from '../components/Sidebar/AdminSidebar'; // Adjust the path as necessary
import Header from '../components/Header/Header'; // Import the main Header
import Footer from '../components/Footer/Footer'; // Import the main Footer

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Check if the current path starts with '/admin'
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Check if the current path is an authentication route
  const isAuthRoute =
    location.pathname.includes('/admin/auth/login') ||
    location.pathname.includes('/admin/auth/register') ||
    location.pathname.includes('/admin/auth/forgot-password');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
      {/* Show main Header only if not an admin route */}
      {!isAdminRoute && <Header />}

      {/* Admin Sidebar - only shown on admin routes that are not auth routes */}
      {isAdminRoute && !isAuthRoute && <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

      {/* Admin Header - only shown on admin routes that are not auth routes */}
      {isAdminRoute && !isAuthRoute && <AdminHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${isAdminRoute && !isAuthRoute
          ? `pt-20 px-4 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`
          : ''
          }`}
      >
        {children}
      </main>

      {/* Show main Footer only if not an admin route */}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default AdminLayout;
