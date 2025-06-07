import { IoClose } from 'react-icons/io5';

const AboutEtech = ({ onClose }) => {
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
            aria-label="Close about modal"
          >
            <IoClose size={24} />
          </button>

          {/* Gradient Header */}
          <div 
            className="h-2 bg-gradient-to-r from-[#bff098] to-[#6fd6ff]"
            style={{ background: 'linear-gradient(112deg, rgba(191,240,152,1) 0%, rgba(111,214,255,1) 100%)' }}
          ></div>

          <div className="px-8 py-8">
            <h2 className="text-3xl font-bold text-center text-[#042940] mb-6">
              What is Etech?
            </h2>
            
            <div className="space-y-6 text-[#515B6F]">
              <p>
                Etech is a cutting-edge online learning platform designed to transform the way you develop skills and advance your career in technology.
              </p>
              
              <h3 className="text-xl font-semibold text-[#042940]">Our Mission</h3>
              <p>
                To provide accessible, high-quality education that empowers individuals to thrive in the digital economy through innovative learning experiences.
              </p>
              
              <h3 className="text-xl font-semibold text-[#042940]">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Industry-relevant courses designed by experts</li>
                <li>Interactive learning with hands-on projects</li>
                <li>Personalized learning paths</li>
                <li>Flexible scheduling for working professionals</li>
                <li>Career support and mentorship programs</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-[#042940]">Why Choose Etech?</h3>
              <p>
                Unlike traditional learning platforms, Etech combines the best of structured curriculum with the flexibility of self-paced learning, offering a unique blend that adapts to your needs while ensuring you gain practical, job-ready skills.
              </p>
              
              <div className="bg-[#F8F8FD] p-4 rounded-lg border border-[#26A4FF]/20">
                <h4 className="font-semibold text-[#042940] mb-2">Our Vision</h4>
                <p>
                  To become the most trusted platform for technology education, helping millions worldwide unlock their potential through transformative learning experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEtech;