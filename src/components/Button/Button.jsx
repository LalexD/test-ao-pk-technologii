import React from "react";
import styles from "./Button.module.scss";

const Button = ({ variant, text, onClick, isLoading }) => {
  return (
    <button
      disabled={isLoading}
      className={`${styles.buttonBase} ${
        variant === "cat" && styles.variantCat
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
