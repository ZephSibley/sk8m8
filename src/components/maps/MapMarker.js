import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import axios from 'axios';

import PopupContent from './PopupContent';


const MapMarker = props => {
    // prop: coords; array, latlng
    // prop: id; int

    return (
        <Marker key={props.id} position={props.coords}>
            <Popup >
                <PopupContent markerId={props.id} requests={axios} />
            </Popup>
        </Marker>
    )
}

export default MapMarker;