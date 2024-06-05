import React from "react";
import styles from "./layout.module.css";
import NavbarComponent from "../components/navbar-components/Navbar";
import FooterComponent from "../components/footer-components/Footer";
import AuditHeader from "../components/services-components/main-services-components/audits/AuditHeader";
import AuditAssurance from "../components/services-components/main-services-components/audits/Audit-Assurance";

const AuditLayout: React.FC = ()=> {
  return (
        <div className={styles.main_services_container}>
          <NavbarComponent />
          <AuditHeader />
          <AuditAssurance />
          <FooterComponent />
        </div>
  );
}

export default AuditLayout;
