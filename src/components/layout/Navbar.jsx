import { Link, useNavigate  } from "react-router-dom";
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
            setIsMenuOpen(false); // Close mobile menu after search
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-cream/20">
            {/* backdrop-blur-sm = blurs content behind navbar when scrolling */}
            {/* sticky top-0 = navbar sticks to top of viewport */}
            {/* z-50 = ensures navbar stays above other content */}
            {/* bg-navy/95 = navy at 95% opacity (slight transparency) */}

            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* h-16 = height 4rem (64px) - standard navbar height */}
                    {/* items-center = vertically centers flex children */}
                    {/* justify-between = spaces items to edges with space between */}

                    {/* Logo */}
                    <Link
                        to='/'
                        className="text-2xl font-heading font-bold text-cream hover:text-gold transition-colors"
                    >
                        EverHarbor
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* hidden = display none on mobile */}
                        {/* md:flex = display flex on medium screens and up */}
                        {/* gap-8 = space between flex children 2rem */}

                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search books..."
                                className="w-64 px-4 py-2 rounded-md bg-cream/10 border border-cream/30
                                           text-cream placeholder-cream/60
                                           focus:bg-cream/20 focus:border-gold focus:outline-none
                                           transition-all"       
                                // w-64 = width 16rem
                                // placeholder-cream/60 = pplaceholder text at 60% opacity
                            />

                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-cream/60
                                           hover:text-gold transition-colors"
                                // absolute = position absolute within relative parent
                                // right-2 = 0.5rem from right edge
                                // top-1/2 -translate-y-1/2 = centers vertically
                            >
                                🔍
                            </button>
                            
                        </form>

                        {/* Navigation Links */}
                        <Link
                            to="/explore"
                            className="text-cream hover:text-gold transition-colors font-medium"
                        >
                            Explore
                        </Link>

                        <Link
                            to="/collections"
                            className="text-cream hover:text-gold transition-colors font-medium"
                        >
                            Collections
                        </Link>

                        <Link
                            to="/about"
                            className="text-cream hover:text-gold transition-colors font-medium"
                        >
                            About
                        </Link>

                        {/* CTA Button */}
                        <Link
                            to="/library"
                            className="px-4 py-2 bg-tomato text-white rounded-md font-semibold
                                       hover:bg-orange transform hover:scale-105 transition-all"
                            // transform hover:scale-105 = grows to 105% on hover
                        >
                            My Library
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() =>setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-cream hover:text-gold transition-colors"
                        // md:hidden = hides on medium screens and up
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            // X icon when menu is open
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ) : (
                            // Hamburger icon when menu is closed
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-cream/20">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="mb-4">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search books..."
                                className="w-full px-4 py-2 rounded-md bg-cream/10 border borcer-cream/30
                                           text-cream placeholder-cream/60
                                           focus:bg-cream/20 focus:broder-gold focus:outline-none"
                            />
                        </form>

                        {/* Mobile Links */}
                        <div className="flex flex-col gap-3">
                            {/* flex-col = stacks items vertically */}

                            <Link
                                to="/explore"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-cream hover:text-gold transition-colors font-medium py-2"
                            >
                                Explore
                            </Link>

                            <Link
                                to="/collections"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-cream hover:text-gold transition-colors font-medium py-2"
                            >
                                Collections
                            </Link>

                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-cream hover:text-gold transition-colors font-medium py-2"
                            >
                                About
                            </Link>
                            
                            <Link
                                to="/library"
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-2 bg-tomato text-white rounded-md font-semibold
                                        hover:bg-orange transition-colors text-center"
                            >
                                My Library
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}