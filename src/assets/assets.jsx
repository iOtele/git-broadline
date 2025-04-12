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
export const aircraftList = [
  {
    id: "g650",
    name: "Gulfstream G650",
    type: "Heavy Jet",
    image: "/assets/g650.jpg",
  },
  {
    id: "phenom300",
    name: "Embraer Phenom 300",
    type: "Light Jet",
    image: "/assets/phenom300.jpg",
  },
  // Add more aircraft as needed
];

export const aircraftData = [
  {
    id: "g650",
    name: "Gulfstream G650",
    type: "Heavy Jet",
    category: "Heavy Jet",
    image: "/assets/g650.jpg",
    overview:
      "The Gulfstream G650 is a long-range business jet with exceptional luxury, comfort, and performance for global travel.",
    details: [
      "Max Range: 7,000 nm",
      "Max Speed: Mach 0.925",
      "Passengers: Up to 19",
      "Cabin Height: 6'5''",
      "Service Ceiling: 51,000 ft",
    ],
  },
  {
    id: "phenom300",
    name: "Embraer Phenom 300",
    type: "Light Jet",
    category: "Light Jet",
    image: "/assets/phenom300.jpg",
    overview:
      "The Phenom 300 offers the longest range and highest speed in its class. Designed for speed, comfort, and versatility.",
    details: [
      "Max Range: 2,000 nm",
      "Max Speed: 518 mph",
      "Passengers: 6-8",
      "Cabin Height: 4'11''",
      "Service Ceiling: 45,000 ft",
    ],
  },
  {
    id: "bell429",
    name: "Bell 429",
    type: "Helicopter",
    category: "Helicopter",
    image: "/assets/bell429.jpg",
    overview:
      "The Bell 429 is a twin-engine light utility helicopter known for its speed, range, and advanced avionics for VIP transport.",
    details: [
      "Max Range: 411 nm",
      "Max Speed: 172 mph",
      "Passengers: 6",
      "Cabin Height: 4'5''",
      "Service Ceiling: 20,000 ft",
    ],
  },
];

export const testimonialsData = [
  {
    id: 1,
    clientName: "Jonathan Miles",
    aircraft: "Gulfstream G650",
    quote:
      "Broadline Aviation made our aircraft acquisition seamless. Their expertise and discretion were top-tier.",
  },
  {
    id: 2,
    clientName: "GlobalCorp Aviation Division",
    aircraft: "Fleet Acquisition (3 Phenom 300s)",
    quote:
      "The Broadline team delivered an unmatched, concierge-style service. Our fleet acquisition was handled flawlessly.",
  },
  {
    id: 3,
    clientName: "Sophia Carter",
    aircraft: "Bell 429 Helicopter",
    quote:
      "From inspection to delivery, Broadline was exceptional. They truly raise the standard in private aviation.",
  },
];
