import React, { useState } from 'react';
import { Eye, Pencil, Trash2, ChevronDown, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrders, setSelectedOrders] = useState([]);

  const orders = [
    {
      id: 1,
      customer: {
        name: 'Daavid Nummi',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      purchaseDate: '02/01/2023',
      contact: '+231 06-75820711',
      propertyType: 'Residential',
      amount: '$2,890,123',
      properties: '123 Maple St, 456 Oak Ave',
      status: 'Paid'
    },
    {
      id: 2,
      customer: {
        name: 'Sinikka Penttinen',
        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      purchaseDate: '10/02/2023',
      contact: '+231 47-23456789',
      propertyType: 'Commercial',
      amount: '$2,678,901',
      properties: '789 Pine Blvd',
      status: 'Paid'
    },
    // ... add more orders as shown in the image
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedOrders(orders.map(order => order.id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectOrder = (orderId) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
    <div>
          <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Link to="/admin/dashboard" className="hover:text-red-500 transition-colors">
              Real Estate
            </Link>
            <span className="mx-2">›</span>
            <span>Orders</span>
          </div>
        </div>

        {/* Period Selector */}
        <div className="relative">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2.5 pr-10
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 cursor-pointer
              hover:border-gray-400 transition-colors"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Orders Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-red-500">
        <div className="p-6">
          {/* Table Header with Search and Filters */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">All Order List</h2>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-red-500 focus:border-red-500 w-64"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Filter Button */}
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg
                hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-red-500">
                  <th className="pb-4 font-medium pl-4">
                    <input
                      type="checkbox"
                      checked={selectedOrders.length === orders.length}
                      onChange={handleSelectAll}
                      className="rounded text-red-500 focus:ring-red-500 cursor-pointer mr-3"
                    />
                  </th>
                  <th className="pb-4 font-medium">Customer Photo & Name</th>
                  <th className="pb-4 font-medium">Purchase Date</th>
                  <th className="pb-4 font-medium">Contact</th>
                  <th className="pb-4 font-medium">Property Type</th>
                  <th className="pb-4 font-medium">Amount</th>
                  <th className="pb-4 font-medium">Purchase Properties</th>
                  <th className="pb-4 font-medium">Amount Status</th>
                  <th className="pb-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {orders.map((order) => (
                  <tr key={order.id}
                    className="text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    <td className="py-4 pl-4">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleSelectOrder(order.id)}
                        className="rounded text-red-500 focus:ring-red-500 cursor-pointer"
                      />
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          src={order.customer.photo}
                          alt={order.customer.name}
                          className="w-12 h-12 rounded-full mr-5"
                        />
                        <span>{order.customer.name}</span>
                      </div>
                    </td>
                    <td className="py-4">{order.purchaseDate}</td>
                    <td className="py-4">{order.contact}</td>
                    <td className="py-4">{order.propertyType}</td>
                    <td className="py-4">{order.amount}</td>
                    <td className="py-4">{order.properties}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs 
                        ${order.status === 'Paid' ? 'bg-green-100 text-green-600' :
                          order.status === 'Unpaid' ? 'bg-red-100 text-red-600' :
                            'bg-orange-100 text-orange-600'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex space-x-2">
                        <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors
                          group tooltip-trigger">
                          <Eye className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
                          <span className="tooltip">View Details</span>
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 transition-colors
                          group tooltip-trigger">
                          <Pencil className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
                          <span className="tooltip">Edit Order</span>
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors
                          group tooltip-trigger">
                          <Trash2 className="w-4 h-4 text-red-600 group-hover:text-red-700" />
                          <span className="tooltip">Delete Order</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Enhanced Pagination */}
          <div className="flex justify-between items-center mt-6">
            <span className="text-sm text-gray-500">
              Showing {orders.length} of {orders.length} orders
            </span>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <div className="flex gap-1">
                <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-500 
                  text-white font-medium">
                  1
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100
                  text-gray-600 font-medium transition-colors">
                  2
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100
                  text-gray-600 font-medium transition-colors">
                  3
                </button>
              </div>
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg
                transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;