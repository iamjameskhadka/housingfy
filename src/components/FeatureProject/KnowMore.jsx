import React from "react";
import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Download, Phone, Mail } from "lucide-react";


const heroImages = [
  "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2Fc3b60c03-5a74-4a89-9d6f-c5d0efe0f40c.webp&w=1920&q=75",
  "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2Fdw-Godrej-Meridien-Ncr-SliderImage-05-1920X900%206f1e0c15-11d0-4c16-8ecf-fe902eaceb4f.webp&w=1920&q=75",
  "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2F6621789d-9b07-447c-9a9e-51edb0b42e47.webp&w=1920&q=75",
];

const KnowMore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  //======= plans section =========
  const [activeTab, setActiveTab] = useState("Master Plan");

  //=========================== price ===========
  const [advancePayment, setAdvancePayment] = useState(28);
  const [duration, setDuration] = useState(7);
  const [interestRate, setInterestRate] = useState(9);
  const loanAmount = 30000;

  const calculateEMI = () => {
    let principal = loanAmount - (loanAmount * advancePayment) / 100;
    let monthlyRate = interestRate / 100 / 12;
    let months = duration * 12;
    let emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return emi.toFixed(0);
  };

  //============== gallary ==============
  const galleryImages = [
    { src: "https://delf2iyv2crlj.cloudfront.net/Images/dw-Godrej-AvenueEleven-Mumbai-Gallery01-550X550%2042419975-1ee9-48fc-8758-d5cf34340174.webp", title: "Living Room" },
    { src: "https://delf2iyv2crlj.cloudfront.net/Images/dw-Godrej-AvenueEleven-Mumbai-Gallery03-550X550%20ae69bbc1-31e5-4226-9347-3b596ba4d5b5.webp", title: "Bed Room" },
    { src: "https://delf2iyv2crlj.cloudfront.net/Images/dw-Godrej-AvenueEleven-Mumbai-Gallery04-550X550%202638927f-6478-4ba1-852d-8eb39ebe327b.webp", title: "Master Bed Room" },
    { src: "https://delf2iyv2crlj.cloudfront.net/Images/dw-Godrej-AvenueEleven-Mumbai-Gallery05-550X550%20c54ecfe2-ed12-477e-bd9b-0433b0e93d82.webp", title: "Study Room" },
  ];

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Add these states and refs for gallery drag
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const galleryRef = useRef(null);

  // Mouse events for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    const touchCurrentX = e.touches[0].clientX;
    const walk = (touchStartX - touchCurrentX) * 2;
    galleryRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTouchEnd = () => {
    setTouchStartX(0);
  };

  // Add this state for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add these navigation items
  const navItems = [
    { id: "overview", label: "OVERVIEW" },
    { id: "location", label: "LOCATION" },
    { id: "plans", label: "PLANS" },
    { id: "price", label: "PRICE" },
    { id: "amenities", label: "AMENITIES" },
    { id: "gallery", label: "GALLERY" },
    { id: "download", label: "DOWNLOAD" },
    { id: "compliances", label: "COMPLIANCES" }
  ];

  // Add this state for scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Add this effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ========== recomendation ================
  const properties = [
    {
      id: 1,
      location: "Kolshet Road, Mumbai",
      title: "Godrej Ascend",
      description: "Welcome to modern homes with an array of lifestyle & sports amenities",
      image: "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2F2d3ae018-bf7b-4f89-8fbb-d056c57f6383.webp&w=1920&q=75",
    },
    {
      id: 2,
      location: "Dadar - Wadala, Mumbai",
      title: "Godrej Horizon",
      description: "Launching premium 2 & 3 bed homes.",
      image: "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2F740b4f4c-2297-4f33-87a2-3eda7af4711d.jpg&w=1920&q=75",
    },
    {
      id: 3,
      location: "Matunga, Mumbai",
      title: "Godrej Five Gardens",
      description: "Home Of The Heart",
      image: "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2Fdw-Godrej-FiveGardens-Mumbai-Thumbnail-464X464%2092905f6c-ada5-44d9-a801-76ad07bc52b0.webp&w=1920&q=75",
    },
    {
      id: 4,
      location: "Matunga, Mumbai",
      title: "Godrej Five Gardens",
      description: "Home Of The Heart",
      image: "https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2Fdw-Godrej-FiveGardens-Mumbai-Thumbnail-464X464%2092905f6c-ada5-44d9-a801-76ad07bc52b0.webp&w=1920&q=75",
    },
  ];

  // Add this ref and handlers for recommendations section
  const recommendationsRef = useRef(null);
  const [isRecommendationDragging, setIsRecommendationDragging] = useState(false);
  const [recommendationStartX, setRecommendationStartX] = useState(0);
  const [recommendationScrollLeft, setRecommendationScrollLeft] = useState(0);
  const [recommendationTouchStartX, setRecommendationTouchStartX] = useState(0);

  // Mouse events for recommendations
  const handleRecommendationMouseDown = (e) => {
    setIsRecommendationDragging(true);
    setRecommendationStartX(e.pageX - recommendationsRef.current.offsetLeft);
    setRecommendationScrollLeft(recommendationsRef.current.scrollLeft);
  };

  const handleRecommendationMouseUp = () => {
    setIsRecommendationDragging(false);
  };

  const handleRecommendationMouseMove = (e) => {
    if (!isRecommendationDragging) return;
    e.preventDefault();
    const x = e.pageX - recommendationsRef.current.offsetLeft;
    const walk = (x - recommendationStartX) * 2;
    recommendationsRef.current.scrollLeft = recommendationScrollLeft - walk;
  };

  // Touch events for recommendations
  const handleRecommendationTouchStart = (e) => {
    setRecommendationTouchStartX(e.touches[0].clientX);
    setRecommendationScrollLeft(recommendationsRef.current.scrollLeft);
  };

  const handleRecommendationTouchMove = (e) => {
    if (!recommendationTouchStartX) return;
    const touchCurrentX = e.touches[0].clientX;
    const walk = (recommendationTouchStartX - touchCurrentX) * 2;
    recommendationsRef.current.scrollLeft = recommendationScrollLeft + walk;
  };

  const handleRecommendationTouchEnd = () => {
    setRecommendationTouchStartX(0);
  };

  //============ get in touch =============
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="relative w-full mt-8 sm:mt-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-screen w-full">
        {/* Navigation Bar */}
        <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg'
          : 'bg-black/70 backdrop-blur-sm'
          }`}>
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop & Mobile Header */}
            <div className="flex items-center justify-between h-16">
              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">BACK</span>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="text-sm text-white hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
              className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
                } overflow-hidden bg-black/95 backdrop-blur-sm absolute top-16 left-0 right-0`}
            >
              <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base text-white hover:bg-white/10 hover:text-red-500 transition-colors rounded-lg border border-white/10"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Quick Contact Section in Mobile Menu */}
              <div className="mt-4 px-4 py-4 border-t border-white/10">
                <div className="flex flex-col space-y-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+1234567890</span>
                  </a>
                  <a
                    href="mailto:info@example.com"
                    className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@example.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Images */}
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Slider Navigation Arrows */}
        <div className="absolute top-1/2 left-1 sm:left-2 md:left-4 transform -translate-y-1/2">
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))}
            className="bg-white p-1 sm:p-2 rounded-full shadow-md"
          >
            <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2">
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)}
            className="bg-white p-1 md:p-2 rounded-full shadow-md"
          >
            <FaArrowRight size={16} className="md:w-5 md:h-5" />
          </button>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-red-500 w-4 md:w-6'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <section className="bg-white">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8" id="overview">
          {/* Overview Section */}
          <section className="text-center mb-6 sm:mb-8 md:mb-10 mt-6 sm:mt-8 md:mt-16 pt-4 sm:pt-6">
            <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6 flex items-center justify-center">
              <span className="w-8 sm:w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
              <span className="px-2 sm:px-4">OVERVIEW</span>
              <span className="w-8 sm:w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Open doors to an unparalleled life, that most only aspire for. Godrej Meridian is a place of
              plush residences, that offers some of the most unique experiences like wine tasting and
              celebrity styling, every single day.
            </p>
            <div className="relative mb-8 sm:mb-12 md:mb-16">
              <img
                src="https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2F6621789d-9b07-447c-9a9e-51edb0b42e47.webp&w=1920&q=75"
                alt="Real Estate Overview"
                className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[600px] object-cover"
              />
              <div className="absolute bottom-4 w-full flex items-center justify-center">
                <div className="bg-white bg-opacity-70 text-red-500 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded cursor-pointer hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2">
                  <span>WALKTHROUGH</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhood Section */}
          <section className="text-center mb-8 md:mb-10" id="location">
            <h2 className="relative text-xl md:text-2xl font-semibold text-center mb-4 md:mb-5 flex items-center justify-center">
              <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
              <span className="px-2 md:px-4">NEIGHBOURHOOD</span>
              <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2 max-w-3xl mx-auto">
              The project is close to all major hubs of commerce, employment and social infrastructure. This
              proximity to Dwarka Expressway enables you to travel easily and celebrate life.
            </p>
          </section>

          {/* Map Section */}
          <div className="relative mb-8 md:mb-10">
            <iframe
              title="Project Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.34237561507671!3d28.535267982457377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f731b32739%3A0x860e5a2c1b42b8f2!2sGodrej%20Properties%20Ltd.!5e0!3m2!1sen!2sin!4v1677834271615!5m2!1sen!2sin"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-4 w-full flex items-center justify-center">
              <div className="bg-white bg-opacity-70 text-red-500 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded cursor-pointer hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2">
                <span>VIEW ON MAP</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-6" id="plans">
        <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 md:mb-5 flex items-center justify-center">
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          <span className="px-2 md:px-4">PLANS</span>
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        </h2>
        <div className="flex justify-center space-x-4 mb-6 overflow-x-auto">
          <span
            className={`cursor-pointer font-medium text-2xl ${activeTab === "Master Plan" ? "text-black font-semibold border-b-2 border-red-500" : "text-gray-400"}`}
            onClick={() => setActiveTab("Master Plan")}
          >
            Master Plan
          </span>
          <span
            className={`cursor-pointer font-medium text-2xl ${activeTab === "Unit Plans" ? "text-black font-semibold border-b-2 border-red-500" : "text-gray-400"}`}
            onClick={() => setActiveTab("Unit Plans")}
          >
            Unit Plans
          </span>
        </div>
        {activeTab === "Unit Plans" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-2 sm:p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">2 BHK</h3>
              <img src="https://wpmedia.roomsketcher.com/content/uploads/2021/12/08165601/RoomSketcher-Professional-2D-Floor-Plan-Measurments.jpg" alt="2 BHK Plan" className="w-full mt-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl" />
            </div>
            <div className="p-2 sm:p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">3 BHK</h3>
              <img src="https://wpmedia.roomsketcher.com/content/uploads/2022/01/05101939/Floor-plan-with-total-area-measurement.png" alt="3 BHK Plan" className="w-full mt-2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl" />
            </div>
            <div className="p-2 sm:p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">4 BHK</h3>
              <img src="https://www.researchgate.net/publication/302981919/figure/fig3/AS:365694614032385@1464199798027/A-floorplan-of-a-single-family-house-all-dimensions-in-meters.png" alt="4 BHK Plan" className="w-full mt-2  transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl" />
            </div>
          </div>
        )}
        {activeTab === "Master Plan" && (
          <div className="text-center text-gray-600">
            <img src="https://www.tallboxdesign.com/wp-content/uploads/2020/02/aerial-map-3D-2048x1231.jpg" alt="Master Plan" className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[500px] object-cover" />
          </div>
        )}
      </section>

      {/* Price Section */}
      <section className="p-4 sm:p-6 md:p-8 bg-gray-50" id="price">
        <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 flex items-center justify-center">
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          <span className="px-2 md:px-4">PRICE</span>
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        </h2>

        {/* Price Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 max-w-6xl mx-auto">
          {/* Price Card */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full lg:w-1/3">
            <h3 className="text-red-500 text-lg font-semibold pb-4 border-b mb-4">PRICE DETAILS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">3 BHK</span>
                <span className="text-red-500 font-semibold">₹ 9.90 Cr. onwards</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">4 BHK</span>
                <span className="text-gray-600">Available On Request</span>
              </div>
              <p className="text-sm text-gray-500 italic mt-2">
                *GST, AMC, IFMS & other charges additional
              </p>
            </div>
          </div>

          {/* EMI Calculator Card */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full lg:w-2/3">
            <h3 className="text-red-500 text-lg font-semibold pb-4 border-b mb-6">EMI CALCULATOR</h3>

            <div className="space-y-6">
              {/* Loan Amount */}
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">LOAN AMOUNT</p>
                <p className="text-2xl font-bold text-gray-800">₹ {loanAmount.toLocaleString()}</p>
              </div>

              {/* Advance Payment Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-600">ADVANCE PAYMENT</p>
                  <span className="text-sm font-semibold text-red-500">
                    ₹ {((loanAmount * advancePayment) / 100).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium w-12">{advancePayment}%</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={advancePayment}
                    onChange={(e) => setAdvancePayment(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>
              </div>

              {/* Duration Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-600">DURATION</p>
                  <span className="text-sm font-semibold text-red-500">{duration} Years</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium w-12">{duration}Y</span>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-600">INTEREST RATE</p>
                  <span className="text-sm font-semibold text-red-500">{interestRate}%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium w-12">{interestRate}%</span>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>
              </div>

              {/* EMI Result */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">ESTIMATED MONTHLY EMI</span>
                  <span className="text-xl font-bold text-red-500">₹ {calculateEMI()} / month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="p-4 sm:p-6 md:p-8 bg-gray-50" id="amenities">
        <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 flex items-center justify-center">
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          <span className="px-2 md:px-4">AMENITIES THAT BRING HAPPINESS & JOY EVERYDAY</span>
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-center text-sm sm:text-base mb-8">
          A mix of social housing, senior living and extended care, a nursery, and a community
          center, where people from all stages of life interact, and socialize amidst clean,
          natural materials and views to the outdoor courtyard and street life.
        </p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8">
          <div className="group cursor-pointer">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src="https://delf2iyv2crlj.cloudfront.net/Images/7b7b6711-8a74-46bf-bcbb-80e676752e39.jpg"
                alt="Open Spaces"
                className="w-16 h-16 mx-auto object-cover mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-center">0.97 Hectares of Open Spaces</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src="https://delf2iyv2crlj.cloudfront.net/Images/166e176b-3ea6-41de-bf3d-7153080eb89d.png"
                alt="Grand Clubhouse"
                className="w-16 h-16 mx-auto object-cover mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-center">Grand Clubhouse</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src="https://delf2iyv2crlj.cloudfront.net/Images/cf400dd5-96a7-4994-adf1-fd0d67704fda.png"
                alt="Infinity Edge Pool"
                className="w-16 h-16 mx-auto object-cover mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-center">Infinity Edge Pool</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src="https://delf2iyv2crlj.cloudfront.net/Images/f64ab32d-af6c-4e7b-b963-1d7611678269.png"
                alt="Multiple Playcourts"
                className="w-16 h-16 mx-auto object-cover mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-center">Multiple Playcourts</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src="https://delf2iyv2crlj.cloudfront.net/Images/Amenities-SkyArena-160x160ac83d8d8-65d1-4b34-9e5f-1d94c7220355.png"
                alt="Lounge"
                className="w-16 h-16 mx-auto object-cover mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-center">Lounge</p>
            </div>
          </div>
        </div>

        {/* Tennis Court Section */}
        <div className="relative max-w-4xl mx-auto">
          <img
            src="https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2FSlider%20Image%20251d157f8-6cc0-4fe9-9393-f7524734efcf%20(2)26bc73b9-027d-4b3a-bcfe-1437fa5ab2dc.webp&w=1920&q=75"
            alt="Tennis Court"
            className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-700 hover:bg-red-500 hover:text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300 text-sm sm:text-base">
            EXPERIENCE ALL LIFESTYLE AMENITIES
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12" id="gallery">
        <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 flex items-center justify-center">
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          <span className="px-2 md:px-4">GALLERY</span>
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          A place where every moment is extraordinary, where the rare is beyond
          compare, just like you.
        </p>

        {/* Gallery Grid with Drag/Touch Scroll */}
        <div
          ref={galleryRef}
          className="overflow-x-hidden cursor-grab active:cursor-grabbing touch-pan-x"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-4 transition-transform duration-300 ease-out min-w-max px-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative w-[280px] sm:w-[400px] h-[350px] sm:h-[500px] flex-shrink-0 overflow-hidden rounded-lg"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-medium text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 font-medium">
            VIEW GALLERY
          </button>
        </div>
      </section>

      {/* Download and Compliances Section */}
      <div className="bg-gray-50 py-16">
        <div className="w-full max-w-4xl mx-auto px-4">
          {/* Downloads Section */}
          <section className="mb-12" id="download">
            <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
              <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
              <span className="px-2 md:px-4">DOWNLOADS</span>
              <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/path-to-product-kit.pdf"
                  download
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-red-500 hover:bg-red-50 transition-all group"
                >
                  <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-500 transition-colors">
                    <Download className="w-5 h-5 text-red-500 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Product Kit</h3>
                    <p className="text-sm text-gray-500">Download detailed product information</p>
                  </div>
                </a>
                <a
                  href="/path-to-brochure.pdf"
                  download
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-red-500 hover:bg-red-50 transition-all group"
                >
                  <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-500 transition-colors">
                    <Download className="w-5 h-5 text-red-500 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">E-Brochure</h3>
                    <p className="text-sm text-gray-500">View our digital brochure</p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Compliances Section */}
          <section className="mb-8" id="compliances">
            <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
              <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
              <span className="px-2 md:px-4">COMPLIANCES</span>
              <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                {/* PMR Document */}
                <a
                  href="/path-to-compliance.pdf"
                  download
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-red-500 hover:bg-red-50 transition-all group"
                >
                  <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-500 transition-colors">
                    <Download className="w-5 h-5 text-red-500 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">One Avenue Eleven PMR June 2024</h3>
                    <p className="text-sm text-gray-500">Latest compliance report</p>
                  </div>
                </a>

                {/* RERA Information */}
                <div className="border-t pt-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <p className="text-sm text-gray-500 mb-2">RERA Registration Number</p>
                      <p className="font-medium text-gray-800">P51800023915</p>
                      <a
                        href="http://maharera.mahaonline.gov.in"
                        className="text-red-500 hover:text-red-600 text-sm mt-1 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit MahaRERA Website
                      </a>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-sm text-gray-500 mb-2">Scan QR Code</p>
                      <img
                        src="https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2Fgodrej-avenue-eleven-rera-qr2571e56e-7e15-4b4d-a7f4-791a30e5fd09.png&w=256&q=75"
                        alt="RERA QR Code"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* You May Also Like Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-12 flex items-center justify-center">
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          <span className="px-2 md:px-4">YOU MAY ALSO LIKE</span>
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        </h2>

        {/* Scrollable Container */}
        <div
          ref={recommendationsRef}
          className="overflow-x-hidden cursor-grab active:cursor-grabbing touch-pan-x"
          onMouseDown={handleRecommendationMouseDown}
          onMouseUp={handleRecommendationMouseUp}
          onMouseLeave={handleRecommendationMouseUp}
          onMouseMove={handleRecommendationMouseMove}
          onTouchStart={handleRecommendationTouchStart}
          onTouchMove={handleRecommendationTouchMove}
          onTouchEnd={handleRecommendationTouchEnd}
        >
          <div className="flex gap-8 transition-transform duration-300 ease-out min-w-max px-4">
            {properties.map((property) => (
              <div
                key={property.id}
                className="w-[300px] sm:w-[400px] flex-shrink-0 shadow-lg rounded-xl overflow-hidden group bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[250px] sm:h-[300px] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm text-red-500 font-medium uppercase tracking-wider">{property.location}</p>
                  <h3 className="text-xl font-semibold mt-2 group-hover:text-red-500 transition-colors">{property.title}</h3>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{property.description}</p>
                  <button className="mt-6 text-sm font-medium text-gray-800 hover:text-red-500 transition-colors flex items-center gap-2">
                    KNOW MORE
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4" id="contact">
        <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          <span className="px-2 md:px-4">GET IN TOUCH</span>
          <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-center mb-8">
            If you would like to know more details or something specific, feel free
            to contact us. Our site representative will give you a call back.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Name Input */}
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b-2 border-gray-200 focus:border-red-500 outline-none transition-colors duration-300"
                  required
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Email ID<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b-2 border-gray-200 focus:border-red-500 outline-none transition-colors duration-300"
                  required
                  placeholder="Enter your email"
                />
              </div>

              {/* Mobile Input */}
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border-b-2 border-gray-200 group-focus-within:border-red-500 transition-colors duration-300">
                  <button
                    type="button"
                    className="flex items-center gap-1 px-2 hover:bg-gray-50 rounded-l"
                  >
                    <span className="text-base">🇳🇵</span>
                    <span className="text-gray-600 text-sm">+977</span>
                  </button>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="flex-1 px-2 py-2 outline-none text-sm"
                    required
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
            </div>

            {/* Checkbox and Submit Button in same line */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative pt-1">
                  <input
                    type="checkbox"
                    name="updates"
                    checked={formData.updates}
                    onChange={handleChange}
                    className="w-5 h-5 border-2 border-gray-300 rounded appearance-none checked:bg-red-500 checked:border-red-500 transition-all duration-200"
                  />
                  <svg
                    className="absolute top-1 left-0.5 w-4 h-4 pointer-events-none text-white transform scale-0 transition-transform duration-200 peer-checked:scale-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  Yes, I would like to receive updates & promotions from Godrej Properties Limited.
                </span>
              </label>

              <button
                type="submit"
                className="min-w-[200px] bg-white hover:bg-red-500 text-black hover:text-white py-3 px-8 rounded-lg text-sm uppercase tracking-wider font-medium transition-colors duration-300 border border-gray-200 hover:border-red-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};

export default KnowMore;
