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
      <div className="h-screen w-screen">
        <div className="lg:w-4/5 w-full mx-auto relative h-full">
          <div className="lg:absolute md:bottom-20 w-full">
            <div className="flex lg:flex-row flex-col lg:justify-normal justify-center lg:items-end items-center h-fit">
              <div className="lg:basis-1/2 basis-0">
                <h5
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-gray-200 flex gap-5 text-left text-[25px] leading-[18px] font-barlow tracking-widest uppercase"
                >
                  <div className="text-gray-400">01</div>
                  <div>Pick your destination</div>
                </h5>
                <div className="mt-14 text-center">
                  <img src={imageUrl} width={"350"} alt={title} />
                </div>
              </div>
              <div className="basis-1/2">
                <div className="flex flex-row gap-10">
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

                <div className="mt-10">
                  <h1
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="text-white font-bellefair uppercase text-[100px] leading-[100px]"
                  >
                    {title}
                  </h1>

                  <p
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="text-gray-400 text-lg font-barlow tracking-wider"
                  >
                    {text}
                  </p>

                  <div className="mt-8 py-7 border-t border-t-gray-700">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      className="flex flex-row"
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
