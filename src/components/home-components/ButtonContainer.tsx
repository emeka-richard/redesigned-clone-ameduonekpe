import React from "react";
import styles from "./home.module.css"
import { Link } from "react-router-dom";

interface ButtonComponentElementProps {
  buttonProp: string;
  link: string;
}

const ButtonComponent: React.FC<ButtonComponentElementProps> = ({ buttonProp, link }) => {  return (
    <section className={styles.inputElement_wrapper}>
      <Link to={link} role="button" className={styles.inputBTN}>{buttonProp}</Link>
    </section>
  );
}

export default ButtonComponent;
