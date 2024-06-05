import React from 'react'
import styles from "./main_client.module.css"
import clientList from './ClientList'

const ClientMain: React.FC = ()=> {
  return (
    <section id='clients' className={styles.client}>
        <h4>Our Clients</h4>
        <div className={styles.client_container}>
        {clientList.map((client, index)=>(
            <img src={client} className={styles.client_card} key={index} />
        ))}
        </div>
    </section>
  )
}

export default ClientMain