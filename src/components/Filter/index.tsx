import React from 'react';
import Card from '@/components/Card';
import styles from './Filter.module.css';
import type { FilterProps, Podcast } from '@/types/podcast';

/**
 * @description Receives a collection and returns it filtered by title or author when the user types in the input
 * @param {Array} collection - The collection of podcasts
 * @param {String} placeHolder - The placeholder for the input
 * @returns {Array} - The filtered collection of podcasts
 */
const Filter = ({ collection, placeHolder = 'Filter podcast...' }: FilterProps) => {
    const [filteredCollection, setFilteredCollection] = React.useState(collection);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        const results = collection?.filter((item: Podcast) => {
            return (
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        setFilteredCollection(results);
    }, [searchTerm, collection]);

    if (!collection) return null;

    return (
        <div className={styles.filter}>
            <div className={styles.filter_container}>
                <span className={styles.filter_count} data-testid="filter-counter">
                    {filteredCollection.length}
                </span>
                <input
                    type="text"
                    placeholder={placeHolder}
                    className={styles.filter_input}
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
            <section className={styles.podcast_list}>
                {filteredCollection.map((item: Podcast) => {
                    return (
                        <Card key={item.key} url={item.url} img={item.img} title={item.title} author={item.author} />
                    );
                })}
            </section>
        </div>
    );
};

export default Filter;
