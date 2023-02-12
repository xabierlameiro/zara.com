import type { Episode } from '@/types/podcast';
import styles from './AudioCard.module.css';

/**
 * @description - Audio player to reproduce the podcast
 * @param {string} name - Name of the podcast
 * @param {string} description - Description of the podcast
 * @param {string} track - URL of the podcast
 * @returns {JSX.Element} - Audio player
 */
const AudioCard = (props: Episode) => {
    return (
        <div data-testid="audio-card" className={styles.audio_card}>
            <h1 data-testid="audio-card-title" className={styles.audio_card_title}>
                {props.name}
            </h1>
            <div data-testid="audio-card-description" className={styles.audio_card_description}>
                <div dangerouslySetInnerHTML={{ __html: props.description }} />
            </div>
            <div data-testid="audio-card-sponsored" className={styles.audio_card_sponsored}>
                {/* TODO: Pending fund this data */}
                This episode is sponsored by
            </div>
            <audio controls data-testid="audio-card-player" className={styles.audio_card_player}>
                <source src={props.track} type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default AudioCard;
