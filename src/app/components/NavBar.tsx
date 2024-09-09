"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(0, 0, 0, 0)', 'rgba(48, 56, 65, 0.3)']
  );
  

  return (
    <motion.nav style={{backgroundColor}} className={` bg-main-black backdrop-blur-sm fixed w-full top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-gray-300 py-2 rounded-md text-sm font-medium hover:text-off-white hover:drop-shadow-glow ease-in-out duration-300">
                <Image
                  src="/images/bonfirelogo.svg"
                  alt="Vercel Logo"
                  className="white"
                  width={50}
                  height={60}
                  quality={30}
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <p className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-off-white hover:drop-shadow-glow ease-in-out duration-300">
                    Home
                  </p>
                </Link>
                <Link href="/about">
                  <p className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-off-white hover:drop-shadow-glow ease-in-out duration-300">
                    About
                  </p>
                </Link>
                <Link href="/services">
                  <p className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-off-white hover:drop-shadow-glow ease-in-out duration-300">
                    Services
                  </p>
                </Link>
                <Link href="/contact">
                  <p className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-off-white hover:drop-shadow-glow ease-in-out duration-300">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-off-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <p className="text-gray-300 hover:text-off-white hover:drop-shadow-glow block px-3 py-2 rounded-md text-base font-medium">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="text-gray-300 hover:text-off-white hover:drop-shadow-glow block px-3 py-2 rounded-md text-base font-medium">
              About
            </p>
          </Link>
          <Link href="/services">
            <p className="text-gray-300 hover:text-off-white hover:drop-shadow-glow block px-3 py-2 rounded-md text-base font-medium">
              Services
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-gray-300 hover:text-off-white hover:drop-shadow-glow block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar
