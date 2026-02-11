import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/layout/Container';
import VoyageCard from '../components/home/VoyageCard';
import MoodCard from '../components/home/MoodCard';
import AgeGroupCard from '../components/home/AgeGroupCard';
import FeatureCard from '../components/home/FeatureCard';
import { voyages, moods, ageGroups, features } from '../data/homeData';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleRandomBook = () => {
    // v1: Navigate to a curated 'random' book
    navigate('/search?q=classic+literature&random=true');
  };

  return (
    <div className="min-h-screen">
      {/* --- Hero Section --- */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* relative = positioning context for absolute children */}
        {/* overflow-hidden = clips any overflowing background effects */}

        {/* Decorative Background Elements */}
        <div className='absolute inset-0 -z-10'>
          {/* absolute inset-0 = stretches to fill parent */}
          {/* -z-10 = sends behind content (negative z-index) */}

          <div className='absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl'></div>
            {/* blur-3xl = very strong blur effect (64px) */}
            {/* Creates atmospheric "glow" effect */}

          <div className='absolute bottom-0 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl'></div>
        </div>

        <Container>
          <div className='max-w-4xl mx-auto text-center'>
            {/* max-w-4xl = max-width 56rem (896px) */}
            {/* Keeps content readable, not too wide */}

            <h1 className='text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-navy mb-6'>
              {/* lg-text-8xl = 6rem font size on large screens */}
              EverHarbor
            </h1>

            <p className='text-xl md:text-2xl text-navy/80 font-light mb-4'>
              Your gateway to stories, knowledge, and adventure
            </p>

            <p className='text-base md:text-lg text-navy/70 mb-12 max-w-2xl mx-auto'>
              From children's tales to academic research-discovery free books 
              for every age, every interest, every curious mind.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className='mb-8'>
              <div className='relative max-w-2xl mx-auto'>
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search for books, authors, subjects...'
                  className='w-full px-6 py-4 pr-12 rounded-lg border-2 border-navy/20
                             text-navy placeholder-navy/50
                             focus:border-gold focus:ring-4 focus-ring-gold/20
                             focus:outline-none transition-all
                             shadow-sm'
                  // pr-12 = padding-right 3rem (makes room for button)
                  // focus:ring-4 = 4px ring on focus
                  // shadow-sm = small box shadow
                />

                <button
                  type='submit'
                  className='absolute right-2 top-1/2 -translate-y-1/2
                             px-4 py-2 bg-tomato text-white rounded-md
                             hover:bg-orange transition-colors font-semibold'     
                >
                  Search
                </button>

              </div>
            </form>

            {/* Quick Action Buttons */}
            <div className='flex flex-wrap justify-center gap-4'>
              {/* flex-wrap = allows items to wrap to next line on small screens */}

              <button
                onClick={handleRandomBook}
                className='px-6 py-3 bg-white border-2 border-navy text-navy
                           rounded-lg font-semibold
                           hover:bg-navy hover:text-white transition-all
                           shadow-sm'
              >
                🎲 Surprise Me
              </button>

              <button
                onClick={() => navigate('/collections')}
                className="px-6 py-3 bg-white border-2 border-gold text-navy 
                           rounded-lg font-semibold
                           hover:bg-gold hover:text-white transition-all
                           shadow-sm"
              >
                ✨ Browse Collections
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Curated Voyages Section */}
      <section className='py-16 bg-white/40'>
        {/* bg-white/40 = white at 40% opacity over cream background */}

        <Container>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-heading font-semibold text-navy mb-4'>
              Curated Voyages
            </h2>

            <p className='text-lg text-navy/70 max-w-2xl mx-auto'>
              Handpicked reading journeys to guide your exploration
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* lg:grid-cols-3 = 3 columns on large screens */}

            {voyages.map((voyage) => (
              <VoyageCard key={voyage.id} voyage={voyage}/>
            ))}
          </div>
        </Container>
      </section>

      {/* Explore by Mood Section */}
      <section className='py-16'>
        <Container>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-heading font-semibold text-navy mb-4'>
              Explore by Mood
            </h2>

            <p className='text-lg text-navy/70 max-w-2xl mx-auto'>
              Find the perfect book for how you're feeling
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {moods.map((mood) => (
              <MoodCard key={mood.id} mood={mood}/>
            ))}
          </div>
        </Container>
      </section>

      {/* Age-Appropriate Collections */}
      <section className="py-16 bg-gradient-to-br from-cream to-gold/10">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-4">
              For Every Reader
            </h2>
            <p className="text-lg text-navy/70 max-w-2xl mx-auto">
              Discover books tailored to different ages and reading levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group) => (
              <AgeGroupCard key={group.id} group={group} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why EverHarbor Section */}
      <section className="py-16 bg-white/40">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-4">
              Why EverHarbor?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready to Set Sail?
            </h2>

            <p className="text-xl text-white/80 mb-8">
              Join thousands of readers discovering free books every day
            </p>

            <button
              onClick={() => navigate('/explore')}
              className="px-8 py-4 bg-tomato text-white rounded-lg font-bold text-lg
                         hover:bg-orange transform hover:scale-105 transition-all
                         shadow-lg"
            >
              Start Exploring
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}



