import React, { useState, useEffect } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';

import locate from '../utility/locate';

// TODO: Map api, location null case

const MapScreen = () => {
    // Marker format TBD
    const [markers, setMarkers] = useState(null);
    const [radius, setRadius] = useState(10);
    const [isLoading, setLoadingStatus] = useState(true);

    useEffect(() => {
        fetchMarkers();
    }, [markers, radius,]);

    const fetchMarkers = async () => {
        // Need to send location and radius
        const { lat, long } = await locate();
        const data = await fetch(
            '',
            lat,
            long,
            radius,
        );
        //const markers = await data.json();
        setMarkers(data);
        setLoadingStatus(false);
    }

    const handleRadiusChange = event => {
        setRadius(event.target.value)
    }

    return (
        <div>
            Map Stuff
            {isLoading ? "Spinner" : ""}
            <NativeSelect
                value={radius}
                onChange={handleRadiusChange('radius')}
                inputProps={{
                    name: 'radius',
                }}
            >
                <option value={0} />
                <option value={5} />
                <option value={10} />
                <option value={25} />
                <option value={50} />
                <option value={100} />
            </NativeSelect>
        </div>
    )
}

export default MapScreen;