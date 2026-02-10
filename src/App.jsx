import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/book/:id" element={<BookDetails />} />
          
          {/* Placeholder routes */}
          <Route path="/explore" element={<div className="container mx-auto p-8">Explore Page (Coming Soon)</div>} />
          <Route path="/collections" element={<div className="container mx-auto p-8">Collections Page (Coming Soon)</div>} />
          <Route path="/about" element={<div className="container mx-auto p-8">About Page (Coming Soon)</div>} />
          <Route path="/library" element={<div className="container mx-auto p-8">My Library (Coming Soon)</div>} />
          <Route path="/new-arrivals" element={<div className="container mx-auto p-8">New Arrivals (Coming Soon)</div>} />
          <Route path="/recommendations" element={<div className="container mx-auto p-8">Recommendations (Coming Soon)</div>} />
          <Route path="/how-it-works" element={<div className="container mx-auto p-8">How It Works (Coming Soon)</div>} />
          <Route path="/contact" element={<div className="container mx-auto p-8">Contact (Coming Soon)</div>} />
          <Route path="/privacy" element={<div className="container mx-auto p-8">Privacy Policy (Coming Soon)</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
    
  );
}

export default App;