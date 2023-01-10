import "../assets/css/ItemRight.css";
import PropTypes from "prop-types"
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
