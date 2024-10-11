import { useState } from "react";
import { TiThMenu } from "react-icons/ti"; // Menu icon for mobile
import { AiOutlineClose } from "react-icons/ai"; // Close icon for mobile

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-sky-500 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">MyLogo</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-black text-lg hover:text-gray-700">
                Home
              </a>
              <a href="#" className="text-black text-lg hover:text-gray-700">
                About
              </a>
              <a href="#" className="text-black text-lg hover:text-gray-700">
                Services
              </a>
              <a href="#" className="text-black text-lg hover:text-gray-700">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center">
            {/* Menu Icon */}
            <button onClick={toggleMenu} className="text-3xl text-black md:hidden">
              {showMenu ? <AiOutlineClose /> : <TiThMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Buttons (Hidden on Medium Screens and Up) */}
      <div className="flex sm:hidden justify-between mt-2 px-6">
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300">
          Login
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          Sign Up
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-black text-white flex flex-col justify-center items-center h-screen w-screen z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl">
            <AiOutlineClose />
          </button>
          <a href="#" className="text-2xl py-2 hover:text-gray-400">Home</a>
          <a href="#" className="text-2xl py-2 hover:text-gray-400">About</a>
          <a href="#" className="text-2xl py-2 hover:text-gray-400">Services</a>
          <a href="#" className="text-2xl py-2 hover:text-gray-400">Contact</a>

          {/* Buttons in Mobile Menu */}
          <div className="mt-8 space-y-4">
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300">
              Login
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
