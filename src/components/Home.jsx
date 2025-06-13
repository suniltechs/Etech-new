import React, { useState } from "react";
import HeroImage from "../assets/images/Home/hero-image.png";
import Vector from "../assets/images/Home/vector.svg";
import Pattern from "../assets/images/Home/Pattern.svg";
import EnrollForm from "./EnrollForm";
import AboutEtech from "./AboutEtech";

const popularLists = ["Full Stack Development", "AI & ML", "Data Analytics", "Cybersecurity"];

const Home = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className="bg-[#F8F8FD] py-10 pb-0 lg:pt-5 lg:py-0 relative z-10 overflow-x-hidden" id="home">
      {showEnrollForm && <EnrollForm onClose={() => setShowEnrollForm(false)} />}
      {showAbout && <AboutEtech onClose={() => setShowAbout(false)} />}
      
      <div className="container relative z-10 w-full overflow-hidden">
        <div className="grid items-center w-full h-full grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left Section */}
          <div className="lg:self-start lg:pt-28">
            <div className="relative">
              <h1 className="text-[40px] xl:text-7xl leading-[1.2] font-semibold font-clashDisplay text-textDarkColor mb-9">
                Develop your skills in a new and{" "}
                <span className="text-transparent bg-clip-text bg-text-gradient">Unique way</span>
              </h1>
              <img
                src={Vector}
                className="absolute -bottom-7 w-[200px] lg:w-[250px] right-10"
                alt="Vector decoration"
                loading="eager"
              />
            </div>
            <p className="text-base leading-7 max-w-[90%] mb-3 text-textGrayColor">
              Explore a transformative approach to skill development on our online learning platform. Uncover a new realm of learning experience and elevate your expertise in unique way.
            </p>
            {/* Enroll Button */}
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowEnrollForm(true)}
                className="h-full py-3 px-6 bg-primaryColor whitespace-nowrap text-base font-medium cursor-pointer transition duration-300 hover:bg-primaryColor/90 hover:scale-[1.01] text-blue-50 rounded-md w-full lg:w-fit"
              >
                Enroll Now
              </button>
              {/* About */}
              <button 
                onClick={() => setShowAbout(true)}
                className="h-full py-3 px-6 bg-primaryColor whitespace-nowrap text-base font-medium cursor-pointer transition duration-300 hover:bg-primaryColor/90 hover:scale-[1.01] text-blue-50 rounded-md w-full lg:w-fit"
              >
                What's Etech?
              </button>
            </div>
            <p className="mt-6 text-base text-textGrayColor/80">
              Popular:
              {popularLists.map((list, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-2 mb-2 ml-2 text-sm font-medium border rounded-lg cursor-pointer sm:mb-0 text-textGrayColor/70 border-textGrayColor/10 hover:bg-blue-100/20"
                >
                  {list}
                </span>
              ))}
            </p>
          </div>
          {/* Right Section */}
          <div className="relative flex-shrink-0 w-full z-20">
            <img
              src={HeroImage}
              className="lg:ml-auto lg:mx-0 block lg:flex w-[300px] mx-auto xl:w-[450px]"
              alt="Hero representation"
              loading="eager"
            />
            <div className="w-[280px] h-[716px] rotate-[64deg] bg-white absolute right-0 -bottom-[455px]" />
          </div>
        </div>
        <img
          src={Pattern}
          className="absolute right-0 w-[860px] top-0 -z-10 mt-0 xs:mt-[510px] md:mt-0"
          alt="Background pattern"
          loading="eager"
        />


      </div>
    </section>
  );
};

export default Home;
