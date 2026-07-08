import { useState, useEffect } from "react";

export function useFetch(url) {
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError("Something went wrong");
            }
            setLoading(false);
        };l

        fetchData();
    }, [url]);

    return { data, loading, error };
}