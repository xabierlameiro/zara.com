import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import type { Podcast } from '@/types/podcast';

const Card = ({ img, url, title, author }: Podcast) => {
    return (
        <Link href={url} data-testid="card" className={styles.card}>
            <Image
                data-testid="card-image"
                className={styles.card_img}
                width={img.width}
                height={img.height}
                src={img.src}
                alt={img.alt}
            />
            <span className={styles.card_title} data-testid="card-title">
                {title}
            </span>
            <span className={styles.card_author} data-testid="card-author">
                Author: {author}
            </span>
        </Link>
    );
};

export default Card;
