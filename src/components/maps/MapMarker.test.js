import React from 'react';
import { mount  } from 'enzyme';
import { Map, TileLayer, } from 'react-leaflet';
import MapMarker from './MapMarker';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Basic Rendering', () => {
    const component = mount (
        <Map>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                //detectRetina={true}
                maxZoom={19}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapMarker
                id={1}
                coords={[50,50]}
            />
        </Map>
    )
    
})