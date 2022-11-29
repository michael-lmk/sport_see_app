import react from "react";
import { NavLink } from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
            <NavLink to={"/profil/18"}>User 18</NavLink>
        </div>
    )
} 

export default HomeScreen;