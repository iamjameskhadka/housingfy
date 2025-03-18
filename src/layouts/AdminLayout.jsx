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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
      {/* Show main Header only if not an admin route */}
      {!isAdminRoute && <Header />}


      <div className="flex h-full">
        {/* Admin Sidebar - only shown on admin routes */}
        {isAdminRoute && <AdminSidebar isOpen={isSidebarOpen} />}

        <div className="flex-1 flex flex-col">
          {/* Admin Header - only shown on admin routes */}
          {isAdminRoute && <AdminHeader toggleSidebar={toggleSidebar} />}

          {/* Main Content */}
          <main className={`flex-1 overflow-x-hidden overflow-y-auto ${isAdminRoute ? 'p-4' : ''
            }`} style={{ isolation: 'isolate' }}>
            {children}
          </main>

          {/* Show main Footer only if not an admin route */}
          {!isAdminRoute && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
