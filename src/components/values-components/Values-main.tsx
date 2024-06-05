import React from "react";
import styles from "./main-values.module.css";
// import LineIcon1 from "../../assets/svg/lineIcon.svg?react";
// import IntegritySVG from "../../assets/svg/integrity1.svg?react";
// import CompetenceSVG from "../../assets/svg/competence1.svg?react";
// import EthicsSVG from "../../assets/svg/ethics1.svg?react";
// import LeadershipSVG from "../../assets/svg/leadership1.svg?react";
// import ServicesSVG from "../../assets/svg/services1.svg?react";
// import RespectSVG from "../../assets/svg/respect1.svg?react";
// import LineIcon1 from "../../assets/svg/lineIcon.svg?react"
import { FaPeopleGroup } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { SiSimplenote } from "react-icons/si";
import { GrValidate } from "react-icons/gr";
import { BsPersonFillCheck } from "react-icons/bs";

const ValuesMainComponent: React.FC = ()=> {
  return (
    <section className={styles.values}>

      <header className={styles.values_header }><h3 className={styles.values_h3}>Our Core Values</h3>
      {/* <LineIcon1 className={styles.lineIcon} /> */}
      </header>
      <ul className={styles.values_wrapper}>
        <li className={styles.values_item}>
        <GrValidate size={"40px"} />
          INTEGRITY
        </li>
        <li className={styles.values_item}>
        <FaHandsHoldingCircle size={"40px"} />
          RESPECT
        </li>
        <li className={styles.values_item}>
        <BsPersonFillCheck size={"40px"} />
          COMPETENCE
        </li>
        <li className={styles.values_item}>
        <GrServices size={"40px"} />
          SERVICES
        </li>
        <li className={styles.values_item}>
        <FaPeopleGroup size={"40px"} />
          LEADERSHIP
        </li>
        <li className={styles.values_item}>
        <SiSimplenote size={"40px"} />
          ETHICS
        </li>
      </ul>
    </section>
  );
}

export default ValuesMainComponent;
