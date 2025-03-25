import React from 'react';

const NaviItem = ({itemTitle}) => {
    return (
        <li onClick={() => alert(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NaviItem;