import "../assets/css/ItemRight.css";
import PropTypes from "prop-types"

/**
 * This component is the right section on profile showing stat 
 * @param {String} icon path of icon 
 * @param {string} qty quantity of stats 
 * @param {String} type type of stat 
 * @param {String} icon class name for style 
 * @returns 
 */
const ItemRight = ({ icon, qty, type, className }) => {
  return (
    <div className={`container-item-right ${className}`}>
      <img className="img" src={icon} alt=""></img>
      <div className="text">
        <p className="qty">{qty}</p>
        <p className="type">{type}</p>
      </div>
    </div>
  );
};

ItemRight.propTypes = {
  /**
   * Path of icon 
   */
  icon: PropTypes.string.isRequired,
  /**
   * data of quantity
   */
  qty: PropTypes.string.isRequired,
  /**
   * type of data
   */
  type: PropTypes.string.isRequired,
  /**
   * classname for styling
   */
  className: PropTypes.string,
};

export default ItemRight;
