import { useState } from 'react';
import PropertyCard from './PropertyCard';
import FilterSection from './Filter';
import { Link } from 'react-router-dom';

// Mock data for PG listings
const pgListings = [
  {
    id: '8a9f93189467e9ff01946808f15f0375',
    title: 'PG for Boys in Katrap',
    location: 'Katrap Badlapur, Maharashtra 421503 India, Katrap',
    forGender: 'Boys',
    deposit: 1,
    rent: 5000,
    roomType: 'Shared',
    preferredTenants: 'Any',
    postedDaysAgo: 21,
    foodFacility: 'Not Available',
    gateClosingTime: '11:30 PM',
    images: [
      'https://ext.same-assets.com/1518125001/556766328.jpeg',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop'
    ]
  },
  {
    id: '8a9fa783955f1c6e01955f5d13900dbe',
    title: 'PG for Boys in Vangani',
    location: 'Vangani Near pani tanki, Vangani',
    forGender: 'Boys',
    deposit: 6000,
    rent: 2500,
    roomType: 'Single',
    preferredTenants: 'Any',
    postedDaysAgo: 18,
    foodFacility: 'Not Available',
    gateClosingTime: 'Not Provided',
    images: [
      'https://ext.same-assets.com/1518125001/498348345.jpeg',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop'
    ]
  },
  {
    id: '8a9f8e4391599223019159a643270823',
    title: 'PG for Girls in Badlapur',
    location: 'Rameshwadi Rd near Bhagwati Hospital, Badlapur',
    forGender: 'Girls',
    deposit: 20000,
    rent: 2000,
    roomType: 'Shared',
    preferredTenants: 'Any',
    postedDaysAgo: 22,
    foodFacility: 'Not Available',
    gateClosingTime: 'Not Provided',
    images: [
      'https://ext.same-assets.com/80099309/2769420221.woff2',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1964&auto=format&fit=crop'
    ]
  }
];

export default function PropertyList() {
  const [sortBy, setSortBy] = useState('NoBroker Rank');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Main Content */}
      <div className="w-full">
        <div className="bg-white rounded-lg shadow-sm mt-6">
          {/* Breadcrumb & Sort section */}
          <div className="p-4 border-b border-red-500">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <a href="#" className="hover:text-red-500">Home</a>
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-red-500">Mumbai</a>
              <span className="mx-2">/</span>
              <span>Muuli Garaj</span>
            </div>

            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                3 - Paying Guest - PG in Muuli Garaj | Hostels in Muuli Garaj
              </h1>
              <div className="flex items-center">
                <span className="text-sm mr-2">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                >
                  <option>Housingfy Rank</option>
                  <option>Rent - Low to High</option>
                  <option>Rent - High to Low</option>
                  <option>Recently Added</option>
                </select>
              </div>
            </div>
          </div>

          {/* Property listings */}
          <Link to='/display-properties/details'>
            <div className="p-4">
              <div className="divide-y divide-red-500  mx-auto">
                {pgListings.map(property => (
                  <div key={property.id} className="py-6 first:pt-0 last:pb-0">
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            </div>
          </Link>

          {/* Showing properties near section */}
          <div className="max-w-[1400px] mx-auto">
            <div className="p-4 bg-gray-50 flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-full mr-3">
                <img
                  src="https://ext.same-assets.com/4095440380/3906646564.png"
                  alt="Location"
                  className="w-5 h-5"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Showing properties near <span className="font-bold">Muuli Garaj</span></p>
              </div>
            </div>

            {/* Didn't find section */}
            <div className="p-4 bg-gray-50 border-t">
              <h4 className="font-medium text-lg mb-2">Didn't find what you are looking for?</h4>
              <div>
                <p className="mb-2 text-sm">Explore nearby localities</p>
                <div className="flex flex-wrap gap-2">
                  {['Badlapur', 'Katrap, Mumbai', 'Sanewadi, Badlapur', 'Station Pada, Mumbai', 'Shirgaon, Badlapur'].map((locality, index) => (
                    <a key={index} href="#" className="text-blue-600 hover:text-blue-800 bg-blue-50 px-2 py-1 rounded text-sm">
                      {locality}
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-sm">or</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-sm">
                  Post Your Requirement
                </button>
                <p className="text-xs text-gray-500 mt-2">and we will send an email with matching properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <FilterSection
        isOpen={isFilterOpen}
        onToggle={() => setIsFilterOpen(!isFilterOpen)}
      />
    </div>
  );
}
