import React from 'react';
import styles from './Form.module.scss'


const Form = ({ query, setQuery, handleClick }) => {
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
                <button className={styles.button} onClick={handleClick}>Search</button>
            </div>

        </>
    );
}

export default Form;