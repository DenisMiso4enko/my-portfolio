import React, { FC } from "react";
import "./index.scss";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
