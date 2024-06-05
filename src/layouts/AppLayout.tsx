import React from "react";
import styles from "./layout.module.css";
// import ameduonekpeLogo from "../assets/images/amedonekpe-removebg-preview.png";
import NavbarComponent from "../components/navbar-components/Navbar";
import Home from "../components/home-components/Home";
import SummaryComponent from "../components/home-components/Summary";
import AboutUsComponent from "../components/about-components/About_US";
import ServicesComponent from "../components/services-components/Services";
import ClientsComponent from "../components/clients-components/Client";
import FooterComponent from "../components/footer-components/Footer";

const AppLayout: React.FC = ()=> {
  // const [count, setCount] = useState(1);
  // const [renderPaths, setRenderPaths] = useState(false);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (count < 100) {
  //       setCount((prevCount) => prevCount + 1);
  //     } else {
  //       clearInterval(timer);
  //       setTimeout(() => {
  //         setRenderPaths(true); // Enable rendering of paths after a short delay
  //       }, 1000);
  //     }
  //   }, 50); // Adjust the interval timing as needed

  //   return () => clearInterval(timer);
  // }, [count]);

  return (
    <div className={styles.main_wrapper}>
     {/* {renderPaths === false ? (
        <div className={styles.reader}>
          <div className={styles.reader_wrapper}>
            <img src={ameduonekpeLogo} alt="" className={styles.reader_logo} />
            <div className={styles.reader_item_wrapper}>
              <h4>{count}%</h4>
              <div
                className={styles.reader_item_container}
                style={{ display: renderPaths ? "none" : "block" }}
              >
                <div
                  className={styles.reader_item}
                  style={{
                    width: `${count}%`,
                    background: "var(--primary-green)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : ( */}
        <div className={styles.main_container}>
          <NavbarComponent />
          <Home />
          <SummaryComponent />
          <AboutUsComponent />
          <ServicesComponent />
          <ClientsComponent />
          <FooterComponent />
        </div>
    </div>
  )
}

export default AppLayout;
