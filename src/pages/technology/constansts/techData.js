import launchVehicle from '../assets/images/image-launch-vehicle-portrait.jpg'
import launchVehicleLandScape from '../assets/images/image-launch-vehicle-landscape.jpg'
import spacePort from '../assets/images/image-spaceport-portrait.jpg'
import spacePortLandScape from '../assets/images/image-spaceport-landscape.jpg'
import spaceCapsule from '../assets/images/image-space-capsule-portrait.jpg'
import spaceCapsuleLandScape from '../assets/images/image-space-capsule-landscape.jpg'

export const techData = [
  {
    title: "Launch Vehicle",
    detail: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    desktopImageUrl: launchVehicle,
    mobileImageUrl: launchVehicleLandScape 
  },

  {
    title: "Spaceport",
    detail: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    desktopImageUrl: spacePort,
    mobileImageUrl: spacePortLandScape 
  },

  {
    title: "Space capsule",
    detail: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    desktopImageUrl: spaceCapsule,
    mobileImageUrl: spaceCapsuleLandScape 
  },
]