import { useParams, Link } from "react-router-dom";
import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
const AircraftDetailsPage = () => {
  const { aircraftData } = useContext(StoreContext);
  const { id } = useParams();
  const aircraft = aircraftData.find((item) => item.id === id);

  if (!aircraft) {
    return <div className="p-6">Aircraft not found.</div>;
  }

  return (
    <div className="flex flex-col items-center px-10 mt-5  shadow-black">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">{aircraft.name}</h2>
      <img
        src={aircraft.image}
        alt={aircraft.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">{aircraft.overview}</p>

      <h3 className="text-2xl font-semibold text-blue-800 mb-2">
        Specifications:
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {aircraft.details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>

      <Link
        to="/catalog"
        className="text-white bg-blue-900 px-6 py-3 rounded hover:bg-blue-800"
      >
        Back to Aircraft Listings
      </Link>
    </div>
  );
};

export default AircraftDetailsPage;
