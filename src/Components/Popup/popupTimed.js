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
        <h3>My popup</h3>
        <p>This time pop</p>
      </Pop>
    </div>
  );
}

export default Popup;
