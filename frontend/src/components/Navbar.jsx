import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_1.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-800 hover:scale-105";

  return (
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-24">
          {/* Left Logo */}
          <div className="flex justify-center items-center py-3">
  <img
    src={logo}
    alt="Logo"
    className="h-16 sm:h-20 w-auto object-contain"
  />
</div>

          {/* Center Heading */}
          <div className="hidden lg:flex flex-1 justify-center px-6">
            <h1 className="text-2xl xl:text-3xl font-bold tracking-wide text-center whitespace-nowrap">
              Vikas Automobiles
            </h1>
            {/* <h1 className="text-2xl xl:text-3xl font-bold tracking-wide text-center whitespace-nowrap transition-all duration-300 hover:text-blue-200">
  Vikas Automobiles
</h1> */}
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 ml-auto text-base xl:text-lg font-semibold">
            <Link to="/" className={linkStyle}>
              Home
            </Link>

            <Link to="/products" className={linkStyle}>
              Products
            </Link>

            <Link to="/about" className={linkStyle}>
              About
            </Link>

            <Link to="/contact" className={linkStyle}>
              Contact
            </Link>

            <Link to="/achievements" className={linkStyle}>
              Achievements
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Heading */}
        <div className="md:hidden text-center pb-3">
          <h1 className="text-2xl font-bold tracking-wide">
            Vikas Automobiles
          </h1>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-500 md:hidden`}
        >
          {/* Logo */}
          
          {/* Menu Links */}
          <div className="flex flex-col gap-3 text-center text-lg font-semibold bg-blue-700 rounded-xl p-4">
            <Link to="/" className={linkStyle} onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link
              to="/products"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>

            <Link
              to="/about"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/achievements"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              Achievements
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
