import React, { useState, useEffect, useRef } from 'react';
import { Lock, ArrowRight, Check, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const LockScreen = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAttempting, setIsAttempting] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Update time and date every second
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format time: HH:MM
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);

      // Format date: Weekday, Month Day, Year
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      setDate(now.toLocaleDateString('en-US', options));
    };

    // Initial update
    updateDateTime();

    // Set interval for updates
    const interval = setInterval(updateDateTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        navigate(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAttempting(true);

    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock authentication - in a real app, this would validate against a stored password
    if (password === '1234') {
      setIsSuccess(true);

      // Play success sound
      const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log('Audio play failed: ', e));

      // Navigate after animation completes
      setTimeout(() => {
        navigate('/admin/analytics');
      }, 1000);
    } else {
      // Play error sound
      const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log('Audio play failed: ', e));

      setError('Incorrect password. Please try again.');
      setIsShaking(true);
      setPassword('');

      // Stop shaking after animation
      setTimeout(() => {
        setIsShaking(false);
        setIsAttempting(false);
        if (inputRef.current) inputRef.current.focus();
      }, 500);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-blue-900/40 to-black opacity-70"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.3)',
              animation: `float ${Math.random() * 20 + 10}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 py-8">
        {/* Time and Date */}
        <div className="text-center mb-10">
          <div className="text-7xl font-light text-white mb-1">{time}</div>
          <div className="text-lg text-white/80">{date}</div>
        </div>

        {/* Avatar and Form Container */}
        <div
          className={`w-full flex flex-col items-center ${isShaking ? 'animate-shake' : ''}`}
        >
          {/* User Avatar */}
          <div
            className={`relative w-32 h-32 mb-8 rounded-full overflow-hidden 
              ${isSuccess ? 'ring-4 ring-green-400 scale-105' : isAttempting ? 'ring-4 ring-blue-400' : 'ring-4 ring-white/30'} 
              transition-all duration-500 shadow-xl`}
          >
            <div className={`absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 
              ${isSuccess ? 'bg-black/30' : ''}`}>
              {isSuccess && <Check className="h-12 w-12 text-green-400 animate-fadeIn" />}
            </div>
            <img
              src={logo}
              alt="User Avatar"
              className={`w-full h-full object-cover transition-all duration-500 ${isSuccess ? 'scale-110' : ''}`}
            />
          </div>

          {/* Greeting */}
          <div className="text-white text-xl font-medium mb-6">
            Welcome back, Admin
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-xs">
            <div className="relative">
              <div
                className={`absolute inset-0 bg-white/5 backdrop-blur-md rounded-full ${error ? 'animate-pulse-subtle' : ''}`}
              ></div>

              <div className="relative">
                <Lock
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors
                    ${error ? 'text-red-400' : isSuccess ? 'text-green-400' : 'text-white/70'}`}
                />
                <input
                  ref={inputRef}
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSuccess || isAttempting}
                  className={`w-full bg-transparent px-12 py-4 text-white placeholder-white/50
                    border-0 outline-none focus:ring-0 transition-all`}
                />
                <button
                  type="submit"
                  disabled={isSuccess || isAttempting || !password}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full
                    ${isSuccess ? 'bg-green-500' : 'bg-white/10 hover:bg-white/20'}
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            {/* Error Message */}
            <div className="h-6 mt-3 text-center">
              {error && (
                <div className="text-red-300 text-sm animate-fadeIn">
                  {error}
                </div>
              )}
              {isSuccess && (
                <div className="text-green-300 text-sm animate-fadeIn">
                  Authentication successful! Redirecting...
                </div>
              )}
            </div>
          </form>

          {/* Hint */}
          <div className="text-white/50 text-sm mt-8">
            Enter password to unlock (1234)
          </div>
        </div>


      </div>
    </div>
  );
};

// Add keyframe animations
const styleTag = document.createElement('style');
styleTag.textContent = `
  @keyframes float {
    0% { transform: translate(0, 0); }
    50% { transform: translate(10px, -10px); }
    100% { transform: translate(0, 0); }
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  
  .animate-shake {
    animation: shake 0.5s ease-in-out;
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes pulse-subtle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
  
  .animate-pulse-subtle {
    animation: pulse-subtle 1s ease-in-out infinite;
  }
`;
document.head.appendChild(styleTag);

export default LockScreen; 