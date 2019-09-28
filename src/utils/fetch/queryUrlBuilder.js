
const queryUrlBuilder = (endpoint, controller, action, params) => {
    const queryParams = new URLSearchParams(params).toString();
    return `${endpoint}/${controller}/${action}/${queryParams}`
};

export default queryUrlBuilder;