
function Footer() {
    return (
        <footer className="border-t border-gold/20 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-8 text-center text-light text-sm">
                <p className="text-gold font-semibold">EverHarbor</p>

                <p className="mt-2">
                    A harbor for every mind.
                </p>

                <p className="mt-2 opacity-70">
                    © {new Date().getFullYear()} EverHarbor
                </p>
            </div>
        </footer>
    );
}

export default Footer;