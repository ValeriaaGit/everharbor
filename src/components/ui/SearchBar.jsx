import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        navigate(`/search?q=${encodeURIComponent(query)}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex items-center gap-4 w-full max-w-2xl mx-auto m-5'
        >
            <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search the archives...'
                className='
                flex-1
                px-4 py-3
                rounded-lg
                bg-light/10
                backdrop-blur-md
                text-light
                placeholder:text-light/50
                focus:outline-none
                focus:ring-2
                focus:ring-gold
                transition
                '
            />

            <button type='submit' className='px-6 py-3 bg-gold text-navy font-medium rounded-lg hover:opacity-90 transition'>
                Search
            </button>
        </form>
    );
}

// SearchBar does not fetch data
// It collects user input and triggers navigation or callback