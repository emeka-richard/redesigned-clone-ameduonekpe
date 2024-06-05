import React from "react";
import styles from "../main_services.module.css";

const AuditAssurance: React.FC = ()=> {
  return (
    <section className={styles.audit}>
      <p>
        We provide audit and assurance services to public and private
        institutions with a view to meeting their statutory obligations. In
        addition, we support them in improving their corporate reporting while
        providing assurance that their systems are operating efficiently and
        effectively. Our audit and assurance approach are tailored to suit the
        size and nature of the client’s business. We keep abreast with
        developments in legislations and regulations, and as such, we can help
        with complex reporting issues involving International Financial
        Reporting Standards (IFRS) and International Public Sector Accounting
        Standards (IPSAS). The services covered in our audit and assurance
        portfolio include:
      </p>
      <div className={styles.audit_statutory}>
        <h4>Statutory Audit</h4>
        <p>
          As part of the statutory requirement for public and private
          institutions, an auditor is expected to provide opinion to the
          stakeholders that the financial statements examined by them show a
          true and fair view for the fiscal year concerned. Amedu Onekpe has
          seasoned professionals who have experience in carrying out statutory
          audits for various entities.
        </p>
      </div>
      <div className={styles.audit_management}>
        <h4>Management Audit</h4>
        <p>
          Sometimes when management of corporate entity wants to improve their
          performance, they carry out management audit. This will essentially
          entail the review of the financial statements, policies and
          procedures, including organisational objectives, structure and control
          systems. The objective of this type of audit is to ensure that the
          overall efficiency and effectiveness agrees with the objectives of its
          stakeholders. Amedu Onekpe has capability to carry out this type of
          audit and provides appropriate recommendations for implementation with
          a view to ensuring process improvements and optimal performance.
          Ultimately, this will enhance the entity’s efficiency and
          effectiveness.
        </p>
      </div>
      <div className={styles.audit_value}>
        <h4>Value for Money Audit</h4>
        <p>
          Value for money audit is a special audit that involves an independent
          examination of an entity’s resources to determine if they are being
          used economically, efficiently and effectively for the benefits of all
          stakeholders. Usually, this type of audit is carried out by
          stakeholders to evaluate the entity’s management on how it allocates
          or deploy the resources. Accordingly, the objectives which value for
          money audit seeks to achieve include the following:
        </p>
        <ul>
          <li>
            Provide assurance to stakeholders that the allocation or deployment
            of resources of an entity is being done in line with the three
            parameters of value for money audit. That is, economically,
            efficiently and effectively.
          </li>
          <li>
            Provide independent and unbiased information and advice to
            stakeholders on how best to allocate or deploy resources for optimal
            benefits of all.
          </li>
          <li>
            Encourage entities to improve their performance in achieving
            organisational goals through implementing policies and procedures to
            delivery best value for money.
          </li>
          <li>
            Help stakeholders to identify and suggest good national and
            international practices to improve organisational performance.
          </li>
        </ul>
      </div>
      <div className={styles.audit_forensic}>
        <h4>Forensic Audit</h4>
        <p>
          When irregularities are suspected, forensic audit is carried out to
          determine the cause(s) and the effects with a view to taking
          corrective measures. This type of assignment helps us to make
          recommendations to clients that enable them put in place robust
          internal control measures to safeguard the resources of the entity.
          More importantly, the implementation of our recommendations helps to
          eliminate future occurrence of irregularities.
        </p>
      </div>
      <div className={styles.audit_project}>
        <h4>Project Audit</h4>
        <p>
          Under this type of audit, we help our clients to assess the level of
          compliance with the project management standards established by
          stakeholders to ensure that the project was completed within time and
          cost budgets. The specific objectives of a project audit include the
          following:
        </p>
        <ul>
          <li>
            To ensure that the capital expenditure (CAPEX) and operation
            expenditure (OPEX) are within the budget approved by management of
            the entity for the project.
          </li>
          <li>
            To confirm that all stakeholders involved in the design,
            implementation and commissioning of the project are satisfied.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AuditAssurance;
