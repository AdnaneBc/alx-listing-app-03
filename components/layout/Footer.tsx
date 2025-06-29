import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-12">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
      </div>

      {/* Social Icons (placeholders) */}
      <div className="flex justify-center gap-4 mb-4 text-lg">
        <span className="cursor-pointer hover:text-blue-500">🌐</span>
        <span className="cursor-pointer hover:text-blue-400">🐦</span>
        <span className="cursor-pointer hover:text-blue-700">📘</span>
      </div>

      {/* Copyright */}
      <div>
        &copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
