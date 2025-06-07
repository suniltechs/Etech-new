import { testimonial } from "../Data/Data.js";
import Pattern from "/src/assets/images/testimonials/Pattern.svg";
import SectionText from "./SectionText/SectionText.jsx";

const Testimonials = () => {
  return (
    <div className="bg-custom-gradient2">
      <section 
        className="py-16 md:py-20 lg:py-24 bg-white rounded-tl-custom rounded-br-custom" 
        id="testimonials"
      >
        <div className="container mx-auto px-4 sm:px-6 relative overflow-x-hidden">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <SectionText
              title="What Our"
              subTitle="Students Say"
              ctaName="Read more reviews"
            />
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonial.map((testimonial) => (
              <div
                className="flex flex-col p-6 transition-all duration-300 bg-white border border-gray-00 rounded-xl shadow-sm hover:shadow-md hover:border-primaryColor/20 hover:-translate-y-1"
                key={testimonial.id}
              >
                {/* Student Info */}
                <div className="flex items-start mb-4">
                  {/* Student Photo */}
                  <div className="flex-shrink-0 mr-4">
                    <img
                      src={testimonial.logo}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                      alt={testimonial.studentName}
                      loading="eager"
                    />
                  </div>
                  
                  {/* Student Name and Rating */}
                  <div>
                    <h3 className="text-lg font-semibold text-textDarkColor">
                      {testimonial.studentName}
                    </h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`h-5 w-5 ${
                            index < testimonial.rating 
                              ? "text-yellow-400" 
                              : "text-gray-200"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <p className="mb-5 text-gray-600">
                  "{testimonial.studentReview}"
                </p>

                {/* Job Type Badge */}
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    {testimonial.JobType}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Background Pattern */}
          <img
            src={Pattern}
            alt="Decorative pattern"
            className="absolute top-0 right-0 object-contain opacity-5 w-[500px] h-full -z-10"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
