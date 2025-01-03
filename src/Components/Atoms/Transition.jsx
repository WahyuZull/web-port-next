"use client";
import { motion } from "framer-motion";
export default function Transition({ children }) {
  return (
    <motion.div
      initial={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
