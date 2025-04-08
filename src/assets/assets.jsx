import Hero_img from "./hero-img.jpeg";
import Logo_1 from "./Logo-1.jpeg";
import aircraft_1 from "./aircraft-1.jpg";
import aircraft_2 from "./aircraft-2.jpg";
import aircraft_3 from "./aircraft-3.jpg";

import { FaPlane } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";

export const Assets = {
  Hero_img,
  Logo_1,
  aircraft_1,
  aircraft_2,
  aircraft_3,
};

export const Services = [
  {
    icon: <FaPlane size={25} />,
    title: "Aircraft Sales",
    description: "Expert guidance in acquiring and selling private aircraft",
  },
  {
    icon: <FaClipboardCheck size={25} />,
    title: "Aircraft Management",
    description: "Comprehensive management solutions for aircraft owners",
  },
  {
    icon: <FaHeadset size={25} />,
    title: "Consulting Services",
    description: "professional advice on all aspects of private aviation",
  },
];

export const Featured = [
  {
    image: aircraft_1,
    title: "Gulfstream G650",
    description: "Ultra-long-range business jet performance",
  },
  {
    image: aircraft_2,
    title: "Bombardier Global 7500",
    description: "Revolutionary long-range business jet",
  },
  {
    image: aircraft_3,
    title: "Cessna Citation Longitude",
    description: "Mid-size jet with exceptional comfort",
  },
];
