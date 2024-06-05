import React from "react";
import styles from "./layout.module.css";
import NavbarComponent from "../components/navbar-components/Navbar";
import FooterComponent from "../components/footer-components/Footer";
import BlogsInsightsHeader from "../components/blogs_insights-components/BlogsInsight_Header";
import { Outlet } from "react-router-dom";
// import BlogInsight from "../components/blogs_insights-components/Blog_Insight";

const BlogsInsightLayout: React.FC = ()=> {
//   const [routeName, setRouteName] = useState("");

//   useEffect(() => {
//     setRouteName(window.location.pathname);
//   });

  return (
    <div className={styles.main_bloginsight_container}>
      <NavbarComponent />
      <BlogsInsightsHeader />
      <Outlet />
      {/* {routeName === "/blogs&insights" ? <BlogInsight /> : <Outlet />} */}
      <FooterComponent />
    </div>
  );
}

export default BlogsInsightLayout;
