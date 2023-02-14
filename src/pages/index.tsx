import Head from 'next/head';
import Filter from '@/components/Filter';
import type { Podcast } from '@/types/podcast';

const Home = ({ podcasts }: { podcasts: Podcast[] }) => {
    return (
        <>
            <Head>
                <title>Podcast</title>
            </Head>
            <Filter collection={podcasts} />
        </>
    );
};

export async function getStaticProps() {
    try {
        const { podcasts } = await (await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/podcasts`)).json();
        return {
            props: {
                podcasts: podcasts,
            },
            // Re-generate the home page 24 hours after the last request
            revalidate: 60 * 60 * 24,
        };
    } catch (error) {
        return {
            props: {
                podcasts: [],
            },
        };
    }
}

export default Home;
