import React, { useState, useRef } from "react";
import styles from "./main_contactUs.module.css";
import { FaLocationArrow } from "react-icons/fa6";
import { sendForm } from "@emailjs/browser";

const ContactForm: React.FC = ()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmail = validRegex.test(email);
    if (!isEmail) {
      alert("Invalid '@' email address!");
      form.current?.email.focus();
      return;
    }
    if (!form.current) return;
    sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_KEY as string,
      "contact_form2",
      form.current,
      import.meta.env.VITE_EMAILJS_PUB_KEY as string
    )
      .then(() => {
        // console.log(result);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  };

  return (
    <div className={styles.contactForm_wrapper}>
      <h3 className={styles.contactForm_h3}>For Inquiries</h3>
      <div className={styles.contactForm_container}>
        <form
          ref={form}
          name="contactForm"
          onSubmit={HandleSubmit}
          className={styles.contactForm}
        >
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.contactForm_input}
            aria-label="User's Name"
            type="text"
            placeholder="Your name"
            required
          />
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.contactForm_input}
            aria-label="User's Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={styles.contactForm_input}
            aria-label="Mail Subject"
            type="text"
            placeholder="Enter the subject"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.contactForm_textarea}
            aria-label="Mail Body"
            placeholder="Drop the message here ..."
            required
          />
          <button type="submit">
            <FaLocationArrow size={"16px"} />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
