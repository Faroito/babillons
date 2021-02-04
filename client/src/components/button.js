import React from "react";
import { Link } from "react-router-dom";

import css from "./css/button.module.css";

const Button = ({ to, text, onClick }) => {
  return (
    <Link className={css.button} to={to} onClick={onClick}>
      <span>{text}</span>
    </Link>
  );
};

export default Button;
