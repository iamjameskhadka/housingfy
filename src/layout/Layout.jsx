import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from '../routes/Routers';

const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Header />}
      <main className="flex-grow relative">
        <div className="custom-scrollbar h-full overflow-y-auto">
          <Routers />
        </div>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default Layout;