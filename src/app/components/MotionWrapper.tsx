"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const MotionWrapper = ({ children }: { children: ReactNode }) => {
  const routeVariants = {
      initial: { opacity: 0, scale: 0.98 },
      in: { opacity: 1, scale: 1 },
      out: { opacity: 0, scale: 0.98 },
    }
  return (
    <motion.div
      transition={{ type: "tween", ease: "easeInOut", duration: 0.15 }}
      animate={"in"}
      initial={"initial"}
      variants={routeVariants}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
