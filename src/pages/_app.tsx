import React from 'react';
import { SWRConfig } from 'swr';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '../styles/global.css';

export const localStorageProvider = () => {
    // if the window hasn't loaded yet (SSR workaround)
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
                fetcher: async (url: string) => {
                    const cache = localStorageProvider();
                    const cachedData = cache.get(url);
                    if (!cachedData || !cachedData.data) {
                        setLoading(true);
                    }
                    return await fetch(url)
                        .then((res) => res.json())
                        .finally(() => setLoading(false));
                },
                provider: () => localStorageProvider(),
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
                refreshInterval: 1000 * 60 * 60 * 24,
                refreshWhenOffline: false,
                refreshWhenHidden: false,
            }}
        >
            <Layout isLoading={loading}>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
}
