import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const LoginPopup = ({ onClose, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login submitted:', { email, password });
      // Handle successful login (redirect, state update, etc.)
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-md mx-4">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close login form"
          >
            <IoClose size={24} />
          </button>

          {/* Gradient Header */}
          <div 
            className="h-2 bg-gradient-to-r from-[#bff098] to-[#6fd6ff]"
            style={{ background: 'linear-gradient(112deg, rgba(191,240,152,1) 0%, rgba(111,214,255,1) 100%)' }}
          ></div>

          <div className="px-8 py-8">
            <h2 className="text-3xl font-bold text-center text-[#042940] mb-2">
              Welcome Back
            </h2>
            <p className="text-center text-[#515B6F] mb-8">
              Log in to access your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#202430] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#202430] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <div className="flex justify-end mt-1">
                  <button 
                    type="button" 
                    className="text-sm text-[#26A4FF] hover:underline focus:outline-none"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 bg-[#26A4FF] text-white font-semibold rounded-lg hover:bg-[#1e8fd8] transition-colors shadow-md flex items-center justify-center ${isLoading ? 'opacity-75' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Log In'}
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="mx-4 text-sm text-[#7C8493]">OR</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button 
                type="button"
                className="flex items-center justify-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <img 
                  src="https://www.svgrepo.com/show/355037/google.svg" 
                  alt="Google" 
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm text-[#202430]">Google</span>
              </button>
              <button 
                type="button"
                className="flex items-center justify-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <img 
                  src="https://www.svgrepo.com/show/448234/linkedin.svg" 
                  alt="LinkedIn" 
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm text-[#202430]">LinkedIn</span>
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-[#7C8493]">
              Don't have an account?{' '}
              <button 
                type="button"
                onClick={onSwitchToSignup}
                className="text-[#26A4FF] font-medium hover:underline focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;