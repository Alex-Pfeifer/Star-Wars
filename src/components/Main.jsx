//rsc

import Home from "./Home.jsx";
import {navItems} from "../utils/constants.js";
import AboutMe from "./About Me.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import {useContext} from "react";
import {StarWarsContext} from "../utils/context.js";



const Main = () => {

    const {page} = useContext(StarWarsContext);

    switch (page) {
        case navItems[1]:
            return <AboutMe/>
        case navItems[2]:
            return <StarWars/>
        case navItems[3]:
            return <Contact/>
        default:
            return <Home/>
    }
};

export default Main;