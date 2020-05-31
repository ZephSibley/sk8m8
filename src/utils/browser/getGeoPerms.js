import geoPermsEnum from '../enums/geoPerms';

const getGeoPerms = async () => {
    if (!navigator.permissions) {
        return geoPermsEnum.UNKNOWN
    }
    
    const perms = await navigator.permissions.query({ name: 'geolocation' })
    return perms.state
}

export default getGeoPerms;