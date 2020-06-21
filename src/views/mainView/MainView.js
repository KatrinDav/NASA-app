import React from 'react';
import styles from './MainView.module.scss';
import Header from '../../components/Header/Header';



const MainView = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}> </div>
            <div className={styles.info}>
                <Header />
            </div>
        </div>
    );
}

export default MainView;