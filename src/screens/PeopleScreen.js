import React, { useState, useEffect } from 'react';
import axios from 'axios';

import locate from '../utils/browser/locate';
import PeopleListing from '../components/people/PeopleListing';

const PeopleScreen = () => {
    const [location, setLocation] = useState([
        null, null
    ]);

    const getLocation = async () => {
        const { latitude, longitude } = await locate()
        setLocation([
            latitude,
            longitude
        ]);
    }

    useEffect(() => {
        getLocation();
    }, []);
    
    return (
        <div className='screen'>
            <PeopleListing requests={axios} location={location} />
        </div>
    )
}

export default PeopleScreen;