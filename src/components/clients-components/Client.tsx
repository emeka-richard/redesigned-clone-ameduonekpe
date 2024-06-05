import React from 'react'
import styles from "./client.module.css"
// import LineIcon1 from "../../assets/svg/lineIcon.svg?react"
import AGF from "../../assets/images/AGF_logo.png"
import AMCON from "../../assets/images/Amcon_logo.png"
import BPE from "../../assets/images/BPE_logo.png"
import CBN from "../../assets/images/CBN_logo.png"
import CCECC from "../../assets/images/CCECC.png"
import COMEG from "../../assets/images/COMEG_logo.png"
import CRDB from "../../assets/images/CRDB_logo.png"
import DID from "../../assets/images/DID_logo.png"
import DEFENCE from "../../assets/images/Defence_logo.png"
import DORNIER from "../../assets/images/Dornier_logo.png"
import EU from "../../assets/images/EU_logo.png"
import FCT_IRS from "../../assets/images/FCT_IRS_logo.png"
import FMST from "../../assets/images/FMST_logo.png"
import INEC from "../../assets/images/INEC_logo.png"
import ITI from "../../assets/images/ITI_logo.png"
import MSD from "../../assets/images/MSD_logo.png"
// import NAPTIP from "../../assets/images/NAPTIP_logo.png"
import { AiOutlineLine } from "react-icons/ai";


const clientsArray = [AGF, AMCON, BPE, CBN, CCECC, COMEG, CRDB, DID, DEFENCE, DORNIER, EU, FCT_IRS, FMST, INEC, ITI, MSD]

const ClientsComponent: React.FC = ()=> {
  return (
    <section className={styles.clients}>
      <header className={styles.clients_header}><AiOutlineLine size={"40px"} className={styles.lineIcon} /><h3 className={styles.clients_header_h3}>INDUSTRY INSIGHTS</h3> <AiOutlineLine size={"40px"} className={styles.lineIcon} /></header>
      <h4 className={styles.clients_h4}>Our Clients</h4>
      <div className={styles.clients_body}>
        {
          clientsArray.map((clientLogo, index) => (
            <img className={styles.team_item} src={clientLogo} alt='' key={index} />
          ))
        }
        {/* <div className={styles.clients_scroll_bar}>
            <div className={styles.clients_scroll_icon}></div>
        </div> */}
      </div>
    </section>
  )
}

export default ClientsComponent