
import styles from './header.module.css';
export default function Header(){
    return (
        <header className={styles.header}>
            <img src="/header-banner.png" alt="Banner Image" className={styles.banner} />
        </header>
    );
}