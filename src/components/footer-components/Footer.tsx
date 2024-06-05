import React from 'react'
import styles from "./footer.module.css"
import ameduonekpeLogo from "../../assets/images/amedonekpe-removebg-preview.png"
// import EnvelopSVG from "../../assets/svg/envelopSVG.svg?react"
// import CallSVG from "../../assets/svg/callsSVG.svg?react"
// import TagSVG from "../../assets/svg/tagSVG.svg?react"

import { MdOutlineMailOutline } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { VscTag } from "react-icons/vsc";

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const year = new Date().getFullYear()

const FooterComponent: React.FC = ()=> {

  return (
    <section className={styles.footer}>
        <div className={styles.footer_top_section}>
            <div className={styles.footer_top}>
                <div className={styles.footer_top_consultant}>
                    <header className={styles.footer_top_consultant_header}>
                        <MdOutlineMailOutline size={"70px"} className={styles.footer_top_envelopSVG} />
                        <h4>Talk to a</h4>
                    </header>
                    <h3>CONSULTANT</h3>
                </div>
                <div className={styles.footer_top_customerCare}>
                    <header>
                        <BiSolidPhoneCall size={"70px"} className={styles.footer_top_callSVG} />
                        <h4>Customer Care</h4>
                    </header>
                    <h3>+234 810 291 8404</h3>
                </div>
                <div className={styles.footer_top_visitUs}>
                    <header>
                        <VscTag size={"70px"} className={styles.footer_top_tagSVG} />
                        <h4>Visit Us</h4>
                    </header>
                    <h3>TODAY</h3>
                </div>
            </div>
            <div className={styles.footer_middle}>
                <div className={styles.footer_middle_about}>
                    <h3 className={styles.footer_middle_about_h3}>About Us</h3>
                    <p className={styles.footer_middle_about_p}>Amedu Onekpe & Co. is a top-leading Nigerian consulting firm, practicing accountant and registered in 2005. Our services are principally audit, tax, consulting, and training.</p>
                    <Link to={'/about'} className={styles.footer_middle_about_btn}>LEARN MORE</Link>
                </div>
                <div className={styles.footer_middle_professionalArea}>
                    <h3 className={styles.footer_middle_professionalArea_h3}>Professional Areas</h3>
                    <ul className={styles.footer_middle_professionalArea_list}>
                        <li>Tax</li>
                        <li>Audit and Assurrance</li>
                        <li>Financial and Management Advisory</li>
                    </ul>
                </div>
                <div className={styles.footer_middle_location}>
                    <h3 className={styles.footer_middle_location_h3}>Location</h3>
                    <div className={styles.footer_middle_location_list}>
                        <span className={styles.footer_middle_location_span}>4, Marte Close Off Misau Crescent</span>
                        <span className={styles.footer_middle_location_span}>Tel: +234 803 302 4658</span>
                        <span className={styles.footer_middle_location_span}>Mobile: +234 929 217 56</span>
                        <span className={styles.footer_middle_location_span}>E-mail: <a href='mailto:info@ameduonekpe.com'>info@ameduonekpe.com</a></span>
                        <span className={styles.footer_middle_location_span}>E-mail: <a href='mailto:sunny@ameduonekpe.com'>sunny@ameduonekpe.com</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.footer_bottom}>
            <img src={ameduonekpeLogo} alt={""} className={styles.logo_icon} />
            <div className={styles.footer_socials}>
                <FaFacebookF size={"14px"} className={styles.footer_socials_item1} />
                <FaXTwitter size={"14px"} className={styles.footer_socials_item} />
                <FaInstagram size={"14px"} className={styles.footer_socials_item} />
                <FaYoutube size={"14px"} className={styles.footer_socials_item} />
            </div>
            <p className={styles.footer_copyright}>Copyright &copy; {year} : AMEDU ONEKPE & CO.</p>
        </div>
    </section>
  )
}

export default FooterComponent