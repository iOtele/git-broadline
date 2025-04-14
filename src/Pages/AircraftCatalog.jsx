import { useState, useContext } from "react";
import AircraftCard from "../Component/AircraftCard";
import ContactForm from "../Component/ContactForm";
import { assets } from "../assets/assets";
import { StoreContext } from "../Context/StoreContext";

const AircraftCatalog = () => {
  const { aircraftData } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAircraft = aircraftData.filter((aircraft) => {
    const categoryMatch =
      selectedCategory === "All" || aircraft.category === selectedCategory;

    const typeMatch = selectedType === "All" || aircraft.type === selectedType;

    const searchMatch = aircraft.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return categoryMatch && typeMatch && searchMatch;
  });

  return (
    <>
      <div className="w-full relative">
        <img
          src={assets.Hero_img_1}
          className="sm:h-[50vh] h-screen w-full opacity-50"
          alt=""
        />{" "}
        <div className=" absolute flex flex-col top-[40%] left-[4%] sm:left-[7%]  md:left-[6%] lg:left-[3%] xl:left-[3%] sm:w[500px] text-black mx-auto items-center  md:items-center  justify-center  ">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Aircraft Catalog
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 px-7 md:px-11 mt-5 shadow-black">
        <div className="flex flex-wrap gap-4 mb-8 items-center">
          <input
            type="text"
            placeholder="Search aircraft name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Category Filter */}
          {["All", "Private Jet", "Helicopter"].map((category) => (
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

          {/* Type Filter */}
          {["All", "Light Jet", "Heavy Jet", "Mid-size", "Helicopter"].map(
            (type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded ${
                  selectedType === type
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {type}
              </button>
            )
          )}
        </div>

        {/* Aircraft Grid */}
        <div className="grid place-items-center md:grid-cols-4   gap-6  ">
          {filteredAircraft.length > 0 ? (
            filteredAircraft.map((aircraft) => (
              <AircraftCard key={aircraft.id} aircraft={aircraft} />
            ))
          ) : (
            <p className="text-gray-600 col-span-3">No aircraft found.</p>
          )}
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default AircraftCatalog;
