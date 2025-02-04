import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Eye, EyeOff, Mail, Lock, User, Calendar, Clock, } from "lucide-react"; // Icons
import navlogo from "../../assets/navlogo.png"; // Logo
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname || "/");
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [popupType, setPopupType] = useState(null); // 'login' | 'register' | null
  const loginRef = useRef(null);

  //for appointments
  const [form, setForm] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [agree, setAgree] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  // Update active state when route changes
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setPopupType(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Plot", path: "/plot" },
    { name: "Commercial", path: "/commercial" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* Logo Section */}
        <Link className="flex items-center gap-2" to="/" onClick={() => setActive("/")}>
          <div className="w-32">
            <img src={navlogo} alt="Housingfy Logo" className="w-full h-auto" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-9 text-xl">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative text-gray-700 font-medium transition duration-300 ${active === link.path
                  ? "text-red-500 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black"
                  : "hover:text-red-500"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          {/* Login Button */}
          <button
            className="border border-red-500 text-red-500 px-4 py-2 rounded-md transition duration-300 hover:bg-red-100 cursor-pointer"
            onClick={() => setPopupType("login")}
          >
            Login
          </button>

          {/* Popup Modal */}
          {popupType === "login" && (
            <div
              ref={loginRef}
              className="absolute top-full right-4 mt-2 w-[350px] bg-white shadow-lg p-6 rounded-md border border-gray-200">

              <div className="text-center mb-4">
                <img src={navlogo} alt="Housingfy Logo" className="h-8 w-auto mx-auto" />
                <h1 className="text-lg font-semibold text-red-500 mt-4">Login</h1>
              </div>
              <form className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="email"
                    placeholder="Username/Email"
                    className="border border-gray-300 bg-white px-10 py-2 w-full rounded-md focus:ring focus:ring-emerald-300"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border border-gray-300 bg-white px-10 py-2 w-full rounded-md focus:ring focus:ring-emerald-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <button className="w-full bg-emerald-600 py-3 text-white rounded-md hover:bg-emerald-700 cursor-pointer">
                  Login
                </button>

                <p className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link onClick={() => setPopupType("register")} className="text-red-500 hover:text-red-600 cursor-pointer">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          )}

          {popupType === "register" && (
            <div
              ref={loginRef}
              className="absolute top-full right-4 mt-2 w-[350px] bg-white shadow-lg p-6 rounded-md border border-gray-200"
            >
              <div className="text-center mb-4">
                <img src={navlogo} alt="Housingfy Logo" className="h-8 w-auto mx-auto" />
                <h1 className="text-lg font-semibold text-red-500 mt-6">Register Account</h1>
              </div>
              <form className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    placeholder="Username"
                    className="border border-green-500 px-10 py-2 w-full rounded-md focus:ring focus:ring-green-300"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-green-500 px-10 py-2 w-full rounded-md focus:ring focus:ring-green-300"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border border-green-500 px-10 py-2 w-full rounded-md focus:ring focus:ring-green-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="border border-green-500 px-10 py-2 w-full rounded-md focus:ring focus:ring-green-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <button className="w-full bg-red-500 py-3 text-white rounded-md hover:bg-red-600 cursor-pointer">
                  Register
                </button>

                <p className="text-center text-sm text-gray-600 mt-3">
                  Already have an account?{" "}
                  <a onClick={() => setPopupType("login")} className="text-red-500 hover:text-red-600 cursor-pointer">
                    Login
                  </a>
                </p>
              </form>
            </div>
          )}

          {/* Schedule Appointment Button */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600"
            onClick={() => setForm("appointment")}>
            Schedule Appointment
          </button>

          {form === "appointment" && (
            <div className="absolute top-full mt-2 w-[450px] bg-white p-6 rounded-lg shadow-md z-50">
              {/* Close Button */}
              <button
                onClick={() => setForm(false)}
                className="absolute top-3 right-3 text-black"
              >
                <X size={20} onClick={() => setForm(false)} />
              </button>

              {/* Title */}
              <h2 className="text-xl font-bold text-red-500 text-center">
                Schedule a Tour Today
              </h2>
              <p className="text-center text-gray-600 text-sm mb-4">
                Fill in the following details and we will get back to you shortly.
              </p>

              {/* Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="@First Name"
                    className=" px-4 py-2 text-sm w-full rounded-md bg-gray-100" />
                  <input
                    type="text"
                    placeholder="@Last Name"
                    className=" px-4 py-2 text-sm w-full rounded-md bg-gray-100" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="housingfy@gmail.com"
                    className=" px-4 py-2 text-sm w-full rounded-md bg-gray-100"

                  />
                  <div className="relative">
                    {/* <span className="absolute left-2 text-[13px] top-1/2 -translate-y-1/2">
                      🇳🇵 +977
                    </span> */}
                    <input
                      type="number"
                      placeholder="Contact Number"
                      className=" px-4 text-sm py-2 w-full rounded-md bg-gray-100"
                    />
                    {/* <Phone className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={20} /> */}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative w-full">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      className=" px-4 py-2 w-full rounded-md bg-gray-100"
                      placeholderText="Select a date"
                      open={openDate}
                      onClickOutside={() => setOpenDate(false)}
                    />
                    {/* Calendar Icon */}
                    <Calendar
                      className="absolute right-5 top-3 text-gray-500 cursor-pointer"
                      size={20}
                      onClick={() => setOpenDate(!openDate)}
                    />
                  </div>

                  <div className="relative">
                    <DatePicker
                      selected={selectedTime}
                      onChange={(time) => setSelectedTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15} // Set time intervals (e.g., every 15 min)
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      className=" px-4 py-2 w-full rounded-md bg-gray-100"
                      placeholderText="Select a time"
                      open={openTime}
                      onClickOutside={() => setOpenTime(false)}
                    />
                    <Clock
                      className="absolute right-5 top-3 text-gray-500 cursor-pointer bg-gray-100"
                      size={20}
                      onClick={() => setOpenTime(!openTime)}
                    />
                  </div>
                </div>

                <select className=" px-4 py-2 w-full rounded-md bg-gray-100">
                  <option>20 Bigha Itahari</option>
                  <option>Kathmandu Heights</option>
                  <option>Pokhara Residency</option>
                </select>

                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                    className="accent-red-500"
                  />
                  <span>Yes, I would like to receive updates & promotions from Housingfy.</span>
                </label>

                <button className="w-full bg-red-500 py-2 text-white rounded-md hover:bg-red-600 cursor-pointer">
                  Submit
                </button>
              </form>
            </div>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-4 text-gray-700 font-medium transition duration-300 ${active === link.path ? "text-red-500 underline" : "hover:text-red-500"
                    }`}
                  onClick={() => {
                    setActive(link.path);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Mobile Login Button */}
            <button
              className="border border-red-500 text-red-500 px-4 py-2 rounded-md transition duration-300 hover:bg-red-100"
              onClick={() => setPopupType("login")}
            >
              Login
            </button>

            {/* Login Form (Appears Below Button) */}
            {popupType === "login" && (
              <div ref={loginRef} className="mt-2">
                <img src={navlogo} alt="Housingfy Logo" className="h-8 w-auto mx-auto" />
                <h1 className="text-lg font-medium text-gray-900">Login</h1>
                <form className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="email"
                      placeholder="Username/Email"
                      className="border border-gray-300 bg-white px-10 py-2 w-full rounded-md focus:ring focus:ring-emerald-300"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="border border-gray-300 bg-white px-10 py-2 w-full rounded-md focus:ring focus:ring-emerald-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <div className="text-right">
                    <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
                      Forgot password?
                    </Link>
                  </div>

                  <button className="w-full bg-emerald-600 py-3 text-white rounded-md hover:bg-emerald-700">
                    Login
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a onClick={() => setPopupType("register")} className="text-red-500 hover:text-red-600">
                      Register
                    </a>
                  </p>
                </form>
              </div>
            )}

            {popupType === "register" && (
              <div ref={loginRef} className="mt-2">
                <img src={navlogo} alt="Housingfy Logo" className="h-8 w-auto mx-auto" />

                <h1 className="text-lg font-medium text-red-500">Register Account</h1>
                <form className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      placeholder="Username"
                      className="border border-green-500 px-10 py-2 w-full rounded-md focus:ring focus:ring-green-300"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="border border-green-500 px-10 py-2 w-full rounded-md focus:ring focus:ring-green-300"
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="border border-green-500 px-10 py-2 w-full rounded-md focus:ring focus:ring-green-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="border border-green-500 px-10 py-2 w-full rounded-md focus:ring focus:ring-green-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <button className="w-full bg-red-500 py-3 text-white rounded-md hover:bg-red-600">
                    Register
                  </button>

                  <p className="text-center text-sm text-gray-600 mt-3">
                    Already have an account?{" "}
                    <a onClick={() => setPopupType("login")} className="text-red-500 hover:text-red-600">
                      Login
                    </a>
                  </p>
                </form>
              </div>
            )}
            {/* Schedule Appointment */}
            <botton
              to="/appointment"
              className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-600 text-center" onClick={() => setForm("appointment")}>
              Schedule Appointment
            </botton>

            {form === "appointment" && (
              <div ref={loginRef} className="absolute top-50 mt-2 w-full max-w-[380px] bg-white p-4 rounded-lg shadow-md z-50">
                {/* Close Button */}
                <button
                  onClick={() => setForm(false)}
                  className="absolute top-3 right-3 text-black"
                >
                  <X size={20} onClick={() => setForm(false)} />
                </button>

                {/* Title */}
                <h2 className="text-xl font-bold text-red-500 text-center">
                  Schedule a Tour Today
                </h2>
                <p className="text-center text-gray-600 text-sm mb-4">
                  Fill in the following details and we will get back to you shortly.
                </p>

                {/* Form */}
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="@First Name"
                      className=" px-4 py-2 w-full rounded-md bg-gray-100"

                    />
                    <input
                      type="text"
                      placeholder="@Last Name"
                      className=" px-4 py-2 w-full rounded-md bg-gray-100"

                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="housingfy@gmail.com"
                      className=" px-4 py-2 w-full rounded-md bg-gray-100"
                      disabled
                    />
                    <div className="relative">
                      {/* <span className="absolute left-3 top-1/2 -translate-y-1/2">
                        🇳🇵 +977-
                      </span> */}
                      <input
                        type="number"
                        placeholder="9800000000"
                        className=" px-4 py-2 w-full rounded-md bg-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                    <div className="relative w-full">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        className=" px-8 py-2 w-full rounded-md bg-gray-100x"
                        placeholderText="Select a date"
                        open={openDate}
                        onClickOutside={() => setOpenDate(false)}
                      />
                      {/* Calendar Icon */}
                      <Calendar
                        className="absolute right-5 top-3 text-gray-500 bg-gray-100"
                        size={20}
                        onClick={() => setOpenDate(!openDate)}
                      />
                    </div>

                    <div className="relative">
                      <DatePicker
                        selected={selectedTime}
                        onChange={(time) => setSelectedTime(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15} // Set time intervals (e.g., every 15 min)
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className=" px-8 py-2 w-full rounded-md bg-gray-100"
                        placeholderText="Select a time"
                        open={openTime}
                        onClickOutside={() => setOpenTime(false)}
                      />
                      <Clock
                        className="absolute right-5 top-3 text-gray-500 cursor-pointer bg-gray-100"
                        size={20}
                        onClick={() => setOpenTime(!openTime)}
                      />
                    </div>
                  </div>

                  <select className=" px-4 py-2 w-full rounded-md bg-gray-100">
                    <option>20 Bigha Itahari</option>
                    <option>Kathmandu Heights</option>
                    <option>Pokhara Residency</option>
                  </select>

                  <label className="flex items-center space-x-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={() => setAgree(!agree)}
                      className="accent-red-500"
                    />
                    <span>Yes, I would like to receive updates & promotions from Housingfy.</span>
                  </label>

                  <button className="w-full bg-red-500 py-2 text-white rounded-md hover:bg-red-600">
                    Submit
                  </button>
                </form>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
