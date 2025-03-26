//rsc
import NaviItem from "./NaviItem.jsx";
import {navItems} from "../utils/constants.js";


const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map(item => <NaviItem itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;