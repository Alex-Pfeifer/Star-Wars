//rsc
import {base_url} from "../utils/constants.js";
import {useEffect, useState} from "react";

const FarGalaxy = () => {

    const [openingCrawl, setOpeningCrawl] = useState('Loading...');

    useEffect(() => {
        fetch(`${base_url}/v1/films/1`)
        .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl));
    }, [])

    return (
        <p className="farGalaxy">
                {openingCrawl}
        </p>
    );
};

export default FarGalaxy;