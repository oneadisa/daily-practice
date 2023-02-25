import { useState, useEffect } from 'react';

export function useFetch (url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        fetch(url, { signal: controller.signal, data })
            .then(setData).catch(setError)
            .finally(() => { setLoading(false); });

        return () => { controller.abort() }
    }, [url])

    return { loading, data, error }
}

console.log(useFetch('https://www.googleapis.com/'));

console.log(new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short" }));