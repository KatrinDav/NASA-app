import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImagesList from '../../components/ImagesList/ImagesList';
import Form from '../../components/Form/Form';
import styles from './SearchView.module.scss';

import useDebounce from '../../utils/use-debounce';

const SearchView = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const debouncedSearchTerm = useDebounce(query, 2000);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true);

            const fetchData = async () => {
                const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);

                setData(response.data.collection.items)
                console.log(response.data.collection.items)

                setIsSearching(false)
                setQuery('')
            }
            fetchData();
        }

    }, [debouncedSearchTerm])
    return (
        <>
            <div className={styles.wrapper}>
                <p className={styles.info}>
                    In the field below type anything related to stars to begin
                </p>
                <Form
                    query={query}
                    setQuery={setQuery}
                />
            </div>
            {isSearching && <p className={styles.searchInfo}>loading <span>. . . .</span></p>}

            <ImagesList data={data} />
        </>
    );
}

export default SearchView;

