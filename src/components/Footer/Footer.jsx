import { Mail, Phone, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import footerLogo from '../../assets/navlogo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white px-4 py-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[8%]">
          {/* Logo Section */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center">
              <img src={footerLogo} alt="Housingfy Logo" className="w-40 h-10" />
            </div>
            <p className="text-sm text-gray-200">Your trusted landmark..</p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-200 hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="/terms" className="text-gray-200 hover:text-red-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/property-post" className="text-gray-200 hover:text-red-500 transition-colors">Property Post Demand</Link></li>
              <li><Link href="/contact" className="text-gray-200 hover:text-red-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Plot Links */}
          <div className="lg:col-span-3">

            <ul className="space-y-2">
              <li><Link href="/plot" className="text-gray-200 hover:text-red-500 transition-colors">Plot</Link></li>
              <li><Link href="/land" className="text-gray-200 hover:text-red-500 transition-colors">Land</Link></li>
              <li><Link href="/commercial" className="text-gray-200 hover:text-red-500 transition-colors">Commercial</Link></li>
              <li><Link href="/sell-plots" className="text-gray-200 hover:text-red-500 transition-colors">Sell Plots</Link></li>
              <li><Link href="/sell-land" className="text-gray-200 hover:text-red-500 transition-colors">Sell Land</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4 md:col-span-12  md:mt-6 lg:mt-0">
            <h3 className="font-semibold text-lg mb-4 md:text-center lg:text-right">Contact Us</h3>
            <div className="flex flex-col md:items-center lg:items-end bg-emerald-800  space-y-4">
              <div className="flex items-center gap-3 md:justify-center lg:justify-end">
                <span className="text-sm text-right">+977-9800000000, 9800000000</span>
                <Phone className="h-5 w-5  flex-shrink-0" />
              </div>
              <div className="flex items-center gap-3 md:justify-center lg:justify-end ">
                <Link href="mailto:enquiry@housingfy.com" className="text-sm  hover:text-red-500 transition-colors text-right">
                  enquiry@housingfy.com
                </Link>
                <Mail className="h-5 w-5  flex-shrink-0" />
              </div>
              <div className="flex items-center gap-3 md:justify-center lg:justify-end">
                <Link href="https://www.tiktok.com/@housingfy" className="text-sm text-gray-200 hover:text-red-500 transition-colors text-right">
                  /housingfy
                </Link>
                <FaTiktok className="h-5 w-5 text-gray-200 flex-shrink-0" />
              </div>
              <div className="flex items-center gap-3 md:justify-center lg:justify-end">
                <Link href="https://instagram.com/housingfy" className="text-sm text-gray-200 hover:text-red-500 transition-colors text-right">
                  @housingfy
                </Link>
                <Instagram className="h-5 w-5 text-gray-200 flex-shrink-0 " />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;