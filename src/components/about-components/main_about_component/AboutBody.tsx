import React, { useEffect, useState } from "react";
import styles from "./main_about.module.css";
import image1 from "../../../assets/images/guyss.png";
import AboutVisionMission from "./AboutVisionMission";
import ValuesMainComponent from "../../values-components/Values-main";
import Teams from "../../teams-components/Teams";
import TeamsMain from "../../teams-components/Teams-main";

const AboutBody: React.FC = ()=> {
  const [routeName, setRouteName] = useState("");

  useEffect(() => {
    setRouteName(window.location.pathname);
  });

  return (
    <section className={styles.about_body}>
      {routeName === "/about" ? (
        <>
          <div className={styles.about_body_1}>
            <h3>About Us</h3>
            <div className={styles.about_body_1_p_container}>
              {/* <div> */}
              <p>
                <img src={image1} className={styles.image_desktop} alt="" />
                Amedu Onekpe & Co. (Amedu Onekpe) is a Nigerian firm of
                practicing accountants registered in 2005. Our services are
                principally audit and assurance, tax, consulting and advisory.
                The firm works with local and international professional
                associates at corporate and individual basis.
                <br />
                <br />
                Amedu Onekpe has, within a short period, acquired considerable
                experience in handling assignments in timely, efficient and
                effective manner. Specifically, Amedu Onekpe has successfully
                carried out various assignments for different Federal Government
                Ministries, Departments and Agencies (MDAs) including private
                companies amongst others.
                <br />
                <br />
                We ensure that our clients have access to the right professional
                advice at the right time by providing them with the fundamental
                knowledge of their businesses and marketplaces. The firm has
                within the short period of her existence built a reputable track
                record of delivering projects to clients within time and cost
                budgets. We have a team of carefully selected professional staff
                and associates with outstanding experience in accounting,
                auditing, taxation, management, legal and corporate secretariat
                services including information and communication technology. Our
                people are a valuable, high-quality resource and key business
                differentiator.
              </p>
              <img src={image1} className={styles.image1} alt="" />
            </div>
          </div>
          <AboutVisionMission />
          <ValuesMainComponent />
          <Teams />
        </>
      ) : routeName === "/teams" ? (
        <TeamsMain />
      ) : (
        routeName === "location" && <div>Location...Map</div>
      )}
    </section>
  );
}

export default AboutBody;
