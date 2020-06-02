import React, { useEffect, useState, } from 'react';
import { Map, TileLayer, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import setMarkerIcons from '../../utils/map/setMarkerIcons';
import MapMarker from './MapMarker';
import ErrorModal from '../ui/modals/ErrorModal';

// https://stackoverflow.com/questions/42835692/react-leaflet-add-markers-dynamically
// https://react-leaflet.js.org/docs/en/examples

const LeafletMap = props => {
    // prop: location; array
    // prop: requests; http client
    // prop: zoomLevel; int

    const [mapMarkers, setMapMarkers] = useState(null)

    useEffect(() => {
        setMarkerIcons();
    }, []);

    useEffect(() => {
        if (props.location) {
            props.requests.get(
                `${process.env.REACT_APP_ENDPOINT}Mapmarker/Find?latitude=${props.location[0]}&longitude=${props.location[1]}&radius=100`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            ).then(response => 
                setMapMarkers(response.data.map(MapMarker))
            ).catch(e => 
                setMapMarkers(<ErrorModal error={e.message} />)
            );
        }
    }, [props.location, props.requests])

    return (
        <Map 
            center={props.location ? 
                props.location : [51.8126, 5.8372]
            }
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: -1,
            }}
            zoom={props.zoomLevel}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                //detectRetina={true}
                maxZoom={19}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {mapMarkers}
        </Map>
    )
}

export default LeafletMap;