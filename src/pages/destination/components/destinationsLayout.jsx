import React from 'react'
import { navTabs } from '../constant/navTabs'

function className(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DestinationLayout = ({ imageUrl, title, text, distance, travelTime }) => {
  return (
    <>
      <div className='h-screen w-screen'>
        <div className="lg:w-4/5 w-full mx-auto relative h-full">
          <div className='absolute bottom-28 w-full'>
            <div className="flex flex-row items-end h-fit">
              <div className="basis-1/2">
                <h5 className='text-white text-xl leading-[18px] font-barlow tracking-wider uppercase'>
                  <span className='text-gray-400'>01</span> Pick your destination
                </h5>
                <div className='mt-10 text-center'>
                  <img src={imageUrl} alt={title} />
                </div>
              </div>
              <div className="basis-1/2">
                <div className="flex flex-row gap-4">
                  {navTabs.map((tabs, index) => {
                    const { title, isActive } = tabs;

                    return (
                      <button key={index} className={className(isActive ? "text-white border-b-white" : "text-gray-300 hover:border-b-white", 'text-[14px] font-barlow py-3 uppercase tracking-widest font-light border-b-2 border-b-transparent outline-none')}>
                        {title}
                      </button>
                    )
                  })}
                  <h1 className='text-white font-bellefair uppercase text-[100px]'>
                    {title}
                  </h1>

                  <p className="text-gray-400 text-lg font-barlow tracking-wider">
                    {text}
                  </p>

                  <div className="mt-10 py-7 border-t-2 border-t-gray-400">
                    <div className="flex flex-row">
                      <div className="basis-1/2">
                        <div className="text-sm text-gray-400 font-barlow tracking-wide">
                          AVG. DISTANCE
                          <h5 className='text-2xl text-white font-bellefair'>
                            {distance} KM
                          </h5>
                        </div>
                      </div>
                      <div className="basis-1/2">
                        <div className="text-sm text-gray-400 font-barlow tracking-wide">
                          EST. TRAVEL TIME
                          <h5 className='text-2xl text-white font-bellefair'>
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
  )
}

export default DestinationLayout