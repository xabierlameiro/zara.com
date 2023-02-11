import Link from 'next/link';
import styles from './Header.module.css';

type HeaderProps = {
    isLoading?: boolean;
};

const Header = ({ isLoading = true }: HeaderProps) => {
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
