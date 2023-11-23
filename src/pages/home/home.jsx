import React from "react";
import Button from "./utils/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="h-screen w-screen lg:bg-[url('../images/home/background-home-desktop.jpg')] md:bg-[url('../images/home/background-home-tablet.jpg')] bg-[url('../images/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="lg:w-4/5 w-full mx-auto relative h-full">
            <div className="lg:absolute md:bottom-28 lg:pt-0 md:pt-24 pt-10 w-full">
              <div className="flex lg:flex-row flex-col lg:gap-0 md:gap-36 gap-20 lg:justify-normal justify-center lg:items-end items-center h-screen lg:h-fit">
                <div className="lg:basis-1/2 basis-0">
                  <h5
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="font-barlow lg:text-left text-center tracking-wider md:leading-[28px] leading-[18px] text-lg md:text-[28px] text-gray-400 uppercase"
                  >
                    So you want to travel to
                  </h5>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="font-bellefair lg:text-left text-center md:text-[150px] md:leading-[200px] text-8xl leading-[130px] text-white uppercase"
                  >
                    Space
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="text-gray-400 lg:text-left text-center lg:w-[83%] md:w-[56%] w-[90%] lg:mx-0 mx-auto text-lg tracking-wider font-barlow"
                  >
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                  </p>
                </div>

                <div className="lg:basis-1/2 md:basis-0">
                  <div className="flex justify-end">
                    <Link to={"/destination"} className="no-underline">
                      <Button text={"Explore"} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
