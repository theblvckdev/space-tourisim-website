import React, { useContext } from "react";
import DestinationLayout from "./components/destinationsLayout";
import moon from "../../assets/images/destination/image-moon.png";
import mars from "../../assets/images/destination/image-mars.png";
import europa from "../../assets/images/destination/image-europa.png";
import titan from "../../assets/images/destination/image-titan.png";
import { PlanetContext } from "../../context/planetChangeContext";

const Destination = () => {
  const { currentTab } = useContext(PlanetContext)

  return (
    <>
      <section className="overflow-hidden lg:bg-[url('../images/destination/background-destination-desktop.jpg')] md:bg-[url('../images/destination/background-destination-tablet.jpg')] bg-[url('../images/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat">
        {currentTab === 1 ? (
          <DestinationLayout
            imageUrl={moon}
            title={"Moon"}
            text={
              "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
            }
            distance={"384,400"}
            travelTime={"3 DAYS"}
          />
        ) : null}
        {currentTab === 2 ? (
          <DestinationLayout
            imageUrl={mars}
            title={"Mars"}
            text={
              "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
            }
            distance={"225 MIL."}
            travelTime={"9 MONTHS"}
          />
        ) : null}{" "}
        {currentTab === 3 ? (
          <DestinationLayout
            imageUrl={europa}
            title={"Europa"}
            text={
              "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
            }
            distance={"628 MIL."}
            travelTime={"3 YEARS"}
          />
        ) : null}
        {currentTab === 4 ? (
          <DestinationLayout
            imageUrl={titan}
            title={"Titan"}
            text={
              "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
            }
            distance={"1.6 BIL"}
            travelTime={"7 YEARS"}
          />
        ) : null}
      </section>
    </>
  );
};

export default Destination;
