import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ closeModal, isOpen, item }) => {

    return (
        <>
            {isOpen && (
                <div className={styles.outerWrapper}>
                    <div className={styles.innerWrapper}>
                        <div className={styles.photo}
                            style={{ backgroundImage: `url(${item.links[0].href})` }}>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.title}>{item.data[0].title}</div>
                            <p className={styles.description}>{item.data[0].description.substr(0, 900)}</p>
                        </div>
                    </div>
                    {console.log(item)}

                    <div className={styles.close} onClick={closeModal} />

                </div>

            )}

        </>
    );
}

export default Modal;