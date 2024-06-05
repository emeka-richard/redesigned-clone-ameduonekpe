import React, { useEffect, useState } from "react";
import styles from "./navbar_component.module.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import scrollControl from "../../middlewares/scrollControl";

const NavbarLinks: React.FC = () => {
  const [name, setName] = useState("home");
  const [active, setActive] = useState(false);
  const [routeName, setRouteName] = useState("")

  useEffect(()=>{
    setRouteName(window.location.pathname)
    setActive(false)
  }, [routeName])

  const handleClickActive = (tag: string) => {
    scrollControl(tag);
    if (tag === name) {
      setName("");
    } else {
      setName(tag);
    }
    return;
  };

  const handleIconSwitch = () => {
    if (active === true) {
      setName("");
    }
    setActive(!active);
  };

  return (
    <>
      <div className={styles.icon_container}>
        <FaBars
          onClick={handleIconSwitch}
          size={"2rem"}
          className={
            active === false ? styles.icon_active : styles.icon_inactive
          }
          aria-hidden="true"
        />
        <LiaTimesSolid
          onClick={handleIconSwitch}
          size={"2rem"}
          className={
            active === true ? styles.icon_active : styles.icon_inactive
          }
          aria-hidden="true"
        />
      </div>

      <section
        id="navlinks"
        className={`${styles.navbar_links_wrapper} ${
          active === true
            ? styles.navbar_links_wrapper_dropDown
            : styles.navbar_links_wrapper_dropUp
        }`}
      >
        <NavLink
          to="/"
          data-testid="home-id"
          // onClick={() => handleClickActive("home")}
          className={`${styles.links_item} ${
            routeName === "" || routeName === "home" ? styles.active : ""
          }`}
          aria-label="Home Link"
        >
          Home
        </NavLink>
        <div className={styles.links_item_container}>
          <NavLink
            to=""
            data-testid="contact-id"
            onClick={() => handleClickActive("/about")}
            className={`${styles.links_item} ${
              routeName === "/about" || routeName === "/teams" || routeName === "/location" ? styles.active : ""
            }`}
            aria-label="Contact"
          >
            About Us
            <MdOutlineArrowDropDown size={"20px"}
              className={`${styles.icon_expand}
               ${
                name === "/about" ? styles.icon_inactive : ""
              }`}
              aria-hidden="true"
            />
            <MdOutlineArrowDropUp size={"20px"}
              className={`${styles.icon_collapse}
               ${
                name === "/about" ? styles.icon_active : ""
              }`}
              aria-hidden="true"
            />
          </NavLink>
          <div
            // className={styles.links_item_sublinks}
            className={`${styles.links_item_sublinks} ${
              name === "/about" ? styles.links_item_sublinks_active : ""
            }`}
          >
            <Link to={"/about"}>Who We Are</Link>
            <Link to={"/teams"}>Our Team</Link>
            <Link to={"/contact-us"} onClick={() => handleClickActive("map")}>
              Our Locations
            </Link>
          </div>
        </div>
        <div className={styles.links_item_container}>
          <NavLink
            to=""
            data-testid="services-id"
            onClick={() => handleClickActive("services")}
            className={`${styles.links_item} ${
              routeName === "/services/audit&assurance" || routeName === "/services/taxconsulting" || routeName === "/services/others" ? styles.active : ""
            }`}
            aria-label="Services"
          >
            Services
            <MdOutlineArrowDropDown size={"20px"}
              className={`${styles.icon_expand}
               ${
                name === "services" ? styles.icon_inactive : ""
              }`}
              aria-hidden="true"
            />
            <MdOutlineArrowDropUp size={"20px"}
              className={`${styles.icon_collapse}
               ${
                name === "services" ? styles.icon_active : ""
              }`}
              aria-hidden="true"
            />
          </NavLink>
          <div
            // className={styles.links_item_sublinks}
            className={`${styles.links_item_sublinks} ${
              name === "services" ? styles.links_item_sublinks_active : ""
            }`}
          >
            <Link to={"/services/audit&assurance"}>Audit and Assurance</Link>
            <Link to={"/services/taxconsulting"}>Tax Consulting</Link>
            {/* <Link to={"/services"}>Outstanding</Link> */}
            <Link to={"/services/others"}>Other Services</Link>
          </div>
        </div>
        <div className={styles.links_item_container}>
          <NavLink
            to=""
            data-testid="explore-id"
            onClick={() => handleClickActive("explore")}
            className={`${styles.links_item} ${
              routeName === "/blogs&insights" ? styles.active : ""
            }`}
            aria-label="Explore"
          >
            Explore
            <MdOutlineArrowDropDown size={"20px"}
              className={`${styles.icon_expand}
               ${
                name === "explore" ? styles.icon_inactive : ""
              }`}
              aria-hidden="true"
            />
            <MdOutlineArrowDropUp size={"20px"}
              className={`${styles.icon_collapse}
               ${
                name === "explore" ? styles.icon_active : ""
              }`}
              aria-hidden="true"
            />
          </NavLink>
          <div
            // className={styles.links_item_sublinks}
            className={`${styles.links_item_sublinks} ${
              name === "explore" ? styles.links_item_sublinks_active : ""
            }`}
          >
            <Link to={"/blogs&insights"}>Project Insights</Link>
            <Link to={"/blogs&insights"} onClick={() => handleClickActive("clients")}>Our Clients</Link>
          </div>
        </div>
        <div className={styles.links_item_container}>
          <NavLink
            to=""
            data-testid="careers-id"
            onClick={() => handleClickActive("careers")}
            className={`${styles.links_item} ${
              routeName === "/careers" ? styles.active : ""
            }`}
            aria-label="Careers"
          >
            Careers
            <MdOutlineArrowDropDown size={"20px"}
              className={`${styles.icon_expand}
               ${
                name === "careers" ? styles.icon_inactive : ""
              }`}
              aria-hidden="true"
            />
            <MdOutlineArrowDropUp size={"20px"}
              className={`${styles.icon_collapse}
               ${
                name === "careers" ? styles.icon_active : ""
              }`}
              aria-hidden="true"
            />
          </NavLink>
          <div
            // className={styles.links_item_sublinks}
            className={`${styles.links_item_sublinks} ${
              name === "careers" ? styles.links_item_sublinks_active : ""
            }`}
          >
            <Link to={"/careers"}>Vacancies</Link>
          </div>
        </div>
        <NavLink
          to="/contact-us"
          data-testid="contact-us-id"
          // onClick={() => handleClickActive("blogs")}
          className={`${styles.links_item} ${
            routeName === "contact-us" ? styles.active : ""
          }`}
          aria-label="Contact Us"
        >
          Contact Us
        </NavLink>
      </section>



      {/* <<<<<<<<<<<<<<  Desktop  >>>>>>>>>>>>>>>> */}

      <section
        id="navlinks"
        className={`${styles.navbar_links_wrapper_desktop}`}
      >
        <NavLink
          to="/"
          data-testid="home-id"
          // onClick={() => handleClickActive("home")}
          className={`${styles.links_item_desktop} ${
            routeName === "/" ? styles.active : ""
          }`}
          // className={({ isActive }) =>
          //   isActive
          //     ? `${styles.links_item} ${styles.active}`
          //     : `${styles.links_item}`
          // }
          aria-label="Home"
        >
          Home
        </NavLink>
        <div className={styles.links_item_container_desktop}>
          <NavLink
            to=""
            data-testid="about-id"
            onClick={() => handleClickActive("/about")}
            className={`${styles.links_item_desktop} ${
              routeName === "/about" || routeName === "/teams" || routeName === "/location" ? styles.active : ""
            }`}
            aria-label="About Us"
          >
            About Us
            <MdOutlineArrowDropDown size={"24px"}
              className={`${styles.icon_expand}
               ${
                name === "/about" ? styles.icon_inactive : ""
              }`}
              aria-hidden="true"
            />
            <MdOutlineArrowDropUp size={"24px"}
              className={`${styles.icon_collapse}
               ${
                name === "/about" ? styles.icon_active : ""
              }`}
              aria-hidden="true"
            />
          </NavLink>
          <div
            // className={styles.links_item_sublinks}
            className={`${styles.links_item_sublinks_desktop}`}
            //  ${
            //   name === "/about" ? styles.links_item_sublinks_active : ""
            // }`}
          >
            <Link to={"/about"}>Who We Are</Link>
            <Link to={"/teams"}>Our Team</Link>
            <Link to={"/contact-us"} onClick={() => handleClickActive("map")}>
              Our Locations
            </Link>
          </div>
        </div>
        <div className={styles.links_item_container_desktop}>
          <NavLink
            to=""
            data-testid="services-id"
            onClick={() => handleClickActive("services")}
            className={`${styles.links_item_desktop} ${
              routeName === "/services/audit&assurance" || routeName === "/services/taxconsulting" || routeName === "/services/others" ? styles.active : ""
            }`}
            aria-label="Services"
          >
            Services
            <MdOutlineArrowDropDown size={"24px"}
              className={`${styles.icon_expand}
               ${
                name === "services" ? styles.icon_inactive : ""
              }`}
              aria-hidden="true"
            />
            <MdOutlineArrowDropUp size={"24px"}
              className={`${styles.icon_collapse}
               ${
                name === "services" ? styles.icon_active : ""
              }`}
              aria-hidden="true"
            />
          </NavLink>
          <div
            className={`${styles.links_item_sublinks_desktop}`}
            //  ${
            //   name === "services" ? styles.links_item_sublinks_active : ""
            // }`}
          >
            <Link to={"/services/audit&assurance"}>Audit and Assurance</Link>
            <Link to={"/services/taxconsulting"}>Tax Consulting</Link>
            {/* <Link to={"/services"}>Outstanding</Link> */}
            <Link to={"/services/others"}>Other Services</Link>
          </div>
        </div>
        <div className={styles.links_item_container_desktop}>
          <NavLink
            to=""
            data-testid="explore-id"
            onClick={() => handleClickActive("explore")}
            className={`${styles.links_item_desktop} ${
              routeName === "/blogs&insights" ? styles.active : ""
            }`}
            aria-label="Explore"
          >
            Explore
            <MdOutlineArrowDropDown size={"24px"}
              className={`${styles.icon_expand}
               ${
                name === "explore" ? styles.icon_inactive : ""
              }`}
              aria-hidden="true"
            />
            <MdOutlineArrowDropUp size={"24px"}
              className={`${styles.icon_collapse}
               ${
                name === "explore" ? styles.icon_active : ""
              }`}
              aria-hidden="true"
            />
          </NavLink>
          <div
            // className={styles.links_item_sublinks}
            className={`${styles.links_item_sublinks_desktop}`}
            //  ${
            //   name === "explore" ? styles.links_item_sublinks_active : ""
            // }`}
          >
            <Link to={"/blogs&insights"}>Project Insights</Link>
            <Link to={"/blogs&insights"} onClick={()=>handleClickActive("clients")} >Our Clients</Link>
          </div>
        </div>
        <div className={styles.links_item_container_desktop}>
          <NavLink
            to=""
            data-testid="careers-id"
            onClick={() => handleClickActive("careers")}
            className={`${styles.links_item_desktop} ${
              routeName === "/careers" ? styles.active : ""
            }`}
            aria-label="Careers"
          >
            Careers
            <MdOutlineArrowDropDown size={"24px"}
              className={`${styles.icon_expand}
               ${
                name === "careers" ? styles.icon_inactive : ""
              }`}
              aria-hidden="true"
            />
            <MdOutlineArrowDropUp size={"24px"}
              className={`${styles.icon_collapse} 
               ${
                name === "careers" ? styles.icon_active : ""
              }`
            }
              //  ${
              //   name === "careers" ? styles.icon_active : ""
              // }`
              aria-hidden="true"
            />
          </NavLink>
          <div
            // className={styles.links_item_sublinks}
            className={`${styles.links_item_sublinks_desktop}`}
            //  ${
            //   name === "careers" ? styles.links_item_sublinks_active : ""
            // }`}
          >
            <Link to={"/careers"}>Vacancies</Link>
          </div>
        </div>
        <NavLink
          to="/contact-us"
          data-testid="contact-id"
          // onClick={() => handleClickActive("contact-us")}
          className={`${styles.links_item_desktop} ${
            routeName === "/contact-us" ? styles.active : ""
          }`}
          aria-label="Contact Us"
        >
          Contact Us
        </NavLink>
      </section>
    </>
  );
};

export default NavbarLinks;
