import React, { useEffect, useState, } from 'react';
import { Map, Marker, TileLayer, Popup, } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import setMarkerIcons from '../../utils/map/setMarkerIcons';
import fetchMarkers from '../../utils/map/fetchMarkers';
import PopupContent from './PopupContent';

// https://stackoverflow.com/questions/42835692/react-leaflet-add-markers-dynamically
// https://react-leaflet.js.org/docs/en/examples

const LeafletMap = props => {
    // prop: location; array
    // prop: radius; int
    const [mapMarkers, setMapMarkers] = useState(null)

    useEffect(() => {
        setMarkerIcons();
    }, []);

    useEffect(() => {
        if (props.location && props.radius) {
            fetchMarkers(props.location, props.radius)
            .then(response => {
                const markers = response.data.map((marker) =>
                    <Marker key={marker.id} position={marker.coords}>
                        <Popup >
                            <PopupContent markerId={marker.id} />
                        </Popup>
                    </Marker>
                )
                setMapMarkers(markers)
            }
            )//.catch();
        }
    }, [props.location, props.radius,])

    return (
        <Map 
            center={props.location ? 
                props.location : [51.26829, -1.087]
            }
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: -1,
            }}
            zoom={14}
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