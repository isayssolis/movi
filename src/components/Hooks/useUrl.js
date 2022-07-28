import { useState, useEffect } from 'react';

const useUrl = (url) => {
    let [showExtra, setShowExtra] = useState(false);
    useEffect(() => {
        switch (url.toString()) {
            case '/create-account':
                setShowExtra(true);
                break
            case '/create-account/success':
                setShowExtra(true);
                break
            default:
                setShowExtra(false);
                break
        }
    }, [url]);
    return showExtra;
}
export default useUrl;
