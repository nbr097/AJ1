import { useState, useEffect, useCallback } from 'react';

export type PostcodeEntry = {
    p: string; // postcode
    l: string; // locality
    s: string; // state
};

// Singleton cache to avoid multiple fetches and keep data in memory
let globalData: PostcodeEntry[] = [];
let loadPromise: Promise<void> | null = null;

export const usePostcode = () => {
    const [_, setData] = useState<PostcodeEntry[]>(globalData);
    const [isLoading, setIsLoading] = useState(globalData.length === 0);

    useEffect(() => {
        if (globalData.length > 0) {
            setData(globalData);
            setIsLoading(false);
            return;
        }

        if (!loadPromise) {
            loadPromise = fetch('/data/postcodes.min.json')
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP ${response.status}`);
                    return response.json();
                })
                .then(json => {
                    if (Array.isArray(json)) {
                        globalData = json;
                    } else {
                        console.error('Invalid postcode data format');
                        globalData = [];
                    }
                })
                .catch(err => {
                    console.error('Failed to load postcodes:', err);
                    globalData = [];
                });
        }

        setIsLoading(true);
        loadPromise.finally(() => {
            setData(globalData);
            setIsLoading(false);
        });
    }, []);

    const search = useCallback((query: string) => {
        if (!query || query.length < 3) return [];

        try {
            const q = query.toLowerCase().trim();
            // Safety check for data
            if (!globalData || !Array.isArray(globalData)) return [];

            return globalData.filter(item => {
                if (!item || !item.p || !item.l) return false;
                return item.p.startsWith(q) || item.l.toLowerCase().includes(q);
            }).slice(0, 10);
        } catch (err) {
            console.error('Search error:', err);
            return [];
        }
    }, []); // Empty dependency array as globalData is external

    return { search, isLoading };
};
