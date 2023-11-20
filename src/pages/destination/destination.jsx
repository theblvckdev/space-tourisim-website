import React, { useState } from "react";
import DestinationLayout from "./components/destinationsLayout";
import moon from '../../assets/images/destination/image-moon.png'

const Destination = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <>
      <section className="overflow-hidden lg:bg-[url('../images/destination/background-destination-desktop.jpg')] md:bg-[url('../images/destination/background-destination-tablet.jpg')] bg-[url('../images/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat">
        {currentTab === 1 ? <DestinationLayout 
          imageUrl={moon}
          title={'Moon'}
          text={'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'}
          distance={'384,400'}
          travelTime={'3 DAYS'}
        /> : null}
      </section>
    </>
  );
};

export default Destination;
