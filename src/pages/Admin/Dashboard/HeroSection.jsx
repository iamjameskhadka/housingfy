import React, { useState } from 'react';
import { Line } from 'react-chartjs-2'; // Import Line chart from Chart.js
import { ChevronDown } from "lucide-react"; // Import the ChevronDown icon

const HeroSection = () => {
  const [isSalesFunnelOpen, setSalesFunnelOpen] = useState(false);
  const [isRevenueSourcesOpen, setRevenueSourcesOpen] = useState(false);

  const toggleSalesFunnel = () => setSalesFunnelOpen(!isSalesFunnelOpen);
  const toggleRevenueSources = () => setRevenueSourcesOpen(!isRevenueSourcesOpen);

  // Sample data for the charts
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        data: [20000, 19000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Expenses',
        data: [15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6 mt-12">
      <h1 className="text-3xl font-bold">Analytics</h1>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">No. of Properties</h2>
          <p className="text-2xl font-bold">2,854</p>
          <span className="text-green-500">↑ 7.34%</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Reg. Agents</h2>
          <p className="text-2xl font-bold">705</p>
          <span className="text-green-500">↑ 76.89%</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Customers</h2>
          <p className="text-2xl font-bold">9,431</p>
          <span className="text-red-500">↓ 45.00%</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">$78.3M</p>
          <span className="text-green-500">↑ 8.76%</span>
        </div>
      </div>

      {/* Sales Funnel Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-md cursor-pointer" onClick={toggleSalesFunnel}>
          <h2 className="text-xl font-semibold">Sales Funnel</h2>
          <ChevronDown className={`h-4 w-4 transition-transform ${isSalesFunnelOpen ? 'rotate-180' : ''}`} />
        </div>
        {isSalesFunnelOpen && (
          <div className="ml-4">
            <Line data={salesData} />
          </div>
        )}
      </div>

      {/* Revenue Sources Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-md cursor-pointer" onClick={toggleRevenueSources}>
          <h2 className="text-xl font-semibold">Revenue Sources</h2>
          <ChevronDown className={`h-4 w-4 transition-transform ${isRevenueSourcesOpen ? 'rotate-180' : ''}`} />
        </div>
        {isRevenueSourcesOpen && (
          <div className="ml-4">
            <Line data={revenueData} />
          </div>
        )}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Properties</h2>
          <p className="text-2xl font-bold">2,854</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Registered Agents</h2>
          <p className="text-2xl font-bold">705</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Customers</h2>
          <p className="text-2xl font-bold">9,431</p>
        </div>
      </div>
      {/* Add charts and other analytics here */}
    </div>
  );
};

export default HeroSection; 