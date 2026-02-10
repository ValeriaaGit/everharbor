import SearchBar from "../components/ui/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-navy">
          EverHarbor
        </h1>
        
        <p className="text-xl md:text-2xl text-navy/80 mb-4 max-w-3xl mx-auto font-light">
          A digital sanctuary where knowledge flows like tides
        </p>
        
        <p className="text-lg text-navy/70 mb-12 max-w-2xl mx-auto">
          Connecting readers across the world to the wisdom of ages, 
          free and accessible to all who seek.
        </p>
        
        {/* Search Preview - Will become SearchBar component */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <input
              type="text"
              placeholder="Search for books, authors, subjects..."
              className="w-full px-4 py-3 rounded-md border-2 border-navy/20 
                         focus:border-gold focus:outline-none focus:ring-2 
                         focus:ring-gold/20 transition-all"
            />
            
            <button className="mt-4 w-full bg-tomato text-white font-semibold 
                               py-3 px-6 rounded-md hover:bg-orange 
                               transform hover:scale-[1.02] transition-all shadow-md">
              Set Sail
            </button>
          </div>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 text-navy">
          Chart Your Course
        </h2>
        
        <p className="text-center text-navy/70 mb-12 max-w-xl mx-auto">
          Explore curated collections across time and disciplines
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Classic Literature', desc: 'Timeless tales that shaped civilization' },
            { title: 'Science & Discovery', desc: 'Illuminate the mysteries of our universe' },
            { title: 'Philosophy & Wisdom', desc: 'Question, reflect, and understand' }
          ].map((category) => (
            <div 
              key={category.title} 
              className="bg-white/40 backdrop-blur-sm rounded-lg p-6 
                         hover:bg-white/60 hover:shadow-xl transition-all 
                         cursor-pointer border border-navy/10 group"
            >
              <h3 className="text-2xl font-semibold mb-3 text-navy 
                            group-hover:text-tomato transition-colors">
                {category.title}
              </h3>
              <p className="text-navy/70 leading-relaxed">
                {category.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// export default function Home() {
//     return (
//         <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20">
            
//             {/* blue rounded blur */}
//             <div className="absolute -top-20 -left-50 w-[500px] h-[500px] bg-blue-700/40 rounded-full blur-[120px]"></div>

//             {/* text-4xl md:text-6xl font-bold mb-6 */}
//             <h1 className="font-heading font-bold text-5xl text-warm tracking-wide">
//                 Welcome to EverHarbor
//             </h1>

//             <p className="max-w-2xl text-lg text-gray-600 mb-8">
//                 A harbor for curious minds. Discover free e-books, explore new ideas,
//                 and find physical copies from trusted bookstores around the world.
//             </p>

//             <div className="flex gap-4">
//                 <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hovering:bg-blue-700 transition">
//                     Explore Library
//                 </button>

//                 <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
//                     Browse Categories
//                 </button>
//             </div>

//             <SearchBar />
//         </section>
//     );
// }

