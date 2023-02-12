import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Sidebar from '@/components/SideBar';
import AudioCard from '@/components/AudioCard';

const EpisodeDetail = () => {
    const {
        query: { podcastId, episodeId },
    } = useRouter();

    const { data, error } = useSWR(podcastId ? `/api/episodes/${podcastId}` : null);

    const episode = data?.episodes?.find((item: any) => item.id == episodeId);

    if (!data || error) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Episode detail</title>
            </Head>
            <Sidebar.Container sideBarProps={data.detail}>
                <AudioCard {...episode} />
            </Sidebar.Container>
        </>
    );
};

export default EpisodeDetail;
