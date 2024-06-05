import React from "react";
import styles from "./main_careers.module.css";

const CareersHeader: React.FC = ()=> {

  return (
    <header className={styles.careers_header}>
      <div className={styles.careers_header_wrapper}>
        <div className={styles.careers_header_container}>
            <h3>
              Career <span>Opportunity</span>
            </h3>
        </div>
      </div>
    </header>
  );
}

export default CareersHeader;
