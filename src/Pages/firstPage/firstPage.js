import Styles from "../firstPage/firstPage.module.scss";
import ProfilePhoto from "../../Assets/img/Profile.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function firstPage() {
  return (
    <body>
      <div className={Styles.container}>
        <div className={Styles.leftSide}>
          <div className={Styles.space}></div>
          <div>
            <div
              className={Styles.DetailBox}
              style={{ backgroundColor: "#21395b" }}
            >
              <img src={ProfilePhoto} alt="profile photography" />
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
              <span style={{ color: "white", fontSize: "1em" }}> CONTACT</span>
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
                iordache.catalin1986@gmail.com
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
              https://iordachecatalin.github.io/curriculumVitae/
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
              www.linkedin.com/in/iordache-catalin-a99396238
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
            </span>
          </div>
        </div>

        <div className={Styles.rightSide}></div>
      </div>
    </body>
  );
}

export default firstPage;
