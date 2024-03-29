import "../assets/css/Aside.css";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";

/**
 * Navigation on left with icon
 * @param {Function} onPress this state can been swap between test data and backend data  
 * 
 */
const Aside = ({onPress}) => {
  return (
    <div className="container-aside">
      <div className="img-container">
        <img src={icon1} alt=""></img>
      </div>
      <div className="img-container">
        <img src={icon2} alt=""></img>
      </div>
      <div className="img-container">
        <img src={icon3} alt=""></img>
      </div>
      <div className="img-container">
        <img src={icon4} alt=""></img>
      </div>
      <button onClick={onPress} className="copyright">Copiryght, SportSee 2020</button>
    </div>
  );
};

export default Aside;
