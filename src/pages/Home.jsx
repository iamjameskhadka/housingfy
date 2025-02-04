import { useState } from "react";
import { ChevronDown, ChevronRight, Share2, CalendarCheck, MessageCircle, X } from "lucide-react";
import FeaturePro from "../components/FeatureProject/FeaturePro";
import x from '../assets/x.png'

const Home = () => {
  const [location, setLocation] = useState("Cities");
  const [showMenu, setShowMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

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
          className="fixed xl:top-120 lg:top-250 lg:right-4 md:top-180 md:right-4 sm:bottom-6 sm:right-4 top-155 right-4 flex flex-col items-end space-y-2"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Floating Action Button */}
          <button
            className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg transition-transform duration-300 flex items-center justify-center ${isOpen ? "rotate-300" : ""
              }`}
          >
            {/* Animated Circle (Gradient Border) */}
            {/* <div className="absolute inset-0 w-full h-full rounded-full border-4  flex items-center justify-center"> */}
            {/* Centered Black 'X' */}
            <div className="w-10 h-10 sm:w-10 sm:h-10 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-black text-lg sm:text-xl">+</span>
            </div>
            {/* </div> */}
          </button>

          {/* Options (Appear Above the Button) */}
          <div
            className={`absolute bottom-full mb-2 right-0 transition-all duration-300 transform ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }  bg-opacity-80 backdrop-blur-lg p-4 rounded-lg shadow-lg text-black space-y-2`}
          >
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
              <Share2 size={16} /> <span>Share</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
              <CalendarCheck size={16} /> <span>Schedule Visit</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
              <MessageCircle size={16} /> <span>WhatsApp</span>
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
