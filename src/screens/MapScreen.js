import React, { useState, useEffect, useCallback, } from 'react';
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
    const [location, setLocation] = useState([51.8126, 5.8372]);
    const [showCreateMarkerForm, setShowCreateMarkerForm] = useState(false);

    const getLocation = useCallback(
        async () => {
            const location = await locate()
            negotiateGeoPerms();
            if (location) { return location }
        },
        []
    )

    const negotiateGeoPerms = async () => {
        setGeoPerms(await getGeoPerms());
    }

    const toggleCreateMarkerForm = () => {
        setShowCreateMarkerForm(prev => !prev);
    }

    useEffect(() => {
        negotiateGeoPerms()
        if (geoPerms === geoPermsEnum.GRANTED) {
            getLocation().then(result => {
                if (result[0] !== null && result[1] !== null) {
                    setLocation(result);
                }
            }).catch(e => console.log(e));
        }
    }, [geoPerms, getLocation,]);

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