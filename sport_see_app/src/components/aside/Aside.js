import react from 'react';
import "./Aside.css";
import icon1 from "../../assets/icon-1.png"
import icon2 from "../../assets/icon-2.png"
import icon3 from "../../assets/icon-3.png"
import icon4 from "../../assets/icon-4.png"

const Aside = () => {

    return (
        <div className='container-aside'>
           <img src={icon1}></img>
           <img src={icon2}></img>
           <img src={icon3}></img>
           <img src={icon4}></img>
        </div>
    )

}

export default Aside;