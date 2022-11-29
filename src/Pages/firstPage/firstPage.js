import Styles from "../firstPage/firstPageLeft.module.scss";
import StylesRight from "../firstPage/firstPageRight.module.scss";
import ProfilePhoto from "../../Assets/img/Profile.jpg";
import DiplomaItSchool from "../../Assets/img/Diploma.jpg";
import Logo from "../../Assets/img/logo.png";
import PopupTimed from "../../Components/Popup/popupTimed";

import Contact from "../../Pages/contact/contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faPersonArrowDownToLine } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

import ProgressBar from "@ramonak/react-progress-bar";
function firstPage() {
  return (
    <>
      <PopupTimed />
      <div className={Styles.container}>
         <div className={Styles.leftSide}>
          <div className={Styles.space}>
            <img
              src={Logo}
              className={Styles.imgLogo}
              alt="Iordache Catalin logo"
            />
          </div>
          <div>
            <div
              className={Styles.DetailBox}
              style={{ backgroundColor: "#21395b" }}
            >
              <img
                className={Styles.imgProfile}
                src={ProfilePhoto}
                alt="profile photography"
              />
              <h1 className={Styles.textDecoration}>Iordache Catalin</h1>
              <h3 className={Styles.textDecoration}>Junior Web Developer</h3>
              <br></br>
            </div>
          </div>

          <div className={Styles.DetailBox}>
            <span className={Styles.DetailInBox}>
              <FontAwesomeIcon
                className={Styles.FontAwesome}
                icon={faAddressBook}
                style={{ color: "white", fontSize: "1.5em" }}
              />
              <span> </span>
              <div className={Styles.line}></div>
              <a href="/contact" >
              <button className={Styles.button}> CONTACT</button></a>

              <div className={Styles.textInfoDecoration}>
                +40 774.465.397
                <FontAwesomeIcon
                  className={Styles.FontAwesome}
                  icon={faSquarePhone}
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className={Styles.textInfoDecoration}>
                <a
                  className={Styles.textInfoDecoration}
                  href="mailto:iordache.catalin1986@gmail.com"
                  rel="noreferrer Click for sending an email to me"
                  target="_blank"
                >
                  iordache.catalin1986@gmail.com
                </a>
                <FontAwesomeIcon
                  className={Styles.FontAwesome}
                  icon={faEnvelope}
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className={Styles.textInfoDecoration}>
                <a
                  style={{ fontSize: "12px", fontWeight: "500" }}
                  className={Styles.textInfoDecoration}
                  href="https://iordachecatalin.github.io/curriculumVitae/"
                  rel="noreferrer Iordache Catalin personal profile webpage"
                  target="_blank"
                >
                  https://iordachecatalin.github.io/curriculumVitae/{" "}
                </a>
                <FontAwesomeIcon
                  className={Styles.FontAwesome}
                  icon={faGlobe}
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className={Styles.textInfoDecoration}>
                <a
                  className={Styles.textInfoDecoration}
                  style={{ fontSize: "12px", fontWeight: "500" }}
                  href="https://www.linkedin.com/in/iordache-catalin-a99396238/"
                  rel="noreferrer Iordache Catalin personal profile linkedin webpage"
                  target="_blank"
                >
                  www.linkedin.com/in/iordache-catalin-a99396238
                </a>
                <FontAwesomeIcon
                  className={Styles.FontAwesome}
                  icon={faLinkedin}
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className={Styles.textInfoDecoration}>
                <a
                  style={{ fontSize: "12px", fontWeight: "500" }}
                  className={Styles.textInfoDecoration}
                  href="https://github.com/IordacheCatalin?tab=repositories"
                  rel="noreferrer Iordache Catalin personal github webpage"
                  target="_blank"
                >
                  https://github.com/IordacheCatalin
                </a>
                <FontAwesomeIcon
                  className={Styles.FontAwesome}
                  icon={faGithub}
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className={Styles.textInfoDecoration}>
                <a
                  style={{ fontSize: "12px", fontWeight: "500" }}
                  className={Styles.textInfoDecoration}
                  href="https://goo.gl/maps/Nhh8bQ6Bw7uXCnNZ6"
                  rel="noreferrer Iordache Catalin location"
                  target="_blank"
                >
                  Romania , Jud. Ilfov , Com. Chiajna , Sat Rosu
                </a>

                <FontAwesomeIcon
                  className={Styles.FontAwesome}
                  icon={faLocationDot}
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    marginLeft: "10px",
                  }}
                />
              </div>
            </span>
          </div>

          <div className={Styles.DetailBox}>
            <span className={Styles.DetailInBox}>
              <FontAwesomeIcon
                className={Styles.FontAwesome}
                icon={faEarthAmericas}
                style={{ color: "white", fontSize: "1.5em" }}
              />
              <span> </span>
              <div className={Styles.line2}></div>
              <span style={{ color: "white", fontSize: "1em" }}> LANGUAGE</span>
              <div className={Styles.textInfoDecoration}>
                English
                <FontAwesomeIcon
                  className={Styles.FontAwesome}
                  icon={faGaugeHigh}
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className={Styles.textInfoDecoration}>
                Romanian (Native)
                <FontAwesomeIcon
                  className={Styles.FontAwesome}
                  icon={faPersonArrowDownToLine}
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    marginLeft: "10px",
                  }}
                />
              </div>
            </span>
          </div>

          <div className={Styles.DetailBox}>
            <span className={Styles.DetailInBox}>
              <FontAwesomeIcon
                className={Styles.FontAwesome}
                icon={faListCheck}
                style={{ color: "white", fontSize: "1.5em" }}
              />
              <span> </span>
              <div className={Styles.line3}></div>
              <span style={{ color: "white", fontSize: "1em" }}> SKILL</span>
              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                ReactJS
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"Entry Level Junior"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted}
                  labelClassName={Styles.label}
                />
              </div>

              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                Git
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"Entry Level"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted2}
                  labelClassName={Styles.label}
                />
              </div>

              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                Responsive design , HTML , CSS , SCSS
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"Entry Level Junior"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted3}
                  labelClassName={Styles.label}
                />
              </div>

              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                JavaScript
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"Entry Level Junior"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted4}
                  labelClassName={Styles.label}
                />
              </div>

              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                Communication , Adaptability , Creativity
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"98%"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted5}
                  labelClassName={Styles.label}
                />
              </div>

              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                Front-end frameworks
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"Entry Level"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted6}
                  labelClassName={Styles.label}
                />
              </div>

              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                ReactJSvgjv
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"Entry Level"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted}
                  labelClassName={Styles.label}
                />
              </div>

              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                ReactJSvgjv
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"Entry Level"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted}
                  labelClassName={Styles.label}
                />
              </div>

              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                ReactJSvgjv
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"Entry Level"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted}
                  labelClassName={Styles.label}
                />
              </div>

              <div
                className={Styles.textInfoDecoration}
                style={{ marginBottom: "5px" }}
              >
                ReactJSvgjv
              </div>
              <div className={Styles.ProgressBar}>
                <ProgressBar
                  completed={"Entry Level"}
                  className={Styles.wrapper}
                  barContainerClassName={Styles.barContainer}
                  completedClassName={Styles.barCompleted}
                  labelClassName={Styles.label}
                />
              </div>
            </span>
          </div>
        </div>

        <div className={Styles.rightSide}>
          <div className={Styles.space}></div>
          <div className={StylesRight.DetailBox}>
            <div className={StylesRight.DetailInBox}>
              <span style={{ color: "Black", fontSize: "1em" }}> ABOUT ME</span>

              <span> </span>
              <div className={StylesRight.line}> </div>
              <span> </span>
              <FontAwesomeIcon
                className={StylesRight.FontAwesome}
                icon={faUser}
                style={{ color: "Black", fontSize: "1.5em" }}
              />
            </div>

            <div className={StylesRight.textDecoration}>
              My journey in Web Development started at the end of 2021, when
              driven by a discovered passion I ended my career as entrepreneur
              in 2022 and started exploring the web development programming. I
              am very ambitious and hardworking man, with initiative and proven
              skills when comes to problem solving and tackling challenges
              head-on, always having in mind the main priority: accomplishing my
              tasks and continue my path of learning experiences.
            </div>
            <div className={StylesRight.textDecoration}>
              As of now I am able to create websites from front-to-back, and
              also using tools such as different content management systems or
              development systems. Currently, I deep dive in the front end
              development to become a full-stack web developer.
            </div>

            <div className={StylesRight.DetailInBox}>
              <span style={{ color: "Black", fontSize: "1em" }}>
                {" "}
                EDUCATION
              </span>

              <span> </span>
              <div className={StylesRight.line2}> </div>
              <span> </span>
              <FontAwesomeIcon
                className={StylesRight.FontAwesome}
                icon={faGraduationCap}
                style={{ color: "Black", fontSize: "1.5em" }}
              />
            </div>
            <a
              className={StylesRight.textDecorationTitle}
              href="https://scoalainformala.ro/cursuri/cursuri-programare-back-end-online/cursuri-net-developer-aplicatii-web/net-development-curriculum/"
              target="_blank"
              rel="Curriculum scoala informala de it .Net Development noreferrer"
            >
              .Net Development | Scoala informala de IT
            </a>
            <div className={StylesRight.textDecoration}>
              SELF-TAUGHT{" "}
              <span style={{ color: "#007aab", fontWeight: "500" }}>
                (Nov 2022 - Apr 2023)
              </span>
            </div>
            <a
              className={StylesRight.textDecorationTitle}
              href="https://www.itschool.ro/cursuri/curs-web-development-online"
              target="_blank"
              rel="Curriculum IT School Web Development noreferrer"
            >
              .Web Development | IT School
            </a>
            <div className={StylesRight.textDecoration}>
              SELF-TAUGHT{" "}
              <span style={{ color: "#007aab", fontWeight: "500" }}>
                (May 2022 - Sep 2022)
              </span>
            </div>
            <div>
              <a
                className={StylesRight.textDecorationTitle}
                href="https://sjea-dj.spiruharet.ro/"
                target="_blank"
                rel="Universitatea Spiru Haret noreferrer"
              >
                University Spiru Haret of Bucharest
              </a>
            </div>
            <div className={StylesRight.textDecoration}>
              Finante si Banci{" "}
              <span style={{ color: "#007aab", fontWeight: "500" }}>
                (2004 - 2008)
              </span>
            </div>
            <div className={StylesRight.textDecorationTitle}>
              Iuliu Maniu Technical College Bucharest Real Profile
            </div>
            <div className={StylesRight.textDecoration}>
              Matematica Infromatica{" "}
              <span style={{ color: "#007aab", fontWeight: "500" }}>
                (2000 - 2004)
              </span>
            </div>
            <div className={StylesRight.DetailInBox}>
              <span style={{ color: "Black", fontSize: "1em" }}>
                {" "}
                WORK EXPERIENCE
              </span>

              <span> </span>
              <div className={StylesRight.line3}> </div>
              <span> </span>
              <FontAwesomeIcon
                className={StylesRight.FontAwesome}
                icon={faBriefcaseClock}
                style={{ color: "Black", fontSize: "1.5em" }}
              />
            </div>

            <div className={StylesRight.textDecorationTitle}>
              Sales Director & Owner
            </div>
            <div>
              <a
                className={StylesRight.textDecoration}
                href="https://www.outlet-ieftin.ro/"
                target="_blank"
                rel="Curriculum IT School Web Development noreferrer"
              >
                S.C. Viking Tools SRL · Full-time
              </a>
              <span style={{ color: "#007aab", fontWeight: "500" }}>
                (2014 - 2022)
              </span>
            </div>
            <div className={StylesRight.textDecoration}>
              This job brought me the satisfaction of creating a business with
              zero starting point in to a business with its own sales platform
              (www.outlet-ieftin.ro), a partnership with Emag MarketPlace for
              over 7 years until present and a warehouse with over 5000 items in
              stock.
            </div>
            <div></div>

            <div className={StylesRight.textDecorationTitle}>
              PC Service Technician, Administrator
            </div>
            <div className={StylesRight.textDecoration}>
              SC Experince Center SRL · Full-time{" "}
              <span style={{ color: "#007aab", fontWeight: "500" }}>
                (2009 - 2016)
              </span>
            </div>

            <div className={StylesRight.textDecoration}>
              In this job I acquired skills and knowledge about: PC components,
              assembling a PC, compatibility of components, how the components
              work at chip level. Assembling and disassembling laptops,
              maintainance and changing their various components. Installing
              software applications, installing peripheral units (printers,
              copiers, routers) Administrator role, creation of local networks
              with shared devices.
            </div>

            <div className={StylesRight.textDecorationTitle}>
              Technical Services Specialist
            </div>
            <div className={StylesRight.textDecoration}>
              RCS & RDS · Full-time{" "}
              <span style={{ color: "#007aab", fontWeight: "500" }}>
                (2006 - 2009)
              </span>
            </div>
            <div className={StylesRight.textDecoration}>
              Installer and internet service on cable and fiber optic.
            </div>

            <div className={StylesRight.textDecorationTitle}>
              Technical Services Specialist
            </div>
            <div className={StylesRight.textDecoration}>
              SC Estel Network SRL · Full-time{" "}
              <span style={{ color: "#007aab", fontWeight: "500" }}>
                (2004 - 2006)
              </span>
            </div>

            <div className={StylesRight.textDecoration}>
              Assembly and installation of telecommunications networks.
              Installation of video surveillance systems.
            </div>

            <div className={StylesRight.DetailInBox}>
              <span style={{ color: "Black", fontSize: "1em" }}>
                {" "}
                REFERENCE
              </span>

              <span> </span>
              <div className={StylesRight.line4}> </div>
              <span> </span>
              <FontAwesomeIcon
                className={StylesRight.FontAwesome}
                icon={faUserCheck}
                style={{ color: "Black", fontSize: "1.5em" }}
              />
            </div>

            <div className={StylesRight.textDecorationTitle}>
              Traian Stanciu - Senior Software Engineer
            </div>
            <div className={StylesRight.textDecoration}>
              <FontAwesomeIcon
                className={StylesRight.FontAwesome}
                icon={faLinkedin}
                style={{ color: "Black", fontSize: "1.5em" }}
              />
              <span> </span>
              <a
                className={StylesRight.textDecoration}
                href="https://www.linkedin.com/in/traian-stanciu/"
                rel="noreferrer Link profesor Traian Stanciu"
                target="_blank"
              >
                {" "}
                Linkedin Traian Stanciu{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact></Contact>
    </>
  );
}

export default firstPage;
