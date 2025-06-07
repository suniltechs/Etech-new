import { useState } from "react";
import MentorImage from "../assets/images/instructor/Mentoringimage.jpg";
import InstructorForm from "./InstructorForm";

const Instructor = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <InstructorForm onClose={() => setShowForm(false)} />}
      
      <section className="py-16 md:py-20" id="teachers">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="relative bg-custom-gradient rounded-xl lg:rounded-2xl p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Background decorative elements */}
            <div className="absolute hidden md:block -top-[250px] -left-[200px] w-[100px] h-[700px] bg-white rotate-[60deg] -z-10"></div>
            <div className="absolute hidden md:block -bottom-[350px] -right-[50px] w-[100px] h-[700px] bg-white rotate-[60deg] -z-10"></div>

            {/* Text content */}
            <div className="flex flex-col items-start w-full gap-6 z-10">
              <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl font-clashDisplay leading-tight text-textDarkColor">
                Share Your Knowledge as an Instructor
              </h2>
              <p className="w-full md:w-5/6 text-base lg:text-lg font-medium text-textDarkColor/70 mt-2 mb-4">
                Join our community of expert educators and inspire the next generation of learners. 
                Whether you specialize in tech, business, or creative fields, we provide the platform 
                to share your expertise globally.
              </p>
              <button 
                onClick={() => setShowForm(true)}
                className="py-3 px-6 text-white font-semibold hover:scale-[1.02] transition duration-300 hover:opacity-90 cursor-pointer bg-primaryColor rounded-md shadow-md hover:bg-[#1e8fd8]"
              >
                Become an Instructor
              </button>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-lg lg:rounded-xl shadow-xl">
              <img 
                src={MentorImage} 
                alt="Mentor teaching students" 
                loading="eager"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructor;