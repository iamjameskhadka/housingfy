import React, { useState } from "react";
import { Link } from "react-router-dom";
import navlogo from '../../../assets/navlogo.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password for:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[420px]">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img src={navlogo} alt="Lohomes" className="h-8" />
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Forgot Password?</h1>
          <p className="text-gray-600 text-sm mt-2">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 
                focus:ring-red-500 focus:border-red-500 transition-all duration-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2.5 rounded-lg hover:bg-red-600 
              transition-colors duration-300 font-medium"
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <span className="text-gray-600">Remember your password? </span>
          <Link
            to="/admin/auth/login"
            className="text-red-500 hover:text-red-600 font-medium transition-colors"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
