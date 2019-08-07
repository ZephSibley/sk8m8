const _getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const locate = async () => {
    let latitude = null,
        longitude = null;
    if (navigator.geolocation) {
         _getCurrentPosition().then((coords) => {
            ({ latitude, longitude } = coords);
        })
    }
    return { latitude, longitude };
}

export default locate