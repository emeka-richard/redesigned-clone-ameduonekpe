import React from "react";
import styles from "./main_contactUs.module.css";
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const ContactDetails: React.FC = ()=> {
  return (
    <div className={styles.contactDetails}>
      <div className={styles.contactDetails_item}>
        <div className={styles.contactDetails_item_svg}>
          <MdLocationOn size={"50px"} />
        </div>
        <div className={styles.contactDetails_item_sub}>
          <div className={styles.contactDetails_item_headOffice}>
            <h4>Head Office Address:</h4>
            <p>No. 4, Marte Close, Off Misau Crescent, Garki 2, Abuja.</p>
          </div>
          <div className={styles.contactDetails_item_regional}>
            <h4>Regional Offices:</h4>
            {/* <div> */}
              <p>
                2nd Floor, PAX House, 191 Upper Chime Avenue, New Haven Layout,
                Enugu.
              </p>
            {/* </div>
            <div> */}
              <p>
                28 Association Avenue, By Obanikoro Bus Stop, Ilupeju, Lagos.
              </p>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className={styles.contactDetails_item}>
        <div className={styles.contactDetails_item_svg}>
          <MdMail size={"50px"} />
        </div>
        <div className={styles.contactDetails_item_sendMail}>
          <h4>Send A Mail</h4>
          <p>
            2nd Floor, PAX House, 191 Upper Chime Avenue, New Haven Layout,
            Enugu.
          </p>
          <p></p>
        </div>
      </div>
      <div className={styles.contactDetails_item}>
        <div className={styles.contactDetails_item_svg}>
          <IoMdCall size={"50px"} />
        </div>
        <div className={styles.contactDetails_item_call}>
          <h4>Call for help:</h4>
          <div>
            <p>+234 803 786 9355</p>
            <p>+234 803 461 0055</p>
            <p>+234 803 504 5039</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
