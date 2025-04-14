import React from "react";
import { Link } from "react-router-dom";

const AircraftCard = ({ aircraft }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow shadow-gray-300 hover:scale-105 hover:shadow-xl transition-all duration-300">
      <img
        src={aircraft.image}
        alt={aircraft.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-2 pb-4">
        <h3 className="text-xl font-semibold mb-2 text-blue ">
          {aircraft.name}
        </h3>
        <p className="text-gray-600 mb-4">{aircraft.type}</p>
        <Link
          to={`/aircraft/${aircraft.id}`}
          className="text-white bg-blue-900 px-4 py-2 rounded hover:bg-blue-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AircraftCard;
