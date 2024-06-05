import React from "react";
import styles from "./layout.module.css";
import NavbarComponent from "../components/navbar-components/Navbar";
import FooterComponent from "../components/footer-components/Footer";
import TaxHeader from "../components/services-components/main-services-components/taxs/TaxHeader";
import TaxConsulting from "../components/services-components/main-services-components/taxs/Tax-Consulting";

const TaxLayout: React.FC = ()=> {
  return (
        <div className={styles.main_services_container}>
          <NavbarComponent />
          <TaxHeader />
          <TaxConsulting />
          <FooterComponent />
        </div>
  );
}

export default TaxLayout;
