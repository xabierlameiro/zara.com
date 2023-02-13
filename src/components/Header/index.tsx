import Link from 'next/link';
import styles from './Header.module.css';
import type { HeaderProps } from '@/types/podcast';

/**
 * @description - Header component to display "Podcaster" and a loading mark
 * @param {boolean} isLoading - Flag to indicate if the page is loading
 */
const Header = ({ isLoading = false }: HeaderProps) => {
    return (
        <header data-testid="podcast-header">
            <nav className={styles.header_nav}>
                <Link href="/" className={styles.header_nav_link}>
                    Podcaster
                </Link>
                {isLoading && <span data-testid="podcast-header-mark" className={styles.header_nav_mark} />}
            </nav>
        </header>
    );
};

export default Header;
