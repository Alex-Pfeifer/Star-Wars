import React, {useContext} from 'react';
import {StarWarsContext} from "../utils/context.js";

const NaviItem = ({itemTitle}) => {

    const {setPage} = useContext(StarWarsContext)

    return (
        <li onClick={() => setPage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NaviItem;