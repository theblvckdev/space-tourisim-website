import React, { useState } from "react";
import { crewMembers } from "./constants/crewMembers";

const toggleButtons = [
  {
    btnTitle: "Commander",
  },

  {
    btnTitle: "mission specialist",
  },

  {
    btnTitle: "pilot",
  },

  {
    btnTitle: "flight engineer",
  },
];

const Crew = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <section className="overflow-hidden">
        <div className="h-screen w-full lg:bg-[url('../images/crew/background-crew-desktop.jpg')] md:bg-[url('../images/crew/background-crew-tablet.jpg')] bg-[url('../images/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="lg:w-4/5 w-[90%] relative h-full mx-auto">
            <div className="absolute bottom-0 w-full left-0 right-0 text-white">
              <h5
                data-aos="fade-in"
                data-aos-duration="2000"
                className="text-white md:text-left flex gap-5 md:justify-normal justify-center md:text-[25px] md:leading-[18px] text-lg font-barlow tracking-widest uppercase"
              >
                <div className="text-gray-400">02</div>
                <div>Meet your crew</div>
              </h5>
              {crewMembers.map((data, index) => {
                const { position, name, detail, imageUrl, imageSize } = data;

                return (
                  <div key={index}>
                    {currentStep === index ? (
                      <div className="flex lg:flex-row md:flex-col flex-col-reverse relative">
                        <div className="lg:basis-1/2 basis-0 md:mb-14 mb-5">
                          <div className="lg:mt-28 md:mt-14 mt-7 lg:block flex flex-col items-center">
                            <h6
                              data-aos="fade-in"
                              data-aos-duration="2000"
                              className="text-gray-500 md:text-[30px] text-[20px] uppercase font-bellefair font-light"
                            >
                              {position}
                            </h6>
                            <h1
                              data-aos="fade-in"
                              data-aos-duration="2000"
                              className="text-white font-bellefair uppercase md:text-5xl text-3xl md:leading-[55px]"
                            >
                              {name}
                            </h1>
                            <p

                              className="mt-5 lg:w-[65%] md:w-[76%] w-full lg:text-left text-center text-gray-400 md:text-lg text-base font-barlow"
                            >
                              {detail}
                            </p>
                          </div>

                          <div className="lg:mt-20 mt-10 md:flex hidden flex-row lg:justify-normal justify-center gap-5">
                            {toggleButtons.map((button, index) => {
                              const { btnTitle } = button;

                              return (
                                <button
                                  key={index}
                                  onClick={() => setCurrentStep(index)}
                                  aria-label={`${btnTitle}. Press enter to view details`}
                                  className={`h-[10px] w-[10px] rounded-full ${currentStep === index
                                      ? "bg-opacity-100"
                                      : "bg-opacity-30 hover:bg-opacity-50"
                                    } duration-700 bg-white`}
                                ></button>
                              );
                            })}
                          </div>
                        </div>
                        <div className="lg:basis-1/2 basis-0 h-fit lg:absolute right-0 bottom-0">
                          <div className="md:mt-0 mt-5 flex flex-col items-center md:border-b-0 border-b">
                            <img
                              src={imageUrl}
                              className={`lg:w-[75%] ${imageSize}`}
                              alt=""
                            />
                          </div>

                          <div className="lg:mt-20 mt-10 flex flex-row lg:justify-normal justify-center gap-5 md:hidden">
                            {toggleButtons.map((button, index) => {
                              const { btnTitle } = button;

                              return (
                                <button
                                  key={index}
                                  onClick={() => setCurrentStep(index)}
                                  aria-label={`${btnTitle}. Press enter to view details`}
                                  className={`h-[10px] w-[10px] rounded-full ${currentStep === index
                                      ? "bg-opacity-100"
                                      : "bg-opacity-30 hover:bg-opacity-50"
                                    } duration-700 bg-white`}
                                ></button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crew;
