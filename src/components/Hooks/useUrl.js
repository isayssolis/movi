import { useState, useEffect } from 'react';

const useUrl = (url) => {
    let [showExtra, setShowExtra] = useState(false);
    let [dark, setDark] = useState(false);
    useEffect(() => {
        switch (url.toString()) {
            case '/create-account':
                setShowExtra(true);
                setDark(false);
                break
            case '/success':
                setShowExtra(false);
                setDark(true);
                break
            default:
                setShowExtra(false);
                setDark(false);
                break
        }
    }, [url]);
    return {showExtra, dark};
}
export default useUrl;
