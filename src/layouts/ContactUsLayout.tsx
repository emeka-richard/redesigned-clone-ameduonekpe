import React from "react";
import styles from "./layout.module.css";
import NavbarComponent from "../components/navbar-components/Navbar";
import FooterComponent from "../components/footer-components/Footer";
import ContactUsHeader from "../components/main_contactUs_components/ContactUs_Header";
import ContactUsBody from "../components/main_contactUs_components/ContactUs_Body";

const ContactUsLayout: React.FC = ()=> {
  return (
        <div className={styles.main_contactUs_container}>
          <NavbarComponent />
          <ContactUsHeader />
          <ContactUsBody />
          <FooterComponent />
        </div>
  );
}

export default ContactUsLayout;
