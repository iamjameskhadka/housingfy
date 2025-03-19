import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Transactions from '../pages/Admin/Transactions';

import Analytics from '../pages/Admin/Dashboard/Analytics';
import Agent from '../pages/Admin/Dashboard/Agent';
import Customer from '../pages/Admin/Dashboard/Customer';

import AllProperties from '../pages/Admin/Properties/AllProperties';
import AddProperties from '../pages/Admin/Properties/AddProperties';
import PropertiesDetails from '../pages/Admin/Properties/PropertiesDetails';

import AllAgent from '../pages/Admin/Agents/AllAgent';
import AddAgent from '../pages/Admin/Agents/AddAgent';
import AgentDetails from '../pages/Admin/Agents/AgentDetails';

import AllCustomers from '../pages/Admin/Customers/AllCustomers';
import AddCustomers from '../pages/Admin/Customers/AddCustomers';
import CustomerDetails from '../pages/Admin/Customers/CustomerDetails';

import Orders from '../pages/Admin/Orders';

import Reviews from '../pages/Admin/Reviews';





import Login from '../pages/Admin/Authentication/Login';
import Register from '../pages/Admin/Authentication/Register';
import ForgotPassword from '../pages/Admin/Authentication/ForgotPassword';
// import LockScreen from '../pages/Admin/Authentication/LockScreen';

import Help from '../pages/Admin/Help';
import Setting from '../pages/Admin/Setting';

import Pricing from '../pages/Admin/Pricing';
import Schedule from '../pages/Admin/Schedule';


const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        {/* Dashboard */}
        <Route path="analytics" element={<Analytics />} />
        <Route path="agent" element={<Agent />} />
        <Route path="customer" element={<Customer />} />
        {/* Properties */}
        <Route path="properties" element={<AllProperties />} />
        <Route path="properties/add" element={<AddProperties />} />
        <Route path="properties/details" element={<PropertiesDetails />} />

        {/* Agents   */}
        <Route path="agents" element={<AllAgent />} />
        <Route path="agents/add" element={<AddAgent />} />
        <Route path="agents/details" element={<AgentDetails />} />

        {/* Customers */}
        <Route path="customers" element={<AllCustomers />} />
        <Route path="customers/add" element={<AddCustomers />} />
        <Route path="customers/details" element={<CustomerDetails />} />

        {/* orders */}
        <Route path="orders" element={<Orders />} />

        {/* Transactions */}
        <Route path="transactions" element={<Transactions />} />

        {/* reviews */}
        <Route path="reviews" element={<Reviews />} />





        {/* auth */}
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="auth/lock-screen" element={<LockScreen />} /> */}

        {/* help */}
        <Route path="help" element={<Help />} />

        {/* setting */}
        <Route path="settings" element={<Setting />} />

        {/* PRICING */}
        <Route path="pricing" element={<Pricing />} />

        {/* schedule */}
        <Route path="schedule" element={<Schedule />} />



        {/* Add more routes as needed */}
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes; 