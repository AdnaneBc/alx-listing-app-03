import React from "react";
import Link from "next/link";
import Image from "next/image";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartments",
  "Villas",
];

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </Link>
      </div>

      {/* Accommodation Types Navigation */}
      <nav className="hidden md:flex gap-6">
        {accommodationTypes.map((type) => (
          <Link
            key={type}
            href={`/search?type=${type.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {type}
          </Link>
        ))}
      </nav>

      {/* Search Bar */}
      <div className="flex-grow max-w-md mx-4 hidden md:block">
        <input
          type="text"
          placeholder="Search accommodations..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-4">
        <Link
          href="/signin"
          className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
