import React, { useState, useEffect } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import '../styles/screens.css'
import locate from '../utils/browser/locate';
import Map from '../components/maps/LeafletMap';
import CreateMarkerForm from '../components/ui/forms/CreateMarkerForm';
import formStyles from '../styles/forms';


const MapScreen = () => {
    // Marker format TBD
    const [location, setLocation] = useState([
        null, null
    ]);
    const [radius, setRadius] = useState(1);
    const [isLoading, setLoadingStatus] = useState(true);
    const [showCreateMarkerForm, setShowCreateMarkerForm] = useState(false);

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async () => {
        const { latitude, longitude } = await locate()
        setLocation([
            latitude,
            longitude
        ]);
        setLoadingStatus(false);
    }

    const handleRadiusChange = val => {
        setRadius(val)
    }

    const toggleCreateMarkerForm = () => {
        setShowCreateMarkerForm(prev => !prev);
    }

    const formClasses = formStyles()
    return (
        <div className='screen'>
            {isLoading ?
                <CircularProgress /> :
                <Map 
                    location={location}
                    radius={radius}
                    requests={axios}
                />
            }

            <div className='map-options'>
                <FormControlLabel
                    className={formClasses.standardSpacing}
                    control={
                        <Button
                            onClick={toggleCreateMarkerForm}
                            variant="outlined"
                            color="primary"
                            component="span"
                        >
                            Create a Marker 
                        </Button>
                    }
                />
                <FormControl className={formClasses.standardSpacing}>
                    <InputLabel htmlFor="radius">Radius</InputLabel>
                    <NativeSelect
                        value={radius}
                        onChange={e => handleRadiusChange(e.target.value)}
                        inputProps={{ name: 'radius', id: 'radius' }}
                    >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </NativeSelect>
                </FormControl>
            </div>

            <SwipeableDrawer
                open={showCreateMarkerForm}
                onClose={toggleCreateMarkerForm}
                onOpen={toggleCreateMarkerForm}
            >
                <CreateMarkerForm location={location} requests={axios} />
            </SwipeableDrawer>
        </div>
    )
}

export default MapScreen;