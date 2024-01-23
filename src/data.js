// rooms images
import Room1Img from './assets/img/rooms/1.jpg';
import Room1ImgLg from './assets/img/rooms/1.jpg';
import Room2Img from './assets/img/rooms/2.jpg';
import Room2ImgLg from './assets/img/rooms/2.jpg';
import Room3Img from './assets/img/rooms/1.jpg';
import Room3ImgLg from './assets/img/rooms/1.jpg';

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
} from 'react-icons/fa';

export const roomData = [
  {
    id: 1,
    name: 'Standard Room',
    type: "Single",
    description:
      'Designed with your convenience in mind, our Standard Room provides you with suitable features and amenities for an enjoyable stay at Western Ambience Hotel.',
    facilities: [
      { name: '1 Queen-size bed', icon: <FaBed /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 30,
    maxPerson: 2,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Deluxe Room',
    type: "Suite",
    description:
      'A convenient option for traveling families or groups, the Deluxe Room provides a comfortable experience during your stay at Western Ambience Hotel.',

    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Apatarment-style', icon: <FaUserFriends /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 70,
    maxPerson: 5,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Family Suite',
    type: "Double",
    description:
      'Our Family Suite provides guests with the comfort and flexibility they need. This is an ideal option for friends or smaller families.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 4,
    price: 265,
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
