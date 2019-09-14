
const apiFetch = async (method, controller, action, params) => {
    // param: method; string - request method
    // param: controller; string - matches backend controller
    // param: action; string - matches actions on controller
    // param: params; object - query parameters

    let queryUrl = `${process.env.REACT_APP_ENDPOINT}/${controller}/${action}/`;

    let queryParams = '';
    if (method === 'POST') {
        queryParams = JSON.stringify(params);
    }
    else {
        queryParams = new URLSearchParams(params).toString();
        queryUrl = queryUrl.concat(queryParams);
    }

    return new Promise(function (resolve, reject) {
        fetch(queryUrl, {
            method: method,
            credentials: 'include',
            body: queryParams
        })
            .then(response => {
                return response.json()
            })
            .then(data => 
                resolve(data)
            )
            .catch(e => 
                console.log(e),
                reject(e)
            );
    });
}

export default apiFetch;