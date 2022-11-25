import Styles from "../../Components/Popup/popup.module.scss";
import React from "react";

function Pop(props) {
  return props.trigger ? (
    <div className={Styles.popup}>
      <div className={Styles.popupInner}>
        <button className={Styles.closeBtn} onClick={() => props.setTrigger(false)}>close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Pop;
