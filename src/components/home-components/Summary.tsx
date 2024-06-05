import React from "react";
import styles from "./home.module.css"
import { MdOutlineBusinessCenter } from "react-icons/md";
import { MdAccessAlarms } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
// import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

const SummaryComponent: React.FC = () =>{
  return (
    <section className={styles.summary}>
      <div className={styles.summary_body}>
        {/* {ItemsArray.map((service, index) => ( */}
          <div className={styles.summary_item}>
            <header className={styles.summary_item_header}>
              <div className={styles.summary_item_svg_container}>
                <MdOutlineBusinessCenter size={"40px"} className={styles.summary_item_svg} />
              </div>
              <h3>Why Choose Us</h3>
            </header>
            <div className={styles.summary_item_body}>
              <p>1. 25+ Years Consultancy Experience</p>
              <p>2. Highly Skilled Professionals</p>
              <p>3. We Deliver Results Efficiently</p>
              <Link to={"/about"} className={styles.button}>Learn More</Link>
            </div>
          </div>
          <div className={styles.summary_item}>
            <header className={styles.summary_item_header}>
              <div className={styles.summary_item_svg_container}>
                <MdAccessAlarms size={"40px"} className={styles.summary_item_svg} />
              </div>
              <h3>Working Time</h3>
            </header>
            <div className={styles.summary_item_body}>
                <div className={styles.summary_workTime}><p>WEEKDAYS:</p><span>08:00 - 17:00</span></div>
                <div className={styles.summary_workTime}><p>SATURDAY:</p><span>CLOSED</span></div>
                <div className={styles.summary_workTime}><p>SUNDAY:</p><span>CLOSED</span></div>
                <div className={styles.summary_workTime}><p>EMERGENCY:</p><span>24HRS/7DAYS</span></div>
            </div>
          </div>
          <div className={styles.summary_item}>
            <header className={styles.summary_item_header}>
              <div className={styles.summary_item_svg_container}>
                <MdLocationOn size={"40px"} className={styles.summary_item_svg} />
              </div>
              <h3>Our Location</h3>
            </header>
            <div className={styles.summary_item_body}>
              <p>No. 4 Marte Close, off Misau Crescent, Garki II Abuja, Nigeria.</p>
              <p className={styles.call_number}>Phone: +234 810 2918 404</p>
              <Link to={"/contact-us"} className={styles.button}>Visit Us Today</Link>
            </div>
          </div>
          {/* <div className={styles.summary_item}>
            <header className={styles.summary_item_header}>
              <div className={styles.summary_item_svg_container}>
                <MdCall size={"40px"} className={styles.summary_item_svg} />
              </div>
              <h3>Customer Care</h3>
            </header>
            <div className={styles.summary_item_body}>
              <p className={styles.call_number}>08102918404</p>
              <button className={styles.call_number_btn}>Call Now</button>
            </div>
          </div> */}
        {/* ))} */}
      </div>
    </section>
  );
}

export default SummaryComponent;
