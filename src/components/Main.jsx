import React from 'react';
import Hero from "./Hero.jsx";
import Friends from "./Friends.jsx";
import Description from "./Description.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <Friends/>
            <Description/>
        </main>
    );
};

export default Main;