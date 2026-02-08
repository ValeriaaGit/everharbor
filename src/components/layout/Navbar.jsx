import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-navy/90 backdrop-blur-md border-b border-gold/20">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link
                    to="/"
                    className="text-gold text-xl font-bold m-6 tracking-wide hover:text-warm transition-colors"
                >
                    EverHarbor
                </Link>

                <div className="space-x-6 text-light">
                    <Link
                        to="/"
                        className="hover:text-gold transition-colors duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/search?q=history"
                        className="hover:text-gold transition-colors duration-300"
                    >
                        Explore
                    </Link>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
