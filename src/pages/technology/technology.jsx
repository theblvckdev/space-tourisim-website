import React, { useEffect, useState } from 'react'
import { techData } from './constansts/techData'

const Technology = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const buttonData = [
    {
      buttonInnerText: 1,
    },
    {
      buttonInnerText: 2,
    },
    {
      buttonInnerText: 3,
    },
  ]

  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <>
      <section className="overflow-hidden">
        <div className="h-screen mx-auto w-full lg:bg-[url('../images/technology/background-technology-desktop.jpg')] md:bg-[url('../images/technology/background-technology-tablet.jpg')] bg-[url('../images/technology/background-technology-mobile.jpg')] bg-cover bg-no-repeat flex lg:flex-row flex-col lg:items-center justify-center lg:justify-normal">
          <h5
            data-aos="fade-in"
            data-aos-duration="2000"
            className="text-white flex lg:hidden md:text-left gap-5 md:justify-normal justify-center md:text-[25px] leading-[18px] text-lg font-barlow tracking-widest uppercase md:ml-10 text-[23px]"
          >
            <div className="text-gray-400">03</div>
            <div>Space launch 101</div>
          </h5>
          {techData.map((data, index) => {
            const { title, detail, desktopImageUrl, mobileImageUrl } = data;

            return (
              <div key={index}>
                {currentStep === index ? <div key={index} className="flex lg:flex-row flex-col-reverse md:items-center">
                  <div className="basis-2/3">
                    <div className="md:w-[65%] w-[98%] h-full mx-auto">
                      <h5
                        data-aos="fade-in"
                        data-aos-duration="2000"
                        className="text-white hidden lg:flex md:text-left gap-5 md:justify-normal justify-center md:text-[25px] md:leading-[18px] text-lg font-barlow tracking-widest uppercase"
                      >
                        <div className="text-gray-400">03</div>
                        <div>Space launch 101</div>
                      </h5>

                      <div className="lg:mt-28 md:mt-10 mt-5">
                        <div className="flex lg:flex-row flex-col lg:items-start items-center lg:text-left text-center lg:gap-10 gap-5">
                          <div>
                            <div className="flex lg:flex-col flex-row lg:gap-7 gap-3">
                              {buttonData.map((button, index) => {
                                const { buttonInnerText } = button;

                                return (
                                  <button key={index} onClick={() => setCurrentStep(index)} className={currentStep === index ? 'md:h-[60px] md:w-[60px] w-[50px] h-[50px] rounded-full text-gray-900 bg-white border flex items-center justify-center text-2xl font-bellefair border-gray-600 duration-700 hover:border-white' : 'md:h-[60px] md:w-[60px] w-[50px] h-[50px] rounded-full text-white border flex items-center justify-center text-2xl font-bellefair border-gray-600 duration-700 hover:border-white'}>
                                    {buttonInnerText}
                                  </button>
                                )
                              })}
                            </div>
                          </div>
                          <div>
                            <h6
                              data-aos="fade-in"
                              data-aos-duration="2000"
                              className="text-gray-300 text-sm uppercase font-bellefair font-light"
                            >
                              The Terminology...
                            </h6>

                            <h1
                              data-aos="fade-in"
                              data-aos-duration="2000"
                              className="text-white font-bellefair uppercase md:text-5xl text-3xl md:leading-[70px]"
                            >
                              {title}
                            </h1>

                            <p
                              className="md:mt-5 mt-2 lg:text-left text-center text-gray-400 md:text-lg text-base font-barlow font-light"
                            >
                              {detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/3 lg:mt-[100px] md:mt-[70px] mt-[50px]">
                    <img src={width <= 768 ? mobileImageUrl : desktopImageUrl} alt={title} />
                  </div>
                </div> : null}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Technology