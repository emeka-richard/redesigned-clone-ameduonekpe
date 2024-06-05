import React from "react";
import styles from "./layout.module.css";
import NavbarComponent from "../components/navbar-components/Navbar";
import AboutHeader from "../components/about-components/main_about_component/AboutHeader";
import AboutBody from "../components/about-components/main_about_component/AboutBody";
import FooterComponent from "../components/footer-components/Footer";

const AboutLayout: React.FC = ()=> {
  return (
        <div className={styles.main_about_container}>
          <NavbarComponent />
          <AboutHeader />
          <AboutBody />
          <FooterComponent />
        </div>
  );
}

export default AboutLayout;
