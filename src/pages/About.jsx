import React from "react";
import navlogo from '../assets/navlogo.png'
import CountUp from "react-countup";
import Founders from "../components/Founders/Founders";

const About = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-gray-800 mt-20">
      {/* Title Section */}
      <div className="space-y-2 mb-8 lg:mb-12 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500">About us</h1>
        <h2 className="text-base sm:text-lg font-semibold text-black tracking-wide">ABOUT HOUSINGFY GROUP</h2>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* Left: CRISIL and Company Description */}
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <img src={navlogo} alt="CRISIL Logo" className="w-24 sm:w-32" />
            <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
              Only CRISIL DA1+ rated Real Estate Developer in India
            </h2>
          </div>

          <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            <p>
              Over the last decade, the Prestige Group has firmly established itself as one of the leading and most successful developers of real estate in India by imprinting its indelible mark across all asset classes. Founded in 1986, a leap that has been inspired by CMD Irfan Razack and marshaled by his brothers Rezwan Razack and Noaman Razack.
            </p>
            <p>
              The company has diversified over time into a number of related/non-related services, each of them spearheaded by individuals with adroit capacity. Services are as varied as the interior designing done by Morph Design Company (MDC) and the redefinition of elegance and suave in men's formal dressing by Prestige Fashions (P) Ltd.
            </p>
            <p className="hidden sm:block">
              The Prestige Group today has become a name that is synonymous with innovation. The company has pioneered many landmark developments and introduced many firsts to South India.
            </p>
            <p className="hidden md:block">
              The Group has completed 300+ projects spanning a developable area of 180+ mn sqft and has 56 ongoing projects across segments, with a total developable area of 86 mn sqft. Further, it is planning 43 projects spanning 85 mn sqft and holds a land bank of over 728 acres as of Sep-23.
            </p>
          </div>
        </div>

        {/* Right: Statistics */}
        <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 text-center border-l border-gray-300 pl-4 sm:pl-8">
            <div className="p-4 sm:p-6  rounded-lg ">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">
                <CountUp start={0} end={38} duration={5} />+
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">Years of Excellence</p>
            </div>
            <div className="p-4 sm:p-6  rounded-lg ">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">
                <CountUp start={0} end={300} duration={5} />+
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">Projects Completed</p>
            </div>
            <div className="p-4 sm:p-6  rounded-lg ">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">
                <CountUp start={0} end={180} duration={5} />+
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="p-4 sm:p-6  rounded-lg ">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">
                <CountUp start={0} end={170} duration={5} />+
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">Mn. Sq. Ft. Underway</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Button */}
      <button className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white py-2 px-4 rounded-l-lg shadow-lg rotate-90 hover:bg-red-600 transition-colors duration-300 z-50">
        <span className="text-sm sm:text-base font-medium">Enquire Now</span>
      </button>

      {/* Founders Section */}
      <div className="mt-12 lg:mt-16">
        <Founders />
      </div>
    </div>
  );
};

export default About;
