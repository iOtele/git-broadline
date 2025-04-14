import Hero_img from "./hero-img.jpeg";
import Hero_img_1 from "./hero-img-1.jpg";
import Hero_img_2 from "./hero-img-2.png";
import Hero_img_4 from "./hero-img-4.png";
import Logo_1 from "./Logo-1.jpeg";
import aircraft_1 from "./aircraft-1.jpg";
import aircraft_2 from "./aircraft-2.jpg";
import aircraft_3 from "./aircraft-3.jpg";
import aircraft_4 from "./Gulfstream-2.jpg";
import aircraft_5 from "./Gulfstream-3.jpg";

import { FaCableCar, FaPlane } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";

export const Assets = {
  Hero_img,
  Hero_img_1,
  Hero_img_2,
  Hero_img_4,
  Logo_1,
  aircraft_1,
  aircraft_2,
  aircraft_3,
  aircraft_4,
  aircraft_5,
};

export const Services = [
  {
    icon: <FaPlane size={25} />,
    title: "Aircraft pre-purchase",
    description:
      "Inspections by licensed mechanics, evaluation, and carefully purchase an aircraft to ensure airworthiness, value, and compliance.",
  },
  {
    icon: <FaClipboardCheck size={25} />,
    title: "Pre-purchase consulting",
    description:
      "Expert guidance to evaluate aircraft condition, value, and risks before acquisition, ensuring a sound investment.",
  },
  {
    icon: <FaHeadset size={25} />,
    title: "Fleet acquisition ",
    description:
      "Strategic planning, evaluation, and procurement of multiple aircraft to optimize operations, costs, and fleet performance",
  },
  {
    icon: <FaCableCar size={25} />,
    title: "Interior Customization Advisory ",
    description:
      "Expert guidance on design, materials, and compliance to tailor aircraft interiors for comfort, functionality, and brand alignment.",
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
  {
    image: aircraft_2,
    title: "Bombardier Global 7500",
    description: "Revolutionary long-range business jet",
  },
];
export const aircraftList = [
  {
    id: "g650",
    name: "Gulfstream G650",
    type: "Heavy Jet",
    image: aircraft_1,
  },
  {
    id: "phenom300",
    name: "Embraer Phenom 300",
    type: "Light Jet",
    image: aircraft_2,
  },
  // Add more aircraft as needed
];

export const aircraftData = [
  // Private Jets
  {
    id: "g650",
    name: "Gulfstream G650",
    type: "Heavy Jet",
    category: "Private Jet",
    image: aircraft_2,
    overview:
      "The Gulfstream G650 is a long-range business jet with luxury and performance.",
    details: [
      "Max Range: 7,000 nm",
      "Max Speed: Mach 0.925",
      "Passengers: Up to 19",
    ],
  },
  {
    id: "phenom300",
    name: "Embraer Phenom 300",
    type: "Light Jet",
    category: "Private Jet",
    image: aircraft_2,
    overview: "Longest range, fastest light jet in its class.",
    details: ["Max Range: 2,000 nm", "Max Speed: 518 mph"],
  },
  {
    id: "global7500",
    name: "Bombardier Global 7500",
    type: "Heavy Jet",
    category: "Private Jet",
    image: aircraft_3,
    overview: "",
    details: [],
  },
  {
    id: "challenger650",
    name: "Challenger 650",
    type: "Heavy Jet",
    category: "Private Jet",
    image: aircraft_1,
    overview: "",
    details: [],
  },
  // Add remaining jets similarly...

  // Helicopters
  {
    id: "bell429",
    name: "Bell 429",
    type: "Heavy",
    category: "Helicopter",
    image: aircraft_2,
    overview: "Twin-engine helicopter for VIP transport.",
    details: ["Max Range: 411 nm", "Max Speed: 172 mph"],
  },
  {
    id: "aw139",
    name: "Leonardo AW139",
    type: "Helicopter",
    category: "Helicopter",
    image: aircraft_3,
    overview: "",
    details: [],
  },
  {
    id: "s76d1",
    name: "Sikorsky S76D",
    type: "Heavy",
    category: "Helicopter",
    image: aircraft_1,
    overview: "",
    details: [],
  },
  // Add remaining helicopters similarly...
  {
    id: "s76d2",
    name: "Sikorsky S76D",
    type: "Mid-size",
    category: "Helicopter",
    image: aircraft_2,
    overview: "",
    details: [],
  },
  {
    id: "s76d3",
    name: "Sikorsky S76D",
    type: "Mid-size",
    category: "Helicopter",
    image: aircraft_3,
    overview: "",
    details: [],
  },
];
export const faqData = [
  {
    id: 1,
    question: "What’s included in your inspection services?",
    answer:
      "Our licensed mechanics conduct physical condition reviews, maintenance record evaluations, boroscope inspections, and detailed due diligence reports.",
  },
  {
    id: 2,
    question: "How long does a typical aircraft acquisition process take?",
    answer:
      "It typically takes 2-8 weeks depending on aircraft availability, inspections, legal clearances, and custom requirements.",
  },
  {
    id: 3,
    question: "Do you assist with aircraft registration or delivery?",
    answer:
      "Yes — Broadline Aviation offers full registration support and delivery logistics as part of our concierge-style service.",
  },
  {
    id: 4,
    question: "Can I request custom modifications post-purchase?",
    answer:
      "Absolutely. We advise on interior customizations, avionics upgrades, and branding options to match your personal or corporate needs.",
  },
];

export const blogData = [
  {
    id: 1,
    title: "Business Jet Market Trends 2025",
    image: aircraft_1,
    excerpt:
      "The business jet market is poised for continued growth, driven by increasing demand for private travel, fleet upgrades, and new technologies.",
    date: "April 2025",
  },
  {
    id: 2,
    title: "5 Must-Ask Questions Before Buying a Private Jet",
    image: aircraft_2,
    excerpt:
      "Before finalizing an aircraft acquisition, ensure you ask these critical questions to avoid costly mistakes and maximize value.",
    date: "March 2025",
  },
  {
    id: 3,
    title: "Aviation Sustainability Trends: What’s Changing in 2025",
    image: aircraft_3,
    excerpt:
      "Eco-friendly initiatives are reshaping the private aviation sector — from sustainable fuels to carbon offset programs.",
    date: "February 2025",
  },
];

export const privateJetsData = [
  {
    id: "g650",
    name: "GULFSTREAM G650",
    category: "Private Jet",
    image: "/assets/g650.jpg",
  },
  {
    id: "global7500",
    name: "BOMBARDIER GLOBAL 7500",
    category: "Private Jet",
    image: "/assets/global7500.jpg",
  },
  {
    id: "challenger650",
    name: "CHALLENGER 650",
    category: "Private Jet",
    image: "/assets/challenger650.jpg",
  },
  {
    id: "challenger350",
    name: "CHALLENGER 350",
    category: "Private Jet",
    image: "/assets/challenger350.jpg",
  },
  {
    id: "g280",
    name: "GULFSTREAM G280",
    category: "Private Jet",
    image: "/assets/g280.jpg",
  },
  {
    id: "legacy650",
    name: "EMBRAER LEGACY 650",
    category: "Private Jet",
    image: "/assets/legacy650.jpg",
  },
  {
    id: "legacy600",
    name: "EMBRAER LEGACY 600",
    category: "Private Jet",
    image: "/assets/legacy600.jpg",
  },
  {
    id: "citationx",
    name: "CESSNA CITATION X",
    category: "Private Jet",
    image: "/assets/citationx.jpg",
  },
  {
    id: "hawker800",
    name: "HAWKER 800",
    category: "Private Jet",
    image: "/assets/hawker800.jpg",
  },
  {
    id: "hawker900xp",
    name: "HAWKER 900XP",
    category: "Private Jet",
    image: "/assets/hawker900xp.jpg",
  },
];

export const helicoptersData = [
  {
    id: "aw139",
    name: "LEONARDO – AW139",
    category: "Helicopter",
    image: "/assets/aw139.jpg",
  },
  {
    id: "s76d",
    name: "SIKORSKY - S76D",
    category: "Helicopter",
    image: "/assets/s76d.jpg",
  },
  {
    id: "aw109",
    name: "LEONARDO – AW109",
    category: "Helicopter",
    image: "/assets/aw109.jpg",
  },
  {
    id: "bell525",
    name: "BELL 525",
    category: "Helicopter",
    image: "/assets/bell525.jpg",
  },
  {
    id: "bell429",
    name: "BELL 429 WLG",
    category: "Helicopter",
    image: "/assets/bell429.jpg",
  },
  {
    id: "ach145",
    name: "AIRBUS ACH145",
    category: "Helicopter",
    image: "/assets/ach145.jpg",
  },
  {
    id: "ach175",
    name: "AIRBUS ACH175",
    category: "Helicopter",
    image: "/assets/ach175.jpg",
  },
  {
    id: "ach160",
    name: "AIRBUS ACH160",
    category: "Helicopter",
    image: "/assets/ach160.jpg",
  },
  {
    id: "aw189",
    name: "LEONARDO – AW189",
    category: "Helicopter",
    image: "/assets/aw189.jpg",
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
