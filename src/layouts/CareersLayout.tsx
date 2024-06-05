import React from 'react'
import styles from "./layout.module.css";
import NavbarComponent from "../components/navbar-components/Navbar";
import FooterComponent from "../components/footer-components/Footer";
import CareersHeader from '../components/careers-components/careers_header';
import CareerBody from '../components/careers-components/career_body';


const CareersLayout: React.FC = ()=> {
  return (
    <div className={styles.main_careers_container}>
      <NavbarComponent />
      <CareersHeader />
      <CareerBody />
      <FooterComponent />
    </div>
  )
}

export default CareersLayout