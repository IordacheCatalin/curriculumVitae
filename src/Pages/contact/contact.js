import Styles from "../contact/contact.module.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bhehu0g",
        "template_elpjxxd",
        form.current,
        "IyE2K0EVX7mtrRSs6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={Styles.container}>
      
      <h1 className={Styles.Title}>CONTACT FORUM</h1>
      <div className={Styles.Box}>
      <div className={Styles.inputs}>
      <form className={Styles.form} ref={form} onSubmit={sendEmail}>
        <label className={Styles.label}>Name</label>
        <input  className={Styles.input} type="text" name="user_name" placeholder="Ex: John Smith" />
        <label className={Styles.label}>Email</label>
        <input className={Styles.input}type="email" name="user_email" placeholder="example@gmail.com" />
        <label className={Styles.label}>Message</label>
        <textarea className={Styles.inputTextArea}name="message" placeholder="Nice to hear from you."/>
      

        <button className={Styles.sendButton} id="submit" type="submit" value="SEND">
        <div class={Styles.altSendButton}>
        <FontAwesomeIcon
                  class={Styles.FontAwesome}
                  icon={faPaperPlane}
              
                /><span className={Styles.sendText}>SEND</span>
        </div>
      
      </button>
      </form>
      </div>
      
      <div className={Styles.details}>
       <div className={Styles.detailsSpacing}>
       <span>
       <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{color:"white",fontSize:"40px",paddingRight:"50px"}}/>

       </span>
       <span className={Styles.detailsText}>City | Bucharest , Romania</span>
       </div>
       <div className={Styles.detailsSpacing}>
       <span>
       <FontAwesomeIcon
                  icon={faPhone}
                  style={{color:"white",fontSize:"40px",paddingRight:"50px"}}/>

       </span>
       <span className={Styles.detailsText}>+4 0774.465.397</span>
       </div>
       <div className={Styles.detailsSpacing}>
       <span>
       <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{color:"white",fontSize:"40px",paddingRight:"50px"}}/>

       </span>
       <span className={Styles.detailsText}>iordache.catalin1986@gmail.com</span>
       </div>
       
       </div>
       
       
      
</div>

    </div>
  );
};

export default ContactPage;
