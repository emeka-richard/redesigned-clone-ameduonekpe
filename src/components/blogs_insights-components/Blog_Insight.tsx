import React from "react";
import styles from "./main_BlogsInsights.module.css";
import { BiSolidCalendar } from "react-icons/bi";
import { MdPerson } from "react-icons/md";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import bloginsightList from "./BlogsInsightList";
import { Link } from "react-router-dom";
import Upcoming_BlogsInsights from "./Upcoming_BlogsInsights";
import ClientMain from "../clients-components/main_client-components/ClientMain";

const BlogInsight: React.FC = ()=> {
  return (
    <section className={styles.blogsinsight_body}>
      <h4>Our Projects</h4>
      <div className={styles.blogsinsight_body_wrapper}>
        {bloginsightList.length > 0 ?  bloginsightList.map((project, index) => (
          <div
            className={styles.blogsinsight_body_card}
            key={index}
            tabIndex={0}
          >
            <img
              className={styles.blogsinsight_body_img}
              src={project.image}
              alt=""
            />
            <div className={styles.blogsinsight_body_title_container}>
              <div className={styles.blogsinsight_body_title_header}>
                <div className={styles.blogsinsight_body_calendar}>
                  <BiSolidCalendar
                    size={"12px"}
                    className={styles.blogsinsight_body_calendar_icon}
                  />
                  <span>{project.uploadDate}</span>
                </div>
                <div className={styles.blogsinsight_body_client}>
                  <MdPerson
                    size={"12px"}
                    className={styles.blogsinsight_body_client_icon}
                  />
                  <span>{project.clientName}</span>
                </div>
              </div>
              <h4 className={styles.blogsinsight_body_title}>
                {project.title}
              </h4>
              <div  className={styles.blogsinsight_body_link}>
                <Link to={project.url}>Read more</Link>
                <TbArrowBadgeRightFilled size={"14px"} />
              </div>
            </div>
          </div>
        )) : (
          <div>
            <p>Projects are not available now, maybe later.</p>
          </div>
        )}
      </div>
      <Upcoming_BlogsInsights />
      <ClientMain />    
    </section>
  );
}

export default BlogInsight;
