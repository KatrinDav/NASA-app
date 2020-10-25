import React, { useState } from 'react';
import axios from 'axios';
import ImagesList from '../../components/ImagesList/ImagesList';
import Form from '../../components/Form/Form';
import styles from './SearchView.module.scss';


const SearchView = () => {

    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);

        setData(response.data.collection.items)
        console.log(response.data.collection.items)

        setQuery('')
    }
    const handleClick = () => {
        fetchData();
    }


    return (
        <>
            <div className={styles.wrapper}>
                <p className={styles.info}>
                    In the field below type anything related to stars to begin
                </p>
                <Form
                    query={query}
                    setQuery={setQuery}
                    handleClick={handleClick}
                />

            </div>

            <ImagesList data={data} />
        </>
    );
}

export default SearchView;

