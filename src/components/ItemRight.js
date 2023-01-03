import react from 'react';
import "../assets/css/ItemRight.css";


const ItemRight = ({ icon, qty, type }) => {

    return (
        <div className='container-item-right'>
            <img className='img' src={icon}></img>
            <div className='text'>
                <p className='qty'>{qty}</p>
                <p className='type'>{type}</p>
            </div>
        </div>
    )

}

export default ItemRight;