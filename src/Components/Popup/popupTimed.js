import Pop from "./pop";
import Styles from "../../Components/Popup/popup.module.scss";
import React from "react";
import { useState, useEffect } from "react";

function Popup() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPop, setTimedPop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPop(true);
    }, 2000);
  }, []);

  return (
    <div>
      <Pop trigger={timedPop} setTrigger={setTimedPop}>
        <h3 className={Styles.fontText}>Let's stay in touch !</h3>
        <p className={Styles.fontTextP}>
          Thank you for visiting my profile. Connect with me, together we can do
          great things.
        </p>
      </Pop>
    </div>
  );
}

export default Popup;
