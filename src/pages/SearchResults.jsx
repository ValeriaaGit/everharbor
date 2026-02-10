import { useSearchParams } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import BookCard from '../components/ui/BookCard';

export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const { books, loading, error } = useBooks(query);

    
    return (
        <div className="px-6 py-12">
            <h1 className='font-heading font-bold text-4xl text-warm mb-8'>
                Search Results
            </h1>

            {loading && (
                <p className='text-light/70'>Searching the archives...</p>
            )}

            {error && (
                <p className='text-red-400'>{error}</p>
            )}

            <div>
                {books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
}

