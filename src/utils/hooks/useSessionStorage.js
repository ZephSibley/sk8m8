import React from 'react';

const useSessionStorage = sessionStorageKey => {
    // param: what we're calling the data; string

    const [value, setValue] = React.useState(
        sessionStorage.getItem(sessionStorageKey)
    );

    React.useEffect(() => {
        sessionStorage.setItem(sessionStorageKey, value);
    }, [value]);

    return [value, setValue];
};

export default useSessionStorage;