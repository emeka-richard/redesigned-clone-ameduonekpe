import React from 'react'
import styles from "./main_BlogsInsights.module.css"
import { upcomingList } from './BlogsInsightList'

const Upcoming_BlogsInsights: React.FC =()=> {
  return (
    <section className={styles.upcoming} >
        <h4>Upcoming Events</h4>
        <div className={styles.upcoming_container}>
        {upcomingList.length > 0 ? (
            <p className={styles.upcoming_container_p}>Kindly wait while the list is uploaded.</p>
        ) : (
            <p className={styles.upcoming_container_p}>A list of upcoming events will be uploadded shortly.</p>
        )}
        </div>
    </section>
  )
}

export default Upcoming_BlogsInsights