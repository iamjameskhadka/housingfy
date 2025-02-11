import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Share2, CalendarCheck, MessageCircle, X } from "lucide-react";
import FeaturePro from "../components/FeatureProject/FeaturePro";
import x from '../assets/x.png'

const Home = () => {
  const [location, setLocation] = useState("Cities");
  const [showMenu, setShowMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  // Add this state for scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section >
      <div className="relative w-full  min-h-screen flex flex-col">

        {/* Background Image (Half Screen) */}
        <div className="relative w-full h-[80vh] sm:h-[60vh] md:h-[80vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://photos.zillowstatic.com/fp/cf62acca8ba8570d1a93f5a130b84c6a-cc_ft_960.jpg')" }}>

          {/* Search Box (Properly Positioned) */}
          <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-opacity-80 backdrop-blur-md p-3 md:p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-2 md:space-x-2 md:space-y-0 ">

            {/* Wrapper for Dropdown & Input */}
            <div className="flex w-full items-center justify-center space-x-2">

              {/* Location Dropdown */}
              <div className="relative w-1/3 md:w-auto">
                <button
                  className="bg-gray-200 px-4 py-2 rounded-md flex items-center font-semibold text-gray-800 w-full"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {location} <ChevronDown className="ml-2" size={16} />
                </button>

                {/* Dropdown Menu */}
                {showMenu && (
                  <ul className="absolute left-0 top-12 bg-white shadow-md rounded-md w-full md:w-40 text-gray-700">
                    {["Itahari", "Damak", "Biratnagar", "Kathmandu"].map((city) => (
                      <li
                        key={city}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => {
                          setLocation(city);
                          setShowMenu(false);
                        }}
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="3 localities Landmark"
                className="flex-1 px-1 pl-4 py-2 bg-white  rounded-md border focus:outline-none w-3/5 md:w-auto"
              />
            </div>

            {/* Search Button */}
            <button className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600 transition w-auto md:w-auto">
              Search
            </button>
          </div>
        </div>




        {/* Floating Options */}
        <div
          className={`
            fixed z-[1000] flex flex-col items-end space-y-2
            ${scrollPosition > 100
              ? 'bottom-20 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8'
              : 'xl:top-120 lg:top-250 lg:right-4 md:top-180 md:right-4 sm:bottom-6 sm:right-4 top-155 right-4'
            }
          `}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Floating Action Button */}
          <button
            className={`
              relative rounded-full shadow-lg transition-all duration-300 
              flex items-center justify-center bg-red-500
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
              hover:shadow-xl active:scale-95
              ${isOpen ? "rotate-45" : ""}
            `}
            aria-label="Toggle options menu"
          >
            <div className={`
              rounded-full flex items-center justify-center
              bg-blue-200 transition-all duration-300
              w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
              ${isOpen ? "bg-red-200" : "bg-blue-200"}
            `}>
              <span className="text-black text-3xl font-semibold">+</span>
            </div>
          </button>

          {/* Options Menu */}
          <div
            className={`
              absolute transition-all duration-300 
              ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
              ${scrollPosition > 100 ? "bottom-full mb-2" : "top-0 mt-16"}
              right-0
            `}
          >
            <div className=" backdrop-blur-md rounded-lg shadow-xl p-3">
              {/* Share Option */}
              <button
                className="flex items-center w-full gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100/80 rounded-lg transition-all duration-200"
                onClick={() => {/* Share handler */ }}
              >
                <Share2 className="w-5 h-5" />
                <span className="whitespace-nowrap text-sm font-medium">Share</span>
              </button>

              {/* Schedule Visit Option */}
              <button
                className="flex items-center w-full gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100/80 rounded-lg transition-all duration-200"
                onClick={() => {/* Schedule handler */ }}
              >
                <CalendarCheck className="w-5 h-5" />
                <span className="whitespace-nowrap text-sm font-medium">Schedule Visit</span>
              </button>

              {/* WhatsApp Option */}
              <button
                className="flex items-center w-full gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-100/80 rounded-lg transition-all duration-200"
                onClick={() => {/* WhatsApp handler */ }}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="whitespace-nowrap text-sm font-medium">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>




      </div>
      {/* render feturepro */}
      <div className="-mt-40">
        <FeaturePro />
      </div>

    </section>
  )
};

export default Home;
