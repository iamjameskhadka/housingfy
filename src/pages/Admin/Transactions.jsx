import React, { useState } from 'react';
import { Eye, Pencil, Trash2, ChevronDown, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Add these imports for card icons
import visaIcon from '../../assets/cards/visa.svg';
import mastercardIcon from '../../assets/cards/mastercard.svg';
import paypalIcon from '../../assets/cards/paypal.svg';

const Transactions = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTransactions, setSelectedTransactions] = useState([]);

  const transactions = [
    {
      id: 'TXN-341220',
      customer: {
        name: 'Ray C. Nichols',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      date: '05/01/2023',
      amount: '$13,987',
      paymentMethod: {
        type: 'Mastercard **** 3467',
        category: 'Card Payment',
        icon: mastercardIcon
      },
      agentName: 'Michael A. Miner',
      investedProperty: 'W. straat 102 DK Deventer',
      status: 'Completed'
    },
    {
      id: 'TXN-547891',
      customer: {
        name: 'Barbara A. Woods',
        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      date: '14/02/2023',
      amount: '$11,345',
      paymentMethod: {
        type: 'Visa card **** 4722',
        category: 'Card Payment',
        icon: visaIcon
      },
      agentName: 'Theresa T. Brose',
      investedProperty: 'Isaac Tinonplein 100',
      status: 'Completed'
    },
    {
      id: 'TXN-230477',
      customer: {
        name: 'Robert Mendoza',
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      date: '23/03/2023',
      amount: '$16,789',
      paymentMethod: {
        type: 'Mastercard **** 7263',
        category: 'Card Payment',
        icon: mastercardIcon
      },
      agentName: 'Walter L. Calab',
      investedProperty: '123 Maple St, 456 Oak Ave',
      status: 'Cancelled'
    },
    {
      id: 'TXN-189348',
      customer: {
        name: 'Rita Correa',
        photo: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      date: '11/04/2023',
      amount: '$14,567',
      paymentMethod: {
        type: 'gailsoneil31@rhyta.com',
        category: 'Bank Payment',
        icon: paypalIcon
      },
      agentName: 'Olive Mize',
      investedProperty: '3822 DT Amersfoort',
      status: 'Pending'
    },
    // Add more transactions as needed
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedTransactions(transactions.map(txn => txn.id));
    } else {
      setSelectedTransactions([]);
    }
  };

  const handleSelectTransaction = (txnId) => {
    setSelectedTransactions(prev =>
      prev.includes(txnId)
        ? prev.filter(id => id !== txnId)
        : [...prev, txnId]
    );
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Transactions</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Link to="/admin/dashboard" className="hover:text-red-500 transition-colors">
              Real Estate
            </Link>
            <span className="mx-2">›</span>
            <span>Transactions</span>
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

      {/* Transactions Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-red-500">
        <div className="p-6">
          {/* Table Header with Search and Filters */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">All Transactions List</h2>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search transactions..."
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
                      checked={selectedTransactions.length === transactions.length}
                      onChange={handleSelectAll}
                      className="rounded text-red-500 focus:ring-red-500 cursor-pointer mr-3"
                    />
                  </th>
                  <th className="pb-4 font-medium">Transactions ID</th>
                  <th className="pb-4 font-medium">Customer Photo & Name</th>
                  <th className="pb-4 font-medium">Date</th>
                  <th className="pb-4 font-medium">Amount</th>
                  <th className="pb-4 font-medium">Payment Method</th>
                  <th className="pb-4 font-medium">Agent Name</th>
                  <th className="pb-4 font-medium">Invested Property</th>
                  <th className="pb-4 font-medium">Status</th>
                  <th className="pb-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}
                    className="text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    <td className="py-4 pl-4">
                      <input
                        type="checkbox"
                        checked={selectedTransactions.includes(transaction.id)}
                        onChange={() => handleSelectTransaction(transaction.id)}
                        className="rounded text-red-500 focus:ring-red-500 cursor-pointer mr-3"
                      />
                    </td>
                    <td className="py-4 text-blue-600 font-medium">{transaction.id}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          src={transaction.customer.photo}
                          alt={transaction.customer.name}
                          className="w-12 h-12 rounded-full mr-5"
                        />
                        <span>{transaction.customer.name}</span>
                      </div>
                    </td>
                    <td className="py-4">{transaction.date}</td>
                    <td className="py-4 font-medium">{transaction.amount}</td>
                    <td className="py-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <img
                            src={transaction.paymentMethod.icon}
                            alt={transaction.paymentMethod.type}
                            className="h-6 w-auto"
                          />
                          <span className="font-medium">{transaction.paymentMethod.type}</span>
                        </div>
                        <span className="text-sm text-gray-500 ml-8">{transaction.paymentMethod.category}</span>
                      </div>
                    </td>
                    <td className="py-4">{transaction.agentName}</td>
                    <td className="py-4">{transaction.investedProperty}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs 
                        ${transaction.status === 'Completed' ? 'bg-green-100 text-green-600' :
                          transaction.status === 'Cancelled' ? 'bg-red-100 text-red-600' :
                            'bg-orange-100 text-orange-600'}`}>
                        {transaction.status}
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
                          <span className="tooltip">Edit Transaction</span>
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors
                          group tooltip-trigger">
                          <Trash2 className="w-4 h-4 text-red-600 group-hover:text-red-700" />
                          <span className="tooltip">Delete Transaction</span>
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
              Showing {transactions.length} of {transactions.length} transactions
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

export default Transactions;
