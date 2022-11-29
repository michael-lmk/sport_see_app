import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";

const Navigation = () => {

    return (
        <Router>

            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/profil/:id" element={<ProfileScreen />} />
            </Routes>

        </Router>
    )
}

export default Navigation