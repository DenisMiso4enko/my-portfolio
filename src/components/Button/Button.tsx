import React, { FC } from "react";
import "./index.scss";
import { motion } from "framer-motion";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  size?: string;
}

const Button: FC<ButtonProps> = ({ children, className, onClick, size }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`btn ${className} btn-${size}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
