// rooms images
import Room1Img from "./assets/img/rooms/1.jpg";
import Room1ImgLg from "./assets/img/rooms/1.jpg";
import Room2Img from "./assets/img/rooms/2.jpg";
import Room2ImgLg from "./assets/img/rooms/2.jpg";
import Room3Img from "./assets/img/rooms/1.jpg";
import Room3ImgLg from "./assets/img/rooms/1.jpg";
import Hbd from "./assets/img/services/birthday.jpeg"
import Catering from "./assets/img/services/catering.jpeg"
import Conferencing from "./assets/img/services/conference.jpeg"
import Team from "./assets/img/services/team.jpeg"

// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  // FaParking,
  // FaSwimmingPool,
  // FaHotdog,
  // FaStopwatch,
  FaCocktail,
  FaBed,
  FaUserFriends,
} from "react-icons/fa";

export const roomData = [
  {
    id: 1,
    name: "Standard Room",
    type: "Single",
    description:
      "Designed with your convenience in mind, our Standard Room provides you with suitable features and amenities for an enjoyable stay at Western Ambience Hotel.",
    facilities: [
      { name: "1 Queen-size bed", icon: <FaBed /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],   
    price: 2200,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: "Deluxe Room",
    type: "Double",
    description:
      "A convenient option for traveling families or groups, the Deluxe Room provides a comfortable experience during your stay at Western Ambience Hotel.",

    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Apatarment-style", icon: <FaUserFriends /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    price: 2700,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: "Executive Suite",
    type: "Suite",
    description:
      "Our Family Suite provides guests with the comfort and flexibility they need. This is an ideal option for friends or smaller families.",
    facilities: [
      { name: "Wifi", icon: <FaWifi /> },
      { name: "Coffee", icon: <FaCoffee /> },
      { name: "Bath", icon: <FaBath /> },
      { name: "Drinks", icon: <FaCocktail /> },
    ],
    price: 3700,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },

  // {
  //   id: 4,
  //   name: 'Luxury Room',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
  //   facilities: [
  //     { name: 'Wifi', icon: <FaWifi /> },
  //     { name: 'Coffee', icon: <FaCoffee /> },
  //     { name: 'Bath', icon: <FaBath /> },
  //     { name: 'Parking Space', icon: <FaParking /> },
  //     { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
  //     { name: 'Breakfast', icon: <FaHotdog /> },
  //     { name: 'GYM', icon: <FaStopwatch /> },
  //     { name: 'Drinks', icon: <FaCocktail /> },
  //   ],
  //   size: 50,
  //   maxPerson: 4,
  //   price: 289,
  //   image: Room4Img,
  //   imageLg: Room4ImgLg,
  // },
  // {
  //   id: 5,
  //   name: 'Luxury Suite Room',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
  //   facilities: [
  //     { name: 'Wifi', icon: <FaWifi /> },
  //     { name: 'Coffee', icon: <FaCoffee /> },
  //     { name: 'Bath', icon: <FaBath /> },
  //     { name: 'Parking Space', icon: <FaParking /> },
  //     { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
  //     { name: 'Breakfast', icon: <FaHotdog /> },
  //     { name: 'GYM', icon: <FaStopwatch /> },
  //     { name: 'Drinks', icon: <FaCocktail /> },
  //   ],
  //   size: 90,
  //   maxPerson: 5,
  //   price: 320,
  //   image: Room5Img,
  //   imageLg: Room5ImgLg,
  // },
  // {
  //   id: 6,
  //   name: 'Deluxe Room',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
  //   facilities: [
  //     { name: 'Wifi', icon: <FaWifi /> },
  //     { name: 'Coffee', icon: <FaCoffee /> },
  //     { name: 'Bath', icon: <FaBath /> },
  //     { name: 'Parking Space', icon: <FaParking /> },
  //     { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
  //     { name: 'Breakfast', icon: <FaHotdog /> },
  //     { name: 'GYM', icon: <FaStopwatch /> },
  //     { name: 'Drinks', icon: <FaCocktail /> },
  //   ],
  //   size: 45,
  //   maxPerson: 6,
  //   price: 344,
  //   image: Room6Img,
  //   imageLg: Room6ImgLg,
  // },
  // {
  //   id: 7,
  //   name: 'Luxury Room',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea ccusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
  //   facilities: [
  //     { name: 'Wifi', icon: <FaWifi /> },
  //     { name: 'Coffee', icon: <FaCoffee /> },
  //     { name: 'Bath', icon: <FaBath /> },
  //     { name: 'Parking Space', icon: <FaParking /> },
  //     { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
  //     { name: 'Breakfast', icon: <FaHotdog /> },
  //     { name: 'GYM', icon: <FaStopwatch /> },
  //     { name: 'Drinks', icon: <FaCocktail /> },
  //   ],
  //   size: 84,
  //   maxPerson: 7,
  //   price: 389,
  //   image: Room7Img,
  //   imageLg: Room7ImgLg,
  // },
  // {
  //   id: 8,
  //   name: 'Deluxe Room',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
  //   facilities: [
  //     { name: 'Wifi', icon: <FaWifi /> },
  //     { name: 'Coffee', icon: <FaCoffee /> },
  //     { name: 'Bath', icon: <FaBath /> },
  //     { name: 'Parking Space', icon: <FaParking /> },
  //     { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
  //     { name: 'Breakfast', icon: <FaHotdog /> },
  //     { name: 'GYM', icon: <FaStopwatch /> },
  //     { name: 'Drinks', icon: <FaCocktail /> },
  //   ],
  //   size: 48,
  //   maxPerson: 8,
  //   price: 499,
  //   image: Room8Img,
  //   imageLg: Room8ImgLg,
  // },
];

export const services = [
  {
    id: 1,
    name: "Outdoor Catering",
    description:
      "Immerse your guests in a culinary journey with our Outdoor Catering services. Whether it's a wedding celebration, corporate event, or a special gathering, our expert chefs craft a bespoke menu to tantalize taste buds.  Trust us to bring the flavors of Westernambiencebliss to your special occasions.",

    
    image: Catering,
 
  },
  {
    id: 2,
    name: "Birthday Celebrations",
    description:
      "Celebrate life's milestones with style at Westernambiencebliss.  Whether you're planning an intimate family gathering or a lively party with friends, our dedicated team ensures seamless coordination, creating an ambiance that reflects your unique style and personality.",

   
    image: Hbd,
 
  },
  {
    id: 3,
    name: "Conferencing",
    description:
      "Elevate your business events with our well-equipped venue. With professional event planning and technical support, ensure a productive and comfortable environment for your attendees. From small boardroom meetings to large-scale conferences, we cater to your business needs with precision and care.",
    image: Conferencing,
 
  },

  

  {
    id: 4,
    name: "Team Building",
    description:
      "Foster teamwork and camaraderie with our tailored Team Building programs. At Westernambiencebliss, we offer engaging and interactive activities designed to strengthen bonds among your team members.  Boost morale, enhance communication, and inspire creativity with our unique team-building experiences.",

   
    image: Team,
  
  },
];
