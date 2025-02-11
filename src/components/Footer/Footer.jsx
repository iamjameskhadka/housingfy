import { Mail, Phone, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import footerLogo from '../../assets/navlogo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/property-post", label: "Property Post Demand" },
    { href: "/contact", label: "Contact Us" },
  ];

  const propertyLinks = [
    { href: "/plot", label: "Plot" },
    { href: "/land", label: "Land" },
    { href: "/commercial", label: "Commercial" },
    { href: "/sell-plots", label: "Sell Plots" },
    { href: "/sell-land", label: "Sell Land" },
  ];

  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, text: "+977-9800000000, 9800000000" },
    {
      icon: <Mail className="h-5 w-5" />,
      text: "enquiry@housingfy.com",
      href: "mailto:enquiry@housingfy.com"
    },
    {
      icon: <FaTiktok className="h-5 w-5" />,
      text: "/housingfy",
      href: "https://www.tiktok.com/@housingfy"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      text: "@housingfy",
      href: "https://instagram.com/housingfy"
    },
  ];

  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Logo Section - Visible on all devices */}
        <div className="flex flex-col items-center sm:items-start mb-8">
          <Link to="/" className="inline-block">
            <img
              src={footerLogo}
              alt="Housingfy Logo"
              className="w-32 sm:w-40 h-8 sm:h-10 object-contain"
            />
          </Link>
          <p className="text-sm text-gray-200 mt-2">
            Your trusted landmark..
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-left">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-200 hover:text-red-500 transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Links */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-left">
              Properties
            </h3>
            <ul className="space-y-2 text-left">
              {propertyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-200 hover:text-red-500 transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-left sm:text-right">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-3">
              {/* Phone and Email */}
              {contactInfo.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start sm:justify-end gap-3 group"
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="text-sm text-gray-200 hover:text-red-500 transition-colors duration-200"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span className="text-sm text-gray-200">
                      {item.text}
                    </span>
                  )}
                  <span className="text-gray-200 group-hover:text-red-500 transition-colors duration-200">
                    {item.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-left sm:text-right">
              Follow Us
            </h3>
            <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-3 justify-start sm:items-end">
              {contactInfo.slice(2).map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center gap-2 text-gray-200 hover:text-red-500 transition-colors duration-200 group"
                >
                  <span className="text-sm hidden sm:inline">{item.text}</span>
                  <span className="text-gray-200 group-hover:text-red-500 transition-colors duration-200">
                    {item.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-emerald-700">
          <p className="text-center text-xl sm:text-sm text-red-500">
            © {new Date().getFullYear()} Housingfy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;