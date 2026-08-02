import { useState, useEffect } from 'react';
import { fetchPackages } from './packageService';

export const usePackages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPackages = async () => {
            try {
                setLoading(true);
                const data = await fetchPackages();
                setPackages(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPackages();
    }, []);

    return { packages, loading, error };
};
