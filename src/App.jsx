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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-400 via-blue-200 to-white">
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
