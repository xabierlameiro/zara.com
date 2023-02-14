import Link from 'next/link';
import Image from 'next/image';
import type { SideBarProps } from '@/types/podcast';
import styles from './Sidebar.module.css';

/**
 * @description Receive podcast information
 * @param {String} url - The url of the podcast
 * @param {ImageType} img - The image of the podcast
 * @param {String} title - The title of the podcast
 * @param {String} author - The author of the podcast
 * @param {String} description - The description of the podcast
 * @returns {JSX.Element} - The JSX element
 */
const Sidebar = (props: SideBarProps) => {
    if (!props.img) return null;

    const { url, img, title, author, description } = props;

    return (
        <Link href={url} data-testid="sidebar" className={styles.link} title={`Go to ${title}`}>
            <aside className={styles.sidebar}>
                <Image
                    priority
                    data-testid="sidebar-image"
                    width={img.width}
                    height={img.height}
                    src={img.src}
                    alt={img.alt}
                    className={styles.sidebar_img}
                />
                <span className={styles.sidebar_title} data-testid="sidebar-title">
                    <span className={styles.sidebar_podcast} data-testid="sidebar-title-icon">
                        {title}
                    </span>
                    <span className={styles.sidebar_author} data-testid="sidebar-author">
                        by {author}
                    </span>
                </span>
                <span className={styles.sidebar_description_container} data-testid="sidebar-description">
                    <span className={styles.sidebar_description_container_title}>Description:</span>
                    <span className={styles.sidebar_description_container_text}>
                        {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    </span>
                </span>
            </aside>
        </Link>
    );
};

/**
 *
 * @description - Container for the sidebar
 * @param {JSX.Element} children - The children of the container
 * @param {SideBarProps} sideBarProps - The props of the sidebar
 * @returns {JSX.Element} - The JSX element
 */
const Container = ({ children, sideBarProps }: { children: JSX.Element; sideBarProps: SideBarProps }) => {
    return (
        <div className={styles.container}>
            <Sidebar {...sideBarProps} />
            <div className={styles.container_content}>{children}</div>
        </div>
    );
};

Sidebar.Container = Container;

export default Sidebar;
