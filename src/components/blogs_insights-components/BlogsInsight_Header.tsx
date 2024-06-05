import React from "react";
import styles from "./main_BlogsInsights.module.css";

const BlogsInsightsHeader: React.FC = ()=>{

  return (
    <header className={styles.blogs_insights_header}>
      <div className={styles.blogs_insights_header_wrapper}>
        <div className={styles.blogs_insights_header_container}>
            <h3>
              Projects & <span>Insights</span>
            </h3>
        </div>
      </div>
    </header>
  );
}

export default BlogsInsightsHeader;
