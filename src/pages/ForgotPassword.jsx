import React, { useState } from 'react';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // Placeholder for email validation
    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    // Simulate sending email (replace with actual API call)
    try {
      // Here you would typically make an API call to send the reset email
      // const response = await fetch('/api/send-reset-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      // Simulate success response
      setMessage('A password reset link has been sent to your email address.');
      setEmail(''); // Clear the input field
    } catch (error) {
      setError('Failed to send reset email. Please try again later.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('https://st.depositphotos.com/28360198/56385/i/450/depositphotos_563854194-stock-photo-businessman-touch-fingers-scan-reset.jpg')` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md opacity-90">
        <h1 className="text-2xl font-semibold text-center text-red-500 mb-4">Forgot Password</h1>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-red-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
