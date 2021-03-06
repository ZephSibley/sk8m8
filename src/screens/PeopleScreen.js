import React, { useState, useEffect } from 'react';
import axios from 'axios';

import locate from '../utils/browser/locate';
import PeopleListing from '../components/people/PeopleListing';

const PeopleScreen = () => {
    const [location, setLocation] = useState([
        null, null
    ]);

    const getLocation = async () => {
        setLocation(await locate());
    }

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        if (location[0] !== null && location[1] !== null) {
            axios.post(
                `${process.env.REACT_APP_ENDPOINT}account/updatelocation`,
                {
                    latitude: location[0],
                    longitude: location[1],
                },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            ).catch(err => {
                if (err.response && err.response.status === 401) {
                    window.localStorage.removeItem('token');
                    window.location.reload();
                }
            })
        }
    }, [location])
    
    return (
        <div className='screen'>
            <PeopleListing requests={axios} location={location} />
        </div>
    )
}

export default PeopleScreen;