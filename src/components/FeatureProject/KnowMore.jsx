import React from 'react';
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2Fc3b60c03-5a74-4a89-9d6f-c5d0efe0f40c.webp&w=1920&q=75",
  "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2Fdw-Godrej-Meridien-Ncr-SliderImage-05-1920X900%206f1e0c15-11d0-4c16-8ecf-fe902eaceb4f.webp&w=1920&q=75",
  "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2F6621789d-9b07-447c-9a9e-51edb0b42e47.webp&w=1920&q=75",
];

const KnowMore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full mt-12 mb-5 h-screen overflow-hidden">
      <nav className="absolute top-0 left-0 w-full bg-transparent bg-opacity-50 text-white flex justify-between p-4 z-10">
        <button onClick={() => window.history.back()} className="text-lg">&larr; BACK</button>
        <div className="flex space-x-4">
          {[
            "Overview",
            "Location",
            "Plans",
            "Price",
            "Amenities",
            "Gallery",
            "Download",
            "Compliances",
          ].map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:underline">
              {item}
            </button>
          ))}
        </div>
      </nav>

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
          className="bg-white p-2 rounded-full shadow-md"
        >
          <FaArrowLeft size={20} />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          className="bg-white p-2 rounded-full shadow-md"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default KnowMore;
