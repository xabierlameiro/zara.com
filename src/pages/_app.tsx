import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

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
    return (
        <SWRConfig
            value={{
                fetcher: (url: string) => fetch(url).then((response) => response.json()),
                provider: () => localStorageProvider(),
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
                refreshInterval: 1000 * 60 * 60 * 24,
                refreshWhenOffline: false,
                refreshWhenHidden: false,
            }}
        >
            <Component {...pageProps} />
        </SWRConfig>
    );
}
