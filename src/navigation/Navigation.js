import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Navigation = () => {

    return (
        <Router>

            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/profil/:userId" element={<ProfileScreen />} />
            </Routes>

        </Router>
    )
}

export default Navigation