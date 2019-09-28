
const backendPost = async (queryUrl, queryBody) => {

    return new Promise(function () {
        fetch(queryUrl, {
            method: 'POST',
            credentials: 'include',
            body: queryBody,
        })
    });
}

export default backendPost;