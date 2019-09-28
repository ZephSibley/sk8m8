
const queryUrlBuilder = (endpoint, controller, action, params) => {
    let queryParams
    params ? queryParams = new URLSearchParams(params).toString() : '';
    return `${endpoint}/${controller}/${action}/${queryParams}`
};

export default queryUrlBuilder;