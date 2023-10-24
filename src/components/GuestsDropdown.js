import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";

function GuestsDropdown() {
  const { setGuests, guests } = useContext(RoomContext);
  // const [guests, setGuests] = useState("Guests")

  const guestList = [
    { name: "1 guest" },
    { name: "2 guests" },
    { name: "3 guests" },
    { name: "4 guests" },
    { name: "5 guests" },
    { name: "6 guests" },
  ];

  return (
    <Menu as="div" className="w-full h-full bg-white  relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {guests}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {guestList.map((li, index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              className="border-b last:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              onClick={() => {
                setGuests(li.name);
                setGuests(li.name);
              }}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default GuestsDropdown;
