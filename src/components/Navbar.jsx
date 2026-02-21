import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ scrolled }) {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (

    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
          : "bg-slate-950/20 backdrop-blur-sm"
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1 group cursor-pointer">

            <img
              src="/logo.png"
              alt="CodeFlow"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />

            <span className="text-lg sm:text-xl md:text-2xl font-medium">

              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>

            </span>

          </Link>


          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">

            <Link
              to="/features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </Link>

            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </Link>

            <Link
              to="/testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </Link>

          </div>


          {/* Mobile Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >

            {mobileMenuIsOpen ?

              <X className="w-5 h-5 sm:w-6 sm:h-6" />

              :

              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />

            }

          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {mobileMenuIsOpen && (

        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">

          <div className="px-4 py-4 space-y-4">


            <Link
              to="/features"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Features
            </Link>


            <Link
              to="/pricing"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Pricing
            </Link>


            <Link
              to="/testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white"
            >
              Testimonials
            </Link>


          </div>

        </div>

      )}

    </nav>

  );

}
