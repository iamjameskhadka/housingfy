import React, { useState } from 'react';
import { Eye, Pencil, Trash2, ChevronDown, Search, Filter, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReviews, setSelectedReviews] = useState([]);

  const reviews = [
    {
      id: 1,
      property: {
        name: 'Dvilla Residences Batu',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      date: '15/03/2023',
      customerName: 'Adriana G. Faust',
      propertyAddress: '390 Main Rd Mandeni',
      rating: 4.5,
      title: 'Best For Family Living',
      review: 'The property was exactly as described and the buying process was smooth and hassle-free.',
      status: 'Published'
    },
    {
      id: 2,
      property: {
        name: 'PIK Villa House',
        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      date: '20/03/2023',
      customerName: 'John N. Mazza',
      propertyAddress: '27 Ireland St Sabie',
      rating: 3.5,
      title: 'Best In Low Price',
      review: 'Great experience overall, but there were a few delays in communication.',
      status: 'Pending'
    },
    // Add more reviews as needed
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedReviews(reviews.map(review => review.id));
    } else {
      setSelectedReviews([]);
    }
  };

  const handleSelectReview = (reviewId) => {
    setSelectedReviews(prev =>
      prev.includes(reviewId)
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  const handleEdit = (reviewId) => {
    console.log('Edit review:', reviewId);
    // Add your edit logic here
  };

  const handleDelete = (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      console.log('Delete review:', reviewId);
      // Add your delete logic here
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating)
          ? 'fill-yellow-400 text-yellow-400'
          : index < rating
            ? 'fill-yellow-400 text-yellow-400 opacity-50'
            : 'text-gray-300'
          }`}
      />
    ));
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Reviews</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Link to="/admin/dashboard" className="hover:text-red-500 transition-colors">
              Real Estate
            </Link>
            <span className="mx-2">›</span>
            <span>Reviews</span>
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

      {/* Reviews Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-red-500">
        <div className="p-6">
          {/* Table Header with Search and Filters */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">All Reviews</h2>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reviews..."
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
                      checked={selectedReviews.length === reviews.length}
                      onChange={handleSelectAll}
                      className="rounded text-red-500 focus:ring-red-500 cursor-pointer"
                    />
                  </th>
                  <th className="pb-4 font-medium">Properties Photo & Name</th>
                  <th className="pb-4 font-medium">Date</th>
                  <th className="pb-4 font-medium">Customer Name</th>
                  <th className="pb-4 font-medium">Property Address</th>
                  <th className="pb-4 font-medium">Rating & Review</th>
                  <th className="pb-4 font-medium">Status</th>
                  <th className="pb-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reviews.map((review) => (
                  <tr key={review.id}
                    className="text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    <td className="py-4 pl-4">
                      <input
                        type="checkbox"
                        checked={selectedReviews.includes(review.id)}
                        onChange={() => handleSelectReview(review.id)}
                        className="rounded text-red-500 focus:ring-red-500 cursor-pointer mr-3"
                      />
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <img
                          src={review.property.photo}
                          alt={review.property.name}
                          className="w-12 h-12 object-cover rounded-full mr-5"
                        />
                        <span className="font-medium">{review.property.name}</span>
                      </div>
                    </td>
                    <td className="py-4">{review.date}</td>
                    <td className="py-4">{review.customerName}</td>
                    <td className="py-4">{review.propertyAddress}</td>
                    <td className="py-4">
                      <div>
                        {/* Stars and Rating */}
                        <div className="flex items-center gap-1 mb-2">
                          {renderStars(review.rating)}
                          <span className="ml-2">{review.rating}/5</span>
                        </div>

                        {/* Title and Review */}
                        <div>
                          <div className="font-medium text-gray-800">{review.title}</div>
                          <p className="text-gray-500 text-sm truncate mt-1 max-w-[200px]">
                            {review.review}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs 
                        ${review.status === 'Published' ? 'bg-green-100 text-green-600' :
                          'bg-orange-100 text-orange-600'}`}>
                        {review.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex space-x-2">
                        <button
                          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors
                            group tooltip-trigger"
                        >
                          <Eye className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
                          <span className="tooltip">View Details</span>
                        </button>
                        <button
                          onClick={() => handleEdit(review.id)}
                          className="p-1.5 rounded-lg hover:bg-blue-50 transition-colors
                            group tooltip-trigger"
                        >
                          <Pencil className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
                          <span className="tooltip">Edit Review</span>
                        </button>
                        <button
                          onClick={() => handleDelete(review.id)}
                          className="p-1.5 rounded-lg hover:bg-red-50 transition-colors
                            group tooltip-trigger"
                        >
                          <Trash2 className="w-4 h-4 text-red-600 group-hover:text-red-700" />
                          <span className="tooltip">Delete Review</span>
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
              Showing {reviews.length} of {reviews.length} reviews
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

export default Reviews;
