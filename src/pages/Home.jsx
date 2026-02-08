
export default function Home() {
    return (
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20">
            
            {/* blue rounded blur */}
            <div className="absolute -top-20 -left-50 w-[500px] h-[500px] bg-blue-700/40 rounded-full blur-[120px]"></div>

            {/* text-4xl md:text-6xl font-bold mb-6 */}
            <h1 className="font-heading text-5xl text-gold tracking-wide">
                Welcome to EverHarbor
            </h1>

            <p className="max-w-2xl text-lg text-gray-600 mb-8">
                A harbor for curious minds. Discover free e-books, explore new ideas,
                and find physical copies from trusted bookstores around the world.
            </p>

            <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hovering:bg-blue-700 transition">
                    Explore Library
                </button>

                <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
                    Browse Categories
                </button>
            </div>

            {/* <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-blue-500/40 to-transparent"></div> */}
        </section>
    );
}

