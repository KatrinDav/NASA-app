import React from 'react';
import styles from './Form.module.scss'


const Form = ({ query, setQuery }) => {
    return (
        <>

            <div className={styles.form}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder='e.g. Moon'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                /> <br />
            </div>



        </>
    );
}

export default Form;