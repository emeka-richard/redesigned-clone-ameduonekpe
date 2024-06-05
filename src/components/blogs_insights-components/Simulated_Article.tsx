import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bloginsightList from "./BlogsInsightList";
import Upcoming_BlogsInsights from "./Upcoming_BlogsInsights";
import styles from "./main_BlogsInsights.module.css";
import Spinner from "../spinner-component/Spinner";

const Simulated_Article: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState({
    title: "",
    clientName: "",
    uploadDate: "",
    url: "",
    image: "",
    article: "",
  });
  const [articleExist, setArticleExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const hasArticleProperty = bloginsightList.some((project) =>
    //   project.hasOwnProperty("article")
    // );
    // setHasProperty(
    //   bloginsightList.some((project) =>
    //     Object.prototype.hasOwnProperty.call(project, "doc")
    //   )
    // );
    setIsLoading(true);
    const selectedProject = bloginsightList.find(
      (project) => {
        if (project.id === id) return project;
      }
      // (project) => project.url === id
    );
    if (selectedProject?.doc) {
      setProject({ ...selectedProject, article: selectedProject.doc });
      setIsLoading(false);
      setArticleExist(true);
    } else {
      setIsLoading(false);
      setArticleExist(false);
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={styles.blogsinsight_body}>
          <div className={styles.simulatedArticle_wrapper}>
            {articleExist ? (
              <>
                <h3 className={styles.simulatedTitle}>{project.title}</h3>
                <div className={styles.simulatedTitle_container}>
                  <h4>Abstract</h4>
                  <p>{project.article.slice(0, 700)}</p>
                </div>
                <div className={styles.simulatedTitle_subscription_container}>
                  <div className={styles.simulatedTitle_subscription}>
                    <Link to={'/contact-us'}>Contact us to have full access</Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>No article related to the topic: {project.title || id}</p>
                {/* <p>properties: {project.article}</p> */}
              </>
            )}
          </div>
          <Upcoming_BlogsInsights />
        </section>
      )}
    </>
  );
};

export default Simulated_Article;
