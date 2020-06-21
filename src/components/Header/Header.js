import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Cosmic <br /> searcher</h1>
            <h3 className={styles.subtitle}>
                Discover image galleries and information about space, stars, planets, galaxies, astronauts and science - all provided by NASA
            </h3>

        </div>
    );
}

export default Header;