import React, { useState } from 'react'
import { techData } from './constansts/techData'
import { isMobile } from 'react-device-detect'

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

  return (
    <>
      <section className="overflow-hidden">
        <div className="h-screen mx-auto w-full lg:bg-[url('../images/technology/background-technology-desktop.jpg')] md:bg-[url('../images/technology/background-technology-tablet.jpg')] bg-[url('../images/technology/background-technology-mobile.jpg')] bg-cover bg-no-repeat flex items-center">
          {techData.map((data, index) => {
            const { title, detail, desktopImageUrl, mobileImageUrl } = data;

            return (
              <div key={index}>
                {currentStep === index ? <div key={index} className="flex lg:flex-row flex-col-reverse items-center">
                  <div className="basis-2/3">
                    <div className="w-[65%] h-full mx-auto">
                      <h5
                        data-aos="fade-in"
                        data-aos-duration="2000"
                        className="text-white md:text-left flex gap-5 md:justify-normal justify-center md:text-[25px] md:leading-[18px] text-lg font-barlow tracking-widest uppercase"
                      >
                        <div className="text-gray-400">03</div>
                        <div>Space launch 101</div>
                      </h5>

                      <div className="mt-28">
                        <div className="flex gap-10">
                          <div>
                            <div className="flex flex-col gap-7">
                              {buttonData.map((button, index) => {
                                const { buttonInnerText } = button;

                                return (
                                  <button key={index} onClick={() => setCurrentStep(index)} className={currentStep === index ? 'h-[60px] w-[60px] rounded-full text-gray-900 bg-white border flex items-center justify-center text-2xl font-bellefair border-gray-600 duration-700 hover:border-white' : 'h-[60px] w-[60px] rounded-full text-white border flex items-center justify-center text-2xl font-bellefair border-gray-600 duration-700 hover:border-white'}>
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

                              className="mt-5 lg:text-left text-center text-gray-400 md:text-lg text-base font-barlow font-light"
                            >
                              {detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/3 mt-[100px]">
                    <img src={isMobile ? mobileImageUrl : desktopImageUrl} alt="adaf" />
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