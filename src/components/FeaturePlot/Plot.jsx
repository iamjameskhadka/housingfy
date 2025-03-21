import { useState } from "react";
import { MapPin } from "lucide-react";
import Land from '../FeatureLand/Land'
import { Link } from "react-router-dom";

// Import projects data from Plots component
const projects = [
  {
    name: "Clover Leaf @ Prestige White Meadows",
    location: "Whitefield, Bangalore",
    price: "₹ 5.79* Crore Onwards",
    projectType: "Apartment",
    bedrooms: "3, 4 BHK",
    developmentSize: "28.5 Acres",
    totalUnits: "104 Units",
    img: "https://www.hiranandaniparks.com/blog/wp-content/uploads/2023/10/01_Is-buying-residential-plots-a-good-investment-in-Oragadam-Chennai.jpg",
    city: "Bangalore",
    status: "Sale",
  },
  {
    name: "Forest Hills @ The Prestige City",
    location: "Yogi Hills, Mulund, Mumbai",
    price: "₹ 3.79* Crore Onwards",
    projectType: "Apartment",
    bedrooms: "3, 4 BHK",
    developmentSize: "9 Acres",
    totalUnits: "316 Units",
    img: "https://is1-2.housingcdn.com/01c16c28/a64bfb19ad76eb3244efe62da0f03fbc/v0/fs/residential_plot-for-sale-poranki-Krishna-plot_view.jpg",
    status: 'New',
  },
  {
    name: "Prestige Pine Forest",
    location: "Whitefield, Bangalore",
    price: "₹ 8* Crore Onwards",
    projectType: "Apartment",
    bedrooms: "3, 4 BHK",
    developmentSize: "9 Acres",
    totalUnits: "316 Units",
    img: "https://www.wisdomproperties.com/web/assets/images/residential-plots/kalvoy.webp",
    city: "Bangalore",
    status: "Sold",
  },
];

const Plot = () => {
  // Remove unused state
  const featuredProjects = projects.slice(-3);

  return (
    <section className="py-8 px-4 md:px-6">
      {/* Section Title */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Features Plots</h2>
          <p className="text-sm text-gray-500 mt-1">Explore our premium plot properties</p>
        </div>
        <Link to="/plots">
          <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 flex items-center gap-2">
            View All Properties
          </button>
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredProjects.map((plot, index) => (
          <Link to='/plots/description' key={index}>
            <div className="bg-white shadow-md rounded-xl overflow-hidden h-[480px] transition-all duration-300 hover:scale-105 hover:shadow-xl">
              {/* Image Section */}
              <div className="relative h-[250px]">
                <img
                  src={plot.img}
                  alt={plot.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-lg font-medium">
                    {plot.status}
                  </span>
                  <span className="bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg">
                    {plot.developmentSize}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                {/* Property Details */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-lg font-semibold line-clamp-1 hover:text-red-500 transition-colors">
                    {plot.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin size={16} className="text-red-500" />
                    <span className="line-clamp-1">{plot.location}</span>
                  </div>
                </div>

                {/* Property Specs */}
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-gray-100">
                  <div>
                    <p className="text-gray-500 text-sm">Project Type</p>
                    <p className="font-medium">{plot.projectType}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Total Units</p>
                    <p className="font-medium">{plot.totalUnits}</p>
                  </div>
                </div>

                {/* Price and Brand */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting From</p>
                    <p className="text-lg font-semibold text-red-500">{plot.price}</p>
                  </div>
                  <span className="text-red-500 text-sm font-medium">Housingfy</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Add moderate spacing before Land component */}
      <div className="mt-8">
        <Land />
      </div>
    </section>
  );
};

export default Plot;
