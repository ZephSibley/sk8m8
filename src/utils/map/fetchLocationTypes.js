// DEV ONLY
import locationTypesJson from '../dummyData/location_types.json';

const fetchLocationTypes = async () => {
    let locationTypes = await locationTypesJson.data;

    return locationTypes
}

export default fetchLocationTypes;