import { useState } from "react";
import { MapPin } from "lucide-react";
import Land from '../../components/Lands/Land'
import { Link } from "react-router-dom";

const plotData = [
  {
    id: 1,
    name: "Itahari Plotting",
    image: "https://static.vecteezy.com/system/resources/previews/014/445/766/non_2x/land-plot-for-building-house-aerial-view-land-field-with-pins-pin-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-or-house-expand-the-city-suburb-free-photo.JPG",
    status: "Sale",
    price: "Rs. 2,50,000 / Dhur",
    location: "Itahari, Sunsari, Koshi, Nepal",
    bgColor: "bg-green-500",
  },
  {
    id: 2,
    name: "Biratnagar Plotting",
    image: "https://img.freepik.com/free-photo/land-plot-with-nature-landscape-location-pin_23-2149937913.jpg",
    status: "Sold",
    price: "Rs. 2,50,000 / Dhur",
    location: "Biratnagar, Koshi, Nepal",
    bgColor: "bg-red-500",
  },
  {
    id: 3,
    name: "Dharan Plotting",
    image: "https://media.istockphoto.com/id/1338058166/photo/land-or-landscape-of-green-field-in-aerial-view-and-home-or-house-icon.jpg?s=612x612&w=0&k=20&c=c-VlOIv3Y18NyZ5qLDZbaNNcapXo2U3yctzf8KkltN0=",
    status: "Sale",
    price: "Rs. 2,50,000 / Dhur",
    location: "Dharan, Koshi, Nepal",
    bgColor: "bg-green-500",
  },
  {
    id: 4,
    name: "Taplejung Plotting",
    image: "https://www.99acres.com/microsite/articles/files/2019/09/plottips.png",
    status: "Sale",
    price: "Rs. 2,80,000 / Dhur",
    location: "Damak, Jhapa, Koshi, Nepal",
    bgColor: "bg-green-500",
  },
];

const Plot = () => {
  const [showAll, setShowAll] = useState(false);

  // Limit the number of plots shown initially
  const displayedPlots = showAll ? plotData : plotData.slice(0, 3);

  return (
    <section className="px-6 py-8">
      {/* Section Title */}
      <div className="mt-6  px-4 gap-3 flex justify-start items-center">
        <h2 className="text-xl  font-bold">Plots</h2>
        {plotData.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-red-600 transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        )}
      </div>

      {/* Show message if only three plots exist */}
      {plotData.length === 3 && (
        <p className="text-gray-500 px-4 mt-4">Only three plots are available.</p>
      )}

      {/* Grid Layout */}
      <Link to="/home-plots">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {displayedPlots.map((plot) => (
            <div
              key={plot.id}
              className="bg-white shadow-md rounded-xl overflow-hidden  p-5 lg:p-6 h-[520px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-[265px]">
                <img src={plot.image} alt="Plot" className="w-full h-full object-cover rounded-lg" />
                <span className={`absolute top-2 left-2 text-white text-sm px-3 py-1 rounded-md ${plot.bgColor}`}>
                  {plot.status}
                </span>
              </div>

              {/* Card Content (Left-Aligned) */}
              <div className="p-7 text-left">
                <h3 className="text-lg font-semibold">{plot.name}</h3>
                <p className="text-gray-800 font-semibold">{plot.price}</p>
                <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                  <MapPin size={16} />
                  <span>{plot.location}</span>
                </div>
                <p className="text-red-500 text-sm mt-1">Housingfy</p>
              </div>
            </div>
          ))}
        </div>
      </Link>
      <Land />
    </section>
  );
};

export default Plot;
