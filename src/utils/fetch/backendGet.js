
const backendGet = async (queryUrl) => {

    return new Promise(function () {
        fetch(queryUrl, {
            method: 'GET',
            credentials: 'include',
        })
    });
}

export default backendGet;