import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import navlogo from '../../../assets/navlogo.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[420px]">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img src={navlogo} alt="Lohomes" className="h-8" />
        </div>

        {/* Login Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">LOGIN</h1>
          <p className="text-gray-600 text-sm mt-2">
            Welcome back! Please login to your account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 
                focus:ring-red-500 focus:border-red-500 transition-all duration-300"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-gray-700 text-sm font-medium">
                Password
              </label>
              <Link
                to="/admin/auth/forgot-password"
                className="text-sm text-red-500 hover:text-red-600 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 
                focus:ring-red-500 focus:border-red-500 transition-all duration-300"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2.5 rounded-lg hover:bg-red-600 
              transition-colors duration-300 font-medium"
          >
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">OR login with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FaGoogle className="w-5 h-5 text-red-500" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FaFacebook className="w-5 h-5 text-blue-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FaGithub className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <Link
            to="/admin/auth/register"
            className="text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
