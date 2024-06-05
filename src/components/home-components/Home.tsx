import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
// import "./additional.css";
import image1 from "../../assets/images/corpo1.png";
import image3 from "../../assets/images/corpo2.png";
import image2 from "../../assets/images/corpo9.png";
// import HeroImage from "../../assets/svg/heroImage.svg?react";
import ButtonComponent from "./ButtonContainer";
// import LeftArrowSVG from "../../assets/svg/leftArrowSVG.svg?react";
// import RightArrowSVG from "../../assets/svg/rightArrowSVG.svg?react";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const imagesArray = [image1, image2, image3];

const Home: React.FC = ()=> {
  const [index, setIndex] = useState(0);
//   const [animationDirection, setAnimationDirection] = useState("left");

  const handleChange = (currentIndex: number) => {
    setIndex(currentIndex);
  };

  const clickNext = () => {
    // setAnimationDirection("left-slide-effect");
    setIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
  };
  const clickPrev = () => {
    // setAnimationDirection("right-slide-effect");
    setIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(clickNext, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="home"
      className={styles.home}
      // style={{ backgroundImage: `url(${imagesArray[index]})`, animation: `left-slide 0.5s`}}
    >
      <div className={styles.leftArrow_container} onClick={clickPrev}>
        <FaRegArrowAltCircleLeft size={"50px"} className={styles.leftArrow} />
      </div>
      <div className={styles.rightArrow_container} onClick={clickNext}>
        <FaRegArrowAltCircleRight size={"50px"} className={styles.rightArrow} />
      </div>
      <div
        className={`${styles.home_wrapper}`}
        // className={`${styles.home_wrapper} ${styles[animationDirection + "-slide-effect"]}`}
        style={{ backgroundImage: `url(${imagesArray[index]})` }}
      >
        <div className={styles.home_container}>
          <div className={styles.title_wrapper}>
            {index === 0 && (
              <div
                className={`${styles.title_container} ${
                  index === 0 && styles.current
                }`}
              >
                  <h1 className={styles.heroTitle}>
                    Unlocking And Maximizing
                    <span style={{ color: "#008080" }}> Business</span>{" "}
                    Efficiency.
                  </h1>
                  <p className={styles.subHeroTitle}>
                    We're Here to Optimize Your Success @Amedu Onekpe.
                  </p>
                <ButtonComponent link="/contact-us" buttonProp="Contact Us" />
              </div>
            )}
            {index === 1 && (
              <div
                className={`${styles.title_container} ${
                  index === 1 && styles.current
                }`}
              >
                <h1 className={styles.heroTitle}>Our Vision:</h1>
                <p className={styles.subHeroTitle}>
                  To be a leader in the provision of professional services that
                  improve organisational efficiency and effectiveness.
                  {/* We have a team of proven professional expertise and experience in accounting, auditing, taxation, management, legal and corporate secretariat services. */}
                </p>
                <ButtonComponent link="/about" buttonProp="About Us" />
              </div>
            )}
            {index === 2 && (
              <div
                className={`${styles.title_container} ${
                  index === 2 && styles.current
                }`}
              >
                <h1 className={styles.heroTitle}>Our Mission:</h1>
                <p className={styles.subHeroTitle}>
                  To deliver professional services that helps improve
                  organisational efficiency and effectiveness as well as value
                  creation.
                </p>
                <ButtonComponent link="/about" buttonProp="Learn More" />
              </div>
            )}
          </div>
        </div>
        <div className={styles.carousel_wrapper}>
          <div className={styles.carousel_container}>
            {imagesArray.map((_, currentIndex) => (
              
              <span
                role="button"
                className={`${styles.carousel} ${
                  currentIndex === index && styles.carousel_border
                }`}
                key={currentIndex}
              >
                <span
                  className={`${styles.carousel_item} ${
                    currentIndex === index && styles.carousel_current
                  }`}
                  onClick={() => handleChange(currentIndex)}
                ></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
