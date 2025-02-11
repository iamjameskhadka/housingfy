import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Plot from '../../components/Plots/Plot'

const projects = [
  {
    title: "58 Dhur Ploting Land",
    location: "Itahari, Sunsari, Nepal",
    price: "2,50,000 Per Dhur",
    details: "20 Dhur Plot | 15 Dhur Plot 2 | 10 Dhur Plot 3 | 13 Dhur Plot 4",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
  },
  {
    title: "25 Dhur Commercial Land",
    location: "Biratnagar, Morang, Nepal",
    price: "3,00,000 Per Dhur",
    details: "10 Dhur Plot | 8 Dhur Plot 2 | 7 Dhur Plot 3",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2luZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "100 Dhur Farm Land",
    location: "Damak, Jhapa, Nepal",
    price: "1,80,000 Per Dhur",
    details: "40 Dhur Plot | 30 Dhur Plot 2 | 30 Dhur Plot 3",
    image: "https://media.istockphoto.com/id/586355260/photo/melbourne-suburbs.jpg?s=612x612&w=0&k=20&c=Ihju0glbEV-GtVYL65H4lNM4PI6-lvNb8zD3pfWZH7M=",
  },
];

const FeaturedPro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-15 ">
      <h2 className="relative text-2xl font-semibold text-center mb-5 flex items-center justify-center">
        <span className="w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        <span className="px-4">FEATURED PROJECTS</span>
        <span className="w-100 h-[1px] bg-red-500 hidden sm:block"></span>
      </h2>


      <div className="relative overflow-hidden  shadow-lg">
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              {/* Image Placeholder */}
              <div
                className="h-[300px] sm:h-[400px] md:h-[550px] bg-cover bg-center relative"
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                {/* Project Info with Know More Button */}
                <div className="absolute bottom-4 left-4 right-4">
                  {/* Info Card */}
                  <div className="w-100 backdrop-blur-sm rounded-lg p-4 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-xs sm:text-sm mb-1">{project.location}</p>
                    <p className="text-sm sm:text-lg font-semibold mb-1">{project.price}</p>
                    <p className="text-xs opacity-90 line-clamp-2">{project.details}</p>
                  </div>

                  {/* Know More Button - Centered */}
                  <div className="flex justify-center mt-4 mb-4">
                    <button className=" backdrop-blur-sm text-black px-8 py-2.5 rounded-lg shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                      <a href="/know-more" className="text-inherit font-medium text-sm sm:text-base">
                        KNOW MORE
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-blur bg-opacity-80 backdrop-blur-md text-black  p-2 rounded-full hover:bg-red-500"
          onClick={() => setCurrentIndex((currentIndex - 1 + projects.length) % projects.length)}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-blur bg-opacity-80 backdrop-blur-md text-black p-2 rounded-full hover:bg-red-500"
          onClick={() => setCurrentIndex((currentIndex + 1) % projects.length)}
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-6 rounded-full transition-all ${currentIndex === index ? "bg-red-500" : "bg-gray-400"
                }`}
            ></span>
          ))}
        </div>

      </div>
      <Plot />
    </div>
  );
};

export default FeaturedPro;
