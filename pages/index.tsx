import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

// Constants
const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Beachfront",
  "Mountain View",
  "Private Pool",
];

// Pill Component
const Pill: React.FC<{
  label: string;
  active?: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1 rounded-full border text-sm ${
      active
        ? "bg-blue-600 text-white border-blue-600"
        : "bg-white text-gray-700 border-gray-300"
    } hover:bg-blue-100 transition`}
  >
    {label}
  </button>
);

// Property Card Component
const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{property.name}</h3>
      <p className="text-gray-500">
        {property.address.city}, {property.address.country}
      </p>
      <p className="mt-1 text-sm text-gray-700">⭐ {property.rating}</p>
      <p className="mt-2 text-blue-600 font-bold">${property.price} / night</p>
    </div>
  </div>
);

// Main Page Component
const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredListings = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((prop) =>
        prop.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[50vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/hero.jpg')", // ✅ Make sure this image is available in `public/images`
        }}
      >
        <h1 className="text-4xl font-bold mb-2">
          Find your favorite place here!
        </h1>
        <p className="text-lg max-w-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="py-6 px-4 md:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() =>
                setActiveFilter(activeFilter === filter ? null : filter)
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-8 px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
