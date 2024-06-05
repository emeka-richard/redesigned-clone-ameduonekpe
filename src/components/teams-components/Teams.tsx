import React from 'react'
import styles from "./teams.module.css"
import staff1 from "../../assets/images/staff1.png"
import staff2 from "../../assets/images/staff2.png"
import staff3 from "../../assets/images/staff3.png"
import { Link } from 'react-router-dom'
// import LineIcon1 from "../../assets/svg/lineIcon.svg?react"


const Teams: React.FC = () =>{
  return (
    <section className={styles.team_skeleton}>
        <div className={styles.team_skeleton_header}><h3>Our Team</h3>
        {/* <LineIcon1 className={styles.lineIcon} /> */}
        </div>
        <div className={styles.team_skeleton_img_wrapper}>
            <div className={styles.team_skeleton_img_container}>
                <img src={staff1} className={styles.team_skeleton_img1} alt='' />
                <img src={staff3} className={styles.team_skeleton_img3} alt='' />
                <img src={staff2} className={styles.team_skeleton_img2} alt='' />
            </div>
            {/* <img src={staff3} className={styles.team_skeleton_img3} alt='' /> */}
            <div className={styles.team_skeleton_span_container}>
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
        {/* 9.024222428942837, 7.482634350139427 */}
        <Link to={'/teams'} className={styles.team_skeleton_btn}>Meet Our Team</Link>
    </section>
  )
}

export default Teams