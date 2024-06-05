import React from "react";
import ameduonekpeLogo from "../../assets/images/amedonekpe-removebg-preview.png";
import NavbarLinks from "./NavLinks";
import styles from "./navbar_component.module.css";
import { Link } from "react-router-dom";

const NavbarComponent: React.FC = ()=> {
  return (
    <nav id="nav_component" className={styles.nav_component}>
      <Link to={"/"}>
        <img
          src={ameduonekpeLogo}
          className={styles.logo_icon}
          alt="logo.png"
        />
      </Link>
      {/* <div className={styles.nav_link_wrapper}> */}
      <NavbarLinks />
      {/* </div> */}
    </nav>
  );
}

export default NavbarComponent;
