import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from '../routes/Routers';

const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLockScreen = location.pathname === '/lock-screen';

  // Don't show header and footer for admin routes or lock screen
  const shouldShowHeaderFooter = !isAdminRoute && !isLockScreen;

  return (
    <div className="flex flex-col min-h-screen">
      {shouldShowHeaderFooter && <Header />}
      <main className="flex-grow relative">
        <div className="custom-scrollbar h-full overflow-y-auto">
          <Routers />
        </div>
      </main>
      {shouldShowHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;