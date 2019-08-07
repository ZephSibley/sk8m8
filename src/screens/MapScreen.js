import React, { useState, useEffect } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';

//import locate from '../utility/locate';

const MapScreen = () => {
    const [setState,location,markers,radius,]=useState({
        location: {
            lat: '',
            long: '',
        },
        markers: false,
        radius: 10,
    });

    useEffect(() => {
        getLocation();
        fetchMarkers();
    }, [location, markers]);

    const getLocation = async () => {
        //const {latitude, longitude} = await locate();
        setState(prevState => {
            return {
                ...prevState,
                location: {
                    lat: latitude, 
                    long: longitude
                },
            }
        });
    }

    const fetchMarkers = async () => {
        // Need to send state.location and state.radius
        const data = await fetch(
            ''
        );
        //const markers = await data.json();
        setState(prevState => {
            return {
                ...prevState,
                markers: data,
            }
        });
    }

    const handleChange = name => event => {
        setState(prevState => {
            return {
                ...prevState,
                [name]: event.target.value,
            }
        });
    }

    const handleRadiusChange = name => event => {
        handleChange(name, event);
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
                <option value={20} />
                <option value={50} />
                <option value={100} />
            </NativeSelect>
        </div>
    )
}

export default MapScreen;