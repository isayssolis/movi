import { useState, useEffect } from 'react';

const useUrl = (url) => {
    let [showExtra, setShowExtra] = useState(false);
    let [dark, setDark] = useState(false);
    let [helpMenu, setHelpMenu] = useState(false);
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
            case '/onboarding':
                setHelpMenu(true);
                setShowExtra(false);
                setDark(false);
                break
            default:
                setShowExtra(false);
                setDark(false);
                break
        }
    }, [url]);
    return {showExtra, dark, helpMenu};
}
export default useUrl;
