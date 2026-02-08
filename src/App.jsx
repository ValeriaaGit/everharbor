import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import BookDetails from "./pages/BookDetails";
// import './App.css'

function App() {

  return (
    <div className="bg-navy text-gold min-h-screen flex flex-col min-h-screen items-center justify-center">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<SearchResults/>}/>
            <Route path='/book/:id' element={<BookDetails/>}/>
          </Routes>
        </main>

        <Footer/>
      </div>
  )
}

export default App;
