// DEV ONLY
import markerDetailJson from '../dummyData/marker_detail.json';

const fetchMarkerDetails = async markerId => {
    let markerDetails = await markerDetailJson.data

    return markerDetails
}

export default fetchMarkerDetails;