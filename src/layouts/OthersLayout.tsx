import React from "react";
import styles from "./layout.module.css";
import NavbarComponent from "../components/navbar-components/Navbar";
import FooterComponent from "../components/footer-components/Footer";
import OthersHeader from "../components/services-components/main-services-components/others/OthersHeader";
import OtherServices from "../components/services-components/main-services-components/others/Other-Services";

const OtherLayout: React.FC = ()=> {
  return (
        <div className={styles.main_services_container}>
          <NavbarComponent />
          <OthersHeader />
          <OtherServices />
          <FooterComponent />
        </div>
  );
}

export default OtherLayout;
