import Styles from "../TextScrooling/textScrooling.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";


function TextScrooling () {
    return (
 <div className={Styles.scrollcontainer}>
 <div className={Styles.scrolltext}> {""} <FontAwesomeIcon
    className={Styles.FontAwesome}
    icon={faBriefcase}
    style={{fontSize:"18px", marginRight:"10px"}}
  />---Open to work !---<FontAwesomeIcon
    className={Styles.FontAwesome}
    icon={faBriefcase}
    style={{fontSize:"18px"}}/></div>
</div>
    )
}

export default TextScrooling;