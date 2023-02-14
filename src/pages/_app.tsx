import React from 'react';
import { SWRConfig } from 'swr';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '../styles/global.css';

export const localStorageProvider = () => {
    if (typeof window === `undefined`) {
        return new Map();
    }
    const map = new Map(JSON.parse(localStorage.getItem(`app-cache`) || `[]`));

    window.addEventListener(`beforeunload`, () => {
        const appCache = JSON.stringify(Array.from(map.entries()));
        localStorage.setItem(`app-cache`, appCache);
    });
    return map;
};

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = React.useState(false);

    return (
        <SWRConfig
            value={{
                fetcher: async (url: string, ...rest) => {
                    const cachedData = localStorage.getItem(`app-cache`)?.includes(url);
                    if (!cachedData) {
                        setLoading(true);
                    }
                    const res = await fetch(url, ...rest);
                    setLoading(false);
                    return res.json();
                },
                provider: () => localStorageProvider(),
                // We do not make the same call until 24 hours have passed.
                dedupingInterval: 1000 * 60 * 60 * 24,
            }}
        >
            <Layout isLoading={loading}>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
}
