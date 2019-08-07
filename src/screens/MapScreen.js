import React, { useState, useEffect } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';

import locate from '../utility/locate';

const MapScreen = () => {
    const [location, setLocation] = useState({
            lat: null,
            long: null,
        });
    // Marker format TBD
    const [markers, setMarkers] = useState(null);
    const [radius, setRadius] = useState(10);

    useEffect(() => {
        getLocation();
        fetchMarkers();
    }, [location, markers, radius]);

    const getLocation = async () => {
        const {latitude, longitude} = await locate();
        setLocation({
                lat: latitude, 
                long: longitude
        });
    }

    const fetchMarkers = async () => {
        // Need to send state.location and state.radius
        const data = await fetch(
            ''
        );
        //const markers = await data.json();
        setMarkers(data);
    }

    const handleRadiusChange = event => {
        setRadius(event.target.value)
        fetchMarkers();
    }

    return (
        // TODO: render map but give loading spinner for markers
        markers ? <div>loading...</div> :
        <div>
            Map Stuff
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