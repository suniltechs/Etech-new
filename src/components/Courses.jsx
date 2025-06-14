import { Link } from "react-router-dom";
import { courses } from "../Data/Data.js";
import SectionText from "./SectionText/SectionText2.jsx";

const Courses = () => {
  return (
    <section className="py-20 bg-custom-gradient" id="courses">
      <div className="container">
        <div className="w-full">
          {/* text  */}
          <SectionText
            title2="Our Popular"
            subTitle2="Courses"
            ctaName2="Show all courses"
          />
          {/* lists  */}
          <div className="grid w-full gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {courses.map((courselist) => (
              <Link
                to={`/courses/${encodeURIComponent(courselist.title
                  .toLowerCase()
                  .split(" ")
                  .join("-"))}`}
                key={courselist.id}
                className="relative transition-all duration-500 bg-white border cursor-pointer hover:shadow-lg border-gray-400/20 rounded-xl p-7 group hover:-translate-y-2 hover:border-primaryColor/30"
                onClick={(e) => {
                  e.preventDefault(); // Prevents redirect
                  console.log("Card clicked, but no navigation");
                }}
              >
                {/* Floating effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primaryColor/5 to-secondaryColor/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Course logo with hover scale */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col items-start gap-1">
                      <div className="overflow-hidden rounded-xl">
                        <img 
                          src={courselist.logo}
                          className="object-contain transition-transform duration-500 group-hover:scale-110"
                          alt={courselist.title}
                          loading="eager"
                        />
                      </div>
                      <h3 className="text-xl font-semibold font-clashDisplay text-textDarkColor group-hover:text-primaryColor transition-colors duration-300">
                        {courselist.title}
                      </h3>
                      <p className="text-sm gap-[6px] flex items-center text-textGrayColor/80 font-semibold group-hover:text-textDarkColor transition-colors duration-300">
                        <span>{courselist.enroll}</span>
                        <span className="w-1 h-1 rounded-full bg-textDarkColor/70 group-hover:bg-primaryColor transition-colors duration-300"></span>
                        <span>{courselist.application} Students</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* benefits with hover effects */}
                <ul className="flex items-center gap-1 mt-5 mb-4">
                  {courselist.benefits.map((benefit, index) => (
                    <li
                      className={`${index === 0
                          ? "bg-[#6a1fff15] text-[#6a1fffd8] group-hover:bg-[#6a1fff25]"
                          : index === 1
                            ? "bg-[#16a34a1f] text-[#16a34a] group-hover:bg-[#16a34a2f]"
                            : index === 2
                              ? "bg-[#ff832a1f] text-[#ff832ae5] group-hover:bg-[#ff832a2f]"
                              : "bg-transparent"
                        } py-[6px] text-sm px-4 rounded-full font-semibold transition-all duration-300 group-hover:scale-105`}
                      key={index}
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* description with hover effect */}
                <p className="text-base font-medium leading-7 text-gray-700/85 group-hover:text-textDarkColor transition-colors duration-300">
                  {courselist.description}
                </p>

                {/* divider with hover effect */}
                <div className="h-[1px] w-full bg-textGrayColor/20 my-6 group-hover:bg-primaryColor/30 transition-colors duration-300"></div>

                {/* price and instructor with hover effects */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold font-clashDisplay text-textDarkColor/80 group-hover:text-primaryColor transition-colors duration-300">
                    ${courselist.fee}{" "}
                    <span className="text-xs font-normal text-textGrayColor line-through opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      ${Math.round(courselist.fee * 1.2)}
                    </span>
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-textGrayColor group-hover:text-textDarkColor transition-colors duration-300">
                      Instructor: <span className="group-hover:text-primaryColor">{courselist.mentor}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
