// eslint-disable-next-line
import React, { useContext } from "react";
import { navTabs } from "../constant/navTabs";
import { PlanetContext } from "../../../context/planetChangeContext";

function className(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DestinationLayout = ({ imageUrl, title, text, distance, travelTime }) => {
  const { setCurrentTab, currentTab } = useContext(PlanetContext);

  const changeTab = (index) => {
    setCurrentTab(index + 1);
  };

  return (
    <>
      <div className="md:h-screen h-full w-screen">
        <div className="lg:w-4/5 w-full mx-auto relative h-full">
          <div className="lg:absolute md:bottom-20 md:pt-36 pt-24 lg:pt-0 w-full">
            <div className="flex lg:flex-row flex-col lg:justify-normal justify-center lg:items-end items-center h-fit">
              <div className="lg:basis-1/2 basis-0 lg:block flex flex-col items-center">
                <h5
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-gray-200 lg:text-left text-center flex gap-5 text-left text-[25px] leading-[18px] font-barlow tracking-widest uppercase"
                >
                  <div className="text-gray-400">01</div>
                  <div>Pick your destination</div>
                </h5>
                <div className="mt-14 flex justify-center">
                  <img src={imageUrl} className="md:w-[65%] w-[40%]" alt={title} />
                </div>
              </div>
              <div className="lg:basis-1/2 basis-0 lg:mt-0 md:mt-10 mt-5 lg:w-full w-[80%] lg:text-left text-center">
                <div className="flex flex-row lg:justify-normal justify-center gap-10">
                  {navTabs.map((tabs, index) => {
                    const { title } = tabs;

                    return (
                      <button
                        key={index}
                        onClick={() => changeTab(index)}
                        className={className(
                          currentTab === index + 1
                            ? "text-white border-b-white"
                            : "text-gray-300 hover:border-b-white",
                          "text-[14px] font-barlow py-3 uppercase tracking-widest font-light border-b-2 border-b-transparent outline-none duration-700"
                        )}
                      >
                        {title}
                      </button>
                    );
                  })}
                </div>

                <div className="md:mt-10 mt-5">
                  <h1
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="text-white font-bellefair uppercase md:text-[100px] text-[78px] leading-[78px] md:leading-[100px]"
                  >
                    {title}
                  </h1>

                  <p
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="text-gray-400 md:text-lg text-sm font-barlow tracking-wider"
                  >
                    {text}
                  </p>

                  <div className="md:mt-8 mt-5 md:py-7 py-5 border-t border-t-gray-700">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      className="md:flex block md:space-y-0 space-y-5 flex-row"
                    >
                      <div className="basis-1/2">
                        <div className="text-sm text-gray-400 font-barlow tracking-wide">
                          AVG. DISTANCE
                          <h5 className="text-2xl text-white font-bellefair">
                            {distance} KM
                          </h5>
                        </div>
                      </div>
                      <div className="basis-1/2">
                        <div className="text-sm text-gray-400 font-barlow tracking-wide">
                          EST. TRAVEL TIME
                          <h5 className="text-2xl text-white font-bellefair">
                            {travelTime}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationLayout;
