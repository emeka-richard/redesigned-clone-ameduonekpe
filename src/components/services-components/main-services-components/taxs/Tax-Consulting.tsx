import React from "react";
import styles from "../main_services.module.css";

const TaxConsulting: React.FC = ()=> {
  return (
    <section className={styles.tax}>
      <div className={styles.tax_advisory}>
        <h4>Tax Advisory and Compliance</h4>
        <p>
          With the renewed government’s efforts towards revenue generation, it
          has become imperative for all classes of business operating in Nigeria
          to carefully consider all matters relating to taxation because the
          Nigerian economy is becoming more complex for all tax payers. It is
          against this backdrop, that we have assembled our tax experts who are
          knowledgeable and skillful in contemporary tax developments in the
          country. These our tax experts have adequate access to information on
          tax regulations and treaties that enable them recommend the most
          appropriate tax planning and management strategy to our clients. In
          doing this, we adopt a service delivery approach that helps our
          clients in tax planning that meets their tax statutory obligations
          within the existing tax laws and regulations while identifying
          opportunities that best meets their business needs in line with their
          risk profile.
        </p>
      </div>
      <div className={styles.tax_planning}>
        <h4>Tax Planning and Management</h4>
        <p>
          We provide support to our clients in the planning, computation and
          filing of returns to the revenue authorities in respect of the
          following taxes:
        </p>
        <ul>
          <li>Company Income Tax</li>
          <li>Personal Income Tax</li>
          <li>Value Added Tax</li>
          <li>Capital Gains Tax</li>
          <li>Withholding Tax</li>
          <li>Stamp Duties</li>
          <li>Transfer Pricing, etc.</li>
        </ul>
        <p>
          In addition to the services above, we provide technical support
          services to our clients during tax audit exercise by revenue
          authorities and/or any agency of government to ensure that it is hitch
          free.
        </p>
      </div>
    </section>
  );
}

export default TaxConsulting;
