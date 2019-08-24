import React, { useState, useEffect } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';

import spinner from '../assets/img/ajax-loader.gif';
import locate from '../utils/browser/locate';

// TODO: Map api, location null case
//https://codesandbox.io/s/43p10r6w94
// https://github.com/allenhwkim/react-openlayers ??

const MapScreen = () => {
    // Marker format TBD
    const [location, setLocation] = useState({
        lat: null, long: null
    });
    const [markers, setMarkers] = useState(null);
    const [radius, setRadius] = useState(10);
    const [isLoading, setLoadingStatus] = useState(true);

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        fetchMarkers();
    }, [location, radius])

    const getLocation = async() => {
        let { latitude, longitude } = await locate();
        setLocation({
            lat: latitude,
            long: longitude
        });
    }

    const fetchMarkers = async () => {
        // Need to send location and radius
        console.log('fetchMarkers', location, markers, radius)
        /*const data = await fetch(
            '',
            lat,
            long,
            radius,
        );
        //const markers = await data.json();
        setMarkers(data); */
        setLoadingStatus(false);
    }

    const handleRadiusChange = val => {
        setRadius(val)
    }

    return (
        <div>
            Map Stuff
            {isLoading ? <img src={spinner} alt='loading' /> : ""}
            <NativeSelect
                value={radius}
                onChange={e => handleRadiusChange(e.target.value)}
                inputProps={{
                    name: 'radius',
                }}
            >
                <option value={0}>0</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </NativeSelect>
        </div>
    )
}

export default MapScreen;