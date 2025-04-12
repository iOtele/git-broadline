import { useState } from "react";
import AircraftCard from "../Component/AircraftCard";
import { aircraftData } from "../assets/assets";

const AircraftPurchase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter aircraft based on selected category and search query
  const filteredAircraft = aircraftData.filter((aircraft) => {
    const categoryMatch =
      selectedCategory === "All" || aircraft.category === selectedCategory;
    const searchMatch = aircraft.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-blue-900 mb-6">
        Aircraft Purchase
      </h2>

      {/* Search and Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search aircraft name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Filter Buttons */}
        {["All", "Light Jet", "Heavy Jet", "Helicopter"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Aircraft Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredAircraft.length > 0 ? (
          filteredAircraft.map((aircraft) => (
            <AircraftCard key={aircraft.id} aircraft={aircraft} />
          ))
        ) : (
          <p className="text-gray-600 col-span-3">No aircraft found.</p>
        )}
      </div>
    </div>
  );
};

export default AircraftPurchase;
