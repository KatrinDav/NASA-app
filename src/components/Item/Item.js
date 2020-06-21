import React from 'react';
import styles from './Item.module.scss';

const Item = ({ item }) => {
    return (
        <div className={styles.item}>
            {item.data[0].description}

        </div>
    );
}

export default Item;