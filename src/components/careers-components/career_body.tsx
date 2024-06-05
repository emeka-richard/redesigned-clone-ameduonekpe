import React from 'react'
import styles from "./main_careers.module.css"
import WhyJoinUs from './WhyJoinUs'
import Vacancies from './Vacancies'

const CareerBody: React.FC = ()=> {
  return (
    <section className={styles.careers_body}>
        <WhyJoinUs />
        <Vacancies/>
    </section>
  )
}

export default CareerBody