import { MapPin, ArrowRight, Gift, Share2 } from 'lucide-react';

const QuickLinks = () => {
  // Nearby localities with more details
  const nearbyLocalities = [
    { name: 'Badlapur', type: 'PG', distance: '2.5 km' },
    { name: 'Katrap', type: 'PG', distance: '3.1 km' },
    { name: 'Sanewadi', type: 'PG', distance: '1.8 km' },
    { name: 'Station Pada', type: 'PG', distance: '2.9 km' },
    { name: 'Shirgaon', type: 'PG', distance: '3.5 km' },
    { name: 'Belavali', type: 'PG', distance: '4.2 km' }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Links Box */}
      <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Quick links</h2>
          <MapPin className="w-5 h-5 text-red-500" />
        </div>
        <h3 className="text-sm text-gray-600 mb-4">Popular locations near you</h3>
        <ul className="space-y-3">
          {nearbyLocalities.map((locality, index) => (
            <li key={index}>
              <a
                href="#"
                className="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <span className="text-sm font-medium text-red-500">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-red-500 transition-colors">
                      {locality.name}
                    </p>
                    <p className="text-xs text-gray-500">{locality.distance}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Home Cleaning Card
      <div className="bg-white rounded-lg shadow-sm p-4 relative overflow-hidden">
        <div className="mb-2">
          <p className="text-center uppercase font-medium text-gray-700">Home Cleaning</p>
          <p className="text-center text-xs text-gray-600">5 STAR RATED PARTNERS</p>
        </div>

        <div className="flex justify-center my-3">
          <img
            src="https://ext.same-assets.com/4095440380/338820817.png"
            alt="Home Cleaning"
            className="h-24"
          />
        </div>

        <div className="text-center mb-2">
          <p className="text-xs text-gray-600">UPTO</p>
          <p className="text-3xl font-bold text-yellow-500">60% off</p>
        </div>

        <div className="flex justify-center">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 text-sm w-full">
            BOOK NOW
          </button>
        </div>
      </div> */}

      {/* Moving Out Card */}
      <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-sm p-6 relative overflow-hidden group hover:shadow-md transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -translate-y-16 translate-x-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>

        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Moving out?</h3>
              <p className="text-sm text-gray-600">Share your current owner details</p>
            </div>
            <Gift className="w-6 h-6 text-red-500" />
          </div>

          <div className="flex items-center justify-center my-4">
            <img
              src="https://ext.same-assets.com/4095440380/1053127161.png"
              alt="Moving Out"
              className="h-24 object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="text-center mb-4">
            <p className="text-sm text-gray-600">Earn</p>
            <p className="text-2xl font-bold text-red-500">₹500</p>
            <p className="text-xs text-gray-500">for sharing owner details</p>
          </div>

          <button className="w-full bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 
            transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
            <Share2 className="w-4 h-4" />
            <span>Share Owner Details</span>
          </button>
        </div>
      </div>

      {/* Mobile Quick Links */}
      <div className="bg-white rounded-xl shadow-sm p-6 lg:hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Nearby Areas</h2>
          <MapPin className="w-5 h-5 text-red-500" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {nearbyLocalities.map((locality, index) => (
            <a
              key={`mobile-${index}`}
              href="#"
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-red-50 
                transition-colors duration-200 group"
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-red-500">{index + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-red-500 transition-colors">
                    {locality.name}
                  </p>
                  <p className="text-xs text-gray-500">{locality.distance}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickLinks