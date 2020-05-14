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
                    requests={axios}
                />
            }

            <div className='map-options'>
                <FormControlLabel
                    className={formClasses.standardSpacing}
                    control={ window.localStorage.getItem('token') ?
                        <Button
                            onClick={toggleCreateMarkerForm}
                            variant="outlined"
                            color="primary"
                            component="span"
                        >
                            Create a Marker 
                        </Button>
                        :
                        <Button
                            onClick={e => {window.location.href = "#/login"}}
                            variant="outlined"
                            color="primary"
                            component="span"
                        >
                            Log in / Sign up
                        </Button>
                    }
                />
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