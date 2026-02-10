import { useEffect, useState } from 'react';
import { searchBooks } from '../services/openLibraryApi';

export default function useBooks(query) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchBooks = async () => {
            setLoading(true);
            setError(null);

            try {
                const results = await searchBooks(query);
                setBooks(results);
            } catch (err) {
                setError("Something went wrong while fetching books.");
            }

            setLoading(false);
        };

        fetchBooks();
    }, [query]);

    return { books, loading, error };
}