import Head from 'next/head';
import useSWR from 'swr';
import Sidebar from '@/components/SideBar';
import EpisodeList from '@/components/EpisodeList';
import { useRouter } from 'next/router';

const PodCastDetail = () => {
    const {
        query: { podcastId },
    } = useRouter();

    const { data, error } = useSWR(podcastId ? `/api/episodes/${podcastId}` : null);

    if (!data || error) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Podcast detail</title>
            </Head>
            <Sidebar.Container sideBarProps={data.detail}>
                <EpisodeList collection={data.episodes} />
            </Sidebar.Container>
        </>
    );
};

export default PodCastDetail;

// The same thing but with cache for SSR

// export async function getServerSideProps(context: any) {
//     context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=24 hours here');
//     const { podcastId } = context.params;
//     const url = new URL(`${process.env.NEXT_PUBLIC_DOMAIN}/api/episodes/${podcastId}`);

//     const res = await (await fetch(url)).json();

//     return {
//         props: {
//             fallback: {
//                 [unstable_serialize(['api', 'episodes', podcastId])]: res,
//             },
//         },
//     };
// }

// export default function Page({ fallback }: any) {
//     return (
//         <SWRConfig value={{ fallback }}>
//             <PodCastDetail />
//         </SWRConfig>
//     );
// }
