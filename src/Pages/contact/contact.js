import Styles from "../contact/contact.module.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

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
          <form
            className={Styles.form}
            ref={form}
            onSubmit={sendEmail}
            id="contact-form"
          >
            <label className={Styles.label}>Name</label>
            <input
              className={Styles.input}
              type="text"
              name="name"
              placeholder="Ex: John Smith"
              id="name"
              required
            />
            <label className={Styles.label}>Email</label>
            <input
              className={Styles.input}
              type="email"
              name="user_email"
              placeholder="example@gmail.com"
              id="email"
              required
            />
            <label className={Styles.label}>Message</label>
            <textarea
              className={Styles.inputTextArea}
              name="message"
              placeholder="Nice to hear from you."
              id="contact-form"
              required
            />

            <button
              className={Styles.sendButton}
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class={Styles.altSendButton}>
                <FontAwesomeIcon
                  class={Styles.FontAwesome}
                  icon={faPaperPlane}
                />
                <span className={Styles.sendText}>SEND</span>
              </div>
            </button>
          </form>
        </div>

        <div className={Styles.details}>
          <div className={Styles.detailsSpacing}>
            <span>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{
                  color: "white",
                  fontSize: "40px",
                  paddingRight: "50px",
                }}
              />
            </span>
            <span className={Styles.detailsText}>
              City | Bucharest , Romania
            </span>
          </div>
          <div className={Styles.detailsSpacing}>
            <span>
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  color: "white",
                  fontSize: "40px",
                  paddingRight: "50px",
                }}
              />
            </span>
            <span className={Styles.detailsText}>+4 0774.465.397</span>
          </div>
          <div className={Styles.detailsSpacing}>
            <span>
              <a
                className={Styles.textInfoDecoration}
                href="mailto:iordache.catalin1986@gmail.com"
                rel="noreferrer Click for sending an email to me"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    color: "white",
                    fontSize: "40px",
                    paddingRight: "50px",
                  }}
                />
              </a>
            </span>
            <span className={Styles.detailsText}>
              iordache.catalin1986@gmail.com
            </span>
          </div>
          <div className={Styles.line}>
            <a
              href="https://iordachecatalin.github.io/curriculumVitae/"
              rel="noreferrer Iordache Catalin personal profile webpage"
              target="_blank"
            >
              <FontAwesomeIcon
                className={Styles.fontAwesomeIconHoverFirst}
                icon={faGithub}
              />
            </a>
            <a
              href="https://www.facebook.com/Iordache.Catalin.VKTools"
              rel="noreferrer Iordache Catalin personal profile webpage"
              target="_blank"
            >
              <FontAwesomeIcon
                className={Styles.fontAwesomeIconHover}
                icon={faFacebook}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/iordache-catalin-a99396238/"
              rel="noreferrer Iordache Catalin personal profile webpage"
              target="_blank"
            >
              <FontAwesomeIcon
                className={Styles.fontAwesomeIconHover}
                icon={faLinkedin}
              />
            </a>

            <FontAwesomeIcon
              className={Styles.fontAwesomeIconHover}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className={Styles.fontAwesomeIconHoverLast}
              icon={faTelegram}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
