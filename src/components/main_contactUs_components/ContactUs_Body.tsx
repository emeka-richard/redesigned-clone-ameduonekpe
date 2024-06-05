import React from 'react'
import styles from "./main_contactUs.module.css";
import MapHere from '../location-components/MapHere';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const apiKey = import.meta.env.VITE_HERE_API as string

const ContactUsBody: React.FC = ()=> {

  return (
    <section className={styles.contactUs_body}>
      <ContactDetails />
      <hr />
      <ContactForm />
      <MapHere apikey={apiKey} />
    </section>
  )
}

export default ContactUsBody