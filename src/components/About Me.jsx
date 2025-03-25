import {useEffect, useState} from "react";
import {aboutMe_url} from "../utils/constants.js";
import luke_skywalker from "../assets/luke_skywalker.jpg";


const AboutMe = () => {

    const [openingAboutMe, setopeningAboutMe] = useState({});

    useEffect(() => {
        fetch(`${aboutMe_url}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error while fetching films!');
                }
                return res.json()
            })
            .then(data => {
                setopeningAboutMe(data)
            })
            .catch(() => setopeningAboutMe('Error while fetching films'));
    }, []);

    return (
        <p className="farGalaxy d-flex justify-content-between align-items-center">
            <div className="info">
                <img src={luke_skywalker} alt="Hero"/>
            </div>
            <div className="col-sm-10">
                <p>Name:{openingAboutMe.name}</p>
                <p>Gender: {openingAboutMe.gender}</p>
                <p>Hair Color:{openingAboutMe.hair_color}</p>
                <p>Height:{openingAboutMe.height} cm</p>
                <p>Eye Color:{openingAboutMe.eye_color}</p>
                <p>Mass:{openingAboutMe.mass} kg</p>
                <p>Birth Year:{openingAboutMe.birth_year}</p>
            </div>
        </p>
    );
};

export default AboutMe;