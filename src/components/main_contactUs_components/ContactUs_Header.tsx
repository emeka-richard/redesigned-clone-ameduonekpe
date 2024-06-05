import React from "react";
import styles from "./main_contactUs.module.css";

const ContactUsHeader: React.FC = ()=> {

  return (
    <header className={styles.contactUs_header}>
      <div className={styles.contactUs_header_wrapper}>
        <div className={styles.contactUs_header_container}>
            <h3>
              Contact <span>Information</span>
            </h3>
        </div>
      </div>
    </header>
  );
}

export default ContactUsHeader;
