import {base_url} from "../utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [hero, setHero] = useState();
    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    height: data.height,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color
                }
                setHero(info);
            })
    }, [])

    return (
        <>
            {(!!hero) &&
                <div className='fs-2 lh-lg text-justify ms-5'>
                    <p><span className='display-3'>name:</span> {hero.name}</p>
                    <p><span className='display-3'>gender:</span> {hero.gender}</p>
                    <p><span className='display-3'>birth year:</span> {hero.birth_year}</p>
                    <p><span className='display-3'>height:</span> {hero.height}</p>
                    <p><span className='display-3'>mass:</span> {hero.mass}</p>
                    <p><span className='display-3'>hair color:</span> {hero.hair_color}</p>
                    <p><span className='display-3'>skin color:</span> {hero.skin_color}</p>
                    <p><span className='display-3'>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </>
    );
};

export default AboutMe;

// import {useEffect, useState} from "react";
// import {aboutMe_url} from "../utils/constants.js";
// import luke_skywalker from "../assets/luke_skywalker.jpg";
//
//
// const AboutMe = () => {
//
//     const [openingAboutMe, setopeningAboutMe] = useState({});
//
//     useEffect(() => {
//         fetch(`${aboutMe_url}`)
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error('Error while fetching films!');
//                 }
//                 return res.json()
//             })
//             .then(data => {
//                 setopeningAboutMe(data)
//             })
//             .catch(() => setopeningAboutMe('Error while fetching films'));
//     }, []);
//
//     return (
//         <p className="farGalaxy d-flex justify-content-between align-items-center">
//             <div className="info">
//                 <img src={luke_skywalker} alt="Hero"/>
//             </div>
//             <div className="col-sm-10">
//                 <p>Name: {openingAboutMe.name}</p>
//                 <p>Gender: {openingAboutMe.gender}</p>
//                 <p>Hair Color: {openingAboutMe.hair_color}</p>
//                 <p>Height: {openingAboutMe.height} cm</p>
//                 <p>Eye Color: {openingAboutMe.eye_color}</p>
//                 <p>Mass: {openingAboutMe.mass} kg</p>
//                 <p>Birth Year: {openingAboutMe.birth_year}</p>
//             </div>
//         </p>
//     );
// };
//
// export default AboutMe;