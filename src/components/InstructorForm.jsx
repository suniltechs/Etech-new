import { useState } from 'react';
import { IoClose } from 'react-icons/io5';


const InstructorForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    experience: '',
    certification: '',
    bio: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Instructor application submitted:', { ...formData, resume });
    setIsLoading(false);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-2xl mx-4">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close instructor form"
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
              Instructor Application
            </h2>
            <p className="text-center text-[#515B6F] mb-8">
              Please fill out this form to join our instructor community
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#202430] mb-1">
                  Full Name*
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
                  Email Address*
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
                <label htmlFor="expertise" className="block text-sm font-medium text-[#202430] mb-1">
                  Area of Expertise*
                </label>
                <input
                  type="text"
                  id="expertise"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  placeholder="e.g. Web Development, Data Science"
                  required
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-[#202430] mb-1">
                  Years of Teaching Experience*
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select experience</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="certification" className="block text-sm font-medium text-[#202430] mb-1">
                  Certifications (if any)
                </label>
                <input
                  type="text"
                  id="certification"
                  name="certification"
                  value={formData.certification}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  placeholder="Certification names"
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-[#202430] mb-1">
                  Teaching Bio*
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  placeholder="Tell us about your teaching philosophy and experience"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-[#202430] mb-1">
                  Upload Resume/CV*
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#26A4FF] focus:border-transparent transition-all"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <p className="mt-1 text-sm text-[#7C8493]">PDF or Word document (max 5MB)</p>
              </div>

              <div className="pt-2">
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
                      Submitting...
                    </>
                  ) : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorForm;