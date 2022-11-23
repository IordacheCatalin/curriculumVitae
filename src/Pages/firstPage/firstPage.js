import Styles from "../firstPage/firstPage.module.scss";
import ProfilePhoto from "../../Assets/img/Profile.jpg";

function firstPage() {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftSide}>
        <div>
          <div className={Styles.PhotoBox}>
            <img src={ProfilePhoto} alt="profile photography" />
            <h1 className={Styles.textDecoration}>Iordache Catalin</h1>
            <h2 className={Styles.textDecoration}>Junior Web Developer</h2>

        </div>
        </div>
      </div>
      <div className={Styles.rightSide}>
      
      </div>
    </div>
  );
}

export default firstPage;
