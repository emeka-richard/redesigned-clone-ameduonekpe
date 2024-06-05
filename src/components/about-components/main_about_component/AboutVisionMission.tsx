import React, { useState } from "react";
import styles from "./main_about.module.css";

const AboutVisionMission: React.FC = () => {
  const [isVision, setIsVision] = useState(false);

  const handleSwitch = (tag: string) => {
    if(tag === "vision"){
        setIsVision(true);
    } else {
        setIsVision(false)
    }
  };
  return (
    <section className={styles.all}>
      <div className={styles.all_tag_container}>
        <h3 className={`${styles.all_tag_vision} ${isVision ? styles.tag_active2 : ""}`} onClick={()=>handleSwitch("vision")}>
          Our Vision
        </h3>
        <h3 className={`${styles.all_tag_mission} ${!isVision ? styles.tag_active1 : ""}`} onClick={()=>handleSwitch("mission")}>Our Mission</h3>
      </div>
      <div className={styles.all_note_container}>
        {isVision ? (
          <section className={`${styles.all_note_vision} ${isVision ? styles.note_active : ""}`}>
            <p>
              To be a leader in the provision of professional services that
              improve organisational efficiency and effectiveness.
            </p>
          </section>
        ) : (
          <section className={`${styles.all_note_mission} ${!isVision ? styles.note_active : ""}`}>
            <p>
              To deliver professional services that helps improve organisational
              efficiency and effectiveness as well as value creation.
            </p>
          </section>
        )}
      </div>
    </section>
  );
}

export default AboutVisionMission;
