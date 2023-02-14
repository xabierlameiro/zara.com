import styles from './EpisodeList.module.css';
import type { Episode } from '@/types/podcast';
import { useRouter } from 'next/router';

/**
 * @description - Table to display the list of episodes with title, date and duration. Also a counter of the total number of episodes in the top
 * @param {Episode[]} episodes - List of episodes
 * @returns {JSX.Element} - Table with the list of episodes
 */
const EpisodeList = ({ collection }: { collection: Episode[] }): JSX.Element | null => {
    const router = useRouter();

    if (!collection) return null;

    return (
        <div data-testid="episode-container" className={styles.episode_container}>
            <div data-testid="episode-list-counter" className={styles.episode_list_counter}>
                <span>Episodes: {collection.length} </span>
            </div>
            <div data-testid="episode-list" className={styles.episode_list}>
                <table data-testid="episode-list-table" className={styles.episode_list_table}>
                    <thead>
                        <tr>
                            <th>Episode</th>
                            <th>Date</th>
                            <th className={styles.episode_list_table_header_duration}>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collection.length > 0 ? (
                            collection.map((episode: Episode, index: number) => (
                                <tr
                                    key={index}
                                    data-testid="episode-list-table-row"
                                    onClick={() => {
                                        router.push(`/podcast/${episode.podcastId}/episode/${episode.id}`);
                                    }}
                                >
                                    <td className={styles.episode_list_table_row}>{episode.name}</td>
                                    <td>{new Date(episode.date).toLocaleDateString('en-GB')}</td>
                                    <td className={styles.episode_list_table_row_duration}>
                                        {new Date(episode.duration).toLocaleTimeString('en-GB', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No episodes found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EpisodeList;
