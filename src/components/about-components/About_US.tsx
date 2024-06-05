import React from "react";
import styles from "./about.module.css";
import ValuesComponent from "../values-components/Values";
// import LineIcon1 from "../../assets/svg/lineIcon.svg?react";

import { AiOutlineLine } from "react-icons/ai";


const AboutUsComponent: React.FC = () => {
  return (
    <section id="about" className={styles.about}>

      <header className={styles.about_header}>
        <AiOutlineLine size={"40px"} className={styles.lineIcon} />
        <h3 className={styles.about_header_h3}>WHO WE ARE</h3> <AiOutlineLine size={"40px"} width={"100px"} className={styles.lineIcon} />
      </header>

      <div className={styles.about_body}>
        <p className={styles.about_p1}>
          A Consulting Organization With 25+ Years of Experience Provide
          Comprehensive Solutions for Audit, Tax, Outsourcing, and Financial
          Advisory and Management.
        </p>
        <p className={styles.about_p2}>
          Ensuring that our clients have access to the right professional advice
          at the right time by providing them with the fundamental knowledge of
          their businesses and marketplaces, is the base of what we do.
        </p>
      </div>
      <div className={styles.about_bottom_section}>
        <div className={styles.about_vision}>
          <h3>Our Vision</h3>
          <p>
            To be a leader in the provision of professional services that
            improve organisational efficiency and effectiveness.
          </p>
        </div>
        <div className={styles.about_mission}>
          <h3>Our Mission</h3>
          <p>
            To deliver professional services that helps improve organisational
            efficiency and effectiveness as well as value creation.
          </p>
        </div>
      </div>
      <ValuesComponent />
    </section>
  );
}

export default AboutUsComponent;

// "@emailjs/browser": "^4.3.3",
// "@here/maps-api-for-javascript": "^1.54.1",
// "react-icons": "^5.2.1",
// "react-router-dom": "^6.22.3"
