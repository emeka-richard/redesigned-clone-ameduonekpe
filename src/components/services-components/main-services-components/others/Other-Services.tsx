import React from 'react'
import styles from "../main_services.module.css";


const OtherServices: React.FC = ()=> {
  return (
    <section className={styles.others}>
    <div className={styles.others_outsourcing}>
        <h4>Outsourcing</h4>
        <p>We help our clients to concentrate on their primary functions and/or mandates through providing them with basic repetitive works that would otherwise take their time and may sometime make them to lose their focus. The services we provide under our outsourcing services include:</p>
        <ul>
            <li>Internal Audit</li>
            <li>Internal Control</li>
            <li>Risk Management</li>
            <li>Bookkeeping and Accounting</li>
            <li>Maintenance of Fixed Assets Register</li>
            <li>Filing of Statutory Returns</li>
            <li>Liaison with Regulatory Authorities</li>
        </ul>
    </div>
    <div className={styles.others_financial}>
        <h4>Financial and Management Advisory</h4>
        <p>We offer financial and management advisory services across different industries and sectors to help our clients reduce or eliminate business challenges and improve their productivity, financial performance, competitive advantage and value creation. Our financial and management advisory services are geared towards providing business solutions based on the specific needs of each of our client. More importantly, we support our clients in the operationalisation of their businesses. Thus, we are the adviser of choice for micro, small, medium and large start-ups.</p>
    </div>
    <div className={styles.others_business}>
        <h4>Business Planning and Re-Engineering</h4>
        <p>We advise our clients on business planning and reengineering by helping them carefully review their business processes and procedures including systems and frameworks. This helps us to support them in making key strategic decisions that will improve their operational efficiency and effectiveness thereby increasing their financial performance. This service which takes into consideration the totality of the specific needs and peculiar operating environment of clients and help them to beat competition and ultimately become the leader in the field. The services we offer under our business planning and reengineering include:</p>
        <ul>
            <li>Feasibility Studies</li>
            <li>Business Planning</li>
            <li>Preparation of Standard Operation Procedure Manuals</li>
            <li>Business Process Evaluation and Re-Engineering</li>
            <li>Business Performance Analysis</li>
            <li>Financial Due Diligence</li>
            <li>Project Management</li>
            <li>Verification of Assets and Liabilities</li>
        </ul>
    </div>
  </section>

  )
}

export default OtherServices