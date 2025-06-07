import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const EnrollForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Enrollment submitted:', formData);
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
            aria-label="Close enrollment form"
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
              Enroll Now
            </h2>
            <p className="text-center text-[#515B6F] mb-8">
              Start your learning journey with us
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#202430] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#202430] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#202430] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  placeholder="you phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-[#202430] mb-1">
                  Course Interest
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="Web Design and Development">Web Design and Development</option>
                  <option value="wireframing and Prototyping">wireframing and Prototyping</option>
                  <option value="Python for Data Science">Python for Data Science</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
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
                ) : 'Submit Enrollment'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollForm;