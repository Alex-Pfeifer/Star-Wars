//rsc
import {base_url} from "../utils/constants.js";
import {useEffect, useState} from "react";

const FarGalaxy = () => {

    const [openingCrawl, setOpeningCrawl] = useState('Loading...');

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6 + 1);
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch films');
                }
                return res.json()
            })
            .then(data => setOpeningCrawl(data.opening_crawl))
            .catch(() => setOpeningCrawl('Error while fetching films'));
    }, [])

    return (
        <p className="farGalaxy">
            {openingCrawl}
        </p>
    );
};

export default FarGalaxy;