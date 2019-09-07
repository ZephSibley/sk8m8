// DEV ONLY
import markerJson from '../dummyData/100_markers.json';

const fetchMarkers = async (location, radius) => {
    // Need to send location and radius
    //console.log('fetchMarkers', location, markers, radius)
    /*const data = await fetch(
        '',
        latitude,
        longitude,
        radius,
    );
    //const markers = await data.json(); */
    let markerData = await markerJson
    console.log(location, radius)
    //console.log(markerData[4].coords)

    // Returns: Object
    return markerData
}

export default fetchMarkers;