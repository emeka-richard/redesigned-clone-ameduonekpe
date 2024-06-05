import React from "react";
import styles from "./main_careers.module.css"
import VacancyList from "./VacancyList";

const Vacancies: React.FC = ()=> {
  return (
    <section className={styles.vacancies}>
      <h3>Vacancies</h3>
      {VacancyList.length > 0 ? (
        <div className={styles.vacancies_container}>
          {VacancyList.map((vacancy, index) => (
            <div className={styles.vacancies_item} key={index}>
              <h4>{vacancy.title}</h4><hr/>
              <p dangerouslySetInnerHTML={{__html: vacancy.aboutJob}}></p>
              <button>Apply for Job</button>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.vacancies_nothing}>
          <p>
            <span>There are no current advertised opening.</span>
            <span> 
              Please check later or
            subscribe to get updates from us.
          </span>
          </p>
        </div>
      )}
    </section>
  );
}

export default Vacancies;
