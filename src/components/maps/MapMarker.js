import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import PopupContent from './PopupContent';


const MapMarker = props => {
    return (
        <Marker key={props.id} position={props.coords}>
            <Popup >
                <PopupContent markerId={props.id} />
            </Popup>
        </Marker>
    )
}

export default MapMarker;