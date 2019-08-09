const _getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const locate = async () => {
    let latitude = null,
        longitude = null;
    if (navigator.geolocation) {
        try {
            const myPosition = await _getCurrentPosition();
            latitude = myPosition.coords.latitude;
            longitude = myPosition.coords.longitude;
        } catch (e) {
            console.log(e)
        }
    }
    //console.log(latitude, longitude)
    return { latitude, longitude };
}

export default locate