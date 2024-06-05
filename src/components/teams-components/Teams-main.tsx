import React from "react";
import styles from "./main_teams.module.css";
import TeamList from "./TeamList";

const TeamsMain: React.FC = ()=> {
  return (
    <section className={styles.team_main}>
      <div className={styles.team_main_intro}>
        <h3>Our Team</h3>
        <p>
          We have a team of carefully selected multidisciplinary professionals
          who know how the various elements of the proposed assignment fit
          together. Additionally, our people also derive tremendous personal
          satisfaction from meeting client’s need. Which in turn develops their
          professional skills and enhance team building and communication, as
          well as learning how to cope better with adversity and turn difficult
          situations into a rewarding experience.
        </p>
      </div>
      <div className={styles.team_main_wrapper}>
      {TeamList.map((staff, index) => (
        <div className={styles.team_main_card} key={index} tabIndex={0}>
          <div className={styles.team_main_card_top}>
            <img src={staff.image} alt="" />
            <h4>{staff.name}</h4>
            <span>{staff.title}</span>
          </div>
          {/* <div className={styles.team_main_card_bottom}>
            <h4>{staff.name}</h4>
            <p>{staff.profile1}</p><br />
            <p>{staff.profile2}</p>
          </div> */}
        </div>
      ))}
      </div>
    </section>
  );
}

export default TeamsMain;
