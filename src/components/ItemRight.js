import "../assets/css/ItemRight.css";


const ItemRight = ({ icon, qty, type, className }) => {

    return (
        <div className={`container-item-right ${className}`}>
            <img className='img' src={icon} alt=""></img>
            <div className='text'>
                <p className='qty'>{qty}</p>
                <p className='type'>{type}</p>
            </div>
        </div>
    )

}

export default ItemRight;