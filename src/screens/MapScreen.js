import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import axios from 'axios';

import '../styles/screens.css'
import locate from '../utils/browser/locate';
import Map from '../components/maps/LeafletMap';
import CreateMarkerForm from '../components/ui/forms/CreateMarkerForm';
import formStyles from '../styles/forms';
import getGeoPerms from '../utils/browser/getGeoPerms';
import geoPermsEnum from '../utils/enums/geoPerms';


const MapScreen = () => {
    // Marker format TBD
    const [geoPerms, setGeoPerms] = useState(geoPermsEnum.UNKNOWN)
    const [location, setLocation] = useState(null);
    const [showCreateMarkerForm, setShowCreateMarkerForm] = useState(false);

    useEffect(() => {
        negotiateGeoPerms()
        if (geoPerms === geoPermsEnum.GRANTED) {
            getLocation();
        }
    }, [geoPerms]);

    const negotiateGeoPerms = async () => {
        setGeoPerms(await getGeoPerms());
    }

    const getLocation = async () => {
        const { latitude, longitude } = await locate()
        // If we get null the user probably blocked geolocation
        if (latitude !== null && longitude !== null) {
            setLocation([
                latitude,
                longitude
            ]);
        }
        negotiateGeoPerms();
    }

    const toggleCreateMarkerForm = () => {
        setShowCreateMarkerForm(prev => !prev);
    }

    const formClasses = formStyles()
    return (
        <div className='screen'>
            <Map
                location={location}
                requests={axios}
                zoomLevel={geoPerms === geoPermsEnum.GRANTED ? 18 : 5}
            />
            <div className='map-options'>
                <FormControlLabel
                    className={formClasses.minimalSpacing}
                    control={window.localStorage.getItem('token') ?
                        <Button
                            onClick={toggleCreateMarkerForm}
                            variant="contained"
                            color="primary"
                            component="span"
                        >
                            Create a Marker
                        </Button>
                        :
                        <Button
                            onClick={e => { window.location.href = "#/login" }}
                            variant="contained"
                            color="primary"
                            component="span"
                        >
                            Log in / Sign up
                        </Button>
                    }
                />
                {geoPerms !== geoPermsEnum.GRANTED ?
                    <FormControlLabel
                        className={formClasses.minimalSpacing}
                        control={
                            <Button
                                onClick={getLocation}
                                variant="contained"
                                color="primary"
                                component="span"
                            >
                                Show My Location
                        </Button>
                        } />
                    :
                    ""
                }
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