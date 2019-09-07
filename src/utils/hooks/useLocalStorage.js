import React from 'react';

const useLocalStorage = localStorageKey => {
    // param: what we're calling the data; string

    const [value, setValue] = React.useState(
        localStorage.getItem(localStorageKey)
    );

    React.useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);

    return [value, setValue];
};

export default useLocalStorage;