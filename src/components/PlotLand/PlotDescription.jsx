import React from 'react'
import { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const heroImages = [
  "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectgallery/45f1cbad-7b46-40f7-a3a5-f22355818e3f.webp",
  "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectgallery/23672eb5-9d86-43a4-b4b2-87c9dcb53faf.webp",
  "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectgallery/45f1cbad-7b46-40f7-a3a5-f22355818e3f.webp",
];

const navItems = [
  { id: "about", label: "About" },
  { id: "plans", label: "Plans" },
  { id: "amenities", label: "Amenities" },
  { id: "specifications", label: "Specifications" },
  { id: "location", label: "Location" },
  { id: "gallery", label: "Gallery" },
  { id: "walkthrough", label: "Walkthrough Video" },
];


//================ Plans Section ===============
const planTabs = [
  { id: "all", label: "All" },
  { id: "location-map", label: "Location Map" },
  { id: "master-plan", label: "Master Plan" },
  { id: "3bhk", label: "3 BHK" },
  { id: "cluster-plan", label: "Cluster Plan" },
  { id: "4bhk", label: "4 BHK" },
];

const planImages = {
  "location-map": [
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/5fb451b2-fcc4-4d75-a840-3b6bf05040d8.webp",
      title: "Location Map View 1"
    },
    // Add more location map images
  ],
  "master-plan": [
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/b83402e0-c223-4c10-9a98-9c17a4fd216b.webp",
      title: "Master Plan View 1"
    },
    // Add more master plan images
  ],
  "3bhk": [
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/9b30a49b-cc1c-4e62-9a98-db30fa88d35b.webp",
      title: "3 BHK View 1"
    },
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/c1d84e66-0307-4259-afb6-186db989bb6e.webp",
      title: "3 BHK View 2"
    },
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/975cb937-e7e6-4857-a121-38ed68489baa.webp",
      title: "3 BHK View 3"
    },
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/37c2ae62-a9f2-4483-bd19-93ac4bd0376d.webp",
      title: "3 BHK View 4"
    },
    // Add more 3 BHK images
  ],
  "cluster-plan": [
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/526acebf-678b-4dd6-a367-db886f43bfe0.webp",
      title: "Cluster Plan View 1"
    },
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/023c3d0a-c18c-407d-9f35-5ab30f69f6d0.webp",
      title: "Cluster Plan View 1"
    },
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/7a45b105-ebad-46f3-a3b8-8cc3a21ae722.webp",
      title: "Cluster Plan View 1"
    },
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/4ea0e1c0-7f4a-492f-84b7-d364a77ce015.webp",
      title: "Cluster Plan View 1"
    },
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/f7634413-065a-4128-afdf-a89c347bc69e.webp",
      title: "Cluster Plan View 1"
    },
    // Add more cluster plan images
  ],
  "4bhk": [
    {
      src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectLayout/d7d75364-c0a9-414c-bb99-4b0a3a8b03b1.webp",
      title: "4 BHK View 1"
    },
    // Add more 4 BHK images
  ],
};

const amenities = [
  {
    id: 1,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 7h16M4 7v10a1 1 0 001 1h14a1 1 0 001-1V7M4 7l2-4h12l2 4M8 11h8" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Admin Office",
    description: "24/7 administrative support"
  },
  {
    id: 2,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 19v-9a2 2 0 012-2h8a2 2 0 012 2v9M4 21h16M9 13h6M9 17h6" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Children's play area",
    description: "Safe and engaging play space"
  },
  {
    id: 3,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 4v16m-8-8h16" strokeWidth="1" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" strokeWidth="1" />
      </svg>
    ),
    title: "Badminton Court",
    description: "Professional grade courts"
  },
  {
    id: 4,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 12h18M12 3v18" strokeWidth="1" strokeLinecap="round" />
        <rect x="6" y="6" width="12" height="12" strokeWidth="1" />
      </svg>
    ),
    title: "Multipurpose Hall",
    description: "Versatile community space"
  },
  {
    id: 5,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="1" />
        <path d="M12 3v9l5 5" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Tennis Court",
    description: "Professional tennis facilities"
  },
  {
    id: 6,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth="1" />
        <circle cx="12" cy="12" r="8" strokeWidth="1" />
      </svg>
    ),
    title: "Billiards",
    description: "Premium billiards room"
  },
  {
    id: 7,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="1" />
        <path d="M12 6v12M8 9l8-6M8 15l8 6" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Gymnasium",
    description: "State-of-the-art fitness center"
  },
  {
    id: 8,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1" />
        <path d="M3 12h18" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Squash Court",
    description: "Professional squash facilities"
  },
  {
    id: 9,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 12h16M12 4v16" strokeWidth="1" strokeLinecap="round" />
        <path d="M7 7h10v10H7z" strokeWidth="1" />
      </svg>
    ),
    title: "Swimming Pool",
    description: "Temperature controlled pool"
  },
  {
    id: 10,
    icon: (
      <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth="1" />
        <path d="M16 8v8M8 8v8M20 4v16M4 4v16" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Coffee Shop",
    description: "Café and refreshments"
  },
];

const specifications = [
  {
    id: 'structure',
    title: 'Structure',
    details: [
      'RCC structure, cement blocks for walls wherever needed',
      'Seismic zone II compliant structure'
    ],
    isOpen: true
  },
  {
    id: 'lobby',
    title: 'Lobby',
    details: [
      'Designer entrance lobby',
      'Premium flooring and wall cladding',
      'Elegant false ceiling with LED lighting'
    ]
  },
  {
    id: 'lifts',
    title: 'Lifts',
    details: [
      'High-speed passenger elevators',
      'Separate service elevator',
      'Modern lift interiors with premium finishes'
    ]
  },
  {
    id: 'apartment-flooring',
    title: 'Apartment Flooring',
    details: [
      'Italian marble flooring in living and dining areas',
      'Wooden flooring in master bedroom',
      'Anti-skid tiles in balconies and utilities'
    ]
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    details: [
      'Modular kitchen with premium fittings',
      'Granite counter top',
      'Premium tile dado up to 2 feet above counter',
      'Stainless steel sink with drain board'
    ]
  },
  {
    id: 'servants-room',
    title: 'Servants Room and Toilet',
    details: [
      'Utility area with provision for washing machine',
      'Separate servant toilet',
      'Anti-skid flooring'
    ]
  },
  {
    id: 'toilet',
    title: 'Toilet & Fittings',
    details: [
      'Premium sanitary ware',
      'CP fittings of reputed make',
      'Designer tiles on walls',
      'Anti-skid flooring'
    ]
  },
  {
    id: 'painting',
    title: 'Painting',
    details: [
      'Premium emulsion paint for internal walls',
      'Weather-proof exterior paint',
      'Enamel paint for all MS works'
    ]
  },
  {
    id: 'doors-windows',
    title: 'Doors & Windows',
    details: [
      'Engineered door frames and shutters',
      'Premium hardware fittings',
      'UPVC/aluminum windows with mosquito mesh'
    ]
  },
  {
    id: 'electricals',
    title: 'Electricals',
    details: [
      'Concealed copper wiring',
      'Modular switches of reputed make',
      'TV and telephone points in living and master bedroom',
      'Power backup for all apartments'
    ]
  },
  {
    id: 'wardrobes',
    title: 'Wardrobes in Bedrooms',
    details: [
      'Built-in wardrobes in all bedrooms',
      'Premium quality hardware',
      'Laminate finish'
    ]
  },
  {
    id: 'ac-system',
    title: 'Air Conditioning System',
    details: [
      'VRV/VRF air conditioning',
      'Provision for split AC in all bedrooms',
      'Energy efficient system'
    ]
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling & Recessed Lighting',
    details: [
      'Gypsum false ceiling in living areas',
      'Recessed LED lighting',
      'Decorative light fixtures in key areas'
    ]
  },
  {
    id: 'security',
    title: 'Security System',
    details: [
      '24/7 security personnel',
      'CCTV surveillance',
      'Video door phone',
      'Access control for main entrance'
    ]
  },
  {
    id: 'dg-backup',
    title: 'DG Backup',
    details: [
      '100% power backup',
      'Automatic switch over system',
      'Silent DG sets'
    ]
  }
];

