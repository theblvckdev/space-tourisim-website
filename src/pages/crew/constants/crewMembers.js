import commanderImage from "../assets/images/image-douglas-hurley.png";
import missionSpecialistImage from "../assets/images/image-mark-shuttleworth.png";
import pilotImage from "../assets/images/image-victor-glover.png";
import flightEngieenerImage from "../assets/images/image-anousheh-ansari.png";

export const crewMembers = [
  {
    position: "Commander",
    name: "Douglas Hurley",
    detail:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imageUrl: commanderImage,
    imageSize: "w-[55%]",
  },

  {
    position: "Mission Specialist",
    name: "Mark Shuttleworth",
    detail:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imageUrl: missionSpecialistImage,
    imageSize: "w-[50%]",
  },

  {
    position: "Pilot",
    name: "Victor Glover",
    detail:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    imageUrl: pilotImage,
    imageSize: "w-[60%]",
  },

  {
    position: "Flight Engineer",
    name: "Anousheh Ansari",
    detail:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    imageUrl: flightEngieenerImage,
    imageSize: "w-[70%]",
  },
];
