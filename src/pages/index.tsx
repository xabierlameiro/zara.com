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
    const res = await (await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/podcasts`)).json();

    return {
        props: {
            podcasts: Object.values(res),
        },
    };
}
export default Home;
