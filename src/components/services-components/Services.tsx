import React from "react";
import styles from "./services.module.css";
// import LineIcon1 from "../../assets/svg/lineIcon.svg?react";
// import TaxSVG from "../../assets/svg/taxadvisorySVG.svg?react";
// import AuditSVG from "../../assets/svg/auditSVG.svg?react";
// import FinanceSVG from "../../assets/svg/outsourcingSVG.svg?react";
// import BusinessSVG from "../../assets/svg/businessSVG.svg?react";

import { SiWebmoney } from "react-icons/si";
import { AiOutlineAudit } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { AiOutlineLine } from "react-icons/ai";


const servicesArray = [
  {
    svg: SiWebmoney,
    tag: "TAX CONSULTING",
    description:
      "Hire us for expert tax guidance that saves you time and money, ensuring compliance and maximizing returns.",
  },
  {
    svg: AiOutlineAudit,
    tag: "AUDIT AND ASSURANCE",
    description:
      "Hire us for precision-driven audits and assurance that illuminate your financial path to success. Let our expertise be your peace of mind.",
  },
  {
    svg: BsCashCoin,
    tag: "FINANCIAL MANAGEMENT",
    description:
      "Choose us for seamless outsourcing solutions, unlocking your business's full potential while saving you time and resources. Let's elevate your projects together!",
  },
  {
    svg: LiaBusinessTimeSolid,
    tag: "BUSINESS DEVELOPMENT",
    description:
      "We're your strategic partners in business evolution, unlocking untapped potentials and maximizing efficiency. Let's redefine success together!",
  },
];

const ServicesComponent: React.FC = ()=> {
  return (
    <section id="services" className={styles.services}>
      <header className={styles.services_header}>
      <AiOutlineLine size={"40px"} className={styles.lineIcon} />
        <h3 className={styles.services_header_h3}>OUR SERVICES</h3>{" "}
        <AiOutlineLine size={"40px"} className={styles.lineIcon} />
      </header>

      <div className={styles.services_body}>
        {servicesArray.map((service, index) => (
          <div className={styles.services_item} key={index}>
            <header className={styles.services_item_header}>
              <div className={styles.services_item_svg_container}>
                <service.svg size={"100px"} className={styles.services_item_svg} />
              </div>
              <h3>{service.tag}</h3>
            </header>
            <div className={styles.services_item_body}>
              <p>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={styles.services_body}>
        {servicesArray.map((service, index) => (
          <div className={styles.services_item} key={index}>
            <header className={styles.services_item_header}>
              <div className={styles.services_item_svg_container}>
                <service.svg className={styles.services_item_svg} />
              </div>
              <h3>{service.tag}</h3>
            </header>
            <div className={styles.services_item_body}>
              <p>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default ServicesComponent;