const galleryImages = [
  {
    src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectgallery/45f1cbad-7b46-40f7-a3a5-f22355818e3f.webp",
    title: "Building Exterior View"
  },
  {
    src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectgallery/23672eb5-9d86-43a4-b4b2-87c9dcb53faf.webp",
    title: "Night View"
  },
  {
    src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectgallery/45f1cbad-7b46-40f7-a3a5-f22355818e3f.webp",
    title: "Landscape View"
  },
  {
    src: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectgallery/45f1cbad-7b46-40f7-a3a5-f22355818e3f.webp",
    title: "Landscape View"
  },
];

const PlotDescription = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePlanTab, setActivePlanTab] = useState("all");
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const planContainerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openSpecs, setOpenSpecs] = useState(['structure']);
  // const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const navScrollRef = useRef(null);
  // const planTabsScrollRef = useRef(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryRef = useRef(null);
  const [isDraggingGallery, setIsDraggingGallery] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [amenityIndex, setAmenityIndex] = useState(0);
  const amenityRef = useRef(null);
  const [isDraggingAmenity, setIsDraggingAmenity] = useState(false);
  const [amenityDragStartX, setAmenityDragStartX] = useState(0);
  const [amenityDragDistance, setAmenityDragDistance] = useState(0);
  const [planIndex, setPlanIndex] = useState(0);
  const planRef = useRef(null);
  const [isDraggingPlan, setIsDraggingPlan] = useState(false);
  const [planDragStartX, setPlanDragStartX] = useState(0);
  const [planDragDistance, setPlanDragDistance] = useState(0);

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find which section is currently in view
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const handleMouseDown = (e) => {
    setStartX(e.pageX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !startX) return;

    const diff = startX - e.pageX;
    if (Math.abs(diff) > 50) { // threshold for swipe
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
      setStartX(null);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
    setIsDragging(false);
  };

  const handleNextSlide = () => {
    const images = activePlanTab === "all"
      ? Object.values(planImages).flatMap(arr => arr)
      : planImages[activePlanTab];

    setCurrentPlanIndex(prev =>
      prev + 2 >= images.length ? 0 : prev + 2
    );
  };

  const handlePrevSlide = () => {
    const images = activePlanTab === "all"
      ? Object.values(planImages).flatMap(arr => arr)
      : planImages[activePlanTab];

    setCurrentPlanIndex(prev =>
      prev === 0 ? Math.max(0, images.length - 2) : prev - 2
    );
  };

  // Reset currentPlanIndex when tab changes
  useEffect(() => {
    setCurrentPlanIndex(0);
  }, [activePlanTab]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const toggleSpecification = (id) => {
    setOpenSpecs(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = (ref) => {
    if (!ref.current) return;

    const swipeDistance = touchStartX - touchEndX;
    const sensitivity = 50; // minimum distance for swipe

    if (Math.abs(swipeDistance) > sensitivity) {
      if (swipeDistance > 0) {
        // Swipe left
        ref.current.scrollLeft += 200;
      } else {
        // Swipe right
        ref.current.scrollLeft -= 200;
      }
    }
  };

  const handleGalleryNext = () => {
    const totalSlides = galleryImages.length;
    const slidesToShow = window.innerWidth >= 768 ? 3 : 1;
    const maxIndex = totalSlides - slidesToShow;

    setGalleryIndex(prev =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const handleGalleryPrev = () => {
    const totalSlides = galleryImages.length;
    const slidesToShow = window.innerWidth >= 768 ? 3 : 1;
    const maxIndex = totalSlides - slidesToShow;

    setGalleryIndex(prev =>
      prev === 0 ? maxIndex : prev - 1
    );
  };

  const handleGalleryTouch = (ref) => {
    if (!ref.current) return;

    const swipeDistance = touchStartX - touchEndX;
    const sensitivity = 50;

    if (Math.abs(swipeDistance) > sensitivity) {
      if (swipeDistance > 0) {
        handleGalleryNext();
      } else {
        handleGalleryPrev();
      }
    }
  };

  const handleGalleryMouseDown = (e) => {
    setIsDraggingGallery(true);
    setDragStartX(e.pageX);
  };

  const handleGalleryMouseMove = (e) => {
    if (!isDraggingGallery) return;

    const currentDragDistance = e.pageX - dragStartX;
    setDragDistance(currentDragDistance);

    // Optional: Add real-time dragging effect
    if (galleryRef.current) {
      const translateX = -(galleryIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))) +
        (currentDragDistance / galleryRef.current.offsetWidth) * 100;
      galleryRef.current.style.transform = `translateX(${translateX}%)`;
    }
  };

  const handleGalleryMouseUp = () => {
    if (!isDraggingGallery) return;

    const threshold = 50; // minimum drag distance to trigger slide

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        handleGalleryPrev();
      } else {
        handleGalleryNext();
      }
    } else {
      // Reset to original position if drag wasn't far enough
      if (galleryRef.current) {
        const translateX = -(galleryIndex * (100 / (window.innerWidth >= 768 ? 3 : 1)));
        galleryRef.current.style.transform = `translateX(${translateX}%)`;
      }
    }

    setIsDraggingGallery(false);
    setDragDistance(0);
  };

  const handleAmenityNext = () => {
    const maxIndex = amenities.length - 1;
    setAmenityIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const handleAmenityPrev = () => {
    const maxIndex = amenities.length - 1;
    setAmenityIndex(prev => prev === 0 ? maxIndex : prev - 1);
  };

  const handleAmenityTouch = (ref) => {
    if (!ref.current) return;

    const swipeDistance = touchStartX - touchEndX;
    const sensitivity = 50;

    if (Math.abs(swipeDistance) > sensitivity) {
      if (swipeDistance > 0) {
        // Swipe left - show next
        handleAmenityNext();
      } else {
        // Swipe right - show previous
        handleAmenityPrev();
      }
    } else {
      // Reset position if swipe wasn't far enough
      if (amenityRef.current) {
        const translateX = -(amenityIndex * 100);
        amenityRef.current.style.transform = `translateX(${translateX}%)`;
      }
    }
  };

  const handleAmenityMouseDown = (e) => {
    setIsDraggingAmenity(true);
    setAmenityDragStartX(e.pageX);
  };

  const handleAmenityMouseMove = (e) => {
    if (!isDraggingAmenity) return;

    const currentDragDistance = e.pageX - amenityDragStartX;
    setAmenityDragDistance(currentDragDistance);

    if (amenityRef.current) {
      const translateX = -(amenityIndex * 100) +
        (currentDragDistance / amenityRef.current.offsetWidth) * 100;
      amenityRef.current.style.transform = `translateX(${translateX}%)`;
    }
  };

  const handleAmenityMouseUp = () => {
    if (!isDraggingAmenity) return;

    const threshold = 50;

    if (Math.abs(amenityDragDistance) > threshold) {
      if (amenityDragDistance > 0) {
        handleAmenityPrev();
      } else {
        handleAmenityNext();
      }
    } else {
      if (amenityRef.current) {
        const translateX = -(amenityIndex * 100);
        amenityRef.current.style.transform = `translateX(${translateX}%)`;
      }
    }

    setIsDraggingAmenity(false);
    setAmenityDragDistance(0);
  };

  const handlePlanNext = () => {
    const currentImages = activePlanTab === "all"
      ? Object.values(planImages).flat()
      : planImages[activePlanTab] || [];
    const maxIndex = currentImages.length - 1;
    setPlanIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const handlePlanPrev = () => {
    const currentImages = activePlanTab === "all"
      ? Object.values(planImages).flat()
      : planImages[activePlanTab] || [];
    const maxIndex = currentImages.length - 1;
    setPlanIndex(prev => prev === 0 ? maxIndex : prev - 1);
  };

  const handlePlanTouch = (ref) => {
    if (!ref.current) return;

    const swipeDistance = touchStartX - touchEndX;
    const sensitivity = 50;

    if (Math.abs(swipeDistance) > sensitivity) {
      if (swipeDistance > 0) {
        handlePlanNext();
      } else {
        handlePlanPrev();
      }
    } else {
      if (ref.current) {
        const translateX = -(planIndex * 100);
        ref.current.style.transform = `translateX(${translateX}%)`;
      }
    }
  };

  const handlePlanMouseDown = (e) => {
    setIsDraggingPlan(true);
    setPlanDragStartX(e.pageX);
  };

  const handlePlanMouseMove = (e) => {
    if (!isDraggingPlan) return;

    const currentDragDistance = e.pageX - planDragStartX;
    setPlanDragDistance(currentDragDistance);

    if (planRef.current) {
      const translateX = -(planIndex * 100) +
        (currentDragDistance / planRef.current.offsetWidth) * 100;
      planRef.current.style.transform = `translateX(${translateX}%)`;
    }
  };

  const handlePlanMouseUp = () => {
    if (!isDraggingPlan) return;

    const threshold = 50;

    if (Math.abs(planDragDistance) > threshold) {
      if (planDragDistance > 0) {
        handlePlanPrev();
      } else {
        handlePlanNext();
      }
    } else {
      if (planRef.current) {
        const translateX = -(planIndex * 100);
        planRef.current.style.transform = `translateX(${translateX}%)`;
      }
    }

    setIsDraggingPlan(false);
    setPlanDragDistance(0);
  };

  return (
    <div className="relative w-full">
      {/* Hero Section with Image Slider */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {heroImages.map((img, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30">
                <div className="absolute bottom-8 left-8 text-white">
                  <h1 className="text-4xl font-bold mb-2">Clover Leaf @ Prestige White Meadows</h1>
                  <p className="text-xl">Luxury Apartments in Whitefield, Bangalore</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentImage ? 'bg-white w-8' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        >
          <FaArrowLeft className="text-white" />
        </button>
        <button
          onClick={() => setCurrentImage((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        >
          <FaArrowRight className="text-white" />
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={navScrollRef}
            className="flex overflow-x-auto scrollbar-hide py-4 touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => handleTouchEnd(navScrollRef)}
          >
            <div className="flex space-x-4 md:space-x-6 min-w-max px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-md whitespace-nowrap transition-all duration-300 ${activeSection === item.id
                    ? 'bg-red-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6 flex items-center justify-center">
            <span className="w-8 sm:w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            <span className="px-2 sm:px-4">ABOUT</span>
            <span className="w-8 sm:w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          </h2>
          <h3 className="font-bold text-lg text-red-500">THE LAST WORD IN LUXURY LIVING</h3>
          <p className="mt-1 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Clover Leaf at Prestige White Meadows in Whitefield offers you the ultimate opportunity to be part of the community that rewrote the standards for luxury living in Bengaluru. These ultra-luxury sky villas, designed for the crème-de-la-crème, represent the apex of fine urban living. Expansively spacious and meticulously planned, they are havens of opulence and privacy that present an exceptionally superior quality of life.
          </p>
          <h3 className="font-bold text-lg mt-6 text-red-500">WHEN YOU REACH HOME, YOU KNOW YOU HAVE ARRIVED</h3>
          <p className="mt-1 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            Situated in Whitefield, Clover Leaf at Prestige White Meadows has you perched in the thick of things but insulated and ensconced in a luxurious, undisturbed oasis. All of life's necessities - premium schools, leisure, entertainment, shopping hubs, healthcare and more – are within easy driving distance. The city's major workspots, such as ITPB, EPIP and the Marthahalli-Sarjapur IT corridor are swiftly accessible via the Outer Ring Road.
          </p>
          <h3 className="font-bold text-lg mt-6 text-red-500">HOMES FOR THOSE WHO PERSONIFY FINESSE & PERFECTION</h3>
          <p className="mt-1 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            The luxury of expansive space that has been meticulously planned to the last detail to suit your needs and wants - this describes Clover Leaf at Prestige White Meadows in a nutshell. These are large and spacious sky villas for those who are accustomed to the finest ways of life and the freedom to indulge their whims, while preserving their privacy.
          </p>
          <h3 className="font-bold text-lg mt-6 text-red-500">YOUR LUXURY HOME IN THE SKY</h3>
          <p className="mt-1 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
            You have options of four-bed homes as well as four-bed duplexes, which are villas in the sky. There are only four apartments per floor and four lifts as well, because we know you simply hate waiting. There is also a separate service lift discreetly positioned in the service corridor. In the duplexes, there is direct access to the kitchen from the service corridor for your domestic staff.
          </p>
          <h3 className="font-bold text-lg mt-6 text-red-500">HIGH LIVING & HIGHER THINKING</h3>
          <p className="mt-1 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed text-justify" >
            The feeling of airy openness at Clover Leaf at Prestige White Meadows is almost meditative, with broad windows, balconies and decks in the bedrooms and the living areas blurring the distinction between the outdoors and the indoors. Whether you are relaxing with family, entertaining friends, or just immersing yourself in some quiet me-time, the abundance of fresh air and natural light flooding the ambiance makes the experience all the more inspiring and wholesome.
          </p>
        </section>

        {/* Plans Section */}
        <section id="plans" className="mb-16">
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            <span className="px-2 md:px-4">PLANS</span>
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          </h2>

          {/* Plan Tabs */}
          <div className="relative mb-8">
            <div className="flex items-center justify-between mb-4">
              <div
                ref={planContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {planTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActivePlanTab(tab.id)}
                    className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activePlanTab === tab.id
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    planContainerRef.current.scrollLeft -= 200;
                  }}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  <FaArrowLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => {
                    planContainerRef.current.scrollLeft += 200;
                  }}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  <FaArrowRight className="w-4 h-4 text-gray-600" />
                </button>
              </div> *
            </div>

            {/* Plan Images */}
            <div className="relative">
              <div
                ref={planRef}
                className={`overflow-hidden cursor-grab ${isDraggingPlan ? 'cursor-grabbing' : ''}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handlePlanTouch(planRef)}
                onMouseDown={handlePlanMouseDown}
                onMouseMove={handlePlanMouseMove}
                onMouseUp={handlePlanMouseUp}
                onMouseLeave={handlePlanMouseUp}
              >
                <div
                  className={`flex transition-transform ${isDraggingPlan ? 'transition-none' : 'duration-500 ease-out'}`}
                  style={{
                    transform: `translateX(-${planIndex * (100 / (window.innerWidth >= 1024 ? 3 : 1))}%)`
                  }}
                >
                  {activePlanTab === "all" ? (
                    Object.entries(planImages).map(([type, images]) =>
                      images.map((image, index) => (
                        <div
                          key={`${type}-${index}`}
                          className="min-w-full lg:min-w-[33.333%] px-2"
                        >
                          <div
                            className="relative group overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => handleImageClick({ ...image, type })}
                          >
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                              draggable="false"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-semibold">{image.title}</h3>
                                <p className="text-sm opacity-75">
                                  {planTabs.find(tab => tab.id === type)?.label}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  ) : (
                    planImages[activePlanTab]?.map((image, index) => (
                      <div
                        key={index}
                        className="min-w-full lg:min-w-[33.333%] px-2"
                      >
                        <div
                          className="relative group overflow-hidden rounded-lg cursor-pointer"
                          onClick={() => handleImageClick(image)}
                        >
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                            draggable="false"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                              <h3 className="text-lg font-semibold">{image.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>



              {/* Slide Indicators */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                {(activePlanTab === "all"
                  ? Object.values(planImages).flat()
                  : planImages[activePlanTab] || []
                ).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPlanIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${planIndex === index
                      ? 'bg-red-500 w-6'
                      : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="amenities" className="mb-16">
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            <span className="px-2 md:px-4">AMENITIES</span>
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          </h2>

          <div className="text-center mb-8">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience luxury living with our world-class amenities designed for your comfort and convenience.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {amenities.map((amenity) => (
                <div
                  key={amenity.id}
                  className="group p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="text-gray-600 group-hover:text-red-500 transition-colors duration-300">
                    {amenity.icon}
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Amenities Banner */}
          <div className="mt-12 relative rounded-lg overflow-hidden">
            <img
              src="https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectgallery/45f1cbad-7b46-40f7-a3a5-f22355818e3f.webp"
              alt="Additional Amenities"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="bg-white text-gray-800 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore All Amenities
              </button>
            </div>
          </div>
        </section>

        {/* specification section */}
        <section id="specifications" className="mb-16">
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            <span className="px-2 md:px-4">SPECIFICATIONS</span>
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          </h2>

          <div className="max-w-7xl mx-auto px-4">
            {/* Mobile View */}
            <div className="md:hidden space-y-4">
              {specifications.map((spec) => (
                <div key={spec.id} className="bg-white rounded-lg shadow-sm border border-gray-100">
                  <button
                    onClick={() => toggleSpecification(spec.id)}
                    className="w-full px-4 py-3 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-gray-800">{spec.title}</span>
                    <span className={`transform transition-transform duration-200 ${openSpecs.includes(spec.id) ? 'rotate-180' : ''
                      }`}>
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <div className={`transition-all duration-300 ${openSpecs.includes(spec.id) ? 'max-h-96' : 'max-h-0'
                    } overflow-hidden`}>
                    <div className="px-4 pb-4">
                      <ul className="space-y-2">
                        {spec.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex flex-row gap-8">
              {/* Left Side - Specifications List */}
              <div className="w-1/3">
                <div className="sticky top-20 space-y-1">
                  {specifications.map((spec) => (
                    <button
                      key={spec.id}
                      onClick={() => toggleSpecification(spec.id)}
                      className={`w-full text-left px-4 py-3 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${openSpecs.includes(spec.id)
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{spec.title}</span>
                        <span className={`transform transition-transform duration-200 ${openSpecs.includes(spec.id) ? 'rotate-180' : ''
                          }`}>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side - Specification Details */}
              <div className="w-2/3">
                {specifications.map((spec) => (
                  <div
                    key={spec.id}
                    className={`mb-6 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 transform ${openSpecs.includes(spec.id)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 hidden'
                      }`}
                  >
                    <div className="p-4 bg-gray-50">
                      <h3 className="font-medium text-gray-800">{spec.title}</h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-3">
                        {spec.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-600 hover:-translate-y-0.5 transition-transform duration-200"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="mb-16">
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            <span className="px-2 md:px-4">LOCATION</span>
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          </h2>

          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 p-4 border-b">
                <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">Map</button>
                <button className="px-4 py-1 rounded-full hover:bg-gray-100 text-gray-600 text-sm">Satellite</button>
              </div>

              <div className="relative h-[500px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0401033271513!2d77.71931007379573!3d12.960344915705547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1329c73049b1%3A0x81a90c77e3e2bae0!2sPrestige%20White%20Meadows!5e0!3m2!1sen!2sin!4v1709799611943!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mb-16">
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            <span className="px-2 md:px-4">GALLERY</span>
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          </h2>

          <div className="max-w-7xl mx-auto px-4">
            <div className="relative">
              <div
                ref={galleryRef}
                className={`overflow-hidden cursor-grab ${isDraggingGallery ? 'cursor-grabbing' : ''}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handleGalleryTouch(galleryRef)}
                onMouseDown={handleGalleryMouseDown}
                onMouseMove={handleGalleryMouseMove}
                onMouseUp={handleGalleryMouseUp}
                onMouseLeave={handleGalleryMouseUp}
              >
                <div
                  className={`flex transition-transform ${isDraggingGallery ? 'transition-none' : 'duration-500 ease-out'}`}
                  style={{
                    transform: `translateX(-${galleryIndex * (100 / (window.innerWidth >= 768 ? 3 : 1))}%)`
                  }}
                >
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="min-w-full md:min-w-[33.333%] px-3"
                    >
                      <div
                        className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                        onClick={() => handleImageClick(image)}
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-xl font-semibold">{image.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                {Array.from({
                  length: Math.ceil(galleryImages.length / (window.innerWidth >= 768 ? 3 : 1))
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setGalleryIndex(index * (window.innerWidth >= 768 ? 3 : 1))}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(galleryIndex / (window.innerWidth >= 768 ? 3 : 1)) === index
                      ? 'bg-red-500 w-6'
                      : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Walkthrough Video Section */}
        <section id="walkthrough" className="mb-16">
          <h2 className="relative text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 flex items-center justify-center">
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
            <span className="px-2 md:px-4">WALKTHROUGH VIDEO</span>
            <span className="w-16 md:w-100 h-[1px] bg-red-500 hidden sm:block"></span>
          </h2>

          <div className="max-w-7xl mx-auto px-4">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <img
                src="https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectgallery/45f1cbad-7b46-40f7-a3a5-f22355818e3f.webp"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <button
                  className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 group"
                  onClick={() => {
                    // Add video play functionality
                    console.log("Play video");
                  }}
                >
                  <svg
                    className="w-12 h-12 text-white transform translate-x-1 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-[90vw] w-full bg-white rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />

              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-white/80 hover:bg-red-500 p-2 rounded-full transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Image title */}
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              {selectedImage.type && (
                <p className="text-gray-600 mt-1">
                  {planTabs.find(tab => tab.id === selectedImage.type)?.label}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlotDescription;
