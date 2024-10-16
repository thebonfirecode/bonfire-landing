"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['rgba(0, 0, 0, 0)', 'rgba(48, 56, 65, 0.6)']
  );
  const menuVariants = {
    hidden: {opacity: 0, height: 0, transition: { duration: 0.3 }},
    visible: {opacity: 1, height: "auto", transition: {duration:  0.3}},
  }
  

  return (
    <motion.nav 
      style={{backgroundColor}} 
      className={` bg-main-black backdrop-blur-sm fixed w-full top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className=" flex items-center text-gray-300 py-2 rounded-md text-sm font-medium hover:text-off-white hover:drop-shadow-glow ease-in-out duration-300">
                <Image
                  src="/images/bonfirelogo.svg"
                  alt="Bonfire Code Logo"
                  className="white"
                  width={50}
                  height={60}
                  priority
                />
                <Image
                  src="/images/bonfiretextonly-white.png"
                  alt="Bonfire Code Name"
                  width={120}
                  height={100}
                  quality={100}
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <p className="text-gray-300 px-3 py-2 rounded-md text-md font-bold hover:text-off-white ">
                    HOME
                  </p>
                </Link>
                <Link href="/about">
                  <p className="text-gray-300 px-3 py-2 rounded-md text-md font-bold hover:text-off-white">
                    ABOUT
                  </p>
                </Link>
                <Link href="/services">
                  <p className="text-gray-300 px-3 py-2 rounded-md text-md font-bold hover:text-off-white">
                    SERVICES
                  </p>
                </Link>
                <Link href="/contact">
                  <p className="text-gray-300 px-3 py-2 rounded-md text-md font-bold hover:text-off-white">
                    CONTACT
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <div className="relative w-10 h-8">
              <label
                htmlFor="menuToggle"
                className="block w-full h-full relative"
              >
                <input 
                  type="checkbox" 
                  id="menuToggle" 
                  className="hidden peer"
                  onChange={()=> {setIsOpen(!isOpen)}} 
                />
                <span className="block rounded bg-main-orange h-1 w-full my-1 transition-transform duration-300 peer-checked:translate-y-[8px] peer-checked:rotate-45"></span>
                <span className="block rounded bg-main-orange h-1 w-full my-1 transition-opacity duration-300 peer-checked:opacity-0"></span>
                <span className="block rounded bg-main-orange h-1 w-full my-1 transition-transform duration-300 peer-checked:-translate-y-[8px] peer-checked:-rotate-45"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        { isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={"md:hidden overflow-hidden"}
            id="mobile-menu"
          >
            <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-8 sm:px-3">
              <Link href="/">
                <p className="text-main-orange hover:text-off-white block px-3 py-2 rounded-md text-xl font-bold">
                  HOME
                </p>
              </Link>
              <Link href="/about">
                <p className="text-main-orange hover:text-off-white block px-3 py-2 rounded-md text-xl font-bold">
                  ABOUT
                </p>
              </Link>
              <Link href="/services">
                <p className="text-main-orange hover:text-off-white block px-3 py-2 rounded-md text-xl font-bold">
                  SERVICES
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-main-orange  hover:text-off-white block px-3 py-2 rounded-md text-xl font-bold">
                  CONTACT
                </p>
              </Link>
            </div>
          </motion.div>
          )
        }
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar
