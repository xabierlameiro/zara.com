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
