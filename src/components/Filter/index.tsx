import React from 'react';
import Card from '@/components/Card';
import styles from './Filter.module.css';
import type { FilterProps, Podcast } from '@/types/podcast';

const isCSR = typeof window !== 'undefined';

/**
 * @description Receives a collection and returns it filtered by title or author when the user types in the input
 * @param {Array} collection - The collection of podcasts
 * @param {String} placeHolder - The placeholder for the input
 * @returns {Array} - The filtered collection of podcasts
 */
const Filter = ({ collection, placeHolder = 'Filter podcast...' }: FilterProps) => {
    const [searchTerm, setSearchTerm] = React.useState<string>(isCSR ? localStorage.getItem('searchTerm') || '' : '');
    const [filteredCollection, setFilteredCollection] = React.useState<Podcast[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        if (isCSR) {
            localStorage.setItem('searchTerm', event.target.value);
        }
    };

    React.useEffect(() => {
        if (collection) {
            const results = collection.filter((item: Podcast) => {
                return (
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.author.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
            setFilteredCollection(results);
        }
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
                {filteredCollection.map((item: Podcast, index: number) => {
                    return (
                        <Card
                            key={item.url + index}
                            url={item.url}
                            img={item.img}
                            title={item.title}
                            author={item.author}
                        />
                    );
                })}
            </section>
        </div>
    );
};

export default Filter;
