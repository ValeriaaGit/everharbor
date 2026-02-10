import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import BookDetails from "./pages/BookDetails";
// import './App.css'

function App() {
// flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white
  return (
    <div className="min-h-screen flex flex-col">
        {/* flex flex-col = vertical flex container */}
        
        <Navbar />
        
        <main className="flex-1">
          {/* flex-1 = takes up all available space */}
          {/* Pushes footer to bottom */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/book/:id" element={<BookDetails />} />
            
            {/* Placeholder routes for nav links */}
            <Route path="/explore" element={<div className="container mx-auto p-8">Explore Page (Coming Soon)</div>} />
            <Route path="/collections" element={<div className="container mx-auto p-8">Collections Page (Coming Soon)</div>} />
            <Route path="/about" element={<div className="container mx-auto p-8">About Page (Coming Soon)</div>} />
            <Route path="/library" element={<div className="container mx-auto p-8">My Library (Coming Soon)</div>} />
          </Routes>
        </main>
      </div>
  )
}

export default App;
