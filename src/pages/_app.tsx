import React from 'react';
import { SWRConfig, useSWRConfig } from 'swr';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = React.useState(false);
    const { cache } = useSWRConfig();

    return (
        <SWRConfig
            value={{
                fetcher: async (url: string, ...rest) => {
                    const cachedData = cache.get(url);
                    if (cachedData && !cachedData.data) {
                        setLoading(true);
                    }
                    const res = await fetch(url, ...rest);
                    setLoading(false);
                    return res.json();
                },
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
