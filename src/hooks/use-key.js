import React from 'react';

function useKey(cb, key = 'Escape') {


    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === key) {
                cb(event);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


}

export default useKey;