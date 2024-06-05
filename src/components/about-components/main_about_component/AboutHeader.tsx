import React, { useEffect, useState } from "react";
import styles from "./main_about.module.css";

const AboutHeader: React.FC = () => {
  const [routeName, setRouteName] = useState("");

  useEffect(() => {
    setRouteName(window.location.pathname);
  });

  return (
    <header className={styles.about_header}>
      <div className={styles.about_header_wrapper}>
        <div className={styles.about_header_container}>
          {routeName === "/about" ? (
            <h3>
              Company <span>Over</span>view
            </h3>
          ) : routeName === "/teams" ? (
            <h3>
              Our <span>Professionals</span>
               {/* of <span data-id="2">Professionals</span> */}
            </h3>
          ) : (
            routeName === "/location" && (
              <h3>
                Our <span>Location</span>
              </h3>
            )
          )}
        </div>
      </div>
    </header>
  );
}

export default AboutHeader;
