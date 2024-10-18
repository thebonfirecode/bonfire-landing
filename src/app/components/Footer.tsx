"use client"
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      staggerChildren: 0.3, // Adds delay between children animations
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-main-black text-white py-6"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="text-center md:text-left mb-4 md:mb-0"
          variants={childVariants}
        >
          <p className="text-sm">&copy; {new Date().getFullYear()} BONFIRE CODE. All rights reserved.</p>
        </motion.div>
        <motion.div className="flex space-x-4" variants={childVariants}>
          <motion.a
            href="https://twitter.com"
            className="hover:text-gray-400"
            variants={childVariants}
          >
            Twitter
          </motion.a>
          <motion.a
            href="https://facebook.com"
            className="hover:text-gray-400"
            variants={childVariants}
          >
            Facebook
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            className="hover:text-gray-400"
            variants={childVariants}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
